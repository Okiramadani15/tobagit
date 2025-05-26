// WhatsApp contact functionality
document.addEventListener('DOMContentLoaded', function() {
  const whatsappBtn = document.getElementById('whatsapp-btn');
  
  // Update WhatsApp link based on language
  document.addEventListener('languageChanged', function(e) {
    const lang = e.detail.language;
    
    if (lang === 'id') {
      whatsappBtn.href = "https://wa.me/6289530892375?text=Halo!%20Saya%20tertarik%20dengan%20paket%20wisata%20Anda.";
    } else {
      whatsappBtn.href = "https://wa.me/6289530892375?text=Hi%20there!%20I'm%20interested%20in%20your%20travel%20packages.";
    }
  });
});