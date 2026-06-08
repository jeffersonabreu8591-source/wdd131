const products = [
{
id: "fc-1888",
name: "flux capacitor"
},
{
id: "fc-2050",
name: "power laces"
},
{
id: "fs-1987",
name: "time circuits"
},
{
id: "ac-2000",
name: "low voltage reactor"
},
{
id: "jj-1969",
name: "warp equalizer"
}
];
const productSelect =
document.querySelector("#product");

products.forEach(product => {

const option =
document.createElement("option");

option.value = product.id;

option.textContent = product.name;

productSelect.appendChild(option);

});
let reviews =
Number(localStorage.getItem("reviews")) || 0;

reviews++;

localStorage.setItem(
"reviews",
reviews
);

document.querySelector(
"#reviewCount"
).textContent =
`You have submitted ${reviews} review(s).`;

// Footer year
document.querySelector('#currentyear').textContent =
new Date().getFullYear();
// Last modified dnnamic app
document.querySelector('#lastModified').textContent =
`Last Modified: ${document.lastModified}`;
