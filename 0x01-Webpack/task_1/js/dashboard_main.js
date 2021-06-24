import $ from "jquery";
const _ = require('lodash');


$.when( $.ready ).then(function() {
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button>Click here to get started</button>');
    $('body').append("<p id='count'></p>");
    $('body').append("Copyright - Holberton School");
    let counter = 0;
    function updateCounter(){
        counter++;
        $('#count').text(`${counter}`);
    }

    $('button').on('click', _.debounce(updateCounter, 5))
  });