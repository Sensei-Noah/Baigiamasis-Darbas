
import { standardBundles } from "./data.js";

const accordionHead = document.getElementById("accordionPanelsStayOpenExample");

for (let k in standardBundles.rooms) {
  let accordionContent = document.createElement("div");
  accordionHead.appendChild(accordionContent);

  accordionContent.innerHTML = `
  <div class="accordion-item">
  <h2 class="accordion-header" id="panelsStayOpen-heading${standardBundles.rooms[
    k
  ].name.replace(" ", "_")}">
  <button
  class="accordion-button"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#panelsStayOpen-collapse${standardBundles.rooms[
    k
  ].name.replace(" ", "_")}"
  aria-expanded="true"
  aria-controls="panelsStayOpen-collapse${standardBundles.rooms[k].name.replace(
    " ",
    "_"
  )}"
  >
  ${standardBundles.rooms[k].name}
  </button>
  </h2>
  <div
  id="panelsStayOpen-collapse${standardBundles.rooms[k].name.replace(" ", "_")}"
  class="accordion-collapse collapse show"
  aria-labelledby="panelsStayOpen-heading${standardBundles.rooms[
    k
  ].name.replace(" ", "_")}"
  >
  <div class="accordion-body" id="accordion-body-content">
  
  </div>
  
  </div>
  </div>
  `;

  for (let i in standardBundles.rooms[k].bundles) {
    //console.log("<h1>" + standardBundles.rooms.craftsRoom.bundles[i].name + "</h1>");

    const body_content = document.getElementById("accordion-body-content");
    let content = document.createElement("div");
    body_content.appendChild(content);

    for (let n in standardBundles.rooms[k].bundles[i].items) {
      content.innerHTML = `
    <table class="table">
      <thead>
        <tr>
          <th scope="col">${standardBundles.rooms[k].bundles[i].name}</th>
          <th scope="col">Description</th>
          <th scope="col">Wiki link</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th scope="row">
            <input
              class="form-check-input me-1"
              type="checkbox"
              value=""
              id="NAMEID"
            />
            <img
            src="${standardBundles.rooms[k].bundles[i].items[n].image}"
            class=""
            alt=""
          />
            ${standardBundles.rooms[k].bundles[i].items[n].name}
          </th>
          <td>
          
          <div>
          ${standardBundles.rooms[k].bundles[i].items[n].description}
          </div>

          </td>
          <td>
            <a href="${standardBundles.rooms[k].bundles[i].items[n].wiki}">Wiki</a>
          </td>
        </tr>
      </tbody>
    </table>
    `;
    }
  }
}
