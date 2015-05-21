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
            "q": "A typical counter counts from 0 upto a predetermined value, called the _________ . ",
            "a": [
                  { "option": "Accumulated value", "correct": false },
                   { "option": "Preset value", "correct": true }
               // {"option": "Pitot tube ",      "correct": false}		// no comma here
            ],
                   "correct": "<p><span>Right answer</span> Ans:Preset value</p>",
                   "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Preset value</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
             "q": "The default counter file is ___________ ",
            "a": [
                { "option": "File 2", "correct": false },
                { "option": "File 3", "correct": false },
                { "option": "File 4", "correct": false },
               { "option": "File 5", "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span> Ans:File 5</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:File 5</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Any data file, which is greater than _________ can be assigned as an additional counter. ",
            "a": [
           { "option": "File 6", "correct": false },
                { "option": "File 7", "correct": true },
                { "option": "File 8", "correct": false },
                { "option": "None", "correct": false }		
               // {"option": "5",          "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:File 7</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:File 7</p>" // no comma here
        },
        { // Question 4
            "q": "In counter element, the word one is for _______ ",
            "a": [
                { "option": "Preset value", "correct": true },
                { "option": "Accumulated value", "correct":false },
                { "option": "Status bit", "correct": false },
                { "option": "None", "correct": false }	
		
		
               // {"option": "Pressure gauge reading of tank 1 and that of tank 2 are same",      "correct": true}
                //{"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Preset value</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans is:Preset value</p>"  // no comma here
        },
               { // Question 5 - Multiple Choice, Multiple True Answers, Select Any
                   "q": "In default counter file, how to address the counter’s 12 preset value? ",
                   "a": [
                { "option": "C5:12.PRE", "correct": true },
                { "option": "C5:12/PRE", "correct": false },
                { "option": "C5:12-PRE", "correct": false },
               { "option": "All", "correct": false} // no comma here
            ],
                   "select_any": true,
                   "correct": "<p><span>Right answer</span> Ans:C5:12.PRE</p>",
                   "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:C5:12.PRE</p>" // no comma here
               },
        { // Question 6 - Multiple Choice, Multiple True Answers, Select All
            "q": "In word zero of the counter element, bit 10 represents  ",
            "a": [
                { "option": "UN bit", "correct": false },
                { "option": "UA bit", "correct": true },
                { "option": "OV bit", "correct": false },
                { "option": "None", "correct": false }
            // {"option": "5",          "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:UA bit</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:UA bit</p>" // no comma here
        },
        { // Question 7
            "q": "In word zero of the counter element, bit 12 represents  ",
            "a": [
                { "option": "DN bit", "correct": false },
                { "option": "OV bit", "correct": true },
		 { "option": "CD bit", "correct": false },
		 { "option": "CU bit", "correct": false }


            // {"option": "Pressure gauge reading of tank 1 and that of tank 2 are same",      "correct": true}
            //{"option": "1291",   "correct": false} // no comma here
            ],
		 "correct": "<p><span>Right answer</span> Ans:OV bit</p>",
		 "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans is:OV bit</p>"  // no comma here
        },
              { // Question 8 - Multiple Choice, Multiple True Answers, Select All
                  "q": "High-speed counter is only enabled by the rung on which it resides. The high speed counter instruction does not count rung transitions. These transitions are counted from the input screw terminal to which it is programmed.",
                  "a": [
                { "option": "The above statement is true", "correct": true },
                { "option": "The above statement is false", "correct": false }
                  // {"option": "5",          "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:The above statement is true</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:The above statement is true</p>" // no comma here
              },
                    { // Question 9
                        "q": "Each counter file can have up to _______ counter element .",
            "a": [
                { "option": "512", "correct": false },
                { "option": "128", "correct": false },
		 { "option": "756", "correct": false },
                { "option": "256", "correct": true } 


// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:256</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:256</p>"  // no comma here
        } // no comma here
    ]
};
