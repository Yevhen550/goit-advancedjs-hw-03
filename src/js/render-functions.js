export function createMarkupGalleryCards(cards) {
  return cards
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `
    <li class="gallery-card">
        <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-img" src="${webformatURL}" alt="${tags}" loading="lazy" />
            <ul class="gallery-card-info">
                <li>
                    <p class="gallery-card-name">Likes</p>
                    <p class="gallery-card-value">${likes}</p>
                </li>
                <li>
                    <p class="gallery-card-name">Views</p>
                    <p class="gallery-card-value">${views}</p>
                </li>
                <li>
                    <p class="gallery-card-name">Comments</p>
                    <p class="gallery-card-value">${comments}</p>
                </li>
                <li>
                    <p class="gallery-card-name">Downloads</p>
                    <p class="gallery-card-value">${downloads}</p>
                </li>
            </ul>
        </a>
    </li>
        `
    )
    .join('');
}
