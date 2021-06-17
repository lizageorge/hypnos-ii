function logFunction(){
    var sleptTime = new Date(document.getElementById("sleptTime").value+":00");
    var wokeTime = new Date(document.getElementById("wokeTime").value+":00");


    if(sleptTime == '' && wokeTime == ''){
        alert('Please select the times you went to sleep and woke up!');
    }
    else if(sleptTime == ''){
        alert('Please select the time you went to sleep!');
    }
    else if(wokeTime == ''){
        alert('Please select the time you woke up!');
        //TODO: handle invalid inputs of times, like is wake up is before sleep
    } 
    else{
        console.log('slept ' + sleptTime + ' to ' + wokeTime);
        
        var timeSleptRough = wokeTime.getTime()-sleptTime.getTime();

        //**CREDIT: I looked at this article for help at this stage; https://www.tutorialspoint.com/How-to-get-time-difference-between-two-timestamps-in-seconds

        var sec = timeSleptRough/1000;
        var days = Math.floor(sec/86400);
        var hours = Math.floor(sec/3600) %24 + days*24;
        var mins = Math.floor(sec/60) % 60;

        var timeSlept = hours + " hours, " + mins + " minutes."
        document.getElementById("time-slept").innerHTML = timeSlept;

        //TODO: check error "Unchecked runtime.lastError: The message port closed before a response was received."
    }

}