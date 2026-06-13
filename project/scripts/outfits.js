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

function displayOutfits(filteredOutfits) {

    const gallery =
        document.querySelector("#outfit-gallery");

    gallery.innerHTML = "";

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

function filterOutfits(category) {

    if (category === "All") {

        displayOutfits(outfits);

    } else {

        const filtered =
            outfits.filter(
                outfit => outfit.season === category
            );

        displayOutfits(filtered);
    }
}

document
    .querySelector("#all-btn")
    .addEventListener("click", () => {

        filterOutfits("All");
    });

document
    .querySelector("#summer-btn")
    .addEventListener("click", () => {

        filterOutfits("Summer");
    });

document
    .querySelector("#party-btn")
    .addEventListener("click", () => {

        filterOutfits("Special Events");
    });

displayOutfits(outfits);
scripts/getdates.js