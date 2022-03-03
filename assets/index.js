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

function weeklyPlanner() {
    timeBlockEl.each( function() {
        //get the current block of time
        var currBlock = parseInt($(this).attr('data-id'));
        //get input from localStorage
        $(this).children('.description').val(localStorage.getItem(currBlock));
        //check to see if present, color will be red
        if (currHr == currBlock) {
            $(this).children('textarea').addClass('present');
        }

        //check to see if past, color will be gray
        if (currHr > currBlock) {
            $(this).children('textarea').addClass('past');
        }

        //check to see if future, color will be green
        if (currHr > currBlock) {
            $(this).children('textarea').addClass('future');
        }
    });
    

};    

$(document).ready( () => {
    weeklyPlanner();
    currentDayEl.innerHTML = currDate;
    currentDayEl.append(currDate);
});