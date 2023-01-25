using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Mission_4_Assignment.Models
{
    public class GradingCalculatorModel
    {
        [Required]
        
        public int Assignment { get; set; }
        public int GroupProject { get; set; }
        public int Quizzes { get; set; }
        public int Midterm { get; set; }
        public int Final { get; set; }
        public int Intex { get; set; }

    }
}
