var currentDayEl = $('#currentDay'); 
var timeBlockEl = $('.time-block');
var saveButtonEl = $('.saveBtn');
var currDate = moment().format('MMMM Do, YYYY');
var currHr = moment().hour('H');

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
        if (currHr < currBlock) {
            $(this).children('textarea').addClass('future');
        }
    });
    saveButtonEl.on('click', updatePlanner);
};    

function updatePlanner(event) {
    var checkHr = $(this).parent().attr('data-id');
    var updatePlan = $(this).siblings('.description').val();
    localStorage.setItem(checkHr, updatePlan)
};

$(document).ready( () => {
    weeklyPlanner();
    currentDayEl.innerHTML = currDate;
    currentDayEl.append(currDate);
});