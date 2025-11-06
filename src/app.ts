import { getRandomArtwork } from './api';
import { renderArtwork, showLoading, showError } from './ui';

async function init() {
    const generateButton = document.querySelector('.generate-button');
    if (!generateButton) return;

    generateButton.addEventListener('click', async () => {
        try {
            showLoading();
            const artwork = await getRandomArtwork();
            renderArtwork(artwork);
        } catch (error) {
            showError('Failed to load artwork. Please try again.');
        }
    });
}

document.addEventListener('DOMContentLoaded', init);