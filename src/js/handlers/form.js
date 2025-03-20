import iziToast from 'izitoast';
import { fetchFotoCard } from '../pixabay-api';
import { refs } from '../utils/constants';
import { createMarkupGalleryCards } from '../render-functions';

export function handlerSearch(ev) {
  ev.preventDefault();

  const form = ev.currentTarget;
  const userQuery = form.elements.user_query.value.trim();

  if (userQuery === '') {
    iziToast.warning({
      title: 'Caution',
      message: 'Please enter a query!',
      position: 'topRight',
    });

    return;
  }

  return fetchFotoCard(userQuery)
    .then(data => {
      refs.galleryEl.innerHTML = createMarkupGalleryCards(data.hits);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      form.reset();
    });
}
