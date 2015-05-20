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
            "q": "<br><img src=\"../images/PLC/SE/1.jpg\"\height=450 width=600/>",
            "a": [
                { "option": "<br><img src=\"../images/PLC/SE/1a.jpg\"\height=100 width=500/>", "correct": true },
                { "option": "<br><img src=\"../images/PLC/SE/1b.jpg\"\height=100 width=500/>", "correct": false },
                { "option": "<br><img src=\"../images/PLC/SE/1c.jpg\"\height=100 width=500/>", "correct": false },
                { "option": "<br><img src=\"../images/PLC/SE/1d.jpg\"\height=100 width=500/>", "correct": false }
                // {"option": "Pitot tube ",      "correct": false}		// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:<br><img src=\"../images/PLC/SE/1a.jpg\"\height=100 width=500/></p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:<br><img src=\"../images/PLC/SE/1a.jpg\"\height=100 width=500/></p>" // no comma here
        },
           { // Question 2 - Multiple Choice, Single True Answer
               "q": "<br><img src=\"../images/PLC/SE/2.jpg\"\height=450 width=600/>",
               "a": [
                { "option": "<br><img src=\"../images/PLC/SE/2a.jpg\"\height=100 width=500/>", "correct": false },
                { "option": "<br><img src=\"../images/PLC/SE/2b.jpg\"\height=100 width=500/>", "correct": true },
                { "option": "<br><img src=\"../images/PLC/SE/2c.jpg\"\height=100 width=500/>", "correct": false },
                { "option": "<br><img src=\"../images/PLC/SE/2d.jpg\"\height=100 width=500/>", "correct": false }
               // {"option": "Pitot tube ",      "correct": false}		// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:<br><img src=\"../images/PLC/SE/2b.jpg\"\height=100 width=500/></p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:<br><img src=\"../images/PLC/SE/2b.jpg\"\height=100 width=500/></p>" // no comma here
           },
              { // Question 3 - Multiple Choice, Single True Answer
                  "q": "<br><img src=\"../images/PLC/SE/3.jpg\"\height=450 width=600/>",
                  "a": [
                { "option": "<br><img src=\"../images/PLC/SE/3a.jpg\"\height=100 width=500/>", "correct": false},
                { "option": "<br><img src=\"../images/PLC/SE/3b.jpg\"\height=100 width=500/>", "correct": false },
                { "option": "<br><img src=\"../images/PLC/SE/3c.jpg\"\height=100 width=500/>", "correct": false },
                { "option": "<br><img src=\"../images/PLC/SE/3d.jpg\"\height=100 width=500/>", "correct": true}
                  // {"option": "Pitot tube ",      "correct": false}		// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:<br><img src=\"../images/PLC/SE/3d.jpg\"\height=100 width=500/></p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:<br><img src=\"../images/PLC/SE/3d.jpg\"\height=100 width=500/></p>" // no comma here
              },

                 { // Question 4 - Multiple Choice, Single True Answer
                     "q": "<br><img src=\"../images/PLC/SE/4.jpg\"\height=450 width=600/>",
                     "a": [
                { "option": "<br><img src=\"../images/PLC/SE/4a.jpg\"\height=100 width=500/>", "correct": true },
                { "option": "<br><img src=\"../images/PLC/SE/4b.jpg\"\height=100 width=500/>", "correct": false },
                { "option": "<br><img src=\"../images/PLC/SE/4c.jpg\"\height=100 width=500/>", "correct": false },
                { "option": "<br><img src=\"../images/PLC/SE/4d.jpg\"\height=100 width=500/>", "correct": false }
                     // {"option": "Pitot tube ",      "correct": false}		// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:<br><img src=\"../images/PLC/SE/4a.jpg\"\height=100 width=500/></p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:<br><img src=\"../images/PLC/SE/4a.jpg\"\height=100 width=500/></p>" // no comma here
                 },
                    { // Question 5 - Multiple Choice, Single True Answer
                        "q": "<br><img src=\"../images/PLC/SE/5.jpg\"\height=450 width=600/>",
                        "a": [
                { "option": "<br><img src=\"../images/PLC/SE/5a.jpg\"\height=100 width=500/>", "correct": false },
                { "option": "<br><img src=\"../images/PLC/SE/5b.jpg\"\height=100 width=500/>", "correct": false },
                { "option": "<br><img src=\"../images/PLC/SE/5c.jpg\"\height=100 width=500/>", "correct": false },
                { "option": "<br><img src=\"../images/PLC/SE/5d.jpg\"\height=100 width=500/>", "correct": true}
                        // {"option": "Pitot tube ",      "correct": false}		// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:<br><img src=\"../images/PLC/SE/5d.jpg\"\height=100 width=500/></p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:<br><img src=\"../images/PLC/SE/5d.jpg\"\height=100 width=500/></p>" // no comma here
                    },
                       { // Question 6 - Multiple Choice, Single True Answer
                           "q": "<br><img src=\"../images/PLC/SE/6.jpg\"\height=450 width=600/>",
                           "a": [
                { "option": "<br><img src=\"../images/PLC/SE/6a.jpg\"\height=100 width=500/>", "correct": false },
                { "option": "<br><img src=\"../images/PLC/SE/6b.jpg\"\height=100 width=500/>", "correct": true },
                { "option": "<br><img src=\"../images/PLC/SE/6c.jpg\"\height=100 width=500/>", "correct": false },
                { "option": "<br><img src=\"../images/PLC/SE/6d.jpg\"\height=100 width=500/>", "correct": false }
                           // {"option": "Pitot tube ",      "correct": false}		// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:<br><img src=\"../images/PLC/SE/6b.jpg\"\height=100 width=500/></p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:<br><img src=\"../images/PLC/SE/6b.jpg\"\height=100 width=500/></p>" // no comma here
                       },

                          { // Question 7 - Multiple Choice, Single True Answer
                              "q": "<br><img src=\"../images/PLC/SE/7.jpg\"\height=450 width=600/>",
                              "a": [
                { "option": "<br><img src=\"../images/PLC/SE/7a.jpg\"\height=100 width=500/>", "correct": true },
                { "option": "<br><img src=\"../images/PLC/SE/7b.jpg\"\height=100 width=500/>", "correct": false },
                { "option": "<br><img src=\"../images/PLC/SE/7c.jpg\"\height=100 width=500/>", "correct": false },
                { "option": "<br><img src=\"../images/PLC/SE/7d.jpg\"\height=100 width=500/>", "correct": false }
                              // {"option": "Pitot tube ",      "correct": false}		// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:<br><img src=\"../images/PLC/SE/7a.jpg\"\height=100 width=500/></p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:<br><img src=\"../images/PLC/SE/7a.jpg\"\height=100 width=500/></p>" // no comma here
                          },
               { // Question 8
                   "q": "<br><img src=\"../images/PLC/SE/8.jpg\"\height=450 width=600/>",
                   "a": [
                { "option": "<br><img src=\"../images/PLC/SE/8a.jpg\"\height=100 width=500/>", "correct": false },
                { "option": "<br><img src=\"../images/PLC/SE/8b.jpg\"\height=100 width=500/>", "correct": false },
                { "option": "<br><img src=\"../images/PLC/SE/8c.jpg\"\height=100 width=500/>", "correct": false },
                { "option": "<br><img src=\"../images/PLC/SE/8d.jpg\"\height=100 width=500/>", "correct": true } 


// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:<img src=\"../images/PLC/SE/8d.jpg\"\height=100 width=500/></p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:<img src=\"../images/PLC/SE/8d.jpg\"\height=100 width=500/></p>"  // no comma here
        } // no comma here
    ]
};
