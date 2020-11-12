import swapiRequest from './requestToSwapi'
import displayResultsList from './displayListResults'
import {displayDetails} from './displayDetails'

export default function() {
const choiseObj = document.getElementById("choiseObject");
//const textInput = document.getElementById('idSearch');
const container = document.getElementById("resultContainer");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const pageValue = document.getElementById("value");
const containerSwitchPages = document.getElementById("pagination-wrapper");
const arrDetailButtons = document.querySelectorAll(".button-add-detail");
const arrListDetails = document.querySelectorAll(".list-inf");
const detailInfContainer = document.getElementById("containerDetailInf");

let prevPageUrl, nextPageUrl;
let arrRes = [];


hideButton(containerSwitchPages);
document.getElementById("searchGo").addEventListener("click", () => {
  const URL = `https://swapi.dev/api/${choiseObj.value}/?page=1`;
  rendererData(URL);
  pageValue.innerText=1;
});

function showHideButton(pageUrl, button) {
  (!pageUrl) ? hideButton(button) : showButton(button)
}

function showButton(button) {
  button.classList.remove("hidden");
}

function hideButton(button) {
  button.classList.add("hidden");
}

function rendererData(URL) {
  swapiRequest(URL).then((data) => {
      prevPageUrl = data.previous;
      nextPageUrl = data.next;
      container.innerHTML = null;
      showButton(containerSwitchPages);
      showHideButton(prevPageUrl, prevButton);
      showHideButton(nextPageUrl, nextButton);
      arrRes.splice(0, arrRes.length);
      data.results.forEach((item)=>{
        arrRes.push(item)
        })
      displayResultsList(container,arrRes);
    })
    .catch(() => {
      alert("Error! Last page");
    });
}

displayDetails(container,arrRes,detailInfContainer);

nextButton.addEventListener("click", () => {
  changeValuePage(nextPageUrl,'next')
});

prevButton.addEventListener("click", () => {
  changeValuePage(prevPageUrl,'prev')

});

function changeValuePage(pageUrl,page){
  rendererData(pageUrl);
  page === 'next' ?  pageValue.innerText++ : pageValue.innerText--

}
}
