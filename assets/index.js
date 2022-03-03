//NOTES TO SELF:
//Current Day is displayed at the top of the planner
//Each time block is color-coded to indicate whether it is in the past, present, or future.
//When I click into a time-block, I can enter an event.
//When I click the save button for that time block, the test for that event is saved in local storage.
//When I refresh the page, the saved events persist.

//ALSO NOTE TO SELF:
//# is used for querying IDs
var dayjs = require('dayjs');
var currentDayEl = $('#currentDay'); 
var timeBlockEl = $('.time-block');
var saveButtonEl = $('.saveBtn');
var currDate = dayjs().format('MMM/DD/YYYY');
var currHr = dayjs().hour('h');

function