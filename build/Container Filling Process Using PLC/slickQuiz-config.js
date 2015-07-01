// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge",
        "main":    "<p></p>",
        "results": "<h5>Learn More</h5><p>study and take quiz</p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "A proximity sensor often emits an electromagnetic field or a beam of electromagnetic radiation and looks for changes in the field or return signal.",
            "a": [
                {"option": "The above statement is true",      "correct": true},
                {"option": "The above statement is false",     "correct": false}
            ],
            "correct": "<p><span>Right answer</span> Ans:The above statement is true</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:The above statement is true</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Normally-closed solenoid valve, uses a spring which presses the plunger tip against the opening of the ______ .The sealing material at the tip of the plunger keeps the media from entering the orifice  , until the plunger is lifted up by an  _________  created by coil.",
            "a": [
                {"option": "Valve body, electrochemical",               "correct": false},
                {"option": "Valve body, electromechanical",   "correct": false},
                {"option": "Orifice , electromechanical",               "correct": true},
				{"option": "Orifice , electrochemical",               "correct": false}
                //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],
         
            "correct": "<p><span>Right answer</span> Ans:Orifice , electromechanical</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Orifice , electromechanical</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Sensor for both point level deletion or continuous monitoring of solids and liquids :",
            "a": [
                {"option": "Ultrasonic",           "correct": false},
                {"option": "Capacitance",                  "correct": false},
                {"option": "Optical interface and microwave",  "correct": false},
                {"option": "All",          "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span> Ans:All</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>" // no comma here
        },
        { // Question 4
            "q": "______________ is useful in applications involving the transportation of heavy or bulky materials.",
            "a": [
                {"option": "Conveyor system",    "correct": false},
                {"option": "Chain system",     "correct": false},
                {"option": "All",      "correct": true}
               // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:All</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
        },
		{ // Question 5
            "q": "The selection criteria for level sensor include _________",
            "a": [
                {"option": "Physical phase(liquid, solid or slurry)",    "correct": false},
                {"option": "Temperature, pressure ,chemistry",     "correct": false},
				{"option": "Dielectric constant of the medium, specific gravity of medium",     "correct": false},
                {"option": "All",      "correct": true}
               // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:All</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
        },
		   { // Question 6
            "q": "Sensors for continuous level measurement of liquids:",
            "a": [
                {"option": "Magnetostrictive",    "correct": false},
                {"option": "Magnetostrictive",     "correct": false},
                {"option": "Air bubbler",      "correct": false},
				 {"option": "All",      "correct": true}
               // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:All</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
        },
		   { // Question 7
            "q": "The measurement of level using level sensor can be _______",
            "a": [
                {"option": "Continuous value",    "correct": false},
                {"option": "Point value",     "correct": false},
                {"option": "All",      "correct": true}
               // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:All</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
        },
        { // Question 8
            "q": "Sensors which are available for point level detection of liquids are :",
            "a": [
                {"option": "Pulse-wave ultrasonic( Non-Invasive)",    "correct": false},
                {"option": "Magnetic and mechanical float",     "correct": false},
		 {"option": "Pneumatic and conductive",  "correct": false},
                {"option": "All",  "correct": true} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:All</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
        } // no comma here
    ]
};
