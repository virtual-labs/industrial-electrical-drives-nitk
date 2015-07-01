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
            "q": "Consider the following PLC Ladder rung <br><img src=\"../images/LADDER/SE/1.jpg\"\height=150 width=400/><br>For the following input status file bit condition shown below<br><img src=\"../images/LADDER/SE/1a.jpg\"\height=100 width=400/><br>The output O1",
            "a": [
                { "option": "Will be energized ", "correct": false },
                { "option": "Will not be energized", "correct": true }
               // {"option": "Pitot tube ",      "correct": false}		// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Will not be energized</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Will not be energized</p>" // no comma here
        },
           { // Question 2 - Multiple Choice, Single True Answer
               "q": "Consider the following PLC Ladder rung <br><img src=\"../images/LADDER/SE/2.jpg\"\height=150 width=400/><br>For the following input status file bit condition shown below<br><img src=\"../images/LADDER/SE/2a.jpg\"\height=100 width=400/><br>The output O1",
               "a": [
                          { "option": "Will be energized ", "correct": false },
                { "option": "Will not be energized", "correct": true }
               // {"option": "Pitot tube ",      "correct": false}		// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Will not be energized</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Will not be energized</p>" // no comma here
           },
              { // Question 3 - Multiple Choice, Single True Answer
                  "q": "Consider the following PLC Ladder rung <br><img src=\"../images/LADDER/SE/3.jpg\"\height=150 width=400/><br>For the following input status file bit condition shown below<br><img src=\"../images/LADDER/SE/3a.jpg\"\height=100 width=400/><br>The output O1",
                  "a": [
                { "option": "Will be energized ", "correct": true },
                { "option": "Will not be energized", "correct": false }
                  // {"option": "Pitot tube ",      "correct": false}		// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Will be energized</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Will be energized</p>" // no comma here
              },
                 { // Question 4 - Multiple Choice, Single True Answer
                     "q": "Consider the following PLC Ladder rung <br><img src=\"../images/LADDER/SE/4.jpg\"\height=150 width=400/><br>For the following input status file bit condition shown below<br><img src=\"../images/LADDER/SE/4a.jpg\"\height=100 width=400/><br>The output O1",
                     "a": [
                { "option": "Will be energized ", "correct": true },
                { "option": "Will not be energized", "correct": false }
                     // {"option": "Pitot tube ",      "correct": false}		// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Will be energized</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Will be energized</p>" // no comma here
                 },
                    { // Question 5 - Multiple Choice, Single True Answer
                        "q": "Consider the following PLC Ladder rung <br><img src=\"../images/LADDER/SE/5.jpg\"\height=150 width=400/><br>For the following input status file bit condition shown below<br><img src=\"../images/LADDER/SE/5a.jpg\"\height=100 width=400/><br>The output O1",
                        "a": [
                { "option": "Will be energized ", "correct": true },
                { "option": "Will not be energized", "correct": false }
                        // {"option": "Pitot tube ",      "correct": false}		// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Will be energized</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Will be energized</p>" // no comma here
                    },
                       { // Question 6 - Multiple Choice, Single True Answer
                           "q": "Consider the following PLC Ladder rung <br><img src=\"../images/LADDER/SE/6.jpg\"\height=150 width=400/><br>For the following input status file bit condition shown below<br><img src=\"../images/LADDER/SE/6a.jpg\"\height=100 width=400/><br>The output O1",
                           "a": [
                { "option": "Will be energized ", "correct": false },
                { "option": "Will not be energized", "correct": true }
                           // {"option": "Pitot tube ",      "correct": false}		// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Will not be energized</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Will not be energized</p>" // no comma here
                       },
                          { // Question 7 - Multiple Choice, Single True Answer
                              "q": "Consider the following PLC Ladder rung <br><img src=\"../images/LADDER/SE/7.jpg\"\height=150 width=400/><br>For the following input status file bit condition shown below<br><img src=\"../images/LADDER/SE/7a.jpg\"\height=100 width=400/><br>The output O1",
                              "a": [
                { "option": "Will be energized ", "correct": true },
                { "option": "Will not be energized", "correct": false }
                              // {"option": "Pitot tube ",      "correct": false}		// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Will be energized</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Will be energized</p>" // no comma here
                          },
                   
       { // Question 8
           "q": "Consider the following PLC Ladder rung <br><img src=\"../images/LADDER/SE/8.jpg\"\height=150 width=400/><br>For the following input status file bit condition shown below<br><img src=\"../images/LADDER/SE/8a.jpg\"\height=100 width=400/><br>The output O1",
           "a": [
                { "option": "Will be energized ", "correct": false },
                { "option": "Will not be energized", "correct": true }
           // {"option": "Pitot tube ",      "correct": false}		// no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Will not be energized</p>",
                "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Will not be energized</p>" // no comma here
        } // no comma here
    ]
};
