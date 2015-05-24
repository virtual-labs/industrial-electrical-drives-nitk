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
            "q": "A timer element is made up of ___16 bit words. ",
            "a": [
                { "option": "One", "correct": false },
                { "option": "Two", "correct": false },
                { "option": "Three", "correct": true },
                { "option": "Four", "correct": false }
               // {"option": "Pitot tube ",      "correct": false}		// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Three</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Three</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
             "q": " In timer element, word zero is for _______ ",
             "a": [
                { "option": "Preset value", "correct": true },
                { "option": "Accumulated value", "correct": false },
                { "option": "Status bits", "correct": false } 
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span> Ans:Preset value</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Preset value</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The preset value of timer 9 , in default timer file 4, is addressed as _________ ",
            "a": [
                { "option": "T4:9/PRE", "correct": false },
                { "option": "T9:4/PRE", "correct": false },
		 { "option": "T4:9/PRE", "correct": false },
		 { "option": "T4:9.PRE", "correct": true }
            ],
		 "correct": "<p><span>Right answer</span> Ans:T4:9.PRE</p>",
		 "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:T4:9.PRE</p>" // no comma here
        },
        { // Question 4
            "q": "In word zero, of timer element, bit 14, is the _______ ",
            "a": [
                { "option": "Timer-timing bit", "correct": true },
                { "option": "Timer-enable bit", "correct": false },
		 {"option": "Timer-done bit",     "correct": false}
		
		
               // {"option": "Pressure gauge reading of tank 1 and that of tank 2 are same",      "correct": true}
                //{"option": "1291",   "correct": false} // no comma here
            ],
		 "correct": "<p><span>Right answer</span> Ans:Timer-timing bit</p>",
		 "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans is:Timer-timing bit</p>"  // no comma here
        },
               { // Question 5
                   "q": "The retentive timer will retain its accumulated value during the following conditions:  ",
                   "a": [
                { "option": "When its rung goes false", "correct": false },
                { "option": "When processor losses power", "correct": false },
                { "option": "When the processor operating mode is changed from remote run or remote test to remote program mode", "correct": false },
                { "option": "Timer-enable bit", "correct": false },
		 { "option": "All", "correct": true }


                   // {"option": "Pressure gauge reading of tank 1 and that of tank 2 are same",      "correct": true}
                   //{"option": "1291",   "correct": false} // no comma here
            ],
		 "correct": "<p><span>Right answer</span> Ans:All</p>",
		 "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans is:All</p>"  // no comma here
               },
       { // Question 6
           "q": "Only one timer address is allowed per reset instruction. ",
           "a": [
                { "option": "The above statement is true", "correct": true },
                        { "option": "The above statement is false", "correct": false } 


// no comma here
            ],
                        "correct": "<p><span>Right answer</span> Ans:The above statement is true</p>",
                        "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:The above statement is true</p>"  // no comma here
        } // no comma here
    ]
};
