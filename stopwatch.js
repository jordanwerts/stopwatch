function stopwatch (timer) {
    let time = 0;
    let interval = 0;
    let offset = 0;

    function update(){
        if(this.isOn){
        time += delta()
        }
        let formattedTime = timeFormatter(time);
        timer.textContent = formattedTime;
    };

    function delta (){
        let now = Date.now();
        let timePassed = now - offset;
        offset = now;
        return timePassed;
    };

    function timeFormatter(timeInMilliseconds){
        let time = new Date(timeInMilliseconds);
        let minutes = time.getMinutes().toString();
        let seconds = time.getSeconds().toString();
        let milliseconds = time.getMilliseconds().toString();

        if (minutes.length < 2){
            minutes = '0' + minutes;
        }

        if (seconds.length < 2){
            seconds = '0' + seconds;
        }

        while (milliseconds.length < 3) {
            milliseconds = '0' + milliseconds
        }

        return minutes + ' : ' + seconds + ' . ' + milliseconds;
    };
   
    this.isOn = false;

    this.start = function(){
        if(!this.isOn){
            interval = setInterval(update.bind(this), 10);
            offset = Date.now();
            this.isOn = true;
            document.getElementById('toggle').innerHTML = "Stop";
        }
    };
    this.stop = function(){
        if(this.isOn){
            clearInterval(interval);
            interval = null;
            this.isOn = false;
            document.getElementById('toggle').innerHTML = "Start";
        }
    };
    this.reset = function(){
        if(!this.isOn){
        time = 0;
        update();
        }
    };
}



//https://www.youtube.com/watch?v=jRhB1IG7uAw
//21:03