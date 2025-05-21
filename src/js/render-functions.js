import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightBox;

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

export function createGallery(images) {
  const createImage = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-list-item">
        <a href="${largeImageURL}" class="gallery-list-link">
          <img class="gallery-img" src="${webformatURL}" alt="${tags}" />
        </a>
        <div class="img-info">
          <p><b>Likes:</b> ${likes}</p>
          <p><b>Views:</b> ${views}</p>
          <p><b>Comments:</b> ${comments}</p>
          <p><b>Downloads:</b> ${downloads}</p>
        </div>
      </li>`;
      }
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', createImage);

  if (!lightBox) {
    lightBox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250,
    });
  } else {
    lightBox.refresh();
  }
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('active');
}

export function hideLoader() {
  loader.classList.remove('active');
}
