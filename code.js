$(document).ready(() => {
    var entry = 0;
    var cachedEntry = 0;
    var cachedOperator = '';
  

    // append numbers on display //
    //set as string to append and then back to number //
    $('.number').click(function() {
      entry = Number(String(entry) + this.innerText);
      $('#screen').text(entry);
    });
  
    // log first value and operator //
    $('.operator').click(function() {
      cachedEntry = entry;
      cachedOperator = this.innerText;
      entry = 0;
    });
  
    // does operation //
    $('.equals').click(function() {
      if (cachedOperator === '+') {
        entry = entry + cachedEntry;
      } else if (cachedOperator === '-') {
        entry = cachedEntry - entry;
      } else if (cachedOperator === '÷') {
        entry = cachedEntry / entry;
      } else if (cachedOperator === '*') {
        entry = cachedEntry * entry;
      }
      $('#screen').text(entry);
    });

    // clear //
    $('.clear').click(function() {
        cachedEntry = 0;
        cachedOperator = '';
        entry = 0;
        $('#screen').text(0);
    });

    // inspiration //
    $('.inspiration').click(function() {
        var inspoArray = ['You\'re a star!', 'Success is a journey not a destination!', 'Hope is the heartbeat of the soul!', 'I love you!', 'If you can dream it, you can do it!', 'You got this gfrand!'];
        var random = inspoArray[Math.floor(Math.random() * inspoArray.length)];
        $('#inspiration-words').text(random); 
        console.log(random);   
    })
  });