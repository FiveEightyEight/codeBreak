// ------ GLORBAL VARIABLES ------>> 

const navBtns = document.querySelector('.js-nav-buttons');
const episodes = document.querySelector('.js-episodes');


// ------- HELPERS ---------->>>


const episodeCard = (name, host, guest, description, img, link) => {
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

    return innerHTML = `
    <div class="card horizontal">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="${img}" style="height: auto; width: 200px;">
    </div>
    <div class="card-content row">
      <span class="card-title activator grey-text text-darken-4"><span class='h3'>${name} <span class='grey-text'>// ${guest}</span></span><i class="material-icons right">more_vert</i></span>
      <p>${description}</p>
        <div class="m-0 card-action">
            <a href="${link}">LISTEN TO EPISODE</a>
        </div>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4"><span class='h3'>${name} <span class='grey-text'>// ${guest}</span></span><i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
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
        link: 'https://soundcloud.com/codebreak-fivetwo/codebreak-pilot-victoria/s-FjgMP',
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