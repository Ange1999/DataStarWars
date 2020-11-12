export default function(container,arrRes){
     arrRes.forEach((element,index) => {
        container.insertAdjacentHTML("beforeend",`
            <a class="button-add-detail"><li class="list-inf" data-counter=${index}>
                ${element.hasOwnProperty("name") ? `Name: ${element.name}` : ``} 
                ${element.hasOwnProperty("birth_year") ? `Birth Year: ${element.birth_year}` : ``} 
                ${element.hasOwnProperty("model") ? `Model: ${element.model}` : ``}        
                ${element.hasOwnProperty("climate") ? `Climate: ${element.climate}` : ``} 
                ${element.hasOwnProperty("title") ? `Title: ${element.title}` : ``} 
            </li></a>  
            `
        );
      });

}