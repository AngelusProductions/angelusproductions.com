import linkTypes from './linkTypes'

const homeTabs = [
    {
        id: 1,
        name: 'Music',
        links: [
            {
                id: 1,
                name: 'Glory Days',
                artist: 'Alli Wonderland',
                date: new Date('2023-11'),
                url: 'https://open.spotify.com/track/3py4ky2bH10XE6Fn0QkEOY?si=584a3327ef924dbc',
                videoUrl: null,
                description: 'Eclectic single that contemplates if our best days are in front of us or still to come.',
                type: linkTypes.spotify
            },
            {
                id: 2,
                name: 'Our Tonight is Mine',
                artist: 'Jesse Boykins III',
                date: new Date('2014-11'),
                url: 'https://open.spotify.com/track/028Gy34lveEGjcmgWdw931?si=2c646b68a1ca4973',
                videoUrl: 'https://www.youtube.com/watch?v=MBemjMNfU9s',
                description: 'Sexy, brooding R&B track yearning for you to come home with it.',
                type: linkTypes.spotify
            },
            {
                id: 3,
                name: 'Our Tonight is Mine (Acoustic)',
                artist: 'Jesse Boykins III',
                date: new Date('2015-11'),
                url: null,
                videoUrl: 'https://www.youtube.com/watch?v=qgbL0beBVaM',
                description: 'Jesse strips down our steamy love song into a more intimate setting.',
                type: linkTypes.youtube
            },
            {
                id: 4,
                name: 'Show Me Who You Are (@ngelus mix)',
                artist: 'Jesse Boykins III',
                date: new Date('2014-11'),
                url: 'https://open.spotify.com/track/34AJ6p9LDGYCHeICBWXoem?si=1d411f899ca14ac1',
                videoUrl: null,
                description: "A wacky, playful take on Jesse and Machinedrum's 'Show Me Who You Are'",
                type: linkTypes.spotify
            },
            {
                id: 5,
                name: 'Wonder',
                artist: '@ngelus',
                date: new Date('2013-11'),
                url: 'https://soundcloud.com/coreyangelus/i-wonder',
                videoUrl: null,
                description: 'A short piano medley for those who want to think about the good things in life.',
                type: linkTypes.soundcloud
            },
            {
                id: 6,
                name: 'All I Want for Christmas is You (@ngelus mix)',
                artist: 'Dalma',
                date: new Date('2021-12'),
                url: 'https://www.instagram.com/reel/CmnHyBsq2L-/',
                videoUrl: null,
                description: "2021 Cover of 'All I Want for Christmas is You'.",
                type: linkTypes.instagram
            },
            {
                id: 7,
                name: 'Last Christmas (@ngelus mix)',
                artist: 'Dalma',
                date: new Date('2021-12'),
                url: 'https://www.instagram.com/reel/CYK_K4RKVNF/',
                videoUrl: null,
                description: "A dark take on 'Last Christmas' by George Michael.",
                type: linkTypes.instagram
            },
            {
                id: 8,
                name: 'All I Want for Christmas is You (@ngelus mix)',
                artist: 'Dalma',
                date: new Date('2022-12'),
                url: 'https://www.instagram.com/reel/CmnHyBsq2L-/',
                videoUrl: null,
                description: "A hypercharged take on 'Last Christmas' by George Michael.",
                type: linkTypes.instagram
            },
            {
                id: 9,
                name: 'Times Like These (@ngelus mix)',
                artist: 'Dalma',
                date: new Date('2022-11'),
                url: 'https://www.instagram.com/reel/Cbnoik6ld6_/',
                videoUrl: null,
                description: "Little arpeggiated remix of 'Times Like These' in honor of Taylor Hawkins's passing.",
                type: linkTypes.instagram
            },
            {
                id: 10,
                name: "Don't Panic!",
                artist: '@ngelus',
                date: new Date('2022-08'),
                url: 'https://www.instagram.com/p/ChDJxmIgbWU/',
                videoUrl: null,
                description: "Everyone just chill.",
                type: linkTypes.instagram
            },
            {
                id: 11,
                name: "Party on Mars!",
                artist: '@ngelus',
                date: new Date('2023-02'),
                url: 'https://youtube.com/shorts/xJKzaTgfrVc?feature=share',
                videoUrl: null,
                description: "Who wants to party on Mars??",
                type: linkTypes.youtube
            },
        ]
    },
    {
        id: 2,
        name: 'Acting',
        links: [
            {
                id: 1,
                name: 'My 2023 Reel!',
                url: 'https://youtu.be/XWY1qSwm6vI',
                date: new Date('2023-06'),
                description: 'My acting reel as of 2023!',
                type: linkTypes.youtube
            },
            {
                id: 2,
                name: 'iVisa Saves the Day',
                url: 'https://www.instagram.com/p/CYkI_vAl_qF/',
                date: new Date('2022-01'),
                description: "iVisa.com was there when I needed it most.",
                type: linkTypes.instagram
            },
            {
                id: 3,
                name: 'One Slap to Rule Them All',
                url: 'https://www.instagram.com/p/Cb5yjjnFYeX/',
                date: new Date('2022-04'),
                description: "I had some costumes and just had to give my 2022 Oscars take.",
                type: linkTypes.instagram
            },
            {
                id: 4,
                name: 'Annoying Couple Milestones',
                url: 'https://www.instagram.com/p/Cc6AcsLFBog/',
                date: new Date('2022-04'),
                description: "Some couples should just keep it to themselves.",
                type: linkTypes.instagram
            },
            {
                id: 5,
                name: 'Johnny & Amber',
                url: 'https://www.instagram.com/p/Cdgj7k4A8Ey/',
                date: new Date('2022-05'),
                description: "A poo has many names.",
                type: linkTypes.instagram
            },
            {
                id: 6,
                name: 'Self Tape Shenanigans',
                url: 'https://www.instagram.com/p/CnNngFSKFPF/',
                date: new Date('2023-01'),
                description: "I'm a damn good reader!",
                type: linkTypes.instagram
            },
            {
                id: 7,
                name: 'What Makes a Man Sexy',
                url: 'https://www.instagram.com/p/Cnh4KcVKLpc/',
                date: new Date('2023-01'),
                description: "I don't understand women...",
                type: linkTypes.instagram
            },
            {
                id: 8,
                name: 'I Guess I Can Teach You...',
                url: 'https://www.instagram.com/p/Cn5TG7Frla0/',
                date: new Date('2023-01'),
                description: "I'm a white male with privilege and I'm not afraid to parody it.",
                type: linkTypes.instagram
            },
            {
                id: 9,
                name: 'The Lounge Singer Clip (with Johnny)',
                url: 'https://www.instagram.com/p/Csuf2Tbpebq/',
                date: new Date('2023-05'),
                description: "C'mon Johnny, give Candy a break!",
                type: linkTypes.instagram
            },
            {
                id: 10,
                name: "How to Tell If They're the One",
                url: 'https://www.instagram.com/p/CaSbELwpn1L/',
                date: new Date('2023-02'),
                description: "To be fair, Sex and the City is a modern classic.",
                type: linkTypes.instagram
            },
            {
                id: 11,
                name: "Lonely Boys Don't Do No Lovin'",
                url: 'https://www.youtube.com/watch?v=4sc8o7Zls7E',
                date: new Date('2013-10'),
                description: "Old NYU short film from Gordon Hale (stay until the end for a shot of my ass!).",
                type: linkTypes.youtube
            },
            {
                id: 12,
                name: "The Fact that He Leaves",
                url: 'https://www.youtube.com/watch?v=VWlElNRlO94',
                date: new Date('2011-04'),
                description: "A short film from Yi Zhong. I got to make out with a girl!",
                type: linkTypes.youtube
            },
        ]
    },
    {
        id: 3,
        name: 'Web',
        links: [
            {
                id: 1,
                name: 'Practice Makes',
                url: 'https://practice-makes.netlify.app',
                codeUrl: 'https://github.com/AngelusProductions/practice-makes',
                type: linkTypes.github,
                description: 'Website for "Practice Makes" monthly design meetup @ Intrepid Pursuits using Gatsby.js',
                date: new Date('2020-02'),
                screenshots: [
                    {
                        id: 1,
                        name: 'Welcome',
                        url: 'https://s3.us-west-1.amazonaws.com/angelusproductions.com/practice-makes/practiceMakes1.PNG'
                    },
                    {
                        id: 2,
                        name: 'Events',
                        url: 'https://s3.us-west-1.amazonaws.com/angelusproductions.com/practice-makes/practiceMakes2.PNG'
                    },
                    {
                        id: 3,
                        name: 'Archives',
                        url: 'https://s3.us-west-1.amazonaws.com/angelusproductions.com/practice-makes/practiceMakes3.PNG'
                    },
                    {
                        id: 4,
                        name: 'About',
                        url: 'https://s3.us-west-1.amazonaws.com/angelusproductions.com/practice-makes/practiceMakes4.PNG'
                    },
                    {
                        id: 5,
                        name: 'Team',
                        url: 'https://s3.us-west-1.amazonaws.com/angelusproductions.com/practice-makes/practiceMakes5.PNG'
                    },
                    {
                        id: 6,
                        name: 'Contact',
                        url: 'https://s3.us-west-1.amazonaws.com/angelusproductions.com/practice-makes/practiceMakes6.PNG'
                    },
                    {
                        id: 7,
                        name: 'Home',
                        url: 'https://s3.us-west-1.amazonaws.com/angelusproductions.com/practice-makes/practiceMakes7.png'
                    },
                ]
            },
            {
                id: 2,
                name: 'Planted',
                url: null,
                codeUrl: 'https://github.com/AngelusProductions/planted',
                type: linkTypes.github,
                description: 'Browse plants and fill your garden up with all the green friends you desire.',
                date: new Date('2019-11'),
                screenshots: [
                    {
                        id: 1,
                        name: 'Home',
                        url: 'https://s3.us-west-1.amazonaws.com/angelusproductions.com/planted/plantedHome.png'
                    },
                    {
                        id: 2,
                        name: 'Explore',
                        url: 'https://s3.us-west-1.amazonaws.com/angelusproductions.com/planted/plantedExploreDropdown.png'
                    },
                    {
                        id: 3,
                        name: 'Google OAuth',
                        url: 'https://s3.us-west-1.amazonaws.com/angelusproductions.com/planted/plantedOAuth.png'
                    },
                    {
                        id: 4,
                        name: 'Add to Wishlist',
                        url: 'https://s3.us-west-1.amazonaws.com/angelusproductions.com/planted/plantedWishlist.png'
                    },
                    {
                        id: 5,
                        name: 'Instructions',
                        url: 'https://s3.us-west-1.amazonaws.com/angelusproductions.com/planted/plantedPlantInstructions.png'
                    },
                    {
                        id: 6,
                        name: 'Name Your Nook',
                        url: 'https://s3.us-west-1.amazonaws.com/angelusproductions.com/planted/plantedAddNook1.png'
                    },
                    {
                        id: 7,
                        name: 'Add Plants to Nook',
                        url: 'https://s3.us-west-1.amazonaws.com/angelusproductions.com/planted/plantedAddNook2.png'
                    },
                    {
                        id: 8,
                        name: 'Your New Nook',
                        url: 'https://s3.us-west-1.amazonaws.com/angelusproductions.com/planted/plantedNewNook.png'
                    },
                    {
                        id: 9,
                        name: 'Search for Plants',
                        url: 'https://s3.us-west-1.amazonaws.com/angelusproductions.com/planted/plantedSearch.png'
                    },
                ]
            },
            {
                id: 3,
                name: 'National Primate Research Centers',
                url: 'bit.ly/nprc-home',
                codeUrl: null,
                type: linkTypes.github,
                description: 'An biomedical research website for non-human primate research at universities across the USA.',
                date: new Date('2023-07'),
                screenshots: [
                    {
                        id: 1,
                        name: 'National Primate Research Centers 1',
                        url: 'https://s3.us-west-1.amazonaws.com/angelusproductions.com/nhprc/nhprcResearch1.PNG'
                    },
                    {
                        id: 2,
                        name: 'National Primate Research Centers 2',
                        url: 'https://s3.us-west-1.amazonaws.com/angelusproductions.com/nhprc/nhprcResearch2.PNG'
                    },
                    {
                        id: 3,
                        name: 'National Primate Research Centers 3',
                        url: 'https://s3.us-west-1.amazonaws.com/angelusproductions.com/nhprc/nhprcResearch3.PNG'
                    },
                    {
                        id: 4,
                        name: 'National Primate Research Centers 4',
                        url: 'https://s3.us-west-1.amazonaws.com/angelusproductions.com/nhprc/nhprcResearch4.PNG'
                    },
                    {
                        id: 5,
                        name: 'National Primate Research Centers 5',
                        url: 'https://s3.us-west-1.amazonaws.com/angelusproductions.com/nhprc/nhprcResearch5.PNG'
                    },
                    {
                        id: 6,
                        name: 'National Primate Research Centers 6',
                        url: 'https://s3.us-west-1.amazonaws.com/angelusproductions.com/nhprc/nhprcResearch6.PNG'
                    },
                    {
                        id: 7,
                        name: 'National Primate Research Centers 7',
                        url: 'https://s3.us-west-1.amazonaws.com/angelusproductions.com/nhprc/nhprcResearch7.PNG'
                    },
                    {
                        id: 8,
                        name: 'National Primate Research Centers 8',
                        url: 'https://s3.us-west-1.amazonaws.com/angelusproductions.com/nhprc/nhprcResearch8.PNG'
                    },
                    {
                        id: 9,
                        name: 'National Primate Research Centers 9',
                        url: 'https://s3.us-west-1.amazonaws.com/angelusproductions.com/nhprc/nhprcResearch9.PNG'
                    },
                    {
                        id: 10,
                        name: 'National Primate Research Centers 10',
                        url: 'https://s3.us-west-1.amazonaws.com/angelusproductions.com/nhprc/nhprcResearch10.PNG'
                    },
                    {
                        id: 11,
                        name: 'National Primate Research Centers 11',
                        url: 'https://s3.us-west-1.amazonaws.com/angelusproductions.com/nhprc/nhprcResearch11.PNG'
                    },
                    {
                        id: 12,
                        name: 'National Primate Research Centers 12',
                        url: 'https://s3.us-west-1.amazonaws.com/angelusproductions.com/nhprc/nhprcResearch12.PNG'
                    },
                    {
                        id: 13,
                        name: 'National Primate Research Centers 13',
                        url: 'https://s3.us-west-1.amazonaws.com/angelusproductions.com/nhprc/nhprcResearch13.PNG'
                    },
                    {
                        id: 14,
                        name: 'National Primate Research Centers 14',
                        url: 'https://s3.us-west-1.amazonaws.com/angelusproductions.com/nhprc/nhprcResearch14.PNG'
                    },
                    {
                        id: 15,
                        name: 'National Primate Research Centers 15',
                        url: 'https://s3.us-west-1.amazonaws.com/angelusproductions.com/nhprc/nhprcResearch15.PNG'
                    },
                ]
            },
            {
                id: 4,
                name: 'VIP (Video Intelligence Platform)',
                url: null,
                codeUrl: null,
                type: linkTypes.github,
                description: 'Lemonlight Media\'s video production coordination system.',
                date: new Date('2022-11'),
                screenshots: [
                    {
                        id: 1,
                        name: "New Contract",
                        url: "https://s3.us-west-1.amazonaws.com/angelusproductions.com/vip/newContract.svg"
                    },
                    {
                        id: 2,
                        name: "Add Company POC",
                        url: "https://s3.us-west-1.amazonaws.com/angelusproductions.com/vip/addCompanyPOC.svg"
                    },
                    {
                        id: 3,
                        name: "Add Partner",
                        url: "https://s3.us-west-1.amazonaws.com/angelusproductions.com/vip/addPartner.svg"
                    },
                    {
                        id: 4,
                        name: "Add Partner POC",
                        url: "https://s3.us-west-1.amazonaws.com/angelusproductions.com/vip/addPartnerPOC.svg"
                    },
                    {
                        id: 5,
                        name: "Cancel",
                        url: "https://s3.us-west-1.amazonaws.com/angelusproductions.com/vip/cancel.svg"
                    },
                    {
                        id: 6,
                        name: "Contract Checkout",
                        url: "https://s3.us-west-1.amazonaws.com/angelusproductions.com/vip/contractCheckout.svg"
                    },
                    {
                        id: 7,
                        name: "Contract Details",
                        url: "https://s3.us-west-1.amazonaws.com/angelusproductions.com/vip/contractDetails.svg"
                    },
                    {
                        id: 8,
                        name: "Cutdown",
                        url: "https://s3.us-west-1.amazonaws.com/angelusproductions.com/vip/cutdown.svg"
                    },
                    {
                        id: 9,
                        name: "Hero Video 1",
                        url: "https://s3.us-west-1.amazonaws.com/angelusproductions.com/vip/heroVideo1.svg"
                    },
                    {
                        id: 10,
                        name: "Hero Video 2",
                        url: "https://s3.us-west-1.amazonaws.com/angelusproductions.com/vip/heroVideo2.svg"
                    },
                    {
                        id: 11,
                        name: "Add Company",
                        url: "https://s3.us-west-1.amazonaws.com/angelusproductions.com/vip/addCompany.svg"
                    },
                    {
                        id: 12,
                        name: "Production  Day",
                        url: "https://s3.us-west-1.amazonaws.com/angelusproductions.com/vip/productionDay.svg"
                    },
                    {
                        id: 13,
                        name: "Project Files",
                        url: "https://s3.us-west-1.amazonaws.com/angelusproductions.com/vip/projectFiles.svg"
                    },
                    {
                        id: 14,
                        name: "Project Select 1",
                        url: "https://s3.us-west-1.amazonaws.com/angelusproductions.com/vip/projectSelect1.svg"
                    },
                    {
                        id: 15,
                        name: "Project Select 2",
                        url: "https://s3.us-west-1.amazonaws.com/angelusproductions.com/vip/projectSelect2.svg"
                    },
                    {
                        id: 16,
                        name: "Sales Dashboard 1",
                        url: "https://s3.us-west-1.amazonaws.com/angelusproductions.com/vip/salesDashboard1.svg"
                    },
                    {
                        id: 17,
                        name: "Sales Dashboard 2",
                        url: "https://s3.us-west-1.amazonaws.com/angelusproductions.com/vip/salesDashboard2.svg"
                    }
                ]
            },
            {
                id: 5,
                name: 'Orthopedic Research Dashboard',
                url: null,
                codeUrl: null,
                type: linkTypes.github,
                description: 'An orthopedic researcher\'s x-ray review dashboard.',
                date: new Date('2020-04'),
                screenshots: [
                    {
                        id: 1,
                        name: "Knee Research Dashboard Screenshot",
                        url: "https://s3.us-west-1.amazonaws.com/angelusproductions.com/x-ray-research/Knee+Research+Dashboard+Screenshot.jpg"
                    },
                    {
                        id: 2,
                        name: "Knee Research Rejected Screenshot",
                        url: "https://s3.us-west-1.amazonaws.com/angelusproductions.com/x-ray-research/Knee+Research+Rejected+Screenshot.HEIC"
                    }
                ]
            },
            {
                id: 6,
                name: 'Voyage of the Yellow Wellies',
                url: 'https://voyageoftheyellowwellies.netlify.app',
                codeUrl: 'https://github.com/AngelusProductions/Voyage-Of-The-Yellow-Wellies',
                type: linkTypes.github,
                description: 'Voyage of the Yellow Wellies is a personal journey of river exploration that encourages participation by putting viewers into a canoe with three different canoeists.',
                date: new Date('2020-03'),
                screenshots: [
                    {
                        id: 1,
                        name: "Yellow Wellies Landing",
                        url: "https://s3.us-west-1.amazonaws.com/angelusproductions.com/yellow-wellies/yellowWellies1.png"
                    },
                    {
                        id: 2,
                        name: "Yellow Wellies Modal",
                        url: "https://s3.us-west-1.amazonaws.com/angelusproductions.com/yellow-wellies/yellowWellies2.png"
                    }
                ]
            },
            {
                id: 7,
                name: 'Civitas Networks',
                url: 'https://civitasnetworks.com/',
                codeUrl: 'https://github.com/AngelusProductions/civitas-networks',
                type: linkTypes.github,
                description: 'Website for an emerging leader in 5G technology.',
                date: new Date('2020-03'),
                screenshots: [
                    {
                        id: 1,
                        name: "Civitas 1",
                        url: "https://s3.us-west-1.amazonaws.com/angelusproductions.com/civitas-networks/civitas1.PNG"
                    },
                    {
                        id: 2,
                        name: "Civitas 2",
                        url: "https://s3.us-west-1.amazonaws.com/angelusproductions.com/civitas-networks/civitas2.PNG"
                    },
                    {
                        id: 3,
                        name: "Civitas 3",
                        url: "https://s3.us-west-1.amazonaws.com/angelusproductions.com/civitas-networks/civitas3.PNG"
                    },
                    {
                        id: 4,
                        name: "Civitas 4",
                        url: "https://s3.us-west-1.amazonaws.com/angelusproductions.com/civitas-networks/civitas4.PNG"
                    },
                    {
                        id: 5,
                        name: "Civitas 5",
                        url: "https://s3.us-west-1.amazonaws.com/angelusproductions.com/civitas-networks/civitas5.PNG"
                    },
                    {
                        id: 6,
                        name: "Civitas 6",
                        url: "https://s3.us-west-1.amazonaws.com/angelusproductions.com/civitas-networks/civitas6.PNG"
                    },
                    {
                        id: 7,
                        "name": "Civitas 7",
                        "url": "https://s3.us-west-1.amazonaws.com/angelusproductions.com/civitas-networks/civitas7.PNG"
                    }
                ]
            },
        ]
    }
]

export default homeTabs