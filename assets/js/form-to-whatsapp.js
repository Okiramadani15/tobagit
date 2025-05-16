// Form to WhatsApp functionality
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('tour-search-form');
  const phoneNumber = '6281370836055'; // WhatsApp number without + sign
  
  // Get current language
  function getCurrentLanguage() {
    const activeBtn = document.querySelector('.language-btn.active');
    return activeBtn ? activeBtn.getAttribute('data-lang') : 'en';
  }
  
  // Format date to readable format
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  }
  
  // Handle form submission
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const destination = document.getElementById('destination').value;
    const people = document.getElementById('people').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    
    // Create message based on language
    let message;
    const lang = getCurrentLanguage();
    
    if (lang === 'id') {
      message = `Halo! Saya tertarik dengan paket wisata Anda.\n\n` +
                `Destinasi: ${destination}\n` +
                `Jumlah Orang: ${people}\n` +
                `Tanggal Check-in: ${formatDate(checkin)}\n` +
                `Tanggal Check-out: ${formatDate(checkout)}\n\n` +
                `Mohon informasi lebih lanjut. Terima kasih!`;
    } else {
      message = `Hi there! I'm interested in your travel packages.\n\n` +
                `Destination: ${destination}\n` +
                `Number of People: ${people}\n` +
                `Check-in Date: ${formatDate(checkin)}\n` +
                `Check-out Date: ${formatDate(checkout)}\n\n` +
                `Please provide more information. Thank you!`;
    }
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
  });
});