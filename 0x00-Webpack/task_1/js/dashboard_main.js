import $ from 'jquery';
import { debounce } from 'lodash';

let counter = 0;

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>");
$('body').append('<p>Copyright - Holberton School</p>');

function updateCounter() {
  counter++;
  $('#count').html(`${counter} clicks on the button`);
}

$('button').on('click', debounce(updateCounter, 500));
