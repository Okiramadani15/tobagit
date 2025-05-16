// Hero buttons WhatsApp functionality
document.addEventListener('DOMContentLoaded', function() {
  const learnMoreBtn = document.getElementById('learn-more-btn');
  const bookNowBtn = document.getElementById('book-now-btn');
  const headerBookNowBtn = document.getElementById('header-book-now-btn');
  const phoneNumber = '621370836055';
  
  // Update WhatsApp links based on language
  document.addEventListener('languageChanged', function(e) {
    const lang = e.detail.language;
    
    if (lang === 'id') {
      // Learn more button
      learnMoreBtn.href = `https://wa.me/${phoneNumber}?text=Halo!%20Saya%20ingin%20tahu%20lebih%20banyak%20tentang%20paket%20wisata%20Anda.`;
      
      // Book now buttons
      const bookNowMessage = 'Halo!%20Saya%20ingin%20memesan%20paket%20wisata%20sekarang.';
      bookNowBtn.href = `https://wa.me/${phoneNumber}?text=${bookNowMessage}`;
      headerBookNowBtn.href = `https://wa.me/${phoneNumber}?text=${bookNowMessage}`;
    } else {
      // Learn more button
      learnMoreBtn.href = `https://wa.me/${phoneNumber}?text=Hi!%20I%20want%20to%20learn%20more%20about%20your%20travel%20packages.`;
      
      // Book now buttons
      const bookNowMessage = 'Hi!%20I%20want%20to%20book%20a%20travel%20package%20now.';
      bookNowBtn.href = `https://wa.me/${phoneNumber}?text=${bookNowMessage}`;
      headerBookNowBtn.href = `https://wa.me/${phoneNumber}?text=${bookNowMessage}`;
    }
  });
});