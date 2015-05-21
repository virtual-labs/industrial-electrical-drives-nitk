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
   "q": "__________ instruction is used to program a time delay to begin after rung input goes false. ",
            "a": [
                  {"option": "On-delay timer",    "correct": false},
                {"option": "Off-delay timer",     "correct": true}
                   // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:Off-delay timer</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Off-delay timer</p>"  // no comma here
        },
				  		{ // Question 2
            "q": "In timer element, word 0 is for ________ ",
            "a": [
                  {"option": "Preset value",    "correct": false},
                {"option": "Accumulated value",     "correct": false},
				     {"option": "Status bits",    "correct": true}
                             // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:Status bits</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Status bits</p>"  // no comma here
        },
				  		{ // Question 3
            "q": "<u>Statement 1</u>: In SLC PLC series, timer can be assigned for any unused file from 9 to 255.<br><u>Statement 2</u>: There are 256 timers available in each file. Timers 0 through 255 are available  ",
            "a": [
                  {"option": "Statement 1 is false",    "correct": false},
                {"option": "Statement 2 is false",     "correct": false},
				     {"option": "Both statement 1 and statement 2 are true",    "correct": true},
                {"option": "Both statement 1 and statement 2 are false",     "correct": false}
                   // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:Both statement 1 and statement 2 are true</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both statement 1 and statement 2 are true</p>"  // no comma here
        },
				  		{ // Question 4
            "q": "In word zero, of timer element, bit 14, is the _______ ",
            "a": [
                  {"option": "Timer-timing bit",    "correct": true},
                {"option": "Timer-enable bit",     "correct": false},
				     {"option": "Timer-done bit",    "correct": false}
                            // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:Timer-timing bit</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Timer-timing bit</p>"  // no comma here
        },
				  		{ // Question 5
            "q": "In timer file 11, timer 6's timer enable bit is addressed as _______  ",
            "a": [
                  {"option": "T6:11/EN",    "correct": false},
                {"option": "T6:11.EN",     "correct": false},
				     {"option": "T11:6.EN",    "correct": false},
                {"option": "T11:6/EN",     "correct": true}
                   // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:T11:6/EN</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:T11:6/EN</p>"  // no comma here
        },
        { // Question 6
           "q": "<br><img src=\"../images/offpro/q1.jpg\"\height=130 width=350/><br>In the figure, _________ is set when the rung 000 becomes true. It will remain set through the true to false transition and until the accumulated value is equal to the preset value  ",
            "a": [
                    {"option": "Timer-timing bit",    "correct": false},
                {"option": "Timer-enable bit",     "correct": false},
				     {"option": "Timer-done bit",    "correct": true}


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:Timer-done bit</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Timer-done bit</p>"  // no comma here        
   
        } // no comma here
    ]
};
