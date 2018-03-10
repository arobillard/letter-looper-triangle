var writeLetterManyTimes = function (letter, times) {
  var i;

  for (i = 1; i <= times; i++) {

    var x;

    for (x = 0; x < i; x++) {
      document.write(letter);
    }

    document.write('<br>');
  }
};

writeLetterManyTimes(prompt('Enter a letter:'), 10);
