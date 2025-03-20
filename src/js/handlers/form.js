import iziToast from 'izitoast';
import { fetchFotoCard } from '../pixabay-api';

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

  fetchFotoCard(userQuery);
}
