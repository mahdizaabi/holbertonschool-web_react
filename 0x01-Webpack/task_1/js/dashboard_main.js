const $ = require('jquery');
const debounce = require('lodash.debounce');

$('body').append(
  $('<p>').text('Holberton Dashboard'),
  $('<p>').text('Dashboard data for the students'),
  $('<button>').text('Click here to get started'),
  $('<p>').attr('id', 'count'),
  $('<p>').text('Copyright - Holberton School'),
)

function updateCounter() {
  let countTag = $('#count');
  let count = parseInt(countTag.attr('click_count')) || 0;

  $('button').click(function () {
    countTag.text(`${++count} clicks on the button`);
    countTag.attr('click_count', count);
  });
}

debounce(updateCounter, 100);
updateCounter();