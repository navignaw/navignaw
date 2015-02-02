'use strict';

/* Projects */
angular.module('navignaw.projects', [])

    .value('projects', [

        /* Webapps */
        {
            name: "Get Matched",
            id: "getmatched",
            date: "July 2014",
            datetime: new Date(2014, 7, 1),
            url: "http://get-matched.herokuapp.com/",
            description: "A discovery platform for small business owners. This <a href='https://locu.com/' target='_blank'>Locu</a>/<a href='http://www.gotinder.com/' target='_blank'>Tinder</a> mashup allows businesses to find each other and network with mutual interest matching.",
            note: "Built with Ruby on Rails. First place winner at 2014 GoDaddy Intern Hackathon!",
            collaborators: ["Sherman Leung", "Kevin Casey", "Sophia Chung", "Don Mai", "Pushkar Prateek"],
            banner: "static/assets/getmatched/banner.png",
            screenshots: [
                {url: "static/assets/getmatched/home.png", caption: "Landing Page"},
                {url: "static/assets/getmatched/profile.png", caption: "Profile"},
                {url: "static/assets/getmatched/search.png", caption: "Searching for Businesses"}
            ],
            embed: null,
            type: "web"
        },
        {
            name: "CMU C#",
            id: "cmucsharp",
            date: "Summer 2013",
            datetime: new Date(2013, 7, 1),
            url: "http://cmucsharp.com",
            description: "Interactive website for college a cappella group. Features audition sign ups, contact form, and google calendar integration.",
            note: "Technologies: Ruby on Rails, CoffeeScript",
            collaborators: ["Cary Yang", "Emily Yeh"],
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
            description: "Digital wallboard webapp for tracking JIRA stories and bugs. Features a customizable front-end service with AngularJS to display issues.",
            note: "Additional feature: coded to accept Leap Motion gestures as well as keyboard/mouse input!",
            collaborators: [],
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
            collaborators: ["Alex Mermelstein", "Esther Wang", "Jun Huo"],
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
            collaborators: [],
            banner: "static/assets/navignaw/banner.png",
            screenshots: [],
            embed: null,
            type: "web"
        },

        /* Mobile Apps */
        {
            name: "Spire",
            id: "spire",
            date: "July 2014",
            datetime: new Date(2014, 7, 20),
            url: "",
            description: "Connect the world through geocaching a virtual pet! Spire features the creation of a virtual pet that you can take pictures with and drop off in a location. As other users pick up your pet, track its progress around the world!",
            note: "Created with Parse and Objective-C for native iOS at Greylock Hackfest 2014.",
            collaborators: ["Lucy Guo", "Nive Jayasekar", "Jeffrey Zhang"],
            banner: "static/assets/spire/banner.png",
            screenshots: [
                {url: "static/assets/spire/welcometospire.png", caption: "Main Screen"},
                {url: "static/assets/spire/logintospire.png", caption: "Login Screen"},
                {url: "static/assets/spire/nameyourpet.png", caption: "Naming your Pet"},
                {url: "static/assets/spire/profile.png", caption: "User Profile"},
                {url: "static/assets/spire/pet.png", caption: "Pet Profile"},
                {url: "static/assets/spire/picturetaking.png", caption: "Taking a Picture"},
                {url: "static/assets/spire/itemviewer.png", caption: "Photo Details"},
                {url: "static/assets/spire/findpets.png", caption: "Pets Near You"}
            ],
            embed: null,
            type: "mobile"
        },
        {
            name: "nommit",
            id: "nommit",
            date: "Oct 2013",
            datetime: new Date(2013, 10, 1),
            url: "http://hackmit.challengepost.com/submissions/17868-nommit",
            description: "Native iOS app for crowdsourced social food delivery. Features API from Firebase for storing and displaying real-time order data, Google Maps for tracking customers and couriers, Locu for querying a list of best nearby restaurants and menus, Venmo for order payments and tips, and Twilio for text notifications.",
            note: "Built during a 24-hour hackathon, HackMIT; winner of Venmo's Makes Life So Easy award.",
            collaborators: ["Lucy Guo", "Gregory Rose", "Angela Zhang"],
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
            collaborators: ["Lucy Guo", "Gregory Rose", "Angela Zhang"],
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
            collaborators: ["Lucy Guo", "Gregory Rose", "Angela Zhang"],
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
            collaborators: [],
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
            note: "Created in RPG Maker XP and coded in Ruby. Scavenger is currently in hiatus.",
            collaborators: [],
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
            collaborators: [],
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
            description: "A reverse platformer that explores the return of a hero after his rise to power. Solve puzzles and dodge enemies as you progress (or regress), losing powerups one at a time.",
            note: "Created with Flixel, for Adobe Flash.",
            collaborators: ["CMU Game Creation Society"],
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
            collaborators: ["CMU Game Creation Society"],
            banner: "static/assets/illuminate/banner.png",
            screenshots: [
                {url: "static/assets/illuminate/flashlight.jpg", caption: "The Flashlight"},
                {url: "static/assets/illuminate/choice.jpg", caption: "A Choice"},
                {url: "static/assets/illuminate/graffiti.jpg", caption: "Graffiti on the Wall"},
                {url: "static/assets/illuminate/fire.jpg", caption: "Fire and Flames"}
            ],
            embed: null,
            type: "game"
        },
        {
            name: "Lunatix",
            id: "lunatix",
            date: "Fall 2014",
            datetime: new Date(2014, 8, 1),
            url: "http://lunatix.herokuapp.com",
            description: "It is the year 2142, and you must complete a government server literacy training program. But there is more to this interactive program than meets the eye...",
            note: "A unix-inspired educational text-based adventure game. Developed in Javascript for the web.",
            collaborators: ["CMU Game Creation Society"],
            banner: "static/assets/lunatix/banner.png",
            screenshots: [
                {url: "static/assets/lunatix/login.png", caption: "Login Screen"},
                {url: "static/assets/lunatix/survey.png", caption: "Survey"},
                {url: "static/assets/lunatix/intro.png", caption: "Introductions"},
                {url: "static/assets/lunatix/animalsort.png", caption: "A test of abilities"}
            ],
            embed: {
                src: "http://lunatix.herokuapp.com",
                width: 1024,
                height: 500,
                html: ""
            },
            type: "game"
        },
        {
            name: "A Plug's Life",
            id: "aplugslife",
            date: "Jan 2015",
            datetime: new Date(2015, 1, 1),
            url: "http://globalgamejam.org/2015/games/plugs-life",
            description: "You are a socket gal searching for her prince plug. Explore an electrifying, dizzying world in this rotating puzzle-platformer.",
            note: "Developed in Unity and C# for the 2015 Global Game Jam.",
            collaborators: ["Diana Zhu", "Jacob Slone", "Sylvia Kosowski", "Ziqiao Cloud Tian", "Obawole Idowu", "Jacqueline Yeung"],
            banner: "static/assets/aplugslife/banner.png",
            screenshots: [
                {url: "static/assets/aplugslife/lost.png", caption: "Lost and lonely"}
            ],
            embed: null,
            type: "game"
        }
    ]);