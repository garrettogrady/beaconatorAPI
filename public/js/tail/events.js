import {api} from '../../../config.js';

$(document).ready(function() {

  $('#add-event').on('submit', function(event) {
    event.preventDefault();

    var host = api.host + ':' + api.port;
    var url = ['http:/', host, 'api', 'event'].join('/');

    var payload = {};

    $(this).find('input').each(function() {
      payload[this.name] = this.value;
    });

    $.ajax(url, {
      method: 'POST',
      data: payload
    })
    .then(function(json) {
      console.log(json);
    }, function(err) {
      console.log(err.responseText);

    });

  });
});
