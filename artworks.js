const artworks = [
    "assets/artworks/fresque_1.webp",
    "assets/artworks/fresque2.webp",
    "assets/artworks/acab.webp",
    "assets/artworks/AnimSket.webp",
    "assets/artworks/Back.webp",
    "assets/artworks/cover_JONMON.webp",
    "assets/artworks/cover.webp",
    "assets/artworks/headerHundredEyes.webp",
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
    "assets/artworks/farewell.webp"
];


const leftColumn = document.getElementById("left-column");
const rightColumn = document.getElementById("right-column");

for (let i = 0; i < artworks.length; i++) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = artworks[i];
    li.appendChild(img);

    if (i % 2 === 0) {
        leftColumn.appendChild(li);
    } else {
        rightColumn.appendChild(li);
    }
}
