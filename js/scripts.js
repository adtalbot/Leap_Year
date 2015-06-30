var leapYear = function(year) {
  if((year % 4 === 0) && (year % 100 !== 0)){
    return true;
  } else {
    return false;
  }
};

$(document).ready(function() {                  /*.ready will only run once the page DOM is ready for JS to execute*/
  $('form#leap-year').submit(function(event) {  /*Goes to leap-year form. Attaches a function to run when submit event occurs. Passes in the parameter event*/
    var year = parseInt($('input#year').val()); /*Creates a variable year. Calls value method to pull out the value of input id field year. parseInt converts it to an integer */
    var result = leapYear(year);                /*Creates a variable result and sets it equal to the leap year function when we pass in year. Runs function from above*/

    $('.year').text(year);                      /*Takes the year variable that stores the user input from form and inserts into the class .year in span tag*/
    if (!result) {                              /*If result is not true (if the leap year function returns false when entering year variable)*/
      $('.not').text('not');                    /*If result is not true, insert the word not into not class*/
    }

    $('#result').show();                        /*Shows div id result that was previously hidden by css*/
    event.preventDefault();                      /*Makes sure that the form doesn't submit to server*/
  });
});
