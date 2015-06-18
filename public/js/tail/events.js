
$(document).ready(function() {
  var host = location.hostname;
  if (!/beaconator/.test(location.hostname)) {
    host += ':3000';
  }

  $('#add-event').on('submit', function(event) {
    event.preventDefault();

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
