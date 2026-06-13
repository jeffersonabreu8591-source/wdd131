const outfits = [
    {
        id: 1,
        name: "Casual Style",
        season: "All Seasons",
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

function displayFavorite() {

    const favorite = localStorage.getItem("favoriteLook");

    const favoriteDisplay =
        document.querySelector("#favorite-display");

    if (!favoriteDisplay) return;

    if (favorite) {
        favoriteDisplay.textContent =
            `Your favorite look is: ${favorite}`;
    } else {
        favoriteDisplay.textContent =
            `No favorite look selected.`;
    }
}

function displayOutfits() {

    const gallery =
        document.querySelector("#gallery");

    if (!gallery) return;

    gallery.innerHTML = "";

    outfits.forEach(outfit => {

        gallery.innerHTML += `
            <figure class="outfit-card">

                <img
                    src="${outfit.image}"
                    alt="${outfit.name}"
                    loading="lazy">

                <figcaption>
                    <strong>${outfit.name}</strong><br>
                    ${outfit.season}
                </figcaption>

                <button
                    class="favorite-btn"
                    data-name="${outfit.name}">
                    Save Favorite
                </button>

            </figure>
        `;
    });

    addFavoriteEvents();
}

function addFavoriteEvents() {

    const buttons =
        document.querySelectorAll(".favorite-btn");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const outfitName =
                button.dataset.name;

            localStorage.setItem(
                "favoriteLook",
                outfitName
            );

            displayFavorite();
        });
    });
}

displayOutfits();
displayFavorite();

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


const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").innerHTML =
`Last Modification: ${document.lastModified}`;