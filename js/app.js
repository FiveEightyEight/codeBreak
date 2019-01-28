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
    let innerHTML = '';
    for (let i = 0; i < schedule.length; i++) {
        const guest = schedule[i];
        innerHTML += `
        <li class="collection-item">
        <div>
        ${guest.guest}
        <span class='secondary-content'>
        Release: 
        ${guest.date}
        </span>
        </div>
        </li>
        `;
    };
    return `
        <ul class="collection with-header">
            <li class="collection-header">
                <h4>Schedule</h4>
            </li>
            ${innerHTML}
        </ul>
    `
};

const episodeCard = (episodes) => {

    let innerHTML = '';
    for (let i = 0; i < episodes.length; i++) {
        const e = episodes[episodes.length - i - 1];
        // e.name, e.host, e.host_img, e.guest, e.description, e.image, e.link

        innerHTML += `
        <div class="col s12 row card horizontal" data-index=${i}>
            <div class="col s5 card-image waves-effect waves-block waves-light">
                <img class="activator" src="${e.image}" style="height: auto; width: 200px;">
            </div>
            <div class="col s7 card-content row">
                <span class="card-title activator grey-text text-darken-4"><span class='h3'>${e.name} <span class='grey-text'>// ${e.guest}</span></span><i class="material-icons right">more_vert</i></span>
                <p>${e.description}</p>
                <div class="m-0 card-action">
                    <a target='_blank' href="${e.link}">LISTEN TO EPISODE</a>
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
    
    for (let i = 0; i < hosts.length; i ++){
        const host = hosts[i].toLowerCase();
        if (i === 0) {
            innerHTML +=`
            <li class="collection-item avatar">
                <img src="${ALLhosts[host].host_img}" alt="" class="circle">
                <span class="title">Host</span>
                <p>${ALLhosts[host].host} <br>
                </p>
                <a href="${ALLhosts[host].host_link}" class="secondary-content"><i class="material-icons">code</i></a>
            </li>`
            continue;
        } else  {
            innerHTML +=`
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



// ----- STATE ----- >>

let state = {

    page: 0,
    schedule: [{
        guest: 'Jorge Billini',
        record: '01/27/2019',
        date: '01/29/2019',
        note: undefined,
    }, {
        guest: 'Alexander',
        record: '01/27/2019',
        date: '01/29/2019',
        note: undefined,
    }, {
        guest: 'Osita Igwe',
        date: 'TBD',
        note: 'Second Interview',
    }, ],
    episodes: [{
            season: 0,
            name: 'Pilot',
            host: ['Daniel'],
            guest: 'Victoria Buchanan',
            description: 'Guest description goes here',
            image: 'assets/images/victoria_buchanan.png',
            guest_link: 'https://github.com/VictoriaBuchanan27',
            link: 'https://soundcloud.com/codebreak-fivetwo/codebreak-pilot-victoria/s-FjgMP',
        },
        {
            season: 0,
            name: 'Episode 1',
            host: ['Daniel', 'Victoria'],
            guest: 'Osita Igwe',
            description: 'Guest description goes here',
            image: 'assets/images/osita_igwe.png',
            guest_link: 'https://github.com/oigwe',
            link: 'https://soundcloud.com/codebreak-fivetwo/codebreak-01-osita/s-90ux5',
        },
        {
            season: 0,
            name: 'Episode 2',
            host: ['Daniel', 'Victoria'],
            guest: 'Alexander Onate',
            description: 'Guest description goes here',
            image: 'assets/images/alexander_onate.png',
            guest_link: 'https://github.com/aionate0812',
            link: undefined,
        },
        {
            season: 0,
            name: 'Episode 3',
            host: ['Daniel', 'Victoria'],
            guest: 'Jorge Billini',
            description: 'Guest description goes here',
            image: 'assets/images/jorge_billini.png',
            guest_link: 'https://github.com/JorgeBillini',
            link: undefined,
        },
    ],

};


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