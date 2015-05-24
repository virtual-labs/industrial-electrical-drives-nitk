// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge",
        "main":    "<p></p>",
        "results": "<h5>Learn More</h5><p></p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "If the weight of the garage shutter is 200kg , and the diameter of the shaft used to pull is 4.8cm . calculate the torque reqired to pull the garage shutter ? Assume gravity=10 m/s<sup>2</sup>",
            "a": [
                { "option": "24 N-m", "correct": false },
                { "option": "48 N-m", "correct": true },
                 { "option": "96 N-m", "correct": false },
                { "option": "72 N-m", "correct": false }
               // {"option": "Pitot tube ",      "correct": false}		// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:48 N-m</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:48 N-m</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
             "q": "If the diameter of the shaft used to pull the garage shutter is 4.8cm and the size of the garage shutter is 15.75feet*10 feet , rotation of the shaft is 1000rpm. Then calculate the time required by the garage shutter to open completely from its completely closed condition.",
             "a": [
                { "option": "5.9 sec", "correct": true },
                { "option": "6.4sec", "correct": false },
                { "option": "6.9sec", "correct": false },
               { "option": "7.2sec", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span> Ans:5.9 sec</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:5.9 sec</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "If the size of the gate is 15feet*10feet and it has to be opened in exact 6 sec, and diameter of the shaft used is 2.4cm. Calculate the speed of rotation of the shaft. ",
            "a": [
                { "option": "2100 rpm", "correct": false },
                { "option": "2400 rpm", "correct": false },
                       { "option": "1875 rpm", "correct": true},
                { "option": "1600 rpm", "correct": false }		
               // {"option": "5",          "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:1875 rpm</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:1875 rpm</p>" // no comma here
        },
        { // Question 4
            "q": "If the mass of the garage shutter is 250kg, and shaft used to pull it, has 2.4cm diamter.Then calculate the torque required to pull the gate. ",
            "a": [
                { "option": "60N-m", "correct": false },
                { "option": "80N-m", "correct": false },
		 { "option": "40N-m", "correct": false },
		 { "option": "30N-m", "correct": true }
		
		
               // {"option": "Pressure gauge reading of tank 1 and that of tank 2 are same",      "correct": true}
                //{"option": "1291",   "correct": false} // no comma here
            ],
		 "correct": "<p><span>Right answer</span> Ans:30N-m</p>",
		 "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans is:30N-m</p>"  // no comma here
        },
       { // Question 5
           "q": "If the motor used for garage shutter opening and closing produces a torque of 5N-m and the torque required to pull the garage shutter is 20N-m.Calculate the required gear ratio.",
            "a": [
                { "option": "8:1", "correct": false },
                { "option": "4:1", "correct": true },
		        { "option": "2:1", "correct": false },
                { "option": "1:1", "correct": false } 


// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:4:1</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:4:1</p>"  // no comma here
        } // no comma here
    ]
};
