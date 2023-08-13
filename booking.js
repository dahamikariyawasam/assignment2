function saveIssue(e) {
    var issueDesc = document.getElementById('issueDescInput').value;
    var issueSeverity = document.getElementById('issueSeverityInput').value;
    var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
    var issueId = chance.guid();
    var issueStatus = 'Open';

    
    

    var issue = {
        id: issueId,
        description: issueDesc,
        severity: issueSeverity,
        assignedTo: issueAssignedTo,
        status: issueStatus
    }

    if (localStorage.getItem('issues') == null) {
        var issues = [];
        issues.push(issue);
        localStorage.setItem('issues', JSON.stringify(issues));
    } else {
        var issues = JSON.parse(localStorage.getItem('issues'));
        issues.push(issue);
        localStorage.setItem('issues', JSON.stringify(issues));
    }

    document.getElementById('issueInputForm').reset();

    fetchIssues();

    e.preventDefault();

}

function storageFunction() {

    
    var inputDate = document.getElementById("arriving_date");
    localStorage.setItem("arrivingDate", inputDate.value);

    console.log(inputDate);

    var inputSLAdults = document.getElementById("sl_adults");
    localStorage.setItem("SL Adults", inputSLAdults.value);
    var inputSLChild = document.getElementById("sl_child");
    localStorage.setItem("SL Child", inputSLChild.value);
    var inputSLChild = document.getElementById("fr_adults");
    localStorage.setItem("Foreigner Adult", inputSLChild.value);
    var inputSLChild = document.getElementById("fr_child");
    localStorage.setItem("Foreigner Child", inputSLChild.value);
    var inputSLChild = document.getElementById("infant");
    localStorage.setItem("Infant", inputSLChild.value);

 // Check if the date is empty
 if (arriving_date === "") {
    alert("Please select a date.");
    
}

// Check if at least one time slot is selected
if (time_slots === 0) {
    alert("Please select at least one time slot.");
    
}

// Check if the quantity for any ticket type is missing
if (sl_adults === "" && sl_child === "" && fr_adults === "" && fr_child === "" && infant === "") {
    alert("Please enter the quantity for at least one ticket type.");
   
}

    var timeStart;
    var notConsecutive = true;
    var timeTotal = 0;
    var firstSelected = false;
    for (var option of document.getElementById("time_slots").options) {
        if (option.selected) {
            var time = option.value.split("-");
            var startTime = Number(time[0]);
            var end = Number(time[1]);

            if(firstSelected == true){
                if(startTime == timeStart + timeTotal){
                    // fine
                    timeTotal = timeTotal + 1;
                }else{
                    notConsecutive = false;
                }
            }else{
                timeStart = startTime;
                timeTotal += 1;
            }

            firstSelected = true;
        }
    }
    

    if(notConsecutive ==false){
        alert("Please selected consecutive time slots and try again.....!!")
  
    
    }else{
        localStorage.setItem("duration", timeTotal );
        localStorage.setItem("startTime", timeStart );
    }


   
    if(notConsecutive == true){
       window.location.replace("details.html");
    }




}

