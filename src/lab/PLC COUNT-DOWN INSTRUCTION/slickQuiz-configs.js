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
            "q": "The current count of the counter is called as _________ . ",
            "a": [
                { "option": "Preset value", "correct": false },
                       { "option": "Accumulated value", "correct": true }
               // {"option": "Pitot tube ",      "correct": false}		// no comma here
            ],
                       "correct": "<p><span>Right answer</span> Ans:Accumulated value</p>",
                       "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Accumulated value</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
             "q": "Each counter consists of __________ and is known as __________ . ",
            "a": [
                { "option": "Two 16- bit words and counter elements", "correct": false },
                { "option": "Three 16- bit words and counter elements", "correct": true },
                { "option": "Four 16- bits words and counter elements", "correct": false },
               { "option": "Three 8-bit byte and counter elements", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span> Ans:Three 16- bit words and counter elements</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Three 16- bit words and counter elements</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "In counter element, the word zero is for _________ .",
            "a": [
                { "option": "Preset value", "correct": false },
                { "option": "Accumulated value", "correct": false },
                { "option": "Status bit", "correct": true },
                { "option": "None", "correct": false }		
               // {"option": "5",          "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Status bit</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Status bit</p>" // no comma here
        },
        { // Question 4
            "q": "In counter element, the word two is for _______ ",
            "a": [
                { "option": "Preset value", "correct": false },
                { "option": "Accumulated value", "correct": true },
                { "option": "Status bit", "correct": false },
                { "option": "None", "correct": false }	
		
		
               // {"option": "Pressure gauge reading of tank 1 and that of tank 2 are same",      "correct": true}
                //{"option": "1291",   "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Accumulated value</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans is:Accumulated value</p>"  // no comma here
        },
               { // Question 5 - Multiple Choice, Multiple True Answers, Select Any
                   "q": "In default counter file, how to address the counter’s 12 accumulated value? ",
                   "a": [
                { "option": "C5:12/ACC", "correct": true },
                { "option": "C5:ACC/12", "correct": false },
                { "option": "C5:12.ACC", "correct": false },
               { "option": "C5:12-ACC", "correct": false} // no comma here
            ],
                   "select_any": true,
                   "correct": "<p><span>Right answer</span> Ans:C5:12/ACC</p>",
                   "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:C5:12/ACC</p>" // no comma here
               },
        { // Question 6 - Multiple Choice, Multiple True Answers, Select All
            "q": "In word zero of the counter element, bit 11 represents ________ ",
            "a": [
                { "option": "UN bit", "correct": true },
                { "option": "UA bit", "correct": false },
                { "option": "OV bit", "correct": false },
                { "option": "None", "correct": false }
            // {"option": "5",          "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:UN bit</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:UN bit</p>" // no comma here
        },
        { // Question 7
            "q": "In word zero of the counter element, bit 13 represents _________  ",
            "a": [
                { "option": "DN bit", "correct": true },
                { "option": "OV bit", "correct": false },
		 { "option": "CD bit", "correct": false },
		 { "option": "CU bit", "correct": false }


            // {"option": "Pressure gauge reading of tank 1 and that of tank 2 are same",      "correct": true}
            //{"option": "1291",   "correct": false} // no comma here
            ],
		 "correct": "<p><span>Right answer</span> Ans:DN bit</p>",
		 "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans is:DN bit</p>"  // no comma here
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
