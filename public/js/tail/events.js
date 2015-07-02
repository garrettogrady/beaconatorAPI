
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

(function() {
  'use strict';

  if (!$('#table-events').length) {
    return;
  }

  var table = $('#table-events').WATable({
    // Prints some debug info to console
    debug: false,
    pageSize: 25,
    filter: true,
    sorting: true,
    sortEmptyLast: true,
    pageSizes: [10, 25, 50, 100],
    hidePagerOnEmpty: true,
    checkboxes: true,
    checkAllToggle: true,
    preFill: true,
    types: {
      string: {
        // filterTooltip: "Giggedi..."    // Set false to remove.
        filterTooltip: false,
        // What to say in placeholder filter fields. Set false for empty.
        placeHolder: 'filter...'
      },
      number: {
        decimals: 1   // Sets decimal precision for float types
      },
      bool: {
        // filterTooltip: false
      },
      date: {
        // Show time as universal time, ie without timezones.
        utc: false,
        // See all possible formats at http:// arshaw.com/xdate/#Formatting.
        format: 'MM/dd/yyyy, hh:mm tt',
        // Requires "Datepicker for Bootstrap" plugin (http:// www.eyecon.ro/bootstrap-datepicker).
        datePicker: true,
        placeHolder: false
      }
    },
    // This generates a button where you can add elements.
    actions: {
      // If true, the filter fields can be toggled visible and hidden.
      filter: true,
      // if true, the columnPicker can be toggled visible and hidden.
      columnPicker: true,

      // Add any other elements here. Here is a refresh and export example.
      custom: [
      ]
    },
    // Fires when table is created/recreated. Use it if you want to manipulate the table in any way.
    tableCreated: function(data) {
        // data.table holds the html table element.
        console.log('table created');
        // 'this' keyword also holds the html table element.
        console.log(data);
      },
    // Fires when a row is clicked (Note. You need a column with the 'unique' property).
    rowClicked: function(data) {
      // data.event holds the original jQuery event.
      console.log('row clicked');
      // data.row holds the underlying row you supplied.
      console.log(data);
      // data.column holds the underlying column you supplied.
      // data.checked is true if row is checked.
      // 'this' keyword holds the clicked element.
      if ($(this).hasClass('userId')) {
        data.event.preventDefault();
        alert('You clicked userId: ' + data.row.userId);
      }
    },

    // Fires when a column is clicked
    columnClicked: function(data) {
      // data.event holds the original jQuery event
      console.log('column clicked');
      // data.column holds the underlying column you supplied
      console.log(data);
      // data.descending is true when sorted descending (duh)
    },
    // Fires when manually changing page
    pageChanged: function(data) {
      // data.event holds the original jQuery event
      console.log('page changed');
      // data.page holds the new page index
      console.log(data);
    },
    // Fires when manually changing pagesize
    pageSizeChanged: function(data) {
      // data.event holds teh original event
      console.log('pagesize changed');
      // data.pageSize holds the new pagesize
      console.log(data);
    }
  })
  .data('WATable');

  FM.table = FM.table || {};
  FM.table.cols = {
    fname: {
      index: 1,
      friendly: 'First Name',
      type: 'string'
    },
    lname: {
      index: 2,
      friendly: 'Last Name',
      type: 'string'
    },
    eventAction: {
      index: 3,
      friendly: 'Action',
      type: 'string'
    },
    beaconName: {
      index: 4,
      friendly: 'Beacon',
      type: 'string'
    },
    location: {
      index: 5,
      friendly: 'Location',
      type: 'string'
    },
    date: {
      index: 6,
      friendly: 'Date',
      type: 'date'
    }
  };

  table.setData(FM.table);

})();
