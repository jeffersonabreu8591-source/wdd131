const menuButton = document.querySelector('#menu-button');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    if (nav.classList.contains('open')) {
        menuButton.textContent = '✖';
    } else {
        menuButton.textContent = '☰';
    }
});

// Footer year
document.querySelector('#currentyear').textContent =
new Date().getFullYear();
// Last modified dnnamic app
document.querySelector('#lastModified').textContent =
`Last Modified: ${document.lastModified}`;


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },

  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },

  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },

  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },

  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },

  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },

  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/17e2c70d687fffedfe115197e57fa8f5d1d369bb/full/640%2C/0/default"
},

{
    templeName: "Fortaleza Brazil",
    location: "Fortaleza, Brazil",
    dedicated: "2019, June, 2",
    area: 36000,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/e2a28dbb2b14f5f71d79b359cf9f7b88dc480144/full/640%2C/0/default"
},

{
    templeName: "São Paulo Brazil",
    location: "São Paulo, Brazil",
    dedicated: "1978, October, 30",
    area: 59246,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/940f3e201364433a3d5d3dc14b0cacee38d41d1d/full/640%2C/0/default"
}
];

const gallery = document.querySelector(".gallery");

function displayTemples(filteredTemples) {

    gallery.innerHTML = "";

    filteredTemples.forEach((temple) => {

        let card = document.createElement("figure");

        let name = document.createElement("h2");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let image = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
        dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
        area.innerHTML = `<strong>Area:</strong> ${temple.area} sq ft`;

        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", temple.templeName);
        image.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        gallery.appendChild(card);
    });
}

document.querySelector("#home").addEventListener("click", () => {
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", () => {
    displayTemples(
        temples.filter(temple =>
            new Date(temple.dedicated).getFullYear() < 1900
        )
    );
});

document.querySelector("#new").addEventListener("click", () => {
    displayTemples(
        temples.filter(temple =>
            new Date(temple.dedicated).getFullYear() > 2000
        )
    );
});

document.querySelector("#large").addEventListener("click", () => {
    displayTemples(
        temples.filter(temple =>
            temple.area > 90000
        )
    );
});

document.querySelector("#small").addEventListener("click", () => {
    displayTemples(
        temples.filter(temple =>
            temple.area < 10000
        )
    );
});

displayTemples(temples);