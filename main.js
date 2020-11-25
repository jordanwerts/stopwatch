let timer = document.getElementById('timer');
let startStopButton = document.getElementById('toggle');
let resetButton = document.getElementById('reset');

let watch = new stopwatch(timer);

startStopButton.addEventListener('click', function() {
   if(watch.isOn){
        watch.stop();
   } else {
        watch.start();
   }
});

resetButton.addEventListener('click', function() {
    if(!watch.isOn){
        watch.reset();
    } 
})