'use strict';

/* Projects */
angular.module('navignaw.projects', [])

    .value('projects', [

    	/* Webapps */
    	{
            name: "CMU C#",
            id: "csharp",
            date: "Summer 2013",
            url: "https://www.cmucsharp.com",
            description: "Interactive website for college a cappella group.",
            note: "Technologies: Ruby on Rails, CoffeeScript",
            screenshots: [],
            embed: false,
            type: "web"
        },
        {
            name: "Surfboard",
            id: "surfboard",
            date: "Summer 2013",
            url: null,
            description: "Digital wallboard webapp for tracking JIRA stories and bugs. Features NoSQL database, Java server to send and retrieve data via RESTful API, as well as a customizable front-end service with AngularJS to display issues.",
			note: "Additional feature: coded to accept Leap Motion gestures as well as keyboard/mouse input!",
            screenshots: [],
            embed: false,
            type: "web"
        },
        {
            name: "Hack 'n' Bash",
            id: "hacknbash",
            date: "Feb 2014",
            url: "https://hacknbash.herokuapp.com",
            description: "Explore a remote directory as a robot in this cute gamified FTP webapp client. Features the ability to 'rm' and 'cat' (remove and print) files, as well as change directories.",
            note: "Developed with Flask and CreateJS for a 24-hour hackathon, TartanHacks; winner of Capital One sponsor prize.",
            screenshots: [],
            embed: false,
            type: "web"
        },
        {
            name: "navignaw",
            id: "navignaw",
            date: "May 2014",
            url: "https://github.com/navignaw/navignaw",
            description: "Online software and game development portfolio, i.e. this site! Open-sourced on github (link above).",
            note: "Built with Flask and AngularJS.",
            screenshots: [],
            embed: false,
            type: "web"
        },

        /* Mobile Apps */
        {
            name: "nommit",
            id: "nommit",
            date: "Oct 2013",
            url: "http://hackmit.challengepost.com/submissions/17868-nommit",
            description: "Native iOS app for crowdsourced social food delivery. Features API from Firebase for storing and displaying real-time order data, Google Maps for tracking customers and couriers, Locu for querying a list of best nearby restaurants and menus, Venmo for order payments and tips, and Twilio for text notifications.",
            note: "Built during a 24-hour hackathon, HackMIT; winner of Venmo's Makes Life So Easy award.",
            screenshots: [],
            embed: false,
            type: "mobile"
        },
        {
            name: "Spontaneity",
            id: "spontaneity",
            date: "Jan 2014",
            url: "http://mhackswinter2014.challengepost.com/submissions/20243-spontaneity",
            description: "The spontaneous hangout app, Spontaneity suggests nine categories of activities to participate in, including nearby parties, exercise spots, and even baking recipes from Pinterest. Through the creation of Facebook events to text-message notifications to nearby users, Spontaneity aims to liven up an otherwise boring day.",
			note: "Developed in 36 hours during MHacks; winner of Yahoo's Best Mobile App.",
            screenshots: [],
            embed: false,
            type: "mobile"
        },
        {
            name: "EduGames",
            id: "edugames",
            date: "Feb 2014",
            url: "http://pennapps2014s.challengepost.com/submissions/20856-edugames-create-educational-games-with-0-programming-knowledge",
            description: "EduGames allows teachers to create engaging interactive games tailored to their curriculum with no programming knowledge. Features a webapp where teachers can choose from existing game templates and fill in questions, as well as a native iPad app where students can log in and play customized games created by their teachers.",
            note: "Coded with love during PennApps (Valentines' Edition); winner of IndieGogo prize.",
            screenshots: [],
            embed: false,
            type: "mobile"
        },

        /* Games */
        {
            name: "Omnisia",
            id: "omnisia",
            date: "Jan 2008",
            url: "http://www.hbgames.org/forums/viewtopic.php?f=77&t=39133",
            description: "My first project features a time-traveling puzzle RPG built in RPG Maker XP.",
            note: "",
            screenshots: [],
            embed: false,
            type: "game"
        },
        {
            name: "Scavenger",
            id: "scavenger",
            date: "Summer 2011 - present",
            url: "http://www.hbgames.org/forums/viewtopic.php?p=852052",
            description: "Scavenger is a 2D puzzle-action-adventure game, a la the Legend of Zelda. Explore a vast pixel-perfect world equipped with tools and the unique ability to visualize the past.",
            note: "Created in RPG Maker XP and coded in Ruby. Scavenger is currently in development!",
            screenshots: [],
            embed: false,
            type: "game"
        },
        {
            name: "NEWT",
            id: "newt",
            date: "Dec 2012",
            url: "http://www.hbgames.org/forums/viewtopic.php?f=299&t=76684",
            description: "Explore a morbid, alien world as a small, innocent NEWT. In the empty labs of the FACILITY, escaping is not as simple as finding the key to the lock. With lasers, keypads, and fingerprint scanners, to say the least, there will be countless challenges facing your freedom-seeking amphibian. Can you creatively solve your way through five difficult trials, realize your role in the sinister plot of a few evil-genius human scientists, and escape?",
			note: "Submission for the HBGames.org 5-Year Anniversary Contest; built in Adobe Flash and ActionScript.",
            screenshots: [],
            embed: false,
            type: "game"
        },
        {
            name: "Retrograde",
            id: "retrograde",
            date: "Fall-Spring 2013",
            url: "http://www.gamecreation.org/game/retrograde",
            description: "A reverse platformer that explores the return of a hero after his rise to power.",
            note: "Created with Flixel, for Adobe Flash.",
            screenshots: [],
            embed: false,
            type: "game"
        },
        {
            name: "Illuminate",
            id: "illuminate",
            date: "Jan 2014",
            url: "http://globalgamejam.org/2014/games/illuminate",
            description: "Explore a changing world in this experimental 3D puzzle-adventure, one which revolves around the perception of one's surroundings.",
			note: "Developed in Unity and C# for the 2014 Global Game Jam.",
            screenshots: [],
            embed: false,
            type: "game"
        }

    ]);
;