
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
    //Prints some debug info to console
    debug: true,
    pageSize: 25,
    filter: true,
    sorting: true,
    sortEmptyLast: true,
    pageSizes: [10,25,50,100],
    hidePagerOnEmpty: true,
    checkboxes: true,
    checkAllToggle: true,
    preFill: true,
    types: {
      string: {
        // filterTooltip: "Giggedi..."    // Set false to remove.
        filterTooltip: false,
        placeHolder: 'filter...'    //What to say in placeholder filter fields. Set false for empty.
      },
      number: {
        decimals: 1   //Sets decimal precision for float types
      },
      bool: {
        //filterTooltip: false
      },
      date: {
        utc: false,            // Show time as universal time, ie without timezones.
        format: 'MM/dd/yyyy, hh:mm tt',   // See all possible formats at http://arshaw.com/xdate/#Formatting.
        datePicker: true,      // Requires "Datepicker for Bootstrap" plugin (http://www.eyecon.ro/bootstrap-datepicker).
        placeHolder: false
      }
    },
    actions: {                // This generates a button where you can add elements.
      filter: true,         // If true, the filter fields can be toggled visible and hidden.
      columnPicker: true,   // if true, the columnPicker can be toggled visible and hidden.
      custom: [             // Add any other elements here. Here is a refresh and export example.
        // $('<a href="#" class="refresh"><span class="glyphicon glyphicon-refresh"></span>&nbsp;Refresh</a>'),
        // $('<a href="#" class="export_all"><span class="glyphicon glyphicon-share"></span>&nbsp;Export all rows</a>'),
        // $('<a href="#" class="export_checked"><span class="glyphicon glyphicon-share"></span>&nbsp;Export checked rows</a>'),
        // $('<a href="#" class="export_filtered"><span class="glyphicon glyphicon-share"></span>&nbsp;Export filtered rows</a>')
      ]
    },
    tableCreated: function(data) {    //Fires when the table is created / recreated. Use it if you want to manipulate the table in any way.
        console.log('table created'); //data.table holds the html table element.
        console.log(data);            //'this' keyword also holds the html table element.
      },
    rowClicked: function(data) {      //Fires when a row is clicked (Note. You need a column with the 'unique' property).
      console.log('row clicked');   //data.event holds the original jQuery event.
      console.log(data);            //data.row holds the underlying row you supplied.
                                    //data.column holds the underlying column you supplied.
      //data.checked is true if row is checked.
      //'this' keyword holds the clicked element.
      if ( $(this).hasClass('userId') ) {
        data.event.preventDefault();
        alert('You clicked userId: ' + data.row.userId);
      }
    },
    columnClicked: function(data) {    //Fires when a column is clicked
      console.log('column clicked');  //data.event holds the original jQuery event
      console.log(data);              //data.column holds the underlying column you supplied
                                      //data.descending is true when sorted descending (duh)
    },
    pageChanged: function(data) {      //Fires when manually changing page
      console.log('page changed');    //data.event holds the original jQuery event
      console.log(data);              //data.page holds the new page index
    },
    pageSizeChanged: function(data) {  //Fires when manually changing pagesize
      console.log('pagesize changed');//data.event holds teh original event
      console.log(data);              //data.pageSize holds the new pagesize
    }
  })
  .data('WATable');


  console.log(table);
  table.setData(FM.table);

})();
