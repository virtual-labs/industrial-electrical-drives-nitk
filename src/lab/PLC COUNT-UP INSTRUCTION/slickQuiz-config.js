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
            "q": "In word zero of the counter element , bit 14 represents ________",
            "a": [
                { "option": "CU bit", "correct": false },
                { "option": "CD bit", "correct": true },
                        { "option": "None", "correct": false }
            ],
                        "correct": "<p><span>Right answer</span> Ans:CD bit</p>",
                        "incorrect": "<p><span>wrong</span> It's wrong,Ans:CD bit</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Choose the correct addressing format of counter’s status bit (Done bit)",
            "a": [
                { "option": "C5:14.DN", "correct": false },
                { "option": "C5:14.dn", "correct": false },
                { "option": "C5:14/dn", "correct": false },
				{ "option": "C5:14/DN", "correct": true }
                //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],

				"correct": "<p><span>Right answer</span> Ans:C5:14/DN</p>",
				"incorrect": "<p><span>wrong</span> It's wrong,Ans:C5:14/DN</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Choose the correct addressing format of counter’s status bit ( Count- up-enable-bit)  ",
            "a": [
                { "option": "C5:12.CU", "correct": false },
                { "option": "C5:12/CU", "correct": true },
                   { "option": "C5:12-CU", "correct": false },
                  { "option": "None", "correct": false} // no comma here
            ],
                  "correct": "<p><span>Right answer</span> Ans:C5:12/CU</p>",
                  "incorrect": "<p><span>wrong</span> It's wrong,Ans:C5:12/CU</p>" // no comma here
        },
        { // Question 4
            "q": "A counter instruction is an __________  .",
            "a": [
                { "option": "Input instruction", "correct": false},
                   { "option": "Output instruction", "correct": true },
                             { "option": "Both Input instruction and output instruction", "correct": false }
               // {"option": "1291",   "correct": false} // no comma here
            ],
                             "correct": "<p><span>Right answer</span> Ans:Output instruction</p>",
                             "incorrect": "<p><span>wrong</span> It's wrong,Ans:Output instruction</p>"  // no comma here
        },
		{ // Question 5
		    "q": "Everytime the count-up instruction sees a false-to-true rung transition, a count-up counter ‘s accumulated value is _______ ",
		    "a": [
                { "option": "Decremented by one", "correct": false },
                { "option": "Incremented by one", "correct": true }
               // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Incremented by one</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Incremented by one</p>"  // no comma here
        },
		   { // Question 6
		       "q": "Consider 2 statements<br><u>Statement 1</u> - The counter will retain its accumulated value through a power loss.<br><u>Statement 2</u> - The counter will retain the ON or OFF status of done bit ,overflow bit and underflow bits through a power loss.",
		       "a": [
                { "option": "Statement 1 is true", "correct": false },
                { "option": "Statement 2 is true", "correct": false },
                { "option": "Both Statement 1 and Statement 2 is true", "correct": true }
               // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Both Statement 1 and Statement 2 is true</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both Statement 1 and Statement 2 is true</p>"  // no comma here
        },
		   { // Question 7
		       "q": "For a count-up counter, in the event of wrap from +32,767 to -32,768, the accumulated value becomes less than the preset value and the done bit will ___________. ",
            "a": [
                { "option": "be reset", "correct": false },
                { "option": "not be reset", "correct": true }
           
               // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:not be reset</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:not be reset</p>"  // no comma here
        },
        	   { // Question 8
        	       "q": "In the word zero, of the counter element, _______ bit is set when the accumulated value of a count-up counter has reached the highest possible accumulated value, which is +32,767. At This point, the counter will automatically wrap around and start counting up from the maximum negative value -32,768.",
        	       "a": [
                { "option": "Bit 10", "correct": false },
                { "option": "Bit 11", "correct": false },
                { "option": "Bit 12", "correct": true },
                  { "option": "Bit 13", "correct": false }
        	       // {"option": "1291",   "correct": false} // no comma here
            ],
                  "correct": "<p><span>Right answer</span> Ans:Bit 12</p>",
                  "incorrect": "<p><span>wrong</span> It's wrong,Ans:Bit 12</p>"  // no comma here
              },
        	     	   { // Question 9
        	     	       "q": "In default counter file, how to address the counter’s 16 accumulated value?",
        	     	       "a": [
                { "option": "C5:16/ACC", "correct": true },
                { "option": "C5:ACC/16", "correct": false },
                { "option": "C16:5.ACC", "correct": false },
                  { "option": "C5:16-ACC", "correct": false }
        	     	       // {"option": "1291",   "correct": false} // no comma here
            ],
                  "correct": "<p><span>Right answer</span> Ans:C5:16/ACC</p>",
                  "incorrect": "<p><span>wrong</span> It's wrong,Ans:C5:16/ACC</p>"  // no comma here
        	     	   },
        { // Question 10
            "q": "_________ is the current (r.m.s value) that a Circuit breaker is capable of breaking under specified conditions and given recovery voltage.",
            "a": [
                { "option": "C5:16.PRE", "correct": false },
                { "option": "C5:16/PRE", "correct": false },
		 { "option": "C16:5.PRE", "correct": true },
                { "option": "C16:5/PRE", "correct": false} 


// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:C16:5.PRE</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:C16:5.PRE</p>"  // no comma here
        } // no comma here
    ]
};
