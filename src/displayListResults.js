export default function(container,arrRes){
     arrRes.forEach((element,index) => {
        container.insertAdjacentHTML("beforeend",`
            <a class="button-add-detail"><li class="list-inf" data-counter=${index}>
                ${element.hasOwnProperty("name") ? `Name: ${element.name}` : ``}       
                ${element.hasOwnProperty("title") ? `Title: ${element.title}` : ``} 
            </li></a>  
            `
        );
      });

}