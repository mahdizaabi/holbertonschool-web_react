import $ from 'jquery';
const _ = require('lodash');
import './header.css';
$.when( $.ready ).then(function() {

$('body').append($('<div>').attr('id', 'logo'));
$('body').append('<h1>Holberton Dashboard</h1>');
console.log('Init header');
});
