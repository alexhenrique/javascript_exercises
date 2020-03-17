const ACCESS_KEY = '';
const QUERY = 'gato'; // palavra a ser buscada
const PER_PAGE = 5; // quantidade de imagens por página
const URL = `https://api.unsplash.com/search/photos?query=${QUERY}&per_page=${PER_PAGE}&client_id=${ACCESS_KEY}`;

fetch(URL)
  .then(response => response.json())
  .then(data => {
    const images = data.results.map(result => result.urls.full);
    images.forEach((image, index) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const link = document.createElement('a');
        link.download = `${QUERY}_${index}.jpg`;
        link.href = canvas.toDataURL('image/jpeg');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      img.src = image;
    });
  })
  .catch(error => console.error(error));
