// View All Packages functionality
document.addEventListener('DOMContentLoaded', function() {
  // Add hidden packages to the package list
  const packageList = document.querySelector('.package-list');
  const viewAllBtn = document.querySelector('.package .btn-primary');
  let packagesVisible = false;
  
  // Create additional package items
  const additionalPackages = [
    {
      image: './assets/images/gallery-1.jpg',
      title: 'Toba Lake Tour Package',
      description: 'Experience the beauty of Lake Toba, the largest volcanic lake in the world, with stunning views and cultural experiences.',
      duration: '5D/4N',
      pax: '8',
      location: 'Samosir',
      reviews: '35',
      price: '$480'
    },
    {
      image: './assets/images/gallery-2.jpg',
      title: 'Orangutan Trekking Adventure',
      description: 'Trek through the lush rainforest of Bukit Lawang and encounter wild orangutans in their natural habitat.',
      duration: '3D/2N',
      pax: '6',
      location: 'Langkat',
      reviews: '42',
      price: '$390'
    },
    {
      image: './assets/images/gallery-3.jpg',
      title: 'Berastagi Highland Retreat',
      description: 'Enjoy the cool climate of Berastagi highlands, visit fruit markets, hot springs, and climb active volcanoes.',
      duration: '4D/3N',
      pax: '12',
      location: 'Karo',
      reviews: '28',
      price: '$420'
    }
  ];
  
  // Create hidden package elements
  function createPackageElements() {
    additionalPackages.forEach(pkg => {
      const li = document.createElement('li');
      li.className = 'hidden-package';
      li.style.display = 'none';
      
      li.innerHTML = `
        <div class="package-card">
          <figure class="card-banner">
            <img src="${pkg.image}" alt="${pkg.title}" loading="lazy">
          </figure>
          <div class="card-content">
            <h3 class="h3 card-title">${pkg.title}</h3>
            <p class="card-text">${pkg.description}</p>
            <ul class="card-meta-list">
              <li class="card-meta-item">
                <div class="meta-box">
                  <ion-icon name="time"></ion-icon>
                  <p class="text">${pkg.duration}</p>
                </div>
              </li>
              <li class="card-meta-item">
                <div class="meta-box">
                  <ion-icon name="people"></ion-icon>
                  <p class="text">pax: ${pkg.pax}</p>
                </div>
              </li>
              <li class="card-meta-item">
                <div class="meta-box">
                  <ion-icon name="location"></ion-icon>
                  <p class="text">${pkg.location}</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="card-price">
            <div class="wrapper">
              <p class="reviews">(${pkg.reviews} reviews)</p>
              <div class="card-rating">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
              </div>
            </div>
            <p class="price">
              ${pkg.price}
              <span>/ per person</span>
            </p>
            <button class="btn btn-secondary">Book Now</button>
          </div>
        </div>
      `;
      
      packageList.appendChild(li);
    });
  }
  
  // Initialize the hidden packages
  createPackageElements();
  
  // Get all hidden packages after creation
  const hiddenPackages = document.querySelectorAll('.hidden-package');
  
  // Add click event to View All Packages button
  viewAllBtn.addEventListener('click', function() {
    if (!packagesVisible) {
      // Show hidden packages
      hiddenPackages.forEach(pkg => {
        pkg.style.display = 'block';
        pkg.classList.add('fade-in');
      });
      viewAllBtn.textContent = 'Show Less Packages';
      packagesVisible = true;
    } else {
      // Hide packages
      hiddenPackages.forEach(pkg => {
        pkg.style.display = 'none';
        pkg.classList.remove('fade-in');
      });
      viewAllBtn.textContent = 'View All Packages';
      packagesVisible = false;
    }
  });
});