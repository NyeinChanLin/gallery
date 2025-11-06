import { Painting } from '../types';

const BASE_URL = 'https://collectionapi.metmuseum.org/public/collection/v1';

export async function getRandomArtwork(): Promise<Painting> {
    try {
        const response = await fetch(`${BASE_URL}/objects`);
        const data = await response.json();
        
        const randomId = Math.floor(Math.random() * data.total);
        
        const artworkResponse = await fetch(`${BASE_URL}/objects/${randomId}`);
        const artwork = await artworkResponse.json();

        if (artwork.primaryImage) {
            return {
                imageUrl: artwork.primaryImage,
                title: artwork.title || 'Unknown Title',
                artist: artwork.artistDisplayName || 'Unknown Artist',
                year: artwork.objectDate || 'Unknown Date'
            };
        } else {
            return getRandomArtwork();
        }
    } catch (error) {
        throw new Error('Failed to fetch artwork');
    }
}
