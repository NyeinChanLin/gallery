import { Painting } from '../types';

export function renderArtwork(painting: Painting): void {
    const container = document.querySelector('.art-card');
    if (!container) return;

    container.classList.remove('empty-state');
    
    container.innerHTML = `
        <img class="art-image" src="${painting.imageUrl}" alt="${painting.title}">
        <div class="art-info">
            <h3>${painting.title}</h3>
            <p>Artist: ${painting.artist}</p>
            <p>Year: ${painting.year}</p>
        </div>`;
}

export function showLoading(): void {
    const container = document.querySelector('.art-card');
    if (!container) return;
    
    container.innerHTML = `<div class="loading">Loading...</div>`;
}

export function showError(message: string): void {
    const container = document.querySelector('.art-card');
    if (!container) return;
    
    container.innerHTML = `<div class="error">${message}</div>`;
}