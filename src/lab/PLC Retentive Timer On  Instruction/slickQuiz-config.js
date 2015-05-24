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
   "q": "Timers are output instructions that are internal to the programmable logic controller.  ",
            "a": [
                  {"option": "The above statement is true",    "correct": true},
                {"option": "The above statement is false",     "correct": false}
                   // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:The above statement is true</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:The above statement is true</p>"  // no comma here
        },
				  		{ // Question 2
            "q": "Timers are ___________  ",
            "a": [
                  {"option": "Used to delay an action",    "correct": false},
                {"option": "Used to run an operation for a predetermined period of time",     "correct": false},
				{"option": "Used to record the total accumulated time of continuous or inter-mediate events",     "correct": false},
				     {"option": "All",    "correct": true}
                             // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:All</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
        },
				  		{ // Question 3
            "q": "The timer 3, in default timer file 4, can be addressed as ________ ",
            "a": [
                  {"option": "T3:4",    "correct": false},
                {"option": "T3/4",     "correct": false},
				     {"option": "T4:3",    "correct": true},
                {"option": "T4/3",     "correct": false}
                   // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:T4:3</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:T4:3</p>"  // no comma here
        },
				  		{ // Question 4
            "q": "In word zero, of timer element, bit 13, is the _______ ",
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
            "q": "In timer file 12, timer 5’s timer timing bit is addressed as ________  ",
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
            "q": "The retentive timer on , RTO instruction, behaves similar to the timer on delay instruction, with exception that when the RTO instruction goes false it will retain its accumulated value.  ",
            "a": [
                  {"option": "The above statement is true",    "correct": true},
                {"option": "The above statement is false",     "correct": false}
                   // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:The above statement is true</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:The above statement is true</p>"  // no comma here
        },
        { // Question 7
           "q": "<u>Statement 1</u>: In order to reset the accumulated value of retentive timer, a reset instruction is used.<br><u>Statement 2</u>: The address of the reset instruction must match the address of the timer that is to be rese ",
            "a": [
                    {"option": "Statement 1 is true and statement 2 is false",    "correct": false},
                {"option": "Both statement 1 and statement 2 are false",     "correct": false},
				     {"option": "Statement 1 is false and statement 2 is true",     "correct": false},
				     {"option": "Both statement 1 and statement 2 are true",    "correct": true}


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:Both statement 1 and statement 2 are true</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both statement 1 and statement 2 are true</p>"  // no comma here        
   
        } // no comma here
    ]
};
