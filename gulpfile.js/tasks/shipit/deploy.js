var path   = require('path');
var config = require('config');
var gulp   = require('gulp');
var Shipit = require('shipit-cli');
var inquirer = require('bluebird-inquirer');
var shipitConfig = config.get('shipit.config');
var chalk = require('chalk');
var _ = require('lodash');
var util = require('util');
var envs = _.without(Object.keys(shipitConfig), 'default');
var tasks = {
  deploy: ['shipit:deploy']
};

gulp.task('shipit', 'Alias for ' + tasks.deploy.join(', '), tasks.deploy);
gulp.task('deploy', 'Alias for ' + tasks.deploy.join(', '), tasks.deploy);
gulp.task('shipit:deploy', 'Deploy the project to a remote server real fancy like', function() {
  var argv = require('yargs').option('deploy-to', {
    alias: 'd',
  }).argv;
  var deployToEnv = argv['deploy-to'] || false;
  var shipit;

  return inquirer.prompt([{
    type: 'list',
    name: 'deployToEnv',
    default: deployToEnv,
    message: 'Deploy to environment:',
    choices: envs
  }]).then(function(answers) {
    deployToEnv = answers.deployToEnv;
    shipit = new Shipit({environment: deployToEnv});
    require(path.join(config.get('paths.root'), 'shipitfile.js'))(shipit);

    var msg = '\n';
    msg += chalk.bold('- Environment: %s\n');
    msg += chalk.bold('- Branch: %s\n');
    msg += chalk.bold('- Path: %s\n');
    msg = util.format(
      msg,
      chalk.blue(deployToEnv),
      chalk.blue(shipit.config.branch),
      chalk.blue(shipit.config.deployTo)
    );

    // Log details with confirmation
    console.log(msg);

    return inquirer.prompt([{
      type: 'confirm',
      name: 'deployConfirm',
      default: true,
      message: 'Proceed with deploy?',
    }]).then(function(answers) {
      if (answers.deployConfirm) {
        shipit.initialize();
        shipit.start('deploy');
      }
    });
  });
});
