export function setArtworks(artworks) {
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
}
