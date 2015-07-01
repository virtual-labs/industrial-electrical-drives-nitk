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
            "q": "Solenoid valve is an ____________ device used for controlling ________ . ",
            "a": [
                { "option": "Electrochemical, gas", "correct": false },
                { "option": "Electrochemical, liquid", "correct": false },
                { "option": "Electromechanical, gas and liquid", "correct": true },
                { "option": "All", "correct": false }
               // {"option": "Pitot tube ",      "correct": false}		// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Electromechanical, gas and liquid</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Electromechanical, gas and liquid</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
             "q": "Level sensor are used to delete the level of substances that flow, which include ________",
            "a": [
                { "option": "Liquids", "correct": false },
                { "option": "Slurries", "correct": false },
                { "option": "Granular material", "correct": false },
               { "option": "All", "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span> Ans:All</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:All</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Sensors which are available for point level detection of solids are : ",
            "a": [
                { "option": "Vibrating point", "correct": false },
                { "option": "Rotating paddle", "correct": false },
                { "option": "Admittance type", "correct": false },
                { "option": "All", "correct": true}		
               // {"option": "5",          "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:All</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:All</p>" // no comma here
        },
        { // Question 4
            "q": "A proximity sensor is a sensor able to detect the presence of nearby objects __________ . ",
            "a": [
                { "option": "With physical contact", "correct": false },
    		 { "option": "Without physical contact", "correct": true }
			
               // {"option": "Pressure gauge reading of tank 1 and that of tank 2 are same",      "correct": true}
                //{"option": "1291",   "correct": false} // no comma here
            ],
    		 "correct": "<p><span>Right answer</span> Ans:Without physical contact</p>",
    		 "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans is:Without physical contact</p>"  // no comma here
        },
                { // Question 5
                    "q": " The maximum distance that proximity sensor can detect is defined as__________ ",
                    "a": [
                       { "option": "Midrange", "correct": true },
		 { "option": "Nominal range", "correct": false },
		 { "option": "Both Midrange and Nominal range", "correct": false }
            ],
		 "correct": "<p><span>Right answer</span> Ans:Nominal range</p>",
		 "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans is:Nominal range</p>"  // no comma here
                },
       { // Question 6
           "q": "Push button is a kind of kind switch which is activated or deactivated the moment we press or depress it. It sends the signal momentarily when we press or depress it. ",
            "a": [
                { "option": "The above statement is false", "correct": false },
                { "option": "The above statement is true", "correct": true } 
            ],
                "correct": "<p><span>Right answer</span> Ans:The above statement is true</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:The above statement is true</p>"  // no comma here
        } // no comma here
    ]
};
