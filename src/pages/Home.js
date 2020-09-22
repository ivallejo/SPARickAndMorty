import getData from '../utils/getData'

const Home = async () => {
    const characters = await getData()
    console.log(characters)
    const view = `
        <div class="columns is-multiline is-centered">
            ${characters.results.map(character => `
                <div class="column is-full-touch is-half-desktop is-2-widescreen is-2-fullhd ">
                    <div class="card is-shadowless">
                        <div class="card-image">
                            <a href="#/${character.id}/" rel="${character.name}" class="image">
                                <figure class="image">
                                    <img data-src="${character.image}" alt="${character.name}" class="is-rounded" src="${character.image}" lazy="loaded">
                                </figure> 
                                <div class="is-medium is-white score-tag tag has-text-grey-light">
                                    <div class="raiting-container">
                                        <div class="title has-margin-7-bottom is-size-6-fullhd is-size-6-widescreen is-size-5-desktop is-size-4-tablet is-size-4-mobile">
                                            <span>${character.species}</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <div class="is-hidden-mobile"><span class="level-tag is-${status(character.status)} tag">${character.status}</span></div>
                        </div>
                        <div class="card-content content">
                            <div class="title has-margin-7-bottom is-size-6-fullhd is-size-6-widescreen is-size-5-desktop is-size-4-tablet is-size-4-mobile is-uppercase">
                                <a href="#/${character.id}/" title="${character.name}" rel="${character.name}">${character.name.substring(0,15)} ...</a>
                            </div>
                            <div><span class="icon"><i class="fas fa-globe-americas"></i></span> <span>${character.location.name.substring(0,10)} ...</span></div>
                            <div><span class="icon"><i class="fas fa-${character.gender.toLocaleLowerCase()}"></i></span> <span>${character.gender} </span></div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `
    return view
}

const status = (status) => {
    let statusClass =''
    switch (status) {
        case 'Alive':
            statusClass = 'primary'
          break;
        case 'Dead':
            statusClass = 'danger'
          break;
        default:
            statusClass = 'warning'
          break;
      }
    return statusClass
}

export default Home