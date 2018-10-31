(function() {
  'use strict';

  /*
  * element.addEventListener(event, function, useCapture)
  * useCapture Optional. A Boolean value that specifies whether the event should be executed in the capturing or in the bubbling phase. 
  * Possible values:
  *   true - The event handler is executed in the capturing phase
  *   false- Default. The event handler is executed in the bubbling phase
  */
  const parent = document.querySelector('#parent');
  
  document.querySelector('#parent').addEventListener('click', function(e){
    console.log('Parent box clicked!');
  }, false);

   document.querySelector('#child').addEventListener('click', function(e){
    console.log('Child box clicked!');
    e.stopPropagation();
  }, false);

  document.querySelector('#other').addEventListener('click', function(e){
    console.log('Other box clicked!');
    e.stopPropagation();
  }, false);

  parent.addEventListener('click', function (e) {

    if (e.target.matches('.btn')) {
      console.log(e.target.parentElement.id + '-btn clicked!');
      e.stopPropagation();
    }
  }, false);
  
}());

