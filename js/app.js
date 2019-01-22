// ------ GLORBAL VARIABLES ------>> 

const navBtns = document.querySelector('.js-nav-buttons');
const episodes = document.querySelector('.js-episodes');
const home = document.querySelector('.js-home');
const aboutUs = document.querySelector('.js-aboutus');
const main = document.querySelector('.js-main');
const schedule = document.querySelector('.js-schedule');


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
        const e = episodes[i];
        e.name, e.host, e.host_img, e.guest, e.description, e.image, e.link

        innerHTML += `
        <div class="card horizontal row">
            <div class="col s5 card-image waves-effect waves-block waves-light">
                <img class="activator" src="${e.image}" style="height: auto; width: 200px;">
            </div>
            <div class="col s7 card-content row">
                <span class="card-title activator grey-text text-darken-4"><span class='h3'>${e.name} <span class='grey-text'>// ${e.guest}</span></span><i class="material-icons right">more_vert</i></span>
                <p>${e.description}</p>
                <div class="m-0 card-action">
                    <a href="${e.link}">LISTEN TO EPISODE</a>
                </div>
            </div>
            <div class="card-reveal row">
                <span class="col s12 card-title grey-text text-darken-4"><span class='h3'>${e.name} <span class='grey-text'>// ${e.guest}</span></span><i class="material-icons right">close</i></span>
                <ul class="collection">
                <li class="collection-item avatar">
                  <img src="${e.host_img}" alt="" class="circle">
                  <span class="title">Host</span>
                  <p>${e.host} <br>
                  </p>
                  <a href="${e.host_link}" class="secondary-content"><i class="material-icons">code</i></a>
                  </li>
                  <li class="collection-item avatar">
                  <img src="${e.image}" alt="" class="circle">
                  <span class="title">Guest</span> 
                  <p>${e.guest} <br>
                  </p>
                  <a href="${e.guest_link}" class="secondary-content"><i class="material-icons">code</i></a>
                </li>
                </ul
            </div>
        </div>
    `
    }
    return innerHTML;

    // old card render
     /*
        return innerHTML = `
        <div class="col s12 m7">
            <h2 class="header">${name}</h2>
            <div class="card horizontal">
                <div class="card-image">
                    <img src="${img}" style='height: auto; width: 200px';>
                    <span class="card-title black-text flow-text" style='font-size: 20px;'>${guest}</span> 
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                        <p>${description}</p>
                    </div>
                    <div class="card-action">
                        <a href="${link}">LISTEN TO EPISODE</a>
                    </div>
                </div>
            </div>
        </div>
        `
    */
};



// ----- STATE ----- >>

let state = {

    page: 0,
    schedule: [{
        guest: 'Jorge Billini',
        record: '01/26/2019',
        date: '01/27/2019',
        note: undefined,
    }, {
        guest: 'Osita Igwe',
        date: 'TBD',
        note: 'Second Interview',
    }, ],
    episodes: [{
        season: 0,
        name: 'Pilot',
        host: 'Daniel Ashley',
        host_img: 'assets/images/daniel_ashley.png',
        host_link:'https://github.com/DanielEduardoAshley',
        guest: 'Victoria Buchanan',
        description: 'Guest description goes here',
        image: 'assets/images/victoria_buchanan.png',
        guest_link:'https://github.com/VictoriaBuchanan27',
        link: 'https://soundcloud.com/codebreak-fivetwo/codebreak-pilot-victoria/s-FjgMP',
    }],

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