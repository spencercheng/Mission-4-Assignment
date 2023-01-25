using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Mission_4_Assignment.Models
{
    public class GradingCalculatorModel
    {
        public string From { get; set; }

        public string Subject { get; set; }

        public string Message { get; set; }
    }
}
