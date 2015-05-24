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
            "q": "In word zero of the counter element , bit 15 represents ________",
            "a": [
                { "option": "CD bit", "correct": false },
                { "option": "CU bit", "correct": true },
                        { "option": "None", "correct": false }
            ],
                        "correct": "<p><span>Right answer</span> Ans:CU bit</p>",
                        "incorrect": "<p><span>wrong</span> It's wrong,Ans:CU bit</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Choose the correct addressing format of counter’s status bit (Enable bit)",
            "a": [
                { "option": "C5:12.EN", "correct": false },
                { "option": "C5:12.en", "correct": false },
                { "option": "C5:12-EN", "correct": false },
				{ "option": "None", "correct": true }
                //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],

				"correct": "<p><span>Right answer</span> Ans:None of the above</p>",
				"incorrect": "<p><span>wrong</span> It's wrong,Ans:None of the above</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The counter instruction counts each time the input logic changes the rung state from ________ ",
            "a": [
                { "option": "True or false", "correct": false },
                { "option": "False to true", "correct": true },
                  { "option": "Both true or false and false to true", "correct": false} // no comma here
            ],
                  "correct": "<p><span>Right answer</span> Ans:False to true</p>",
                  "incorrect": "<p><span>wrong</span> It's wrong,Ans:False to true</p>" // no comma here
        },
        { // Question 4
            "q": "Eveytime the count-down instruction sees a false-to-true rung transition , a count-down counter’s accumulated value is ______ .",
            "a": [
                { "option": "Decremented by one", "correct": true },
                      { "option": "Incremented by one", "correct": false }
               // {"option": "1291",   "correct": false} // no comma here
            ],
                      "correct": "<p><span>Right answer</span> Ans:Decremented by one</p>",
                      "incorrect": "<p><span>wrong</span> It's wrong,Ans:Decremented by one</p>"  // no comma here
        },
		{ // Question 5
		    "q": "Counter are not retentive in nature. The above statement is ________",
		    "a": [
                { "option": "True", "correct": true },
                { "option": "False", "correct": false },
				{ "option": "Only in case of count - up counter", "correct": false },
                { "option": "Only in case of count - down counter", "correct": false }
               // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:True</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:True</p>"  // no comma here
        },
		   { // Question 6
		       "q": "In the word zero, of the counter element, _______ bit is set when the accumulated value of a count-down counter has reached the lowest possible accumulated value, which is -32,768. At This point, the counter will automatically wrap around and start counting down from the maximum negative value +32,767. ",
            "a": [
                { "option": "Bit 10", "correct": false },
                { "option": "Bit 11", "correct": true },
                { "option": "Bit 12", "correct": false },
				 { "option": "Bit 14", "correct": false }
               // {"option": "1291",   "correct": false} // no comma here
            ],
				 "correct": "<p><span>Right answer</span> Ans:Bit 11</p>",
				 "incorrect": "<p><span>wrong</span> It's wrong,Ans:Bit 11</p>"  // no comma here
        },
		   { // Question 7
            "q": "<u>Statement 1</u>:In order to reset a counter, the address of the reset instruction must match the address of counter that is to be reset.<br><u>Statement 2</u>:Only one address is allowed per reset instruction",
            "a": [
                { "option": "Statement 1 is true and Statement 2 is false", "correct": false },
                { "option": "Statement 1 and Statement 2 both are false", "correct": false },
                { "option": "Both Statement 1 and Statement 2 is true", "correct": true }
               // {"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Both Statement 1 and Statement 2 is true</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both Statement 1 and Statement 2 is true</p>"  // no comma here
        },
        	   { // Question 8
        	       "q": "In default counter file, how to address the counter’s 14 preset value? ",
        	       "a": [
                { "option": "C5:14/PRE", "correct": false },
                { "option": "C5:14.PRE", "correct": true },
                { "option": "C5:14-PRE", "correct": false },
                  { "option": "All", "correct": false }
        	       // {"option": "1291",   "correct": false} // no comma here
            ],
                  "correct": "<p><span>Right answer</span> Ans:C5:14.PRE</p>",
                  "incorrect": "<p><span>wrong</span> It's wrong,Ans:C5:14.PRE</p>"  // no comma here
        	   },
        { // Question 9
            "q": "In file 27, how to address the counter’s 11 , accumulated value ______",
            "a": [
                { "option": "C11:27/ACC", "correct": false },
                { "option": "C11:27.ACC", "correct": false },
		 { "option": "C27:11/ACC", "correct": false },
                { "option": "C27:11.ACC", "correct": true } 


// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:C27:11.ACC</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans:C27:11.ACC</p>"  // no comma here
        } // no comma here
    ]
};
