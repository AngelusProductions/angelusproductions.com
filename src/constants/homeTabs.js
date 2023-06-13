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
                linkUrl: 'https://open.spotify.com/track/3py4ky2bH10XE6Fn0QkEOY?si=584a3327ef924dbc',
                videoUrl: null,
                description: 'Eclectic single that contemplates if our best days are in front of us or still to come.',
                type: linkTypes.spotify
            },
            {
                id: 2,
                name: 'Our Tonight is Mine',
                artist: 'Jesse Boykins III',
                date: new Date('2014-11'),
                linkUrl: 'https://open.spotify.com/track/028Gy34lveEGjcmgWdw931?si=2c646b68a1ca4973',
                videoUrl: 'https://www.youtube.com/watch?v=MBemjMNfU9s',
                description: 'Sexy, brooding R&B track yearning for you to come home with it.',
                type: linkTypes.spotify
            },
            {
                id: 3,
                name: 'Our Tonight is Mine (Acoustic)',
                artist: 'Jesse Boykins III',
                date: new Date('2015-11'),
                linkUrl: null,
                videoUrl: 'https://www.youtube.com/watch?v=qgbL0beBVaM',
                description: 'Jesse strips down our steamy love song into a more intimate setting.',
                type: linkTypes.spotify
            },
            {
                id: 4,
                name: 'Show Me Who You Are (@ngelus mix)',
                artist: 'Jesse Boykins III',
                date: new Date('2014-11'),
                linkUrl: 'https://open.spotify.com/track/34AJ6p9LDGYCHeICBWXoem?si=1d411f899ca14ac1',
                videoUrl: null,
                description: "A wacky, playful take on Jesse and Machinedrum's 'Show Me Who You Are'",
                type: linkTypes.spotify
            },
            {
                id: 5,
                name: 'Wonder',
                artist: '@ngelus',
                date: new Date('2013-11'),
                linkUrl: 'https://soundcloud.com/coreyangelus/i-wonder',
                videoUrl: null,
                description: 'A short piano medley for those who want to think about the good things in life.',
                type: linkTypes.soundcloud
            },
            {
                id: 6,
                name: 'All I Want for Christmas is You (@ngelus mix)',
                artist: 'Dalma',
                date: new Date('2021-12'),
                linkUrl: 'https://soundcloud.com/coreyangelus/i-wonder',
                videoUrl: null,
                description: "2021 Cover of 'All I Want for Christmas is You'.",
                type: linkTypes.instagram
            },
            {
                id: 7,
                name: 'Last Christmas (@ngelus mix)',
                artist: 'Dalma',
                date: new Date('2021-12'),
                linkUrl: 'https://www.instagram.com/reel/CYK_K4RKVNF/',
                videoUrl: null,
                description: "A dark take on 'Last Christmas' by George Michael.",
                type: linkTypes.instagram
            },
            {
                id: 8,
                name: 'All I Want for Christmas is You (@ngelus mix)',
                artist: 'Dalma',
                date: new Date('2022-12'),
                linkUrl: 'https://www.instagram.com/reel/CmnHyBsq2L-/',
                videoUrl: null,
                description: "A hypercharged take on 'Last Christmas' by George Michael.",
                type: linkTypes.instagram
            },
            {
                id: 9,
                name: 'Times Like These (@ngelus mix)',
                artist: 'Dalma',
                date: new Date('2022-11'),
                linkUrl: 'https://www.instagram.com/reel/Cbnoik6ld6_/',
                videoUrl: null,
                description: "Little arpeggiated remix of 'Times Like These' in honor of Taylor Hawkins's passing.",
                type: linkTypes.instagram
            },
            {
                id: 10,
                name: "Don't Panic!",
                artist: '@ngelus',
                date: new Date('2022-08'),
                linkUrl: 'https://www.instagram.com/p/ChDJxmIgbWU/',
                videoUrl: null,
                description: "Everyone just chill.",
                type: linkTypes.instagram
            },
            {
                id: 11,
                name: "Party on Mars!",
                artist: '@ngelus',
                date: new Date('2023-02'),
                linkUrl: 'https://youtube.com/shorts/xJKzaTgfrVc?feature=share',
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
                linkUrl: 'https://youtu.be/XWY1qSwm6vI',
                date: new Date('2023-06'),
                description: 'My acting reel as of 2023!',
                linkType: linkTypes.imdb
            },
            {
                id: 2,
                name: 'iVisa Saves the Day',
                linkUrl: 'https://www.instagram.com/p/CYkI_vAl_qF/',
                date: new Date('2022-01'),
                description: "iVisa.com was there when I needed it most.",
                linkType: linkTypes.instagram
            },
            {
                id: 3,
                name: 'One Slap to Rule Them All',
                linkUrl: 'https://www.instagram.com/p/Cb5yjjnFYeX/',
                date: new Date('2022-04'),
                description: "I had some costumes and just had to give my 2022 Oscars take.",
                linkType: linkTypes.instagram
            },
            {
                id: 4,
                name: 'Annoying Couple Milestones',
                linkUrl: 'https://www.instagram.com/p/Cc6AcsLFBog/',
                date: new Date('2022-04'),
                description: "Some couples should just keep it to themselves.",
                linkType: linkTypes.instagram
            },
            {
                id: 5,
                name: 'Jonhnny & Amber',
                linkUrl: 'https://www.instagram.com/p/Cdgj7k4A8Ey/',
                date: new Date('2022-05'),
                description: "A poo has many names.",
                linkType: linkTypes.instagram
            },
            {
                id: 6,
                name: 'Self Tape Shenanigans',
                linkUrl: 'https://www.instagram.com/p/CnNngFSKFPF/',
                date: new Date('2023-01'),
                description: "I'm a damn good reader!",
                linkType: linkTypes.instagram
            },
            {
                id: 7,
                name: 'What Makes a Man Sexy',
                linkUrl: 'https://www.instagram.com/p/Cnh4KcVKLpc/',
                date: new Date('2023-01'),
                description: "I don't understand women...",
                linkType: linkTypes.instagram
            },
            {
                id: 8,
                name: 'I Guess I Can Teach You...',
                linkUrl: 'https://www.instagram.com/p/Cn5TG7Frla0/',
                date: new Date('2023-01'),
                description: "I'm a white male with privilege and I'm not afraid to parody it.",
                linkType: linkTypes.instagram
            },
            {
                id: 9,
                name: 'The Lounge Singer Clip (with Johnny)',
                linkUrl: 'https://www.instagram.com/p/Csuf2Tbpebq/',
                date: new Date('2023-05'),
                description: "C'mon Johnny, give Candy a break!",
                linkType: linkTypes.instagram
            },
            {
                id: 10,
                name: "How to Tell If They're the One",
                linkUrl: 'https://www.instagram.com/p/CaSbELwpn1L/',
                date: new Date('2023-02'),
                description: "To be fair, Sex and the City is a modern classic.",
                linkType: linkTypes.instagram
            },
            {
                id: 11,
                name: "Lonely Boys Don't Do No Lovin'",
                linkUrl: 'https://www.youtube.com/watch?v=4sc8o7Zls7E',
                date: new Date('2013-10'),
                description: "Old NYU short film from Gordon Hale (stay until the end for a shot of my ass!).",
                linkType: linkTypes.youtube
            },
            {
                id: 12,
                name: "The Fact that He Leaves",
                linkUrl: 'https://www.youtube.com/watch?v=VWlElNRlO94',
                date: new Date('2011-04'),
                description: "A short film from Yi Zhong. I got to make out with a girl!",
                linkType: linkTypes.youtube
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
                linkUrl: 'https://practice-makes.netlify.app',
                codeUrl: 'https://github.com/AngelusProductions/practice-makes',
                imageUrl: '',
                description: 'Website for "Practice Makes" monthly design meetup @ Intrepid Pursuits using Gatsby.js',
                date: new Date('2020-02')
            },
            {
                id: 2,
                name: 'Voyage of the Yellow Wellies',
                linkUrl: 'https://voyageoftheyellowwellies.netlify.app',
                codeUrl: 'https://github.com/AngelusProductions/Voyage-Of-The-Yellow-Wellies',
                imageUrl: '',
                description: 'Voyage of the Yellow Wellies is a personal journey of river exploration that encourages participation by putting viewers into a canoe with three different canoeists.',
                date: new Date('2020-03')
            },
            {
                id: 3,
                name: 'Civitas Networks',
                linkUrl: 'https://civitasnetworks.com/',
                codeUrl: null,
                imageUrl: '',
                description: 'Website for an emerging leader in 5G technology.',
                date: new Date('2020-03')
            },
            {
                id: 4,
                name: "DalmaDaniela.com",
                linkUrl: 'https://dalmadaniela.com/',
                codeUrl: null,
                imageUrl: '',
                description: "My wife's personal website!",
                date: new Date('2023-05')
            },
        ]
    }
]

export default homeTabs