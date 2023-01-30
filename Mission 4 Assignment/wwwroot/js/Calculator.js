
$("#send").click(function () {
    // Getting the form data and mutiplying by the percentage
    var Assignments = ($("#assignment").val() * .50);
    var GroupProject = ($("#GroupProject").val() * .10);
    var Quizzes = ($("#Quizzes").val() * .10);
    var Midterm = ($("#Midterm").val() * .10);
    var FinalExam = ($("#Final").val() * .10);
    var Intex = ($("#Intex").val() * .10);

    // adding it all together
    var Final = Assignments + GroupProject + Quizzes + Midterm + FinalExam + Intex;

    if (Final >= 94) {
        letter = "A"
    } else if (90 <= Final && Final < 94) {
        letter = "A-"
    }
    else if (87 <= Final && Final < 90) {
        letter = "B+"
    }
    else if (84 <= Final && Final < 87) {
        letter = "B"
    }
    else if (80 <= Final && Final < 84) {
        letter = "B-"
    }
    else if (77 <= Final && Final < 80) {
        letter = "C+"
    }
    else if (74 <= Final && Final < 77) {
        letter = "C"
    }
    else if (70 <= Final && Final < 74) {
        letter = "C-"
    }
    else if (67 <= Final && Final < 70) {
        letter = "D+"
    }
    else if (64 <= Final && Final < 67) {
        letter = "D"
    }
    else if (60 <= Final && Final < 64) {
        letter = "D-"
    }
    else if (Final < 60) {
        letter = "E"
    }

    //display the final Finals in an alert message

    alert("Final Grade: " + Final + " (" + letter + ")");
});