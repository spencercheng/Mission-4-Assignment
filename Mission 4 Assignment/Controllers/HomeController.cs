using Microsoft.AspNetCore.Mvc;
using Mission_4_Assignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission_4_Assignment.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public IActionResult GradingCalculator()
        {
            return View();
        }

        [HttpPost]
        public IActionResult GradingCalculator(GradingCalculatorModel model)
        {
            return View();
        }
    }
}
