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
   "q": "Timers are __________  ",
            "a": [
                  {"option": "Used to delay an action",    "correct": false},
				   {"option": "Used to run an operation for a predetermined period of time",    "correct": false},
				    {"option": "Used to record the total accumulated time of continuous or inter-mediate events",    "correct": false},
                {"option": "All",     "correct": true}
                   // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:All</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
        },
				  		{ // Question 2
            "q": "________ are used when an action is to begin a specified time after the input becomes true. ",
            "a": [
                  {"option": "Off-delay timers",    "correct": false},
                {"option": "On-delay timers",     "correct": true}

            ],
            "correct": "<p><span>Right answer</span> Ans:On-delay timers</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:On-delay timers</p>"  // no comma here
        },
				  		{ // Question 3
            "q": "The accumulated value of timer 12, in default timer file 4, is addressed as ________ . ",
            "a": [
                  {"option": "T4:9.ACC",    "correct": true},
                {"option": "T4:9/ACC",     "correct": false},
				     {"option": "T9:4/ACC",    "correct": false},
                {"option": "T9:4.ACC",     "correct": false}
                   // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:T4:9.ACC</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:T4:9.ACC</p>"  // no comma here
        },
				  		{ // Question 4
            "q": "In word zero, of timer element, bit 13, is the _______  ",
            "a": [
                  {"option": "Timer-timing bit",    "correct": false},
                {"option": "Timer-enable bit",     "correct": false},
				     {"option": "Timer-done bit",    "correct": true}
                            // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:Timer-done bit</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Timer-done bit</p>"  // no comma here
        },
				  		{ // Question 5
            "q": "In timer file 12, timer 5’s timer timing bit is addressed as ________   ",
            "a": [
                  {"option": "T5:12/TT",    "correct": false},
                {"option": "T12:5/TT",     "correct": true},
				     {"option": "T5:12.TT",    "correct": false},
                {"option": "T12:5.TT",     "correct": false}
                   // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:T12:5/TT</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:T12:5/TT</p>"  // no comma here
        },
        { // Question 6
           "q": "In an on-delay timer, the enable bit will be true when the timer-timing bit is true. Timer enable bit will be set through the transition from the timer-timing bit to the timer-done bit. Timer enable bit is set as long as there is logical continuity through all input instruction to the timer instruction, no matter the relationship between the preset value and accumulated value.",
            "a": [
                    {"option": "The above statement is true",    "correct": true},
                {"option": "The above statement is true in most of the cases",     "correct": false},
				     {"option": "The above statement is false",    "correct": false}


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:The above statement is true</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:The above statement is true</p>"  // no comma here        
   
        } // no comma here
    ]
};
