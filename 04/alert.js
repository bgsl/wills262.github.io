var button;
var textarea;
var savedText;


;
function setup() {
  noCanvas();
  textarea = createElement('textarea', "Paste the passage");
  textarea.size(300,400);
  // textarea.fillStyle = blue;
  // textarea.fillRect(20,20,1055,1055);
  createElement('br');
  button = createButton('push to save');
  button.mousePressed(saveText);
}




function saveText() {
  savedText = textarea.value();
  createP(savedText);

  // get the array of all the words from the savedText variable
  var textArr = splitTokens(savedText, '.:;?! !@#$%^&*()+');
  var length = textArr.length;

  // create a new array to hold the result of the reshuffling
  var jumbledArr = [];

  // loop through the array, pick a random index, add it to the new array, and remove it from the old array
  for (var i = 0; i < length; i++) {
    var whichIndex = int(random(textArr.length));
    jumbledArr.push(textArr[whichIndex]);
    textArr.splice(whichIndex, 1);
  }





  for (var i = 0; i < textArr.length; i++) {
    if (textArr[i] === "he" || textArr[i] === "He") {
      textArr[i] = "They";
  }
    if (textArr[i] === "GOD" || textArr[i] === "God") {
      textArr[i] = "YOU";
    }
    if (textArr[i] === "the" ) {
      textArr[i] = "a";
    }
     if (textArr[i] === "you" ) {
      textArr[i] = "my";
    }

        if (textArr[i] === "my" ) {
      textArr[i] = "you";
    }


         if (textArr[i] === "christ" ) {
      textArr[i] = "the other";
    }
  }


  // join the new jumbled array into a single string, separated by spaces
   for(var p = 0; p < 100; p++) {
    var newString = join(jumbledArr, ' ');

  createP(newString.toUpperCase());
}
}







