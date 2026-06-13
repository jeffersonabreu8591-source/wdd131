// roupas da pagina
const outfits = [
    {
        id: 1,
        name: "Casual Style",
        season: "All",
        image: "images/look1.webp"
    },
    {
        id: 2,
        name: "Summer Style",
        season: "Summer",
        image: "images/look2.webp"
    },
    {
        id: 3,
        name: "Party Style",
        season: "Special Events",
        image: "images/look3.webp"
    }
];

// mostra as roupas na tela
function displayOutfits(filteredOutfits) {

    // pega a galeria
    const gallery =
        document.querySelector("#outfit-gallery");

    // limpa antes de colocar de novo
    gallery.innerHTML = "";

    // passa por todas roupas
    filteredOutfits.forEach(outfit => {

        gallery.innerHTML += `
            <figure>

                <img
                    src="${outfit.image}"
                    alt="${outfit.name}"
                    loading="lazy">

                <figcaption>
                    ${outfit.name}
                </figcaption>

            </figure>
        `;
    });
}

// faz o filtro dos botoes
function filterOutfits(category) {

    // se clicar em all mostra tudo
    if (category === "All") {

        displayOutfits(outfits);

    } else {

        // filtra so oq foi clicado
        const filtered =
            outfits.filter(
                outfit => outfit.season === category
            );

        displayOutfits(filtered);
    }
}

// botao all
document
    .querySelector("#all-btn")
    .addEventListener("click", () => {

        filterOutfits("All");
    });

// botao verao
document
    .querySelector("#summer-btn")
    .addEventListener("click", () => {

        filterOutfits("Summer");
    });

// botao festa
document
    .querySelector("#party-btn")
    .addEventListener("click", () => {

        filterOutfits("Special Events");
    });

// inicia a pagina
displayOutfits(outfits);

/*

anotaçao

filter = filtra

forEach = passa por todos

querySelector = pega html

innerHTML = coloca html

pesquisei:

mdn
w3schools
anotaçoes da aula

essa parte foi pra fazer o filtro das roupas

*/