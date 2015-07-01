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
            "q": "Timers are output instructions that are internal to the programmable logic controller.",
            "a": [
                { "option": "The above statement is true", "correct": true },
                { "option": "The above statement is false", "correct": false }
               // {"option": "Pitot tube ",      "correct": false}		// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:The above statement is true</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:The above statement is true</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
             "q": "In timer element, word 2 is for ________",
            "a": [
                { "option": "Preset value", "correct": false },
                { "option": "Accumulated value", "correct": true },
                     { "option": "Status bits", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span> Ans:Accumulated value</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Accumulated value</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The timer 3, in default timer file 4, can be addressed as ________ ",
            "a": [
                { "option": "T3:4", "correct": false },
                { "option": "T3/4", "correct": false },
                { "option": "T4:3", "correct": true },
                { "option": "T4/3", "correct": false }		
               // {"option": "5",          "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:T4:3</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:T4:3</p>" // no comma here
        },
        { // Question 4
            "q": "In word zero, of timer element, bit 15, is the _______ ",
            "a": [
                { "option": "Timer-timing bit", "correct": false },
                { "option": "Timer-enable bit", "correct": true },
			 { "option": "Timer-done bit", "correct": false }
		
		
               // {"option": "Pressure gauge reading of tank 1 and that of tank 2 are same",      "correct": true}
                //{"option": "1291",   "correct": false} // no comma here
            ],
			 "correct": "<p><span>Right answer</span> Ans:Timer-enable bit</p>",
			 "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans is:Timer-enable bit</p>"  // no comma here
        },
       { // Question 5
           "q": "An on-delay timer is not retentive in nature. ",
            "a": [
                { "option": "The above statement is false", "correct": false },
                { "option": "The above statement is true", "correct": true } 


// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:The above statement is true</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:The above statement is true</p>"  // no comma here
        } // no comma here
    ]
};
