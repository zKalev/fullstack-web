
(function (window){

var obj={};

var speakWord = "Hello";

 obj.speak = function speak(name) {
  console.log(speakWord + " " + name);
}

window.helloSpeaker = obj;

})(window);


