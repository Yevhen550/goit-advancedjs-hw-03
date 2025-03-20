import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';

import { fetchFotoCard } from './js/pixabay-api';
import { markupGalleryCards } from './js/render-functions';
import { refs } from './js/utils/constants';
import { handlerSearch } from './js/handlers/form';

refs.formEl.addEventListener('submit', handlerSearch);
