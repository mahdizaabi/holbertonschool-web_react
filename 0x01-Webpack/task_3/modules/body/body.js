import _ from 'lodash';
import $ from 'jquery';
import './body.css';

let counter = 0;
function updateCounter() {
    counter++;
    $('#count').html(`${counter} clicks on the button`);
};


$('body').append('<button>Click here to get started</button>')
$('body').append("<p id='count'></p>")
$('button').on('click', _.debounce(updateCounter, 500));
