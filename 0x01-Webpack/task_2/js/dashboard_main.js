import $ from 'jquery';
const _ = require('lodash');
import '../css/main.css';
import '../assets/holberton-logo.jpg'

$.when( $.ready ).then(function() {

let counter = 0;
function updateCounter() {
    counter++;
    $('#count').html(`${counter} clicks on the button`);
};
$('body').append($('<div>').attr('id', 'logo'));
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append($('<p>').attr('id', 'count'));
$('body').append('<p>Copyright - Holberton School</p>');

$('button').on('click', _.debounce(updateCounter, 500));
});
