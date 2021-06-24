import $ from "jquery";
var debounce = require('lodash.debounce');

$.when( $.ready ).then(function() {
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button>Click here to get started</button>');
    $('body').append($('<p>').attr('id', 'count'));
    $('body').append('Copyright - Holberton School');
    let counter = 0;
    function updateCounter(){
        $('#count').text(`${++counter} clicks on the button`);
    }
    $('button').on('click', debounce(updateCounter, 800))
  });