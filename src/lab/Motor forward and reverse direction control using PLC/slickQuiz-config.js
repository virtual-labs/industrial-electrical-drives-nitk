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
            "q": "The difference between the conventional relay ladder logic and PLC ladder is ",
            "a": [
                {"option": "Conventional relay ladder logic has logical continuity and PLC ladder logic has electrical continuity",      "correct": false},
				{"option": "Conventional relay ladder logic has electrical continuity and PLC ladder logic has logical continuity",      "correct": true},
				{"option": "Both can have electrical and logical continuity",      "correct": false},
                {"option": "None",     "correct": false}
            ],
            "correct": "<p><span>Right answer</span> Ans:Conventional relay ladder logic has electrical continuity and PLC ladder logic has logical continuity</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Conventional relay ladder logic has electrical continuity and PLC ladder logic has logical continuity</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "<br><img src=\"../images/LADDER/QUIZ/2.jpg\"\height=200 width=400/><br>The above circuit can be represented by the following PLC ladder rung diagram",
            "a": [
                {"option": "<br><img src=\"../images/LADDER/QUIZ/2a.jpg\"\height=120 width=300/>",               "correct": false},
                {"option": "<br><img src=\"../images/LADDER/QUIZ/2b.jpg\"\height=120 width=300/>",   "correct": false},
                {"option": "<br><img src=\"../images/LADDER/QUIZ/2c.jpg\"\height=120 width=300/>",               "correct": false},
				{"option": "<br><img src=\"../images/LADDER/QUIZ/2d.jpg\"\height=120 width=300/>",               "correct": true}
                //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],
         
            "correct": "<p><span>Right answer</span> Ans:<br><img src=\"../images/LADDER/QUIZ/2d.jpg\"\height=120 width=300/></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:<br><img src=\"../images/LADDER/QUIZ/2d.jpg\"\height=120 width=300/></p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "<br><img src=\"../images/LADDER/QUIZ/3.jpg\"\height=150 width=400/><br>The above figure represents ",
            "a": [
                {"option": "NOR function",           "correct": false},
                {"option": "NOT function",                  "correct": false},
                {"option": "NAND function",  "correct": false},
                {"option": "OR function",          "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span> Ans:OR function</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:OR function</p>" // no comma here
        },
        { // Question 4
            "q": "<br><img src=\"../images/LADDER/QUIZ/4.jpg\"\height=150 width=400/><br>For ladder rung shown above, choose the correct input and output status file bit condition ",
            "a": [
                {"option": "<br><img src=\"../images/LADDER/QUIZ/4a.jpg\"\height=100 width=300/>",    "correct": false},
                {"option": "<br><img src=\"../images/LADDER/QUIZ/4b.jpg\"\height=100 width=300/>",     "correct": false},
				  {"option": "Both are true",  "correct": false},
                { "option": "Only <br><img src=\"../images/LADDER/QUIZ/4a.jpg\"\height=100 width=300/> is true", "correct": true }
               // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Only <br><img src=\"../images/LADDER/QUIZ/4a.jpg\"\height=100 width=300/> is true</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Only <br><img src=\"../images/LADDER/QUIZ/4a.jpg\"\height=100 width=300/> is true</p>"  // no comma here
        },
		{ // Question 5
            "q": "<br><img src=\"../images/LADDER/QUIZ/5.jpg\"\height=150 width=400/><br>The above figure represents ",
            "a": [
                {"option": "OR function",    "correct": false},
                {"option": "NOR function",     "correct": true},
				{"option": "NAND function",     "correct": false},
                {"option": "XNOR function",      "correct": false}
               // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:NOR function</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:NOR functione</p>"  // no comma here
        },
		  
		  		{ // Question 6
            "q": "<br><img src=\"../images/LADDER/QUIZ/6.jpg\"\height=150 width=400/><br>The above figure represents ",
            "a": [
                {"option": "XNOR function",    "correct": true},
                {"option": "XOR function",     "correct": false},
				{"option": "NOR function",     "correct": false},
                {"option": "NAND function",      "correct": false}
               // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:XNOR function</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:XNOR function</p>"  // no comma here
        },
				{ // Question 7
            "q": "<br><img src=\"../images/LADDER/QUIZ/7.jpg\"\height=150 width=400/><br>The above figure represents ",
            "a": [
                {"option": "XNOR function",    "correct": false},
                {"option": "NOR function",     "correct": false},
				{"option": "XOR function",     "correct": true},
                {"option": "NAND function",      "correct": false}
               // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:XOR function</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:XOR function</p>"  // no comma here
        },
		  		{ // Question 8
            "q": "<br><img src=\"../images/LADDER/QUIZ/8.jpg\"\height=150 width=400/><br>The above figure represents ",
            "a": [
                {"option": "XNOR function",    "correct": false},
                {"option": "OR function",     "correct": false},
				{"option": "XOR function",     "correct": false},
                {"option": "NAND function",      "correct": true}
               // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:NAND function</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:NAND function</p>"  // no comma here
        },
		  		{ // Question 9
            "q": "<br><img src=\"../images/LADDER/QUIZ/9.jpg\"\height=180 width=450/><br>For ladder rung shown above, choose the correct input and output status file bit condition  ",
            "a": [
                  {"option": "<br><img src=\"../images/LADDER/QUIZ/9a.jpg\"\height=100 width=300/>",    "correct": false},
                {"option": "<br><img src=\"../images/LADDER/QUIZ/9b.jpg\"\height=100 width=300/>",     "correct": false},
				     {"option": "<br><img src=\"../images/LADDER/QUIZ/9c.jpg\"\height=100 width=300/>",    "correct": true},
                {"option": "None",     "correct": false}
                   // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:<br><img src=\"../images/LADDER/QUIZ/9c.jpg\"\height=100 width=300/></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:<br><img src=\"../images/LADDER/QUIZ/9c.jpg\"\height=100 width=300/></p>"  // no comma here
        },
		  
		  
        { // Question 10
           "q": "<br><img src=\"../images/LADDER/QUIZ/10.jpg\"\height=180 width=450/><br>For ladder rung shown above, choose the correct input and output status file bit condition  ",
            "a": [
                  {"option": "<br><img src=\"../images/LADDER/QUIZ/10a.jpg\"\height=100 width=300/>",    "correct": false},
                {"option": "<br><img src=\"../images/LADDER/QUIZ/10b.jpg\"\height=100 width=300/>",     "correct": false},
				     {"option": "<br><img src=\"../images/LADDER/QUIZ/10c.jpg\"\height=100 width=300/>",    "correct": false},
                { "option": "<br><img src=\"../images/LADDER/QUIZ/10a.jpg\"\height=100 width=300/> and <br><img src=\"../images/LADDER/QUIZ/10b.jpg\"\height=100 width=300/> both are true", "correct": true }
            ],
                "correct": "<p><span>Right answer</span> Ans:<br><img src=\"../images/LADDER/QUIZ/10a.jpg\"\height=100 width=300/> and <br><img src=\"../images/LADDER/QUIZ/10b.jpg\"\height=100 width=300/> both are true</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:<br><img src=\"../images/LADDER/QUIZ/10a.jpg\"\height=100 width=300/> and <br><img src=\"../images/LADDER/QUIZ/10b.jpg\"\height=100 width=300/> both are true</p>"  // no comma here
                },
				  		{ // Question 11
            "q": "__________ instruction is used to program a time delay to begin after rung input goes false. ",
            "a": [
                  {"option": "On-delay timer",    "correct": false},
                {"option": "Off-delay timer",     "correct": true}
                   // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:Off-delay timer</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Off-delay timer</p>"  // no comma here
        },
				  		{ // Question 12
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
				  		{ // Question 13
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
				  		{ // Question 14
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
				  		{ // Question 15
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
        { // Question 16
           "q": "<br><img src=\"../images/mtrfwd/q1.jpg\"\height=130 width=350/><br>In the figure, _________ is set when the rung 000 becomes true. It will remain set through the true to false transition and until the accumulated value is equal to the preset value  ",
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
