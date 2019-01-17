// ------ GLORBAL VARIABLES ------>> 

const navBtns = document.querySelector('.js-nav-buttons');
const episodes = document.querySelector('.js-episodes');


// ------- HELPERS ---------->>>


const episodeCard = (name, host, guest, description, img, link) => {

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

};



// ----- STATE ----- >>

let state = {

    page: 0,
    episode: [{
        season: 0,
        name: 'Pilot',
        host: 'Daniel Ashley',
        guest: 'Victoria Buchanan',
        description: 'Guest description goes here',
        image: 'assets/images/victoria_buchanan.png',
    }],

};


// ------- RENDER ----- >>>


const render = (state) => {

    switch (state.page) {

        case 0:
            episodes.innerHTML = '';
            for (let i = 0; i < state.episode.length; i++) {

                const e = state.episode[i];

                episodes.innerHTML += episodeCard(e.name, e.host, e.guest, e.description, e.image, e.link);

            }
            break;
    }
};


render(state);