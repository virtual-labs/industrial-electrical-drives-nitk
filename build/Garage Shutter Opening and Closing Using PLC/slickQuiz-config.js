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
            "q": "If the size of the gate is 9feet*9feet and it has to be opened in exact 12 sec, and diameter of the shaft used is 3cm. Calculate the speed of rotation of the shaft.",
            "a": [
                {"option": "450 rpm",      "correct": true},
				{"option": "2400rpm",      "correct": false},
				{"option": "900 rpm",      "correct": false},
                {"option": "1600rpm",     "correct": false}
            ],
            "correct": "<p><span>Right answer</span> Ans:450 rpm</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:450 rpm</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "_______ is a kind of switch, which is ________ or ________ the moment we press or depress it.",
            "a": [
                {"option": "LED, ON, OFF",              "correct": false},
                {"option": "Push button, activated, deactivated",   "correct": true},
                { "option": "Both LED, ON, OFF and Push button, activated, deactivated", "correct": false },
				{"option": "None",               "correct": false}
                //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],
         
            "correct": "<p><span>Right answer</span> Ans:Push button, activated, deactivated</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Push button, activated, deactivated</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Limit switches are commonly used for",
            "a": [
                {"option": "Turning OFF of the light, when the refrigerator door is closed.",           "correct": false},
                {"option": "Switching ON of car's dome lights when we open the door",                  "correct": false},
                {"option": "Stopping of the washing machine when load becomes unbalanced",  "correct": false},
                {"option": "All",          "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span> Ans:All</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>" // no comma here
        },
        { // Question 4
            "q": "___________ is a device, that uses __________ and __________  to provide speed and torque conversions from a rotating power source to another device.",
            "a": [
                {"option": "Gear box, lever, pulley",    "correct": false},
                {"option": "Gear box, shaft, pulley",     "correct": false},
				{"option": "Gear box, gear, gear trains",     "correct": false},
                {"option": "All",      "correct": true}
               // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:All</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:All</p>"  // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select Any
            "q": "If the mass of the garage shutter is 500kg, and the diameter of the shaft used to pull is 9.6cm. Calculate the torque required to pull the garage shutter? Assume g=10m/s2",
            "a": [
                {"option": "180N-m",               "correct": false},
                {"option": "240N-m",   "correct": true},
                {"option": "270N-m",               "correct": false},
				{"option": "300N-m",               "correct": false}
                //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],
         
            "correct": "<p><span>Right answer</span> Ans:240N-m</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:240N-m</p>" // no comma here
        },
        { // Question 6 - Multiple Choice, Multiple True Answers, Select All
            "q": "A proximity switch can be",
            "a": [
                {"option": "Magnetic",           "correct": false},
                {"option": "Infrared",                  "correct": false},
                { "option": "Both Magnetic and infrared", "correct": true },
                {"option": "None",          "correct": false} // no comma here
            ],
                "correct": "<p><span>Right answer</span> Ans:Both Magnetic and infrared</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Both (a) and (b)</p>" // no comma here
        },
        { // Question 7
            "q": "A _________  is a device used to connect two __________ together at their ends for the purpose of transmitting power. ",
            "a": [
                {"option": "Motor, gear",    "correct": false},
                {"option": "Gear train, shaft",     "correct": false},
                {"option": "Coupling, shaft",      "correct": true},
				{"option": "None",     "correct": false}
               // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:Coupling, shaft</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Coupling, shaft</p>"  // no comma here
        },
		{ // Question 8 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The difference between normal limit switch and proximity switch is",
            "a": [
                {"option": "Both are same",               "correct": false},
                {"option": "Limit switch is electro mechanical",   "correct": false},
                {"option": "Limit switch is electro mechanical device, but proximity switch is not electromechanical device",               "correct": true},
				{"option": "None",               "correct": false}
                //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],
         
            "correct": "<p><span>Right answer</span> Ans:Limit switch is electro mechanical device, but proximity switch is not electromechanical device</p>",
            "incorrect": "<p><span>wrong</span>Limit switch is electro mechanical device, but proximity switch is not electromechanical device</p>" // no comma here
        },
        { // Question 9 - Multiple Choice, Multiple True Answers, Select All
            "q": "If the size of the gate is 12feet*12feet and it has to be opened in exact 10 sec, and diameter of the shaft used is 2.4cm. Calculate the speed of rotation of the shaft.",
            "a": [
                {"option": "2100 rpm",           "correct": false},
                {"option": "2400rpm",                  "correct": false},
                {"option": "900 rpm",  "correct": true},
                {"option": "1600rpm",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span> Ans:900 rpm</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:900 rpm</p>" // no comma here
        },
        { // Question 10
            "q": "If the diameter of the shaft used to pull the garage shutter is 2.4cm and the size of the garage shutter is 12feet*12 feet, rotation of the shaft is 500rpm. Then calculate the time required by the garage shutter to open completely from its completely closed condition.",
            "a": [
                {"option": "18 sec",    "correct": true},
                {"option": "9 sec",     "correct": false},
				{"option": "12 sec",     "correct": false},
                {"option": "7.2 sec",      "correct": false}
               // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:18 sec</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:18 sec</p>"  // no comma here
        },
		{ // Question 11 - Multiple Choice, Multiple True Answers, Select Any
            "q": "If the mass of the garage shutter is 300kg, and the diameter of the shaft used to pull is 2.4cm. Calculate the torque required to pull the garage shutter? Assume g=10m/s2",
            "a": [
                {"option": "30N-m",               "correct": false},
                {"option": "36N-m",   "correct": true},
                {"option": "42N-m",               "correct": false},
				{"option": "48N-m",               "correct": false}
                //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],
         
            "correct": "<p><span>Right answer</span> Ans:36N-m</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:36N-m</p>" // no comma here
        },
       		{ // Question 12 - Multiple Choice, Multiple True Answers, Select Any
            "q": "<br><img src=\"../images/garage/q1.jpg\"\height=250 width=250/>The above figure represents a micro switch (limit switch), it has one normally open connection (N.O) and one normally closed connection (N.C). The connection between terminal1 and terminal2 is ________ and connection between terminal1 and terminal3 is _________.",
            "a": [
                {"option": "Normally open, normally closed",               "correct": true},
                {"option": "Normally closed, normally open",   "correct": false},
                {"option": "Normally closed, normally closed",               "correct": false},
				{"option": "Normally open, normally open",               "correct": false}
                //{"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],
         
            "correct": "<p><span>Right answer</span> Ans:Normally open, normally closed</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:Normally open, normally closed</p>" // no comma here
        },

        { //	   Question 13
            "q": "If the diameter of the shaft used to pull the garage shutter is 9.6cm and the size of the garage shutter is 15feet*12 feet, rotation of the shaft is 1000rpm. Then calculate the time required by the garage shutter to open completely from its completely closed condition.",
            "a": [
                {"option": "18 sec",    "correct": false},
                {"option": "21 sec",     "correct": false},  
				{"option": "2.8 sec",     "correct": true},
                {"option": "7.2 sec",      "correct": false}
               // {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:2.8 sec</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:2.8 sec</p>"  // no comma here
        },
	
        { // Question 14
            "q": "If the motor used for garage shutter opening and closing produces a torque of 7N-m and the torque required to pull the garage shutter is 14N-m.Calculate the required gear ratio.",
            "a": [
                {"option": "8:1",    "correct": false},
                {"option": "4:1",     "correct": false},
		 {"option": "2:1",  "correct": true},
                {"option": "1:1",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:2:1</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:2:1</p>"  // no comma here
        } // no comma here
    ]
};
