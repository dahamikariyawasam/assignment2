function  loadData(){
    //
    document.getElementById("cur_date").innerHTML = localStorage.getItem("arrivingDate");

    // Calculate Duration
    var _timeStart = Number(localStorage.getItem("startTime"));
    var _duration = Number(localStorage.getItem("duration"));
    var _endTime =  +_timeStart + _duration;


    var timeString = _timeStart +  ":00 - " + _endTime  + ":00";
    document.getElementById("ar_time").innerHTML = timeString;


    // Save duration
    document.getElementById("duration").innerHTML = localStorage.getItem("duration");

    //Charges and Total
    var peekPrices = {
        sla : 6 ,
        slc : 3 ,
        fa : 13 ,
        fc : 8 ,
        i : 0
    };

    var normalPrices = {
        sla : 4 ,
        slc : 2 ,
        fa : 10 ,
        fc : 5 ,
        i : 0
    };



    // Quantities
    var sla = Number(localStorage.getItem("SL Adults"));
    var slc = Number( localStorage.getItem("SL Child"));
    var fa  =Number( localStorage.getItem("Foreigner Adult"));
    var fc  =Number(localStorage.getItem("Foreigner Child"));
    var i =  Number(localStorage.getItem("Infant"));

    document.getElementById("sl_adults").innerHTML = localStorage.getItem("SL Adults");
    document.getElementById("sl_child").innerHTML = localStorage.getItem("SL Child");
    document.getElementById("fr_adults").innerHTML = localStorage.getItem("Foreigner Adult");
    document.getElementById("fr_child").innerHTML = localStorage.getItem("Foreigner Child");
    document.getElementById("infant").innerHTML = localStorage.getItem("Infant");


    //subTotals
    var numberOfPeekHours = 0;
    var numberOfNormalHours = 0;

    for (var i = _timeStart; i < _endTime; i++) {
        // Check if the current hour (i) is within the peak hours (10 am to 1 pm) or (3 pm to 6 pm)
        if ((i >= 10 && i < 13) || (i >= 15 && i < 18)) {
            numberOfPeekHours++;
        } else {
            numberOfNormalHours++;
        }
    }

    var charges = {
        sla : sla * numberOfPeekHours * peekPrices.sla + sla * numberOfNormalHours * normalPrices.sla ,
        slc : slc * numberOfPeekHours * peekPrices.slc + slc * numberOfNormalHours * normalPrices.slc ,
        fa : fa * numberOfPeekHours * peekPrices.fa + fa * numberOfNormalHours * normalPrices.fa ,
        fc : fc * numberOfPeekHours * peekPrices.fc + fc * numberOfNormalHours * normalPrices.fc ,
        i : i * numberOfPeekHours * peekPrices.i + i * numberOfNormalHours * normalPrices.i ,
    }

    document.getElementById("sla").innerHTML = "$" + charges.sla ;
    document.getElementById("slc").innerHTML = "$" + charges.slc ;
    document.getElementById("fa").innerHTML = "$" + charges.fa ;
    document.getElementById("fc").innerHTML = "$" + charges.fc ;
    document.getElementById("i").innerHTML = "$" + charges.i ;
    document.getElementById("total").innerHTML = "$" + (charges.sla + charges.slc  + charges.fa + charges.fc + charges.i)   ;

}

function saveDetails(){
    var fullName = document.getElementById('full_name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var confirmEmail= document.getElementById('confirm_email').value;
    var  gender = document.getElementById('gender').value;

    if(fullName == undefined || fullName == ""){
        alert("Please enter name first ..!")
    }else if(phone == undefined || phone == ""){
        alert("Please enter phone first ..!")
    }else if(email == undefined || email == ""){
        alert("Please enter email first ..!")
    }else if(confirmEmail == undefined || confirmEmail == ""){
        alert("Please enter confirmEmail first ..!")
    }else if(email != confirmEmail){
        alert("Entered emails doesn't match!")
    }else{
        var details = {
            name: fullName,
            phone: phone,
            email: email,
            gender: gender,
        };

        localStorage.setItem('details', JSON.stringify(details));
        window.location.replace("payment.html");

    }


}

function savePayment(){

}
