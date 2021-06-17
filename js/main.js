function logFunction(){
    var sleptTime = document.getElementById("sleptTime").value;
    var wokeTime = document.getElementById("wokeTime").value;


    if(sleptTime == '' && wokeTime == ''){
        alert('Please select the times you went to sleep and woke up!');
    }
    else if(sleptTime == ''){
        alert('Please select the time you went to sleep!');
    }
    else if(wokeTime == ''){
        alert('Please select the time you woke up!');
    }
    else{
        console.log('slept ' + sleptTime + ' to ' + wokeTime);
        var timeSlept = "";
        document.getElementById("time-slept").innerHTML = timeSlept;
    }

}