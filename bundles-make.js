import { standardBundles } from "./data.js";
const accordionContent = document.getElementById(
  "accordionPanelsStayOpenExample"
);

// const content = document.createElement('div');
// document.accordionContent.appendChild(content);

const singleBundle = standardBundles.map((bundle, index) => {
  // console.log(bundle.rooms.craftsRoom.springForageBundle);
});

accordionContent.innerHTML = `
<div class="accordion-item">
<h2 class="accordion-header" id="panelsStayOpen-heading${standardBundles[0].rooms.craftsRoom.name.replace(
  " ",
  "_"
)}">
<button
class="accordion-button"
type="button"
data-bs-toggle="collapse"
data-bs-target="#panelsStayOpen-collapse${standardBundles[0].rooms.craftsRoom.name.replace(
  " ",
  "_"
)}"
aria-expanded="true"
aria-controls="panelsStayOpen-collapse${standardBundles[0].rooms.craftsRoom.name.replace(
  " ",
  "_"
)}"
>
${standardBundles[0].rooms.craftsRoom.name}
</button>
</h2>
<div
id="panelsStayOpen-collapse${standardBundles[0].rooms.craftsRoom.name.replace(
  " ",
  "_"
)}"
class="accordion-collapse collapse show"
aria-labelledby="panelsStayOpen-heading${standardBundles[0].rooms.craftsRoom.name.replace(
  " ",
  "_"
)}"
>
<div class="accordion-body">
${standardBundles[0].rooms.craftsRoom.bundles.springForageBundle.name}

<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
      <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="Wild_Horseradish"
    />
      </th>
      <td>
      <img
      src="${standardBundles[0].rooms.craftsRoom.bundles.springForageBundle.items.Wild_Horseradish.image}"
      class=""
      alt=""
    />
      ${standardBundles[0].rooms.craftsRoom.bundles.springForageBundle.items.Wild_Horseradish.name}
      </td>
      <td>
      ${standardBundles[0].rooms.craftsRoom.bundles.springForageBundle.items.Wild_Horseradish.description}
      </td>
    </tr>
  </tbody>
</table>

</div>
</div>
</div>
`;
