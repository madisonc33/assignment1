using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Assignment_1.Models;


// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Assignment_1.Controllers
{
    public class HomeController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("GradeCalc")]
        public IActionResult GradeCalc()
        {
            return View();
        }

        [HttpPost("GradeCalc")]
        public IActionResult GradeCalc(GradeCalcModel model)
        {
            return View();
        }
    }
}
