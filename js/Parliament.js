function votingElection() {
    var candidate1, candidate2, candidate3, candidate4, totalCandidates;

    candidate1 = document.getElementById('Candidate1').value;
    candidate2 = document.getElementById('Candidate2').value;
    candidate3 = document.getElementById('Candidate3').value;
    candidate4 = document.getElementById('Candidate4').value;
    totalCandidates = Number(candidate1) + Number(candidate2) + Number(candidate3) + Number(candidate4);

    if (totalCandidates == 10){
        document.getElementById('submitVote').innerHTML = "Thank you for voting, this page will refresh in 5 seconds";
        setTimeout('location.reload()',5000)
    } else {
        document.getElementById('submitError').innerHTML = "Form is completed incorrectly, please check your selections";
    }
}