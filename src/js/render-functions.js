export function markupGalleryCards(images) {
  return images
    .map(
      ({ largeImageURL, tags, likes, views, comments, downloads }) =>
        `
    <li class="gallery-card">
        <a class="gallery-link href="${largeImageURL}" ">
            <img class="gallery-img" src="${webformatURL}" alt="${tags}" />
            <ul class="galerry-list">
                <li class="galery-list-info">
                    <p class="gallery-info-name">Likes</p>
                    <p class="gallerry-like">${likes}</p>
                </li>
                <li class="galery-list-info">
                    <p class="gallery-info-name">Views</p>
                    <p class="gallerry-like">${views}</p>
                </li>
                <li class="galery-list-info">
                    <p class="gallery-info-name">Comments</p>
                    <p class="gallerry-like">${comments}</p>
                </li>
                <li class="galery-list-info">
                    <p class="gallery-info-name">Downloads</p>
                    <p class="gallerry-like">${downloads}</p>
                </li>
            </ul>
        </a>
    </li>

        `
    )
    .join('');
}
