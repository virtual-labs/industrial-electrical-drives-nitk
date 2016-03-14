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
            "q": "<br><img src=\"../images/PLC/SE/1.gif\"\height=450 width=600/>",
            "a": [
                { "option": "<br><img src=\"../images/PLC/SE/1a.gif\"\height=100 width=500/>", "correct": true },
                { "option": "<br><img src=\"../images/PLC/SE/1b.gif\"\height=100 width=500/>", "correct": false },
                { "option": "<br><img src=\"../images/PLC/SE/1c.gif\"\height=100 width=500/>", "correct": false },
                { "option": "<br><img src=\"../images/PLC/SE/1d.gif\"\height=100 width=500/>", "correct": false }
                // {"option": "Pitot tube ",      "correct": false}		// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:<br><img src=\"../images/PLC/SE/1a.gif\"\height=100 width=500/></p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:<br><img src=\"../images/PLC/SE/1a.gif\"\height=100 width=500/></p>" // no comma here
        },
           { // Question 2 - Multiple Choice, Single True Answer
               "q": "<br><img src=\"../images/PLC/SE/2.gif\"\height=450 width=600/>",
               "a": [
                { "option": "<br><img src=\"../images/PLC/SE/2a.gif\"\height=100 width=500/>", "correct": false },
                { "option": "<br><img src=\"../images/PLC/SE/2b.gif\"\height=100 width=500/>", "correct": true },
                { "option": "<br><img src=\"../images/PLC/SE/2c.gif\"\height=100 width=500/>", "correct": false },
                { "option": "<br><img src=\"../images/PLC/SE/2d.gif\"\height=100 width=500/>", "correct": false }
               // {"option": "Pitot tube ",      "correct": false}		// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:<br><img src=\"../images/PLC/SE/2b.gif\"\height=100 width=500/></p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:<br><img src=\"../images/PLC/SE/2b.gif\"\height=100 width=500/></p>" // no comma here
           },
              { // Question 3 - Multiple Choice, Single True Answer
                  "q": "<br><img src=\"../images/PLC/SE/3.gif\"\height=450 width=600/>",
                  "a": [
                { "option": "<br><img src=\"../images/PLC/SE/3a.gif\"\height=100 width=500/>", "correct": false},
                { "option": "<br><img src=\"../images/PLC/SE/3b.gif\"\height=100 width=500/>", "correct": false },
                { "option": "<br><img src=\"../images/PLC/SE/3c.gif\"\height=100 width=500/>", "correct": false },
                { "option": "<br><img src=\"../images/PLC/SE/3d.gif\"\height=100 width=500/>", "correct": true}
                  // {"option": "Pitot tube ",      "correct": false}		// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:<br><img src=\"../images/PLC/SE/3d.gif\"\height=100 width=500/></p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:<br><img src=\"../images/PLC/SE/3d.gif\"\height=100 width=500/></p>" // no comma here
              },

                 { // Question 4 - Multiple Choice, Single True Answer
                     "q": "<br><img src=\"../images/PLC/SE/4.gif\"\height=450 width=600/>",
                     "a": [
                { "option": "<br><img src=\"../images/PLC/SE/4a.gif\"\height=100 width=500/>", "correct": true },
                { "option": "<br><img src=\"../images/PLC/SE/4b.gif\"\height=100 width=500/>", "correct": false },
                { "option": "<br><img src=\"../images/PLC/SE/4c.gif\"\height=100 width=500/>", "correct": false },
                { "option": "<br><img src=\"../images/PLC/SE/4d.gif\"\height=100 width=500/>", "correct": false }
                     // {"option": "Pitot tube ",      "correct": false}		// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:<br><img src=\"../images/PLC/SE/4a.gif\"\height=100 width=500/></p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:<br><img src=\"../images/PLC/SE/4a.gif\"\height=100 width=500/></p>" // no comma here
                 },
                    { // Question 5 - Multiple Choice, Single True Answer
                        "q": "<br><img src=\"../images/PLC/SE/5.gif\"\height=450 width=600/>",
                        "a": [
                { "option": "<br><img src=\"../images/PLC/SE/5a.gif\"\height=100 width=500/>", "correct": false },
                { "option": "<br><img src=\"../images/PLC/SE/5b.gif\"\height=100 width=500/>", "correct": false },
                { "option": "<br><img src=\"../images/PLC/SE/5c.gif\"\height=100 width=500/>", "correct": false },
                { "option": "<br><img src=\"../images/PLC/SE/5d.gif\"\height=100 width=500/>", "correct": true}
                        // {"option": "Pitot tube ",      "correct": false}		// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:<br><img src=\"../images/PLC/SE/5d.gif\"\height=100 width=500/></p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:<br><img src=\"../images/PLC/SE/5d.gif\"\height=100 width=500/></p>" // no comma here
                    },
                       { // Question 6 - Multiple Choice, Single True Answer
                           "q": "<br><img src=\"../images/PLC/SE/6.gif\"\height=450 width=600/>",
                           "a": [
                { "option": "<br><img src=\"../images/PLC/SE/6a.gif\"\height=100 width=500/>", "correct": false },
                { "option": "<br><img src=\"../images/PLC/SE/6b.gif\"\height=100 width=500/>", "correct": true },
                { "option": "<br><img src=\"../images/PLC/SE/6c.gif\"\height=100 width=500/>", "correct": false },
                { "option": "<br><img src=\"../images/PLC/SE/6d.gif\"\height=100 width=500/>", "correct": false }
                           // {"option": "Pitot tube ",      "correct": false}		// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:<br><img src=\"../images/PLC/SE/6b.gif\"\height=100 width=500/></p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:<br><img src=\"../images/PLC/SE/6b.gif\"\height=100 width=500/></p>" // no comma here
                       },

                          { // Question 7 - Multiple Choice, Single True Answer
                              "q": "<br><img src=\"../images/PLC/SE/7.gif\"\height=450 width=600/>",
                              "a": [
                { "option": "<br><img src=\"../images/PLC/SE/7a.gif\"\height=100 width=500/>", "correct": true },
                { "option": "<br><img src=\"../images/PLC/SE/7b.gif\"\height=100 width=500/>", "correct": false },
                { "option": "<br><img src=\"../images/PLC/SE/7c.gif\"\height=100 width=500/>", "correct": false },
                { "option": "<br><img src=\"../images/PLC/SE/7d.gif\"\height=100 width=500/>", "correct": false }
                              // {"option": "Pitot tube ",      "correct": false}		// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:<br><img src=\"../images/PLC/SE/7a.gif\"\height=100 width=500/></p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:<br><img src=\"../images/PLC/SE/7a.gif\"\height=100 width=500/></p>" // no comma here
                          },
               { // Question 8
                   "q": "<br><img src=\"../images/PLC/SE/8.gif\"\height=450 width=600/>",
                   "a": [
                { "option": "<br><img src=\"../images/PLC/SE/8a.gif\"\height=100 width=500/>", "correct": false },
                { "option": "<br><img src=\"../images/PLC/SE/8b.gif\"\height=100 width=500/>", "correct": false },
                { "option": "<br><img src=\"../images/PLC/SE/8c.gif\"\height=100 width=500/>", "correct": false },
                { "option": "<br><img src=\"../images/PLC/SE/8d.gif\"\height=100 width=500/>", "correct": true } 


// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:<img src=\"../images/PLC/SE/8d.gif\"\height=100 width=500/></p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:<img src=\"../images/PLC/SE/8d.gif\"\height=100 width=500/></p>"  // no comma here
        } // no comma here
    ]
};
