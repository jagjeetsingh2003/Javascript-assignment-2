// Image Gallery Items
const galleryItems = [
  {
    image: 'images/flowers-pink-large.jpg',
    thumbnail: 'images/flowers-pink-small.jpg',
    title: 'Sunflowers in the hamlet Dernekamp, Kirchspiel, Dülmen, North Rhine-Westphalia, Germany',
	credit: 'By Dietmar Rabich - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=61514522'
  },
  {
    image: 'images/flowers-purple-large.jpg',
    thumbnail: 'images/flowers-purple-small.jpg',
    title: 'Poppies in cornfield, Dülmen, North Rhine-Westphalia, Germany',
    credit: 'By Dietmar Rabich - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=40957238'
  },
   {
    image: 'images/flowers-red-large.jpg',
    thumbnail: 'images/flowers-red-small.jpg',
    title: 'Daffodils in Sentmaring park, Münster, North Rhine-Westfalia, Germany',
    credit: 'By Dietmar Rabich - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=48211466' 
  },
   {
    image: 'images/flowers-white-large.jpg',
    thumbnail: 'images/flowers-white-small.jpg',
    title: 'Sentmaring Park, Münster, North Rhine-Westphalia, Germany',
    credit: 'By Dietmar Rabich - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=48576226' 
  },
  {
    image: 'images/flowers-yellow-large.jpg',
    thumbnail: 'images/flowers-yellow-small.jpg',
    title: 'Market in Münster, North Rhine-Westphalia, Germany',
    credit: 'By Dietmar Rabich - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=62071586'  
  }
];

// Function to create thumbnail list items
function createThumbnailList() {
  const thumbnailList = document.getElementById('thumbnail-list');
  
  galleryItems.forEach((item, index) => {
    const listItem = document.createElement('li');
    const thumbnailImage = document.createElement('img');
    
    thumbnailImage.src = item.thumbnail;
    thumbnailImage.alt = item.title;
    
    // Add event listener to show full-sized image on click
    thumbnailImage.addEventListener('click', () => showImage(index, thumbnailImage));
    
    listItem.appendChild(thumbnailImage);
    thumbnailList.appendChild(listItem);
  });
}

// Function to show the full-sized image and update image title
function showImage(index, clickedThumbnail) {
  const featuredImage = document.getElementById('featured-image');
  const imageTitle = document.getElementById('image-title');
  
  featuredImage.src = galleryItems[index].image;
  featuredImage.alt = galleryItems[index].title;
  imageTitle.textContent = galleryItems[index].title;

 // Remove "active" class from all thumbnails
  const thumbnails = document.querySelectorAll('#thumbnail-list img');
  thumbnails.forEach((thumbnail) => {
    thumbnail.classList.remove('active');
  });

  // Add "active" class to the clicked thumbnail
  clickedThumbnail.classList.add('active');
}

// Call the function to create the thumbnail list
createThumbnailList();