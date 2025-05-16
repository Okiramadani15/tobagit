// Currency switcher functionality
document.addEventListener('DOMContentLoaded', function() {
  // Exchange rate (simplified)
  const exchangeRate = 15500; // 1 USD = 15,500 IDR
  
  // Store original prices in USD
  const originalPrices = {};
  
  // Function to initialize price storage
  function initializePrices() {
    document.querySelectorAll('.price').forEach((priceEl, index) => {
      const priceText = priceEl.childNodes[0].textContent.trim();
      const priceValue = parseFloat(priceText.replace('$', ''));
      originalPrices[index] = priceValue;
    });
  }
  
  // Function to format currency
  function formatCurrency(amount, currency) {
    if (currency === 'IDR') {
      return `Rp${Math.round(amount * exchangeRate).toLocaleString('id-ID')}`;
    } else {
      return `$${amount}`;
    }
  }
  
  // Function to update prices based on language
  function updatePrices(lang) {
    const currency = lang === 'id' ? 'IDR' : 'USD';
    
    document.querySelectorAll('.price').forEach((priceEl, index) => {
      // Get the original price or re-extract it if not available
      let originalPrice = originalPrices[index];
      if (originalPrice === undefined) {
        const priceText = priceEl.childNodes[0].textContent.trim();
        if (priceText.startsWith('$')) {
          originalPrice = parseFloat(priceText.replace('$', ''));
        } else if (priceText.startsWith('Rp')) {
          originalPrice = parseFloat(priceText.replace('Rp', '').replace(/\./g, '')) / exchangeRate;
        }
        originalPrices[index] = originalPrice;
      }
      
      // Update the price display
      priceEl.childNodes[0].textContent = formatCurrency(originalPrice, currency);
    });
  }
  
  // Initialize prices on page load
  initializePrices();
  
  // Listen for language change events
  document.addEventListener('languageChanged', function(e) {
    updatePrices(e.detail.language);
  });
  
  // Check initial language
  const currentLang = document.documentElement.lang || 'en';
  updatePrices(currentLang);
});