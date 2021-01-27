//Gets the submit button from the html

$("#submitButton").click(function () {
    //Gets all the values from the form
    var assignments = parseFloat($("#assignments").val());
    var groupProjects = parseFloat($("#groupProjects").val());
    var quizzes = parseFloat($("#quizzes").val());
    var exams = parseFloat($("#exams").val());
    var intex = parseFloat($("#intex").val());

    //calculates the final percentage by multiplying the user's score by the weight they hold

    var finalPercentage = (assignments * .50) + (groupProjects * .10) + (quizzes * .10) + (exams * .20) + (intex * .10);

    var letterGrade;

    //Checks for which range matches their final percentage and then assigns the correct letter value

    if (finalPercentage >= 94)
    {
        letterGrade = "A";
    }
    else if (finalPercentage >= 90)
    {
        letterGrade = "A-";
    }
    else if (finalPercentage >= 87)
    {
        letterGrade = "B+";
    }
    else if (finalPercentage >= 84)
    {
        letterGrade = "B";
    }
    else if (finalPercentage >= 80)
    {
        letterGrade = "B-";
    }
    else if (finalPercentage >= 77)
    {
        letterGrade = "C+";
    }
    else if (finalPercentage >= 74)
    {
        letterGrade = "C";
    }
    else if (finalPercentage >= 70)
    {
        letterGrade = "C-";
    }
    else if (finalPercentage >= 67)
    {
        letterGrade = "D+";
    }
    else if (finalPercentage >= 64)
    {
        letterGrade = "D";
    }
    else if (finalPercentage >= 60)
    {
        letterGrade = "D-";
    }
    else
    {
        letterGrade = "E";
    }

    //displays the letter value as an alert to the user.

    alert("Final Percentage: " + finalPercentage + "\n" + "Final Letter Grade: " + letterGrade);
});