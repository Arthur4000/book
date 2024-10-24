const artworks = [
    "assets/artworks/zz.webp",
    "assets/artworks/selfie.webp",
    "assets/artworks/noentry.webp",
    "assets/artworks/mobster.webp",
    "assets/artworks/Venus.webp",
    "assets/artworks/fresque_1.webp",
    "assets/artworks/fresque2.webp",
    "assets/artworks/acab.webp",
    "assets/artworks/AnimSket.webp",
    "assets/artworks/Back.webp",
    "assets/artworks/cover_JONMON.webp",
    "assets/artworks/cover.webp",
    "assets/artworks/headerHundredEyes.webp",
    "assets/artworks/typo1.webp",
    "assets/artworks/IMG_4966.webp",
    "assets/artworks/img1.webp",
    "assets/artworks/2021-05-26-0017.webp",
    "assets/artworks/2021-05-26-0030.webp",
    "assets/artworks/Affiche_release_photo1.webp",
    "assets/artworks/Capture d’écran 2022-12-07 à 15.47.59.webp",
    "assets/artworks/Capture d’écran 2022-12-07 à 15.48.43.webp",
    "assets/artworks/johnmcenroe.webp",
    "assets/artworks/Photo15_13.webp",
    "assets/artworks/POLICEPARTOUT.webp",
    "assets/artworks/animall.webp",
    "assets/artworks/farewell.webp",
    "assets/artworks/1_an.webp",
    "assets/artworks/1.webp",
    "assets/artworks/2.webp",
    "assets/artworks/3.webp",
    "assets/artworks/Capture d’écran 2020-10-15 à 12.40.01.webp",
    "assets/artworks/les_empeches_les_eclairs_2.webp",
    "assets/artworks/BIENVENUE2.webp",
    "assets/artworks/5.webp",
    "assets/artworks/6.webp",
    "assets/artworks/balkan1.webp",
    "assets/artworks/bananier.webp",
    "assets/artworks/BjornBorg.webp",
    "assets/artworks/Capture-d’écran-2020-10-08-à-16.15.06.webp",
    "assets/artworks/Capture-d’écran-2022-12-07-à-15.43.34.webp",
    "assets/artworks/Capture-d’écran-2022-12-07-à-15.43.48.webp",
    "assets/artworks/flyer_header.webp",
    "assets/artworks/front.webp",
    "assets/artworks/staringatme.webp",
    "assets/artworks/ecosse2.webp",
    "assets/artworks/scotland.webp",
    "assets/artworks/toka1.webp",
    "assets/artworks/toka2.webp",
    "assets/artworks/toka4.webp",
    "assets/artworks/touristsgohome_2.webp",
    "assets/artworks/wildcard.webp",
    "assets/artworks/SansFoiNiLoi.webp",
    "assets/artworks/Zoo.webp",
];


const leftColumn = document.getElementById("left-column");
const rightColumn = document.getElementById("right-column");

for (let i = 0; i < artworks.length; i++) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = artworks[i];
    img.loading = "lazy";
    li.appendChild(img);

    if (i % 2 === 0) {
        leftColumn.appendChild(li);
    } else {
        rightColumn.appendChild(li);
    }
}
