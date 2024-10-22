// creating an array with all movie gernes and movie details
let allMovies = [
    {
        gerne: "Action",
        movies: [
            {
                title: "Plane",
                thumb: "plane.png",
                desc: "On an initially routine flight, the protagonist ends up saving passengers through an emergency landing following a lightning strike.",
                actors: [ "Gerard Butler", "Mike Colter", "Tony Goldwyn", "Yoson An" ],
                trailer: "<iframe class=\"responsive-iframe\" src=\"https://www.youtube.com/embed/M25zXBIUVr0?si=cuWjtYX5lYXaz5NP\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
                date: "02-13-2023",
                length: "108"
            },
            {
                title: "Kill Boksoon",
                thumb: "kill-boksoon.png",
                desc: "A South Korean crime action movie, Kill Boksoon has mostly flown under the radar but deserves much more attention from viewers and critics alike. ",
                actors: [ "Jeon Do-yeon", "Esom", "Koo Kyo-hwan", "Hwang Jung-min" ],
                trailer: "<iframe class=\"responsive-iframe\" src=\"https://www.youtube.com/embed/70e5RjgkHjU?si=nPx-eOjZVlIJzO91\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>",
                date: "03-31-2023",
                length: "137"
            },
            {
                title: "Fast X",
                thumb: "fast-x.png",
                desc: "The tenth go-around in the main Fast & Furious franchise sees Dom Toretto (Vin Diesel) and co. teaming up to thwart Dante Reyes (Jason Momoa).",
                actors: [ "Vin Diesel" , "Jordana Brewster" , "Tyrese Gibson" , "Michelle Rodriguez" , "Sung Kang" , "Ludacris" , "Jason Momoa" , "John Cena" ],
                trailer: "<iframe class=\"responsive-iframe\" src=\"https://www.youtube.com/embed/32RAq6JzY-w?si=68a_N2EOX4hH3Mrj\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>",
                date: "05-19-2023",
                length: "141"
            },
            {
                title: "Indiana Jones and the Dial of Destiny",
                thumb: "indiana-jones.png",
                desc: "Another nostalgia trip, the first Indiana Jones movie since the much-maligned Kingdom of the Crystal Skull was one of the most highly anticipated films of the year.",
                actors: [ "Harrison Ford" , "Antonio Banderas" , "Boyd Holbrook" , "Phoebe Waller-Bridge" ],
                trailer: "<iframe class=\"responsive-iframe\" src=\"https://www.youtube.com/embed/ZfVYgWYaHmE?si=RYNPMs3KEfku4Xwp\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>",
                date: "03-31-2023",
                length: "142"
            },
            {
                title: "Ballerina",
                thumb: "ballerina.png",
                desc: "In one of the many films clearly following in John Wick's stylish footsteps, Jeon Jong-seo stars as Jang Ok-ju, a former bodyguard who turns into an unstoppable force for revenge in Ballerina. ",
                actors: [ "Jeon Jong-seo" , "Kim Ji-hoon" , "Park Yu-rim" ],
                trailer: "<iframe class=\"responsive-iframe\" src=\"https://www.youtube.com/embed/IhXfUTGVEUI?si=qn0tPQ96Sd3UUkZ3\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>",
                date: "03-31-2023",
                length: "142"
            },
            {
                title: "Polite Society",
                thumb: "polite-society.png",
                desc: "London teenager Ria Khan (Priya Kansara) dreams of being a stuntwoman. She spends her days filming martial arts clips with her older sister Lena. ",
                actors: [ "Priya Kansara" , "Ritu Arya" , "Renu Brindle" , "Seraphina Beh" ],
                trailer: "<iframe class=\"responsive-iframe\" src=\"https://www.youtube.com/embed/TRFM7HQmkH0?si=5ypErhCZwGbm2re0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>",
                date: "04-28-2023",
                length: "104"
            },
            {
                title: "Sisu",
                thumb: "sisu.png",
                desc: "Aatami Korpi (Jorma Tommila) is a solitary prospector living with his horse and Bedlington Terrier in the Finnish Lapland wilderness at the end of World War II.",
                actors: [ "Jorma Tommila" , "Onni Tommila" , "Jack Doolan" , "Aksel Hennie" ],
                trailer: "<iframe class=\"responsive-iframe\" src=\"https://www.youtube.com/embed/OGbr-aAnKTo?si=CfKSxiNYpYqCLxHp\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>",
                date: "04-28-2023",
                length: "91"
            },
            {
                title: "The Killer",
                thumb: "thekiller.png",
                desc: "Michael Fassbender stars here as an unnamed assassin who meticulously plans and executes his hits.",
                actors: ["Michael Fassbender" , "Tilda Swinton" , "Charles Parnell" , "Monique Ganderton"],
                trailer: "<iframe class=\"responsive-iframe\" src=\"https://www.youtube.com/embed/5S7FR_HCg9g?si=yxLQKqUTtVETT4an\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>",
                date: "11-10-2023",
                length: "118"
            }
        ]
    },
    {
        gerne: "Commedy",
        movies: [
            {
                title: "Dream Scenario",
                thumb: "dream-scenario.png",
                desc: "This black comedy fantasy by Kristoffer Borgli — produced by the fan-favorite horror director Ari Aster — stars Nicolas Cage at its center.",
                actors: ["Nicolas Cage" , "Julianne Nicholson" , "Tim Meadows" , "Dylan Gelula"],
                trailer: "<iframe class=\"responsive-iframe\" src=\"https://www.youtube.com/embed/bZBCWMv5WFU?si=ec4Dfb3napGcmoVX\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
                date: "11-10-2023",
                length: "100"
            },
            {
                title: "Bottoms",
                thumb: "bottoms.png",
                desc: "Featuring two of the most promising young stars of their generation — The Bear's Ayo Edebiri and Shiva Baby's Rachel Sennott",
                actors: ["Nicholas Galitzine" , "Ayo Edebiri" , "Dagmara Dominczyk" , "Rachel Sennott"],
                trailer: "<iframe class=\"responsive-iframe\" src=\"https://www.youtube.com/embed/vH5NAahf76s?si=CwpHmvDC1Mq_3TPE\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>",
                date: "08-25-2023",
                length: "92"
            },
            {
                title: "Beau Is Afraid",
                thumb: "beau-is-afraid.png",
                desc: "Ari Aster's latest feature steps into tragicomedy ground by throwing drama, horror, and comedy into the mix. ",
                actors: ["Joaquin Phoenix" , "Parker Posey" , "Amy Ryan" , "Richard Kind" , "Nathan Lane" , "Patti LuPone"],
                trailer: "<iframe class=\"responsive-iframe\" src=\"https://www.youtube.com/embed/32RAq6JzY-w?si=68a_N2EOX4hH3Mrj\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>",
                date: "04-21-2023",
                length: "179"
            }
        ]
    }
]