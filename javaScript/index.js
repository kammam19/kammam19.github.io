document.addEventListener('DOMContentLoaded', function () {
    const imageContainer = document.querySelector('.image-container');
  
    // Array of image URLs
    const imageUrls = [
      'Pic/pic_top01.jpg',
      'Pic/pic_top02.jpg',
      'Pic/pic_top03.jpg',
      // Add more image URLs as needed
    ];
  
    // Function to create image elements
    function createImageElement(imageUrl) {
      const image = document.createElement('img');
      image.src = imageUrl;
      image.alt = 'Gallery Image';
  
      imageContainer.appendChild(image);
    }
  
    // Load images into the image container
    imageUrls.forEach(createImageElement);
  });
  