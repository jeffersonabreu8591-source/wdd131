/*

filtro das roupas

all = mostra tudo

summer = verao

special events = festa

*/

function filterOutfits(category) {

    // se clicar em all
    if (category === "All") {

        displayOutfits(outfits);

    } else {

        // filtra so oq precisa
        const filtered =
            outfits.filter(
                outfit => outfit.season === category
            );

        displayOutfits(filtered);
    }
}

/*

filter achei na internet e mdn

pareceu legal usar mas deve serguir o padrçaoi

*/