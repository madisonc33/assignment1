using System;
using System.ComponentModel.DataAnnotations;

namespace Assignment_1.Models
{
    public class GradeCalcModel
    {
        [Range(0, 100, ErrorMessage = "Please enter valid percentage.")]
        public string assignments { get; set; }

        [Range(0, 100, ErrorMessage = "Please enter valid percentage")]
        public string groupProjects { get; set; }

        [Range(0, 100, ErrorMessage = "Please enter valid percentage")]
        public string quizzes { get; set; }

        [Range(0, 100, ErrorMessage = "Please enter valid percentage")]
        public string exams { get; set; }

        [Range(0, 100, ErrorMessage = "Please enter valid percentage")]
        public string intex { get; set; }

    }
}