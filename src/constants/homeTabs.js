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
                url: 'https://soundcloud.com/coreyangelus/i-wonder',
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
                description: "Who wans to party on Mars??",
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
                type: linkTypes.imdb
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
                name: 'Jonhnny & Amber',
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
                imageUrl: '',
                type: linkTypes.github,
                description: 'Website for "Practice Makes" monthly design meetup @ Intrepid Pursuits using Gatsby.js',
                date: new Date('2020-02')
            },
            {
                id: 2,
                name: 'Voyage of the Yellow Wellies',
                url: 'https://voyageoftheyellowwellies.netlify.app',
                codeUrl: 'https://github.com/AngelusProductions/Voyage-Of-The-Yellow-Wellies',
                imageUrl: '',
                type: linkTypes.github,
                description: 'Voyage of the Yellow Wellies is a personal journey of river exploration that encourages participation by putting viewers into a canoe with three different canoeists.',
                date: new Date('2020-03')
            },
            {
                id: 3,
                name: 'Civitas Networks',
                url: 'https://civitasnetworks.com/',
                codeUrl: null,
                imageUrl: '',
                type: linkTypes.github,
                description: 'Website for an emerging leader in 5G technology.',
                date: new Date('2020-03')
            },
            {
                id: 4,
                name: "DalmaDaniela.com",
                url: 'https://dalmadaniela.com/',
                codeUrl: null,
                imageUrl: '',
                type: linkTypes.github,
                description: "My wife's personal website!",
                date: new Date('2023-05')
            },
        ]
    }
]

export default homeTabs