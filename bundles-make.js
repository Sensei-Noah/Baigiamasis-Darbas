import { standardBundles } from "./data.js";

const accordionHead = document.getElementById("accordionPanelsStayOpenExample");

for (let k in standardBundles.rooms) {
  let accordionContent = document.createElement("div");
  accordionContent.className = "accordion-item bg-transparent";
  accordionHead.appendChild(accordionContent);

  accordionContent.innerHTML = `
  
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
  aria-expanded="false"
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
  class="accordion-collapse collapse"
  aria-labelledby="panelsStayOpen-heading${standardBundles.rooms[
    k
  ].name.replace(" ", "_")}"
  >
  <div class="accordion-body table" id="accordion-body-content${k}">
  
  </div>
  
  </div>
  
  `;

  for (let i in standardBundles.rooms[k].bundles) {
    //console.log(standardBundles.rooms[k].bundles[i].name);
    const body_content = document.getElementById("accordion-body-content" + k);

    let content = document.createElement("table");
    content.className =
      "table table-hover table-responsive table-sm bg-light border border-2 rounded-3";
    body_content.appendChild(content);

    let contentThead = document.createElement("thead");
    content.appendChild(contentThead);

    let contentTbody = document.createElement("tbody");
    content.appendChild(contentTbody);

    contentThead.innerHTML = `

      <tr>
        <th scope="col" class="col-2">${standardBundles.rooms[k].bundles[i].name}</th>
        <th scope="col" class="col-6">Description</th>
        <th scope="col" class="col-1">Wiki link</th>
      </tr>

    `;
    let contentReward = document.createElement("tr");
    contentReward.innerHTML = `
    <th scope="row">

      <img
      src="${standardBundles.bundleRewardImage}"
      class=""
      alt=""
      />

      Reward:

      <img
      src="${standardBundles.rooms[k].bundles[i].bundleReward.image}"
      class=""
      alt=""
      />

      ${standardBundles.rooms[k].bundles[i].bundleReward.item}

    </th>
    `;

    for (let n in standardBundles.rooms[k].bundles[i].items) {
      let contentTr = document.createElement("tr");
      contentTbody.appendChild(contentTr);
      // Reward line
      contentTbody.appendChild(contentReward);

      contentTr.innerHTML = `

        <th scope="row">

          <input
            class="form-check-input me-1"
            type="checkbox"
            value=""
            id="${standardBundles.rooms[k].bundles[i].items[n].name.replaceAll(
              " ",
              "_"
            )}"
          />

          <img
          src="${standardBundles.rooms[k].bundles[i].items[n].image}"
          class=""
          alt=""
          />
          
          ${standardBundles.rooms[k].bundles[i].items[n].name}

        </th>

        <td>${standardBundles.rooms[k].bundles[i].items[n].description}</td>

        <td>
          <a target="_blank" href="${
            standardBundles.rooms[k].bundles[i].items[n].wiki
          }">Wiki</a>
        </td>
      `;
    }
  }
}
