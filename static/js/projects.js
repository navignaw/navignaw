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
            description: "",
            type: "web"
        },
        {
            name: "Surfboard",
            id: "surfboard",
            date: "Summer 2013",
            url: null,
            description: "",
            type: "web"
        },
        {
            name: "Hack 'n' Bash",
            id: "hacknbash",
            date: "Feb 2014",
            url: "https://hacknbash.herokuapp.com",
            description: "",
            type: "web"
        },
        {
            name: "navignaw",
            id: "navignaw",
            date: "May 2014",
            url: "http://www.ivanwang.me",
            description: "",
            type: "web"
        },

        /* Mobile Apps */
        {
            name: "nommit",
            id: "nommit",
            date: "Oct 2013",
            url: "http://hackmit.challengepost.com/submissions/17868-nommit",
            description: "",
            type: "mobile"
        },
        {
            name: "Spontaneity",
            id: "spontaneity",
            date: "Jan 2014",
            url: "http://mhackswinter2014.challengepost.com/submissions/20243-spontaneity",
            description: "",
            type: "mobile"
        },
        {
            name: "EduGames",
            id: "edugames",
            date: "Feb 2014",
            url: "http://pennapps2014s.challengepost.com/submissions/20856-edugames-create-educational-games-with-0-programming-knowledge",
            description: "",
            type: "mobile"
        },

        /* Games */
        {
            name: "Omnisia",
            id: "omnisia",
            date: "Jan 2008",
            url: "http://www.hbgames.org/forums/viewtopic.php?f=77&t=39133",
            description: "",
            type: "game"
        },
        {
            name: "Scavenger",
            id: "scavenger",
            date: "Summer 2011",
            url: "http://www.hbgames.org/forums/viewtopic.php?p=852052",
            description: "",
            type: "game"
        },
        {
            name: "NEWT",
            id: "newt",
            date: "Dec 2012",
            url: "http://www.hbgames.org/forums/viewtopic.php?f=299&t=76684",
            description: "",
            type: "game"
        },
        {
            name: "Retrograde",
            id: "retrograde",
            date: "Fall-Spring 2013",
            url: "http://www.gamecreation.org/game/retrograde",
            description: "",
            type: "game"
        },
        {
            name: "Illuminate",
            id: "illuminate",
            date: "Jan 2014",
            url: "http://globalgamejam.org/2014/games/illuminate",
            description: "",
            type: "game"
        }

    ]);
;