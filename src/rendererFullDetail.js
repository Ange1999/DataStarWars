const renderers = {
  starship: (oShip) => {
    return `Starship name: ${oShip.name}
        Starship model: ${oShip.model}
        Starship manufacturer: ${oShip.manufacturer}
        `;
  },
  people: (oPeople) => {return ""},
  planets: (oPlanets) => {return ""},
};

export default function displayDetailInf(oDetailInf) {
    for (const renderersKey in renderers){
        if(oDetailInf.url.includes(renderersKey)){
           debugger
            return renderers[renderersKey](oDetailInf)
        }
    }
}
