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
            builds: [],
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
            builds: [],
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
            builds: [],
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
            builds: [],
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
            builds: [],
            embed: null,
            type: "web"
        },
        {
            name: "NeoCache",
            id: "neocache",
            date: "February 2015",
            datetime: new Date(2015, 2, 1),
            url: null,
            description: "Annotate the Internet! NeoCache is a Chrome extension for caching comments and images on any website that anyone can view. Create a NeoCache and see it sync on your friends' browser!",
            note: "Built with Parse and JS.",
            collaborators: [],
            banner: "static/assets/neocache/banner.png",
            screenshots: [],
            builds: [],
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
            builds: [],
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
            builds: [],
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
            builds: [],
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
            builds: [],
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
            builds: [],
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
            builds: [],
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
            builds: [
                {type: "Flash", url: "https://www.dropbox.com/s/ohqkm4sgihg9sh0/NEWT.swf?dl=0"}
            ],
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
            description: "A reverse platformer that explores the return of a hero after his rise to power. Solve puzzles and dodge enemies as you progress (or regress), losing powerups one at a time.<br/>My first two-semester game with CMU Game Creation Society was a success. As project lead and lead programmer, I led design meetings and implemented most of the core features (powerups) of the game.",
            note: "Created with Flixel, for Adobe Flash. Winner of GCS Gold, fall 2013.",
            collaborators: ["CMU Game Creation Society"],
            banner: "static/assets/retrograde/banner.png",
            screenshots: [
                {url: "static/assets/retrograde/crumbles.png", caption: "Crumbling Platforms"},
                {url: "static/assets/retrograde/desert.png", caption: "In the Desert"},
                {url: "static/assets/retrograde/golem.png", caption: "Golem Chase"},
                {url: "static/assets/retrograde/shrooms.png", caption: "Aerial Platforming"},
                {url: "static/assets/retrograde/walljump.png", caption: "Wall Jumping"}
            ],
            builds: [
                {type: "Flash", url: "https://www.dropbox.com/s/ny74tm9i3fgutim/Retrograde.swf?dl=0"}
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
            description: "Explore a changing world in this experimental 3D puzzle-adventure, one which revolves around the perception of one's surroundings. There are no enemies to fight, no weapons to shoot-- only a single flashlight to see.<br/>My first foray into Unity was an eye-opener as I learned to develop and design maps in 3D.",
            note: "Developed in Unity3D and C# for the 2014 Global Game Jam.",
            collaborators: ["CMU Game Creation Society"],
            banner: "static/assets/illuminate/banner.png",
            screenshots: [
                {url: "static/assets/illuminate/flashlight.jpg", caption: "The Flashlight"},
                {url: "static/assets/illuminate/choice.jpg", caption: "A Choice"},
                {url: "static/assets/illuminate/graffiti.jpg", caption: "Graffiti on the Wall"},
                {url: "static/assets/illuminate/fire.jpg", caption: "Fire and Flames"}
            ],
            builds: [
                {type: "Windows", url: "https://www.dropbox.com/s/b2omyu0lvy6dfk7/Illuminate.zip?dl=0"}
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
            description: "It is the year 2142, and you must complete a government server literacy training program. But there is more to this interactive program than meets the eye...<br/>As project lead and programmer, I developed the system from an open-source Javascript terminal and coded the commands on top of it.",
            note: "A unix-inspired educational text-based adventure game. Developed in Javascript for the web.",
            collaborators: ["CMU Game Creation Society"],
            banner: "static/assets/lunatix/banner.png",
            screenshots: [
                {url: "static/assets/lunatix/login.png", caption: "Login Screen"},
                {url: "static/assets/lunatix/survey.png", caption: "Survey"},
                {url: "static/assets/lunatix/intro.png", caption: "Introductions"},
                {url: "static/assets/lunatix/animalsort.png", caption: "A test of abilities"}
            ],
            builds: [],
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
            description: "You are a socket gal searching for her prince plug. Explore an electrifying, dizzying world in this rotating puzzle-platformer.<br/>For this project, I worked on level design, creating the rotateable maps that worked with the core mechanic of the game.",
            note: "Developed in Unity2D and C# for the 2015 Global Game Jam.",
            collaborators: ["Diana Zhu", "Jacob Slone", "Sylvia Kosowski", "Ziqiao Cloud Tian", "Obawole Idowu", "Jacqueline Yeung"],
            banner: "static/assets/aplugslife/banner.png",
            screenshots: [
                {url: "static/assets/aplugslife/lost.png", caption: "Lost and lonely"},
                {url: "static/assets/aplugslife/rotate.png", caption: "Up the stairs"},
                {url: "static/assets/aplugslife/battery.png", caption: "Battery"}
            ],
            builds: [
                {type: "Windows", url: "https://www.dropbox.com/s/c76gvmgen90j2cs/windows.zip?dl=0"},
                {type: "Mac", url: "https://www.dropbox.com/s/p6xu6lzjv7rkpio/macosx.zip?dl=0"},
                {type: "Linux", url: "https://www.dropbox.com/s/9k6uk6ll3nl90mz/linux.zip?dl=0"}
            ],
            embed: null,
            type: "game"
        },
        {
            name: "Sudokis",
            id: "sudokis",
            date: "February 2015",
            datetime: new Date(2015, 2, 1),
            url: "https://play.google.com/store/apps/details?id=com.badassbardgames.tridoku",
            description: "A fusion of two classic puzzle games; place pieces in the correct position to solve the sudoku puzzle.<br/>Part-time coder and sound designer, I composed the Tetris-inspired 8-bit theme song (see below).",
            note: "Developed in Unity2D and C# for PC, Mac, and Android.",
            collaborators: ["Diana Zhu", "Jacob Slone", "Sylvia Kosowski", "Obawole Idowu"],
            banner: "static/assets/sudokis/banner.png",
            screenshots: [
                {url: "static/assets/sudokis/menu.png", caption: "Menu"},
                {url: "static/assets/sudokis/controls.png", caption: "Controls"},
                {url: "static/assets/sudokis/screen1.png", caption: "Gameplay"},
                {url: "static/assets/sudokis/screen2.png", caption: "Gameplay"},
                {url: "static/assets/sudokis/screen3.png", caption: "Gameplay"},
                {url: "static/assets/sudokis/screen4.png", caption: "Gameplay"},
                {url: "static/assets/sudokis/solved.png", caption: "Solved"}
            ],
            music: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/199912626&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false",
            builds: [
                {type: "Windows", url: "https://www.dropbox.com/s/8dlm6mho2qm5l4y/windows.zip?dl=0"},
                {type: "Mac", url: "https://www.dropbox.com/s/vyp740a6hny0llf/macosx.zip?dl=0"},
                {type: "Linux", url: "https://www.dropbox.com/s/h58zifhg14cqrl6/linux.zip?dl=0"}
            ],
            embed: {
                src: "static/assets/sudokis/build.html",
                width: 640,
                height: 480,
                html: ""
            },
            type: "game"
        },
        {
            name: "nano",
            id: "nano",
            date: "March 2015",
            datetime: new Date(2015, 3, 1),
            url: "",
            description: "Guide two robots, Nano and Pico, through Micro's body to save his heart from viruses in this puzzle-platformer.<br/>As lead level designer and composer, I designed the puzzles and interactive gears that power the world. Gameplay revolves around deploying Pico into smaller spaces to spin in gears and activate doors and other objects. In addition to level design, I composed and implemented a dynamic soundtrack using two sets of samples (see below). Whenever Pico is deployed, the music crossfades to a different track playing the same motif, but with a subtle change in instrumentation.",
            note: "Developed in Unity2D and C#.",
            collaborators: ["Diana Zhu", "Jacob Slone", "Sylvia Kosowski", "Obawole Idowu"],
            banner: "static/assets/nano/banner.png",
            screenshots: [
                {url: "static/assets/nano/title.png", caption: "Title"},
                {url: "static/assets/nano/hubWorld.png", caption: "Micro's Heart"},
                {url: "static/assets/nano/deployed.png", caption: "Deploying Pico"},
                {url: "static/assets/nano/hamstergear.png", caption: "Running in a gear"},
                {url: "static/assets/nano/goop.png", caption: "Hopping over goop"},
                {url: "static/assets/nano/queenVirus.png", caption: "The Queen"}
            ],
            music: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/96718976&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
            builds: [
                {type: "Windows", url: "https://www.dropbox.com/s/2sc4a3asogywdlu/windows.zip?dl=0"},
                {type: "Mac", url: "https://www.dropbox.com/s/2m94bcrfxpfwbb6/macosx.zip?dl=0"},
                {type: "Linux", url: "https://www.dropbox.com/s/bu00ckk1yqo8q31/linux.zip?dl=0"}
            ],
            embed: {
                src: "static/assets/nano/build.html",
                width: 960,
                height: 600,
                html: ""
            },
            type: "game"
        },
        {
            name: "Board to Death",
            id: "boardtodeath",
            date: "April 2015",
            datetime: new Date(2015, 4, 1),
            url: "",
            description: "Cut the threads of life and ferry souls across the River Styx in this fast-paced, time-management game based off Greek mythology.<br/><i>Board to Death</i> was the final project for the course Game Design, Development, and Prototyping. Scoped, designed, and developed over 8 weeks, it was our most tuned and tested game to date. As level designer and programmer, I designed the tutorial stages and finetuned the mathematical equations and formulas that power the game.",
            note: "Developed in Unity2D and C#.",
            collaborators: ["Diana Zhu", "Jacob Slone", "Sylvia Kosowski", "Obawole Idowu"],
            banner: "static/assets/boardtodeath/banner.png",
            screenshots: [
                {url: "static/assets/boardtodeath/title.png", caption: "Title"},
                {url: "static/assets/boardtodeath/cutting.png", caption: "Cutting threads"},
                {url: "static/assets/boardtodeath/boats.png", caption: "Buying boats"},
                {url: "static/assets/boardtodeath/gameover.jpg", caption: "Overrun by monsters"}
            ],
            builds: [
                {type: "Windows", url: "https://www.dropbox.com/s/d01z1hf70bysfj3/windows.zip?dl=0"},
                {type: "Mac", url: "https://www.dropbox.com/s/z8n4sgeip1z5bc7/mac.zip?dl=0"},
                {type: "Linux", url: "https://www.dropbox.com/s/davt1g7e14ub8u4/linux.zip?dl=0"}
            ],
            embed: {
                src: "static/assets/boardtodeath/build.html",
                width: 800,
                height: 450,
                html: ""
            },
            type: "game"
        },
        {
            name: "Cacowphony",
            id: "cacowphony",
            date: "May 2015",
            datetime: new Date(2015, 5, 1),
            url: "",
            description: "Tap along to the beat in this rhythm-based educational music game. In addition to reading sheet music, <i>Cacowphony</i> builds fluency in sightreading basic rhythms. 3rd place winner for CMU's Design of Educational Games S15 final competition.",
            note: "Developed in Unity2D and C#.",
            collaborators: ["Sarah Chen", "Roger Liu", "Lucy Pei"],
            banner: "static/assets/cacowphony/banner.png",
            screenshots: [
                {url: "static/assets/cacowphony/title.png", caption: "Title"},
                {url: "static/assets/cacowphony/songselect.png", caption: "Select a song"},
                {url: "static/assets/cacowphony/perfect.png", caption: "Tapping the beat"},
                {url: "static/assets/cacowphony/miss.png", caption: "Missed the bird"},
                {url: "static/assets/cacowphony/angryrests.png", caption: "Angry rests"}
            ],
            builds: [
                {type: "Windows", url: "https://www.dropbox.com/s/urefhhtgzku6fvi/windows.zip?dl=0"},
                {type: "Mac", url: "https://www.dropbox.com/s/rmyryo74it1ygdm/mac.zip?dl=0"},
                {type: "Linux", url: "https://www.dropbox.com/s/1ofmg6grls2jsba/linux.zip?dl=0"}
            ],
            embed: {
                src: "static/assets/cacowphony/build.html",
                width: 800,
                height: 450,
                html: ""
            },
            type: "game"
        },
        {
            name: "The Elevator",
            id: "elevator",
            date: "October 2015",
            datetime: new Date(2015, 10, 1),
            url: "",
            description: "A reflective journey into space for a sick, old man's dying wish.",
            note: "This is a dialogue-heavy visual novel game made in Ren'Py for Experimental Game Design, 2015.",
            collaborators: ["Crystal Hou (character art)"],
            banner: "static/assets/elevator/banner.jpg",
            screenshots: [
                {url: "static/assets/elevator/title.png", caption: "Title"}
            ],
            builds: [
                {type: "Download now", url: "https://www.dropbox.com/s/colme4l7qooxtpp/TheElevator-1.1.zip?dl=0"}
            ],
            embed: null,
            type: "game"
        },
        {
            name: "Sisyphus",
            id: "sisyphus",
            date: "January 2016",
            datetime: new Date(2016, 1, 31),
            url: "http://globalgamejam.org/2016/games/sisyphus",
            description: "A Sisyphean tale of discovery, perseverance, and rock rolling.",
            note: "Inspired by the Greek myth of Sisyphus, this game was developed in 48 hours for the 2016 Global Game Jam under the theme 'ritual.'",
            collaborators: ["Melanie Kim", "Ralph Kim", "Swetha Kannan"],
            banner: "static/assets/sisyphus/banner.png",
            screenshots: [
                {url: "static/assets/sisyphus/title.png", caption: "Title"},
                {url: "static/assets/sisyphus/mountain1.png", caption: "Climbing the mountain"},
                {url: "static/assets/sisyphus/mountain2.png", caption: "Dusk"},
                {url: "static/assets/sisyphus/mountain3.png", caption: "Stars"},
            ],
            builds: [
                {type: "Download now", url: "https://www.dropbox.com/s/z0uegbx6cmm80yg/Sisyphus.zip?dl=0"}
            ],
            embed: null,
            type: "game"
        },
        {
            name: "Too Many Chefs",
            id: "toomanychefs",
            date: "April 2016",
            datetime: new Date(2016, 4, 1),
            url: "http://www.toomanychefs.party",
            description: "A text-based cooperative party cooking game for up to 4 players. Team up with friends in local multiplayer to make the best 4-course meal, or multitask to manage 4 stations at once!",
            note: "Coded in React; designed for Game Design, 2016.",
            collaborators: [],
            banner: "static/assets/toomanychefs/banner.png",
            screenshots: [
                {url: "static/assets/toomanychefs/title.png", caption: "Title"},
                {url: "static/assets/toomanychefs/loading.png", caption: "Loading"},
                {url: "static/assets/toomanychefs/waiting.png", caption: "Ready to Begin"},
                {url: "static/assets/toomanychefs/brunch.png", caption: "Brunch with 4"}
            ],
            builds: [
                {type: "Play now", url: "http://www.toomanychefs.party"}
            ],
            embed: null,
            type: "game"
        }
    ]);
