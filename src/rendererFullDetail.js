const renderers = {
  starship: (oShip) => {
    return `Starship name: ${oShip.name}</br> 
   Starship model: ${oShip.model}</br>
   Starship megalight: ${oShip.MGLT}</br>
   Starship length: ${oShip.length}</br>
   Starship manufacturer: ${oShip.manufacturer}</br> 
   Starship cost in credits: ${oShip.cost_in_credits}</br>
   Crew: ${oShip.crew}</br>
   Featured in films: ${oShip.films}</br>
   Pilots: ${oShip.pilots}</br>
   Starship record created: ${new Date(Date.parse(oShip.created)).toLocaleDateString()}</br>
   `;
  },
  people: (oPeople) => {return `
  Name: ${oPeople.name}</br>
  Gender: ${oPeople.gender}</br>
  Height: ${oPeople.height}</br>
  Mass: ${oPeople.mass}</br>
  Hair color: ${oPeople.hair_color}</br>
  Eye color: ${oPeople.eye_color}</br>
  Skin color: ${oPeople.skin_color}</br>
  Birthplace: ${oPeople.homeworld}</br>
  Featured in films: ${oPeople.films}</br>
  Person record created: ${new Date(Date.parse(oPeople.created)).toLocaleDateString()}</br>
  `},
  planets: (oPlanets) => {return `
  Planet name: ${oPlanets.name}</br>
  Orbital period of the Planet: ${oPlanets.orbital_period}</br>
  Rotation period of the Planet: ${oPlanets.rotation_period}</br>
  Planet climate: ${oPlanets.climate}</br>
  Planet diameter: ${oPlanets.diameter}</br>
  Residents: ${oPlanets.residents}</br>
  Terrain: ${oPlanets.terrain}</br>
  Population: ${oPlanets.population}</br>
  Gravity: ${oPlanets.gravity}</br>
  Planet record created: ${new Date(Date.parse(oPlanets.created)).toLocaleDateString()}</br>
  `},
  films: (oFilm) => {return `
  Director: ${oFilm.director}</br>
  Producer: ${oFilm.producer}</br>
  Episode number: ${oFilm.episode_id}</br>
  Release date: ${oFilm.release_date}</br>
  The crawl: ${oFilm.opening_crawl}</br>
  Film record created: ${new Date(Date.parse(oFilm.created)).toLocaleDateString()}</br>
  `},
};

export default function displayDetailInf(oDetailInf) {
    for (const renderersKey in renderers){
        if(oDetailInf.url.includes(renderersKey)){
           debugger
            return renderers[renderersKey](oDetailInf)
        }
    }
}
