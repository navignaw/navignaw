'use strict';

/* Projects */
angular.module('navignaw.projects', [])

    .value('projects', [

    	/* Webapps */
    	{
            name: "CMU C#",
            id: "cmucsharp",
            date: "Summer 2013",
            datetime: new Date(2013, 7, 1),
            url: "https://www.cmucsharp.com",
            description: "Interactive website for college a cappella group.",
            note: "Technologies: Ruby on Rails, CoffeeScript",
            banner: "static/assets/cmucsharp/banner.png",
            screenshots: [
                {url: "static/assets/cmucsharp/logo.png", caption: "Logo"}
            ],
            embed: null,
            type: "web"
        },
        {
            name: "Surfboard",
            id: "surfboard",
            date: "Summer 2013",
            datetime: new Date(2013, 6, 1),
            url: "http://prezi.com/pcmsvy2rj4e2/project-surfboard/",
            description: "Digital wallboard webapp for tracking JIRA stories and bugs. Features NoSQL database, Java server to send and retrieve data via RESTful API, as well as a customizable front-end service with AngularJS to display issues.",
			note: "Additional feature: coded to accept Leap Motion gestures as well as keyboard/mouse input!",
            banner: "static/assets/surfboard/banner.png",
            screenshots: [
                {url: "static/assets/surfboard/surfboard.png", caption: "Surfboard"}
            ],
            embed: null,
            type: "web"
        },
        {
            name: "Hack 'n' Bash",
            id: "hacknbash",
            date: "Feb 2014",
            datetime: new Date(2014, 2, 1),
            url: "https://hacknbash.herokuapp.com",
            description: "Explore a remote directory as a robot in this cute gamified FTP client webapp. Features the ability to <kbd>rm</kbd> and <kbd>cat</kbd> (remove and print) files, as well as <kbd>cd</kbd> (change directories).",
            note: "Developed with Flask and CreateJS for a 24-hour hackathon, TartanHacks; winner of Capital One sponsor prize.",
            banner: "static/assets/hacknbash/banner.png",
            screenshots: [
                {url: "static/assets/hacknbash/game.png", caption: "Game Map"},
                {url: "static/assets/hacknbash/cd.png", caption: "Changing Directories"}
            ],
            embed: null,
            type: "web"
        },
        {
            name: "navignaw",
            id: "navignaw",
            date: "May 2014",
            datetime: new Date(2014, 5, 1),
            url: null,
            description: "Online software and game development portfolio, i.e. this site! Open-sourced on <a href='https://github.com/navignaw/navignaw' target='_blank'>github</a>.",
            note: "Built with Flask and AngularJS.",
            banner: "",
            screenshots: [],
            embed: null,
            type: "web"
        },

        /* Mobile Apps */
        {
            name: "nommit",
            id: "nommit",
            date: "Oct 2013",
            datetime: new Date(2013, 10, 1),
            url: "http://hackmit.challengepost.com/submissions/17868-nommit",
            description: "Native iOS app for crowdsourced social food delivery. Features API from Firebase for storing and displaying real-time order data, Google Maps for tracking customers and couriers, Locu for querying a list of best nearby restaurants and menus, Venmo for order payments and tips, and Twilio for text notifications.",
            note: "Built during a 24-hour hackathon, HackMIT; winner of Venmo's Makes Life So Easy award.",
            banner: "static/assets/nommit/banner.png",
            screenshots: [
                {url: "static/assets/nommit/app.png", caption: "Main Screen"},
                {url: "static/assets/nommit/restaurants.png", caption: "Restaurants Near You"},
                {url: "static/assets/nommit/menu.png", caption: "Menu"},
                {url: "static/assets/nommit/order.png", caption: "Order Confirmation"},
                {url: "static/assets/nommit/venmo.png", caption: "Venmo Payment"},
                {url: "static/assets/nommit/text.png", caption: "Text Notification"}
            ],
            embed: null,
            type: "mobile"
        },
        {
            name: "Spontaneity",
            id: "spontaneity",
            date: "Jan 2014",
            datetime: new Date(2014, 1, 1),
            url: "http://mhackswinter2014.challengepost.com/submissions/20243-spontaneity",
            description: "The spontaneous hangout app, <em>Spontaneity</em> suggests nine categories of activities to participate in, including nearby parties, exercise spots, and even baking recipes from Pinterest. Through the creation of Facebook events to text-message notifications to nearby users, Spontaneity aims to liven up an otherwise boring day.",
			note: "Developed in 36 hours during MHacks; winner of Yahoo's Best Mobile App.",
            banner: "static/assets/spontaneity/banner.png",
            screenshots: [
                {url: "static/assets/spontaneity/app.png", caption: "Main Screen"},
                {url: "static/assets/spontaneity/interests.png", caption: "Interests"},
                {url: "static/assets/spontaneity/bars.png", caption: "Bars"},
                {url: "static/assets/spontaneity/create.png", caption: "Create an Event"},
                {url: "static/assets/spontaneity/facebook.png", caption: "Facebook Events"}
            ],
            embed: null,
            type: "mobile"
        },
        {
            name: "EduGames",
            id: "edugames",
            date: "Feb 2014",
            datetime: new Date(2014, 2, 1),
            url: "http://pennapps2014s.challengepost.com/submissions/20856-edugames-create-educational-games-with-0-programming-knowledge",
            description: "<em>EduGames</em> allows teachers to create engaging interactive games tailored to their curriculum with no programming knowledge. Features a <a href='https://edugames.firebaseapp.com' target='_blank'>webapp</a> where teachers can choose from existing game templates and fill in questions, as well as a native iPad app where students can log in and play customized games created by their teachers.",
            note: "Coded with love during PennApps (Valentines' Edition); winner of IndieGogo prize.",
            banner: "static/assets/edugames/banner.png",
            screenshots: [
                {url: "static/assets/edugames/app.png", caption: "Main Screen"},
                {url: "static/assets/edugames/games.png", caption: "Games"},
                {url: "static/assets/edugames/profile.png", caption: "Profile"},
                {url: "static/assets/edugames/students.png", caption: "Students"},
                {url: "static/assets/edugames/conqueror.png", caption: "Conqueror Minigame"},
                {url: "static/assets/edugames/millionaire.png", caption: "Who Wants to Be a Millionaire"}
            ],
            embed: null,
            type: "mobile"
        },

        /* Games */
        {
            name: "Omnisia",
            id: "omnisia",
            date: "Jan 2008",
            datetime: new Date(2008, 1, 1),
            url: "http://www.hbgames.org/forums/viewtopic.php?f=77&t=39133",
            description: "My first project features a time-traveling puzzle RPG built in RPG Maker XP. Enjoy 2-4 hours of puzzles and turn-based battles against a variety of foes.",
            note: "",
            banner: "static/assets/omnisia/banner.png",
            screenshots: [
                {url: "static/assets/omnisia/lutrena.png", caption: "Lutrena"},
                {url: "static/assets/omnisia/moreina.png", caption: "Drowned City of Moreina"},
                {url: "static/assets/omnisia/caves.png", caption: "Aypi Caves"},
                {url: "static/assets/omnisia/blitz.png", caption: "Battle Blitz"},
                {url: "static/assets/omnisia/sewers.png", caption: "Puzzle in the Sewers"}
            ],
            embed: null,
            type: "game"
        },
        {
            name: "Scavenger",
            id: "scavenger",
            date: "Summer 2011 - present",
            datetime: new Date(2011, 6, 1),
            url: "http://www.hbgames.org/forums/viewtopic.php?p=852052",
            description: "<em>Scavenger</em> is a 2D puzzle-action-adventure game, a la the Legend of Zelda. Explore a vast pixel-perfect world equipped with tools and the unique ability to visualize the past.",
            note: "Created in RPG Maker XP and coded in Ruby. Scavenger is currently in development!",
            banner: "static/assets/scavenger/banner.png",
            screenshots: [
                {url: "static/assets/scavenger/library.png", caption: "Burning Library"},
                {url: "static/assets/scavenger/ruins1.png", caption: "Ganshan Ruins: Present"},
                {url: "static/assets/scavenger/ruins2.png", caption: "Ganshan Ruins: Past"},
                {url: "static/assets/scavenger/ruins3.png", caption: "Pushing Rubble"},
                {url: "static/assets/scavenger/mines1.png", caption: "Golmar Mines: Present"},
                {url: "static/assets/scavenger/mines2.png", caption: "Golmar Mines: Past"},
                {url: "static/assets/scavenger/mines3.png", caption: "Chucking Bombs"}
            ],
            embed: null,
            type: "game"
        },
        {
            name: "NEWT",
            id: "newt",
            date: "Dec 2012",
            datetime: new Date(2012, 12, 1),
            url: "http://www.hbgames.org/forums/viewtopic.php?f=299&t=76684",
            description: "Explore a morbid, alien world as a small, innocent <small>NEWT</small>. In the empty labs of the <small>FACILITY</small>, escaping is not as simple as finding the key to the lock. With lasers, keypads, and fingerprint scanners, to say the least, there will be countless challenges facing your freedom-seeking amphibian. Can you creatively solve your way through five difficult trials, realize your role in the sinister plot of a few evil-genius human scientists, and escape?",
			note: "Submission for the HBGames.org 5-Year Anniversary Contest; built in Adobe Flash and ActionScript.",
            banner: "static/assets/newt/banner.png",
            screenshots: [],
            embed: {
                src: "http://hbgames.org/games/flash/NEWT.swf",
                width: 640,
                height: 480,
                html: ""
            },
            type: "game"
        },
        {
            name: "Retrograde",
            id: "retrograde",
            date: "Fall-Spring 2013",
            datetime: new Date(2013, 8, 1),
            url: "http://www.gamecreation.org/game/retrograde",
            description: "A reverse platformer that explores the return of a hero after his rise to power.",
            note: "Created with Flixel, for Adobe Flash.",
            banner: "static/assets/retrograde/banner.png",
            screenshots: [
                {url: "static/assets/retrograde/crumbles.png", caption: "Crumbling Platforms"},
                {url: "static/assets/retrograde/desert.png", caption: "In the Desert"},
                {url: "static/assets/retrograde/golem.png", caption: "Golem Chase"},
                {url: "static/assets/retrograde/shrooms.png", caption: "Aerial Platforming"},
                {url: "static/assets/retrograde/walljump.png", caption: "Wall Jumping"}
            ],
            embed: {
                src: "http://stage.gamecreation.org/retrograde/Retrograde.swf",
                width: 640,
                height: 480,
                html: ""
            },
            type: "game"
        },
        {
            name: "Illuminate",
            id: "illuminate",
            date: "Jan 2014",
            datetime: new Date(2014, 1, 1),
            url: "http://globalgamejam.org/2014/games/illuminate",
            description: "Explore a changing world in this experimental 3D puzzle-adventure, one which revolves around the perception of one's surroundings.",
			note: "Developed in Unity and C# for the 2014 Global Game Jam.",
            banner: "static/assets/illuminate/banner.png",
            screenshots: [
                {url: "static/assets/illuminate/flashlight.jpg", caption: "The Flashlight"},
                {url: "static/assets/illuminate/choice.jpg", caption: "A Choice"},
                {url: "static/assets/illuminate/graffiti.jpg", caption: "Graffiti on the Wall"},
                {url: "static/assets/illuminate/fire.jpg", caption: "Fire and Flames"},
            ],
            embed: null,
            type: "game"
        }

    ]);
;