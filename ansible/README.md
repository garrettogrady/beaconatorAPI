# fusionary-ansible

This playbook will install the common LAMP stack with PHP 5.5 and MySQL on Ubuntu 14.04 Trusty LTS.

Vagrant is recommended to provision servers and this comes with a basic `Vagrantfile` for an easy dev setup.

## Requirements

1. Ansible >= 1.5.4 - [Installation docs](http://docs.ansible.com/intro_installation.html)
2. Virtualbox >= 4.3.10 - [Downloads](https://www.virtualbox.org/wiki/Downloads)
3. Vagrant >= 1.5.4 - [Downloads](http://www.vagrantup.com/downloads.html)

### OS Notes

From the Ansible docs:

> Currently Ansible can be run from any machine with Python 2.6 installed (Windows isn’t supported for the control machine).
This includes Red Hat, Debian, CentOS, OS X, any of the BSDs, and so on.

If your host machine is running Windows, the workaround is to run Ansible *on the VM* (since it's running Ubuntu) and not locally. This requires some additions to the default `Vagrantfile` and an extra script.


## Usage

1. Edit `Vagrantfile` and set your `config.vm.synced_folder` path so that it points to a local relative path for the steelcase store app.
4. Run `vagrant up`.

### Servers/Environments

**Example** hosts and group_var files for these environment exist and should be modified as needed.

Note: `hosts/development` is there for completeness sake only as Vagrant automatically generates and uses its own.

### Passwords

There a few places you'll want to set/change passwords:

* `group_vars/development` - `mysql_root_password`
* `group_vars/development` - `sites.env.db_user`
* `group_vars/development` - `sites.env.db_password`
* `group_vars/development` - `sites.db_import` (if you want autmatic database import)

You may be concerned about setting plaintext passwords in a Git repository, and you should be. Any type of server configs such as this playbook should always be in a **private** Git repository.

Even then it's still best to try avoid it if possible, so you have few options:

* Use [Ansible Vault](http://docs.ansible.com/playbooks_vault.html)
* Use [Git Encrytpt](https://github.com/shadowhand/git-encrypt)

Note: if you're mostly using this for development environments only, you probably don't need to worry about any of this as everything is just run locally.

### `Vagrantfile`

The example `Vagrantfile` in this project can be kept in this folder, or moved anywhere else such as a project/site folder. Generally if you want to have multiple sites on 1 Vagrant VM, you should keep the `Vagrantfile` where it is (in the fusionary-ansible dir). If you want to have 1 Vagrant VM *PER* project/site, you should make copies of the `Vagrantfile` and put them into each project's dir. You'd then run `vagrant up` from the project specific directory.

Whenever you move or copy the `Vagrantfile` somewhere else, you need to make sure to adjust the relative paths in it including `config.vm.synced_folder` and `ansible.playbook = './site.yml'`.

## Vagrant Box

Note: you can always set the box back to the base Ubuntu one if you prefer with `config.vm.box = 'ubuntu/trusty64'`

## Options

All Ansible configuration is done in [YAML](http://en.wikipedia.org/wiki/YAML).

`wordpress_sites` is the top level array used to define the WordPress sites/virtual hosts that will be created.

* `site_name` (required) - name used to identify site (commonly the domain name) (default: none)
* `user` (optional) - user owner of site directories/files (default: `root` | `user` in `site.yml`)
* `group` (optional) - group owner of site directories/files (default: `www-data`)
* `db_import` (optional) - Path to local `sql` dump file which will be imported (default: `false`)
* `env` (required) - hash of multisite options
  * `db_name` (optional) - name of database (default: `site_name`)
  * `db_user` (required) - database user name (default: none)
  * `db_password` (required) - database user password (default: none)
  * `db_host` (required) - database host (default: `localhost`)
