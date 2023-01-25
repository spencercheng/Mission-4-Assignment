
$("#send").submit(function () {
        // Getting the form data and mutiplying by the percentage
        var Assignments = ($("#assignment").val() * .50);
        var GroupProject = ($("#GroupProject").val() * .10);
        var Quizzes = ($("#Quizzes").val() * .10);
        var Midterm = ($("#Midterm").val() * .10);
        var FinalExam = ($("#Final").val() * .10);
        var Intex = ($("#Intex").val() * .10);

        // adding it all together
        var Final = Assignments + GroupProject + Quizzes + Midterm + FinalExam + Intex;
        console.log(Final)

        // output base on condition.
        if (Final >= 94.0) {
            $("#grade").text("Final Grade: A");
            $("#percent").text("Percent: " + Final + "%");
        }
        else if (Final >= 90.0 && Final < 94.0) {
            $("#grade").text("Final Grade: A-");
            $("#percent").text("Percent: " + Final + "%");
        }
        else if (Final >= 87.0 && Final < 90.0) {
            $("#grade").text("Final Grade: B+");
            $("#percent").text("Percent: " + Final + "%");
        }
        else if (Final >= 84.0 && Final < 87.0) {
            $("#grade").text("Final Grade: B");
            $("#percent").text("Percent: " + Final + "%");
        }
        else if (Final >= 80.0 && Final < 84.0) {
            $("#grade").text("Final Grade:  B-");
            $("#percent").text("Percent: " + Final + "%");
        }
        else if (Final >= 77.0 && Final < 80.0) {
            $("#grade").text("Final Grade: C+");
            $("#percent").text("Percent: " + Final + "%");
        }
        else if (Final >= 74.0 && Final < 77.0) {
            $("#grade").text("Final Grade: C");
            $("#percent").text("Percent: " + Final + "%");
        }
        else if (Final >= 70.0 && Final < 74.0) {
            $("#grade").text("Final Grade: C-");
            $("#percent").text("Percent: " + Final + "%");
        }
        else if (Final >= 67.0 && Final < 70.0) {
            $("#grade").text("Final Grade: D+");
            $("#percent").text("Percent: " + Final + "%");
        }
        else if (Final >= 64.0 && Final < 67.0) {
            $("#grade").text("Final Grade: D");
            $("#percent").text("Percent: " + Final + "%");
        }
        else if (Final >= 60.0 && Final < 64.0) {
            $("#grade").text("Final Grade: D-");
            $("#percent").text("Percent: " + Final + "%");
        }
        else {
            $("#grade").html("Final Grade: E");
            $("#percent").html("Percent: " + Final + "%");
        }
})