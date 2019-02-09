// ------ GLORBAL VARIABLES ------>> 

const navBtns = document.querySelector('.js-nav-buttons');
const episodes = document.querySelector('.js-episodes');
const home = document.querySelector('.js-home');
const aboutUs = document.querySelector('.js-aboutus');
const main = document.querySelector('.js-main');
const schedule = document.querySelector('.js-schedule');


// ------- HOSTS  ---------->>>
const ALLhosts = {
    daniel: {
        host: 'Daniel Ashley',
        host_img: 'assets/images/daniel_ashley.png',
        host_link: 'https://github.com/DanielEduardoAshley',
    },
    victoria: {
        host: 'Victoria Buchanan',
        host_img: 'assets/images/victoria_buchanan.png',
        host_link: 'https://github.com/VictoriaBuchanan27',
    }
}

// ------- EVENTS ---------->>>

home.addEventListener('click', e => {
    state.page = 0;
    render(state);
});

aboutUs.addEventListener('click', e => {
    state.page = 2;
    render(state);
});


// ------- HELPERS ---------->>>

const scheduleCard = (schedule) => {
    let innerPre = '';
    let innerPost = '';
    for (let i = 0; i < schedule.length; i++) {
        const guest = schedule[i];
        if (guest.released) {

            innerPost += `
            <li class="collection-item" style="height: auto;">
            <div>
            ${guest.guest}
            <span class='secondary-content'> 
            ${guest.date}
            </span>
            </div>
            </li>
            `;

        } else {
            innerPre += `
            <li class="collection-item" style="height: auto;">
            <div>
            ${guest.guest}
            <span class='secondary-content'> 
            ${guest.record}
            </span>
            </div>
            </li>
            `;
        }
    };
    return `
        <ul class="collection with-header">
            <li class="collection-header">
                <h4>Recordings</h4>
            </li>
            ${innerPre}
        </ul>
        <ul class="collection with-header">
            <li class="collection-header">
                <h4>Released</h4>
            </li>
            ${innerPost}
        </ul>
    `
};

const episodeCard = (episodes) => {

    let innerHTML = '';
    for (let i = 0; i < episodes.length; i++) {
        const e = episodes[episodes.length - i - 1];
        // e.name, e.host, e.host_img, e.guest, e.description, e.image, e.link
        // flow-text
        innerHTML += `
        <div class="col s12 row card horizontal" data-index=${i} style="height: auto;">
            <div class="col s5 card-image waves-effect waves-block waves-light">
                <img class="activator" src="${e.image}" style="height: auto; width: auto;">
            </div>
            <div class="col s7 card-content  row" style='margin-bottom: 0px; padding: 10px 10px 0px 0px;'>
                <span class="card-title activator grey-text text-darken-4"><span class='h3'>${e.name} <span class='grey-text'>// ${e.guest}</span></span><i class="material-icons right">more_vert</i></span>
                <p class='' style="height: 100px; overflow: scroll;">${e.description}</p>
                <div class="m-0 card-action" style='margin-bottom: 0px; padding: 0;'>
                    ${isLinkAvailable(e.link, e.embed)}
                </div>
            </div>
            <div class="card-reveal row">
                <span class="col s12 card-title grey-text text-darken-4"><span class='h3'>${e.name} <span class='grey-text'>// ${e.guest}</span></span><i class="material-icons right">close</i></span>
                <ul class="collection">
                
                    ${hostReveal(e.host)}

                    <li class="collection-item avatar">
                        <img src="${e.image}" alt="" class="circle">
                        <span class="title">Guest</span> 
                        <p>${e.guest} <br>
                        </p>
                        <a href="${e.guest_link}" class="secondary-content"><i class="material-icons">code</i></a>
                    </li>
                </ul>
            </div>
        </div>
    `
    }
    return innerHTML;
};

const hostReveal = (hosts) => {
    let innerHTML = '';

    for (let i = 0; i < hosts.length; i++) {
        const host = hosts[i].toLowerCase();
        if (i === 0) {
            innerHTML += `
            <li class="collection-item avatar">
                <img src="${ALLhosts[host].host_img}" alt="" class="circle">
                <span class="title">Host</span>
                <p>${ALLhosts[host].host} <br>
                </p>
                <a href="${ALLhosts[host].host_link}" class="secondary-content"><i class="material-icons">code</i></a>
            </li>`
            continue;
        } else {
            innerHTML += `
            <li class="collection-item avatar">
                <img src="${ALLhosts[host].host_img}" alt="" class="circle">
                <span class="title">Co-host</span>
                <p>${ALLhosts[host].host} <br>
                </p>
                <a href="${ALLhosts[host].host_link}" class="secondary-content"><i class="material-icons">code</i></a>
            </li>`
        }
    }
    return innerHTML;
};

const isLinkAvailable = (link, embed) => {

    if (link) {
        return `<a target='_blank' href="${link}"><em>LISTEN ON SOUNDCLOUD</em></a>
        <div style='margin: 10px 0px 5px 0px; overflow: auto; padding:5px 0px 20px 0px;'>
        <iframe width="auto" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${embed}&color=%22ff5500&inverse=false&auto_play=false&show_user=false"></iframe>
        </div>

        `
    } else {
        return `<span class='grey-text'  href="#">EPISODE UNAVAILABLE</span>`
    }
}


// ----- STATE ----- >>

let state = {
    //stephanie-durandisse/
    page: 0,
    schedule: [{
        guest: 'Malcolm Barbee',
        record: '02/03/2019',
        date: '02/05/2019',
        note: undefined,
        released: false,
    }, {
        guest: 'Stephanie Durandisse',
        record: '02/03/2019',
        date: '02/04/2019',
        note: undefined,
        released: false,
    }, {
        guest: 'Erika Perez',
        record: '02/02/2019',
        date: '02/05/2019',
        note: undefined,
        released: true,
    }, {
        guest: 'Steve Regis',
        record: '02/02/2019',
        date: '02/04/2019',
        note: undefined,
        released: true,
    }, {
        guest: 'Jorge Billini',
        record: '01/27/2019',
        date: '01/31/2019',
        note: undefined,
        released: true,
    }, {
        guest: 'Alexander',
        record: '01/27/2019',
        date: '01/29/2019',
        note: undefined,
        released: true,
    }, {
        guest: 'Osita Igwe',
        date: '1/13/2019',
        note: 'Second Interview',
        released: true,
    }, {
        guest: 'Victoria Buchanan',
        date: '1/11/2019',
        note: 'Second Interview',
        released: true,
    }, ],
    episodes: [{
            season: 0,
            name: 'Pilot',
            host: ['Daniel'],
            guest: 'Victoria Buchanan',
            description: 'Bright, congenial, and energetic; Ms. Buchanan kicks off codeBreak as our first interviewee!',
            image: 'assets/images/victoria_buchanan.png',
            guest_link: 'https://github.com/VictoriaBuchanan27',
            link: 'https://soundcloud.com/codebreak-fivetwo/codebreak-pilot-victoria/s-FjgMP',
            embed: '562206051%3Fsecret_token%3Ds-FjgMP',
        },
        {
            season: 0,
            name: 'Episode 1',
            host: ['Daniel', 'Victoria'],
            guest: 'Osita Igwe',
            description: 'Join myself Daniel Ashley and Victoria Buchanan your hosts at CodeBreak, as in this episode we welcome Osita Igwe Full Stack Web Developer and class cohort lead 5.2. Discover the unique journey that led her to programming and her interest in streamlining everyday difficulties with technology. We also discover some of her hidden talents and interests outside of coding (Ask her about Strictly Come Dancing!) and hear her 1 minute elevator pitch about who is Osita Igwe!',
            image: 'assets/images/osita_igwe.png',
            guest_link: 'https://github.com/oigwe',
            link: 'https://soundcloud.com/codebreak-fivetwo/codebreak-01-osita/s-90ux5',
            embed: '562928241%3Fsecret_token%3Ds-90ux5',
        },
        {
            season: 0,
            name: 'Episode 2',
            host: ['Daniel', 'Victoria'],
            guest: 'Alexander Onate',
            description: 'Join myself Daniel Ashley and Victoria Buchanan your hosts at CodeBreak, as we welcome Alex Ajonte Full Stack Web Developer and Tech Lead 5.2. In this episode, I learn Spanish and we discuss the brave tenacity that brought Alex to the program. We talk about entrepreneurship and the value in asking for help. We also learn about what tech company he is eyeing and why. Ask him about his love of podcasts and how many hours he has logged listening to them in a week!',
            image: 'assets/images/alexander_onate.png',
            guest_link: 'https://github.com/aionate0812',
            link: 'https://soundcloud.com/codebreak-fivetwo/codebreak-02-alex/s-tTYS7',
            embed: '566849550%3Fsecret_token%3Ds-tTYS7',
        },
        {
            season: 0,
            name: 'Episode 3',
            host: ['Daniel', 'Victoria'],
            guest: 'Jorge Billini',
            description: 'Join myself Daniel Ashley and Victoria Buchanan your hosts at CodeBreak, as we welcome Jorge Billini Full Stack Web Developer 5.2. In this episode, we talk about his life long love of technology and what first sparked his interest in software. We talk about the power of images and data worth a thousand words. We round it out by asking him to give us his one minute pitch on who is Jorge Billini. Ask him about combining his love of music, video games, photography and coding!',
            image: 'assets/images/jorge_billini.png',
            guest_link: 'https://github.com/JorgeBillini',
            link: 'https://soundcloud.com/codebreak-fivetwo/codebreak-03-jorge-1/s-2oIM5',
            embed: '568047414%3Fsecret_token%3Ds-2oIM5',
        },
        {
            season: 0,
            name: 'Episode 4',
            host: ['Victoria', 'Daniel'],
            guest: 'Steve Regis',
            description: 'Father, entrepreneur, theorist. Steve gives us a look into his past and dives deep into his source of motivation.',
            image: 'assets/images/steve_regis.png',
            guest_link: 'https://github.com/CodeXRook',
            link: 'https://soundcloud.com/codebreak-fivetwo/04-steve/s-mz4RM',
            embed: '570219507%3Fsecret_token%3Ds-mz4RM',
        }, {
            season: 0,
            name: 'Episode 5',
            host: ['Daniel', 'Victoria'],
            guest: 'Erika Perez',
            description: 'A mother of two with an unyielding fervid zeal, Erika tells us about her journey to the program.',
            image: 'assets/images/erika_perez.png',
            guest_link: 'https://github.com/Eyiperez',
            link: 'https://soundcloud.com/codebreak-fivetwo/04-erica/s-oMpCJ',
            embed: '569678814%3Fsecret_token%3Ds-oMpCJ',
        }, {
            season: 0,
            name: 'Episode 6',
            host: ['Daniel', 'Victoria'],
            guest: 'Stephanie Durandisse',
            description: 'Discription Pending',
            image: 'assets/images/stephanie_durandisse.png',
            guest_link: 'https://github.com/sdurandisse3',
            link: undefined,
            embed: '569678814%3Fsecret_token%3Ds-oMpCJ',
        },
    ],

};

//https://soundcloud.com/codebreak-fivetwo/04-erica/s-oMpCJ
// ------- RENDER ----- >>>


const render = (state) => {

    switch (state.page) {

        case 0:
            episodes.innerHTML = '';
            episodes.innerHTML += episodeCard(state.episodes);
            schedule.innerHTML = '';
            schedule.innerHTML = scheduleCard(state.schedule);
            break;

        case 2:
            episodes.innerHTML = '';
            schedule.innerHTML = '';
            break;
    }
};


render(state);