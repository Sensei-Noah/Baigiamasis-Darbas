import { standardBundles } from "./data.js";
const accordionContent = document.getElementById(
  "accordionPanelsStayOpenExample"
);

// const content = document.createElement('div');
// document.accordionContent.appendChild(content);

const singleBundle = standardBundles.map((bundle, index) => {
  //console.log(bundle.rooms.craftsRoom.springForageBundle);
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
</div>
</div>
</div>
`;
