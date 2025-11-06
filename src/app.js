const API = "https://collectionapi.metmuseum.org/public/collection/v1";
const btn = document.querySelector(".generate-button");
const card = document.querySelector(".art-card");

let objectIDs = [];

async function getObjectIDs() {
  if (objectIDs.length) return;
  const res = await fetch(`${API}/search?hasImages=true&q=painting`);
  const data = await res.json();
  objectIDs = data.objectIDs || [];
}

async function getRandomArtwork() {
  if (!objectIDs.length) await getObjectIDs();
  const randomId = objectIDs[Math.floor(Math.random() * objectIDs.length)];
  const res = await fetch(`${API}/objects/${randomId}`);
  return res.json();
}

function renderArtwork(art) {
  if (!art.primaryImage && !art.primaryImageSmall) {
    card.innerHTML = `<p>No image found. Try again.</p>`;
    return;
  }

  card.innerHTML = `
    <img src="${art.primaryImageSmall || art.primaryImage}" alt="${art.title}" />
    <h2>${art.title || "Untitled"}</h2>
    <div class= "art-info"><p><strong>Artist:</strong> ${art.artistDisplayName || "Unknown"}</p>
    <p><strong>Medium:</strong> ${art.medium || "N/A"} • ${art.objectDate || ""}</p></div>
  `;
}

async function showRandomArtwork() {
  btn.disabled = true;
  btn.textContent = "Loading...";

  try {
    const art = await getRandomArtwork();
    renderArtwork(art);
  } catch (err) {
    console.error(err);
    card.innerHTML = `<p>Failed to load artwork. Try again.</p>`;
  } finally {
    btn.disabled = false;
    btn.textContent = "Generate Artwork";
  }
}

btn.addEventListener("click", showRandomArtwork);
document.addEventListener("DOMContentLoaded", () => {
  card.innerHTML = `<p>Click the button to view a random painting</p>`;
});
