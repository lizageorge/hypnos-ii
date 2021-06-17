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
    }
    else if( (wokeTime-sleptTime) < 0){
        alert("Please select a valid combination of woke up at and slept at times - currently you've woken up before you went to sleep!");
    }
    else{
        // console.log('slept ' + sleptTime + ' to ' + wokeTime);
        
        var timeSleptRough = wokeTime.getTime()-sleptTime.getTime();

        //**CREDIT: I looked at this article for help at this stage; https://www.tutorialspoint.com/How-to-get-time-difference-between-two-timestamps-in-seconds

        var sec = timeSleptRough/1000;
        var days = Math.floor(sec/86400);
        var hours = Math.floor(sec/3600) %24 + days*24;
        var mins = Math.floor(sec/60) % 60;

        var timeSlept = hours + " hours, " + mins + " minutes.";
        document.getElementById("time-slept").innerHTML = timeSlept;

    }

}