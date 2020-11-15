import getTemplateDetail from "./rendererFullDetail";

function displayDetails(container, arrRes, detailInfContainer) {
  container.addEventListener("click", (oEvent) => {
    detailInfContainer.innerHTML = null;
    if (oEvent.target.className === "list-inf") {
      const newCurrentDetail = oEvent.target;
      const oDetailInf = arrRes[newCurrentDetail.dataset.counter];
      const stringDetail = getTemplateDetail(oDetailInf);
      detailInfContainer.insertAdjacentHTML(
        "beforeend",
        `
          <p>
         ${stringDetail}
          </p>`
      );
      console.log(oDetailInf)
    }
  });
}
export { displayDetails };
