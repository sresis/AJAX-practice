"use strict";

// Part 1

$('#get-fortune-button').on('click', () => {
  $.get('/fortune', (response) => {
    //
    // This is the body of the callback function for $.get!
    // TODO: use `response` to update the text in `div#fortune-text`
    $('#fortune-text').html(response);
  });
});


// Part 2

$('#weather-form').on('submit', (evt) => {
  evt.preventDefault();

  const formData = {
    // TODO: select the zipcode input
    zipcode: $('#zipcode-field').val()
  };

  $.get('/weather', formData, (res) => {

    $('#weather-info').html(`${res.forecast}`);
  });

  // TODO: choose a request method (GET or POST) by uncommenting one of
  // these blocks of code

  // $.get('/replaceMe', formData, (response) => {
  //   // Fill in the callback function
  // });

  // $.post('/replaceMe', formData, (response) => {
  //   // Fill in the callback function
  // });
});


// Part 3

$("#order-form").on('submit', (evt) => {
  evt.preventDefault();

  const formData = $('#order-form').serialize();

  $.post('/order-melons', formData, (res) => {

    if (res.code != 'ERROR') {
      $('#order-status').html(`${res.msg}`);
    }

    else {
      $('#order-status').addClass('order-error');
      $('#order-status').html(`${res.msg}`);
    }

  });

  

  // TODO: create an object to store key-value pairs that'll be sent to
  // the server

  // TODO: make a request to /order-melons
  //
  // In the callback function, use the response from the server to
  // update #order-status. IMPORTANT: if the result code is 'ERROR',
  // make it show up in red.
});
