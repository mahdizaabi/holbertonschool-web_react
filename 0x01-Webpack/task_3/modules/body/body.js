import $ from 'jquery';
const _ = require('lodash');
import './body.css';


$.when( $.ready ).then(function() {
    let counter = 0;
    function updateCounter() {
        counter++;
        $('#count').html(`${counter} clicks on the button`);
    };
$('body').append('<button>Click here to get started</button>');
$('body').append($('<p>').attr('id', 'count'));
$('button').on('click', _.debounce(updateCounter, 500));

});
