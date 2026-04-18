/**
 * AutoVault - Premium Car Accessories E-Commerce
 * External JavaScript File
 */

// ============================================
// Product Data
// ============================================
const products = [
  {
    id: 1,
    name: "Michelin Pilot Sport 4",
    category: "tyres",
    categoryLabel: "Tyres",
    price: 189.99,
    originalPrice: null,
    rating: 4.8,
    reviews: 124,
    badge: "NEW",
    image: "images/products/prod-tyre-1.jpg",
    description: "The Michelin Pilot Sport 4 delivers exceptional dry and wet grip, precise steering response, and remarkable durability. Engineered for performance sedans and sports cars.",
    specs: { Brand: "Michelin", Size: "225/40ZR18", Load: "92Y", Type: "Summer Performance" }
  },
  {
    id: 2,
    name: "Bose Premium Car Speaker",
    category: "speakers",
    categoryLabel: "Speakers",
    price: 299.99,
    originalPrice: 349.99,
    rating: 4.9,
    reviews: 89,
    badge: "SALE",
    image: "images/products/prod-speaker-1.jpg",
    description: "Experience concert-hall clarity with the Bose Premium Car Speaker. Features advanced carbon fiber cone technology and silk dome tweeter for pristine highs.",
    specs: { Brand: "Bose", Wattage: "300W", Impedance: "4 Ohm", Frequency: "45Hz - 20kHz" }
  },
  {
    id: 3,
    name: "Brembo Performance Brake Kit",
    category: "parts",
    categoryLabel: "Parts",
    price: 459.99,
    originalPrice: null,
    rating: 4.7,
    reviews: 56,
    badge: null,
    image: "images/products/prod-brake-1.jpg",
    description: "The Brembo Performance Brake Kit includes drilled and slotted rotors with high-performance ceramic pads. Designed for track-day enthusiasts and spirited drivers.",
    specs: { Brand: "Brembo", Rotor: "Drilled & Slotted", Pads: "Ceramic", Fitment: "Universal" }
  },
  {
    id: 4,
    name: "LED Underglow Light Kit",
    category: "lighting",
    categoryLabel: "Lighting",
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.6,
    reviews: 203,
    badge: "-20%",
    image: "images/products/prod-light-1.jpg",
    description: "Transform your ride with the LED Underglow Light Kit. Features RGB multi-color control via smartphone app, music sync, and weather-resistant IP67 construction.",
    specs: { Brand: "AutoGlow", LEDs: "300 RGB", Control: "App/Sound", Waterproof: "IP67" }
  },
  {
    id: 5,
    name: "K&N Cold Air Intake",
    category: "parts",
    categoryLabel: "Parts",
    price: 249.99,
    originalPrice: null,
    rating: 4.8,
    reviews: 78,
    badge: null,
    image: "images/products/prod-intake-1.jpg",
    description: "Unlock hidden horsepower with the K&N Cold Air Intake System. Features a high-flow cotton gauze filter and mandrel-bent aluminum tubing for maximum airflow.",
    specs: { Brand: "K&N", Material: "Aluminum", Filter: "Cotton Gauze", Gain: "+15 HP" }
  },
  {
    id: 6,
    name: "Sony Xplod Subwoofer",
    category: "speakers",
    categoryLabel: "Speakers",
    price: 179.99,
    originalPrice: 219.99,
    rating: 4.5,
    reviews: 145,
    badge: "SALE",
    image: "images/products/prod-sub-1.jpg",
    description: "Feel the bass with the Sony Xplod 12-inch Subwoofer. Features a reinforced Kevlar cone, dual voice coil, and 1200W peak power handling for earth-shaking lows.",
    specs: { Brand: "Sony", Size: "12 inch", Power: "1200W Peak", Type: "Dual Voice Coil" }
  },
  {
    id: 7,
    name: "Carbon Fiber Mirror Covers",
    category: "exterior",
    categoryLabel: "Exterior",
    price: 89.99,
    originalPrice: null,
    rating: 4.4,
    reviews: 67,
    badge: "NEW",
    image: "images/products/prod-mirror-1.jpg",
    description: "Add a touch of motorsport style with these real carbon fiber mirror covers. Precision-molded for perfect fitment with UV-resistant clear coat finish.",
    specs: { Brand: "CFX", Material: "Real Carbon Fiber", Finish: "UV Clear Coat", Fitment: "Universal" }
  },
  {
    id: 8,
    name: "WeatherTech Floor Mats",
    category: "interior",
    categoryLabel: "Interior",
    price: 149.99,
    originalPrice: null,
    rating: 4.9,
    reviews: 312,
    badge: null,
    image: "images/products/prod-mat-1.jpg",
    description: "Protect your interior with WeatherTech All-Weather Floor Mats. Laser-measured for perfect fit, these heavy-duty mats feature deep channels to trap water, mud, and debris.",
    specs: { Brand: "WeatherTech", Material: "Rubber", Warranty: "Lifetime", Fit: "Custom" }
  },
  {
    id: 9,
    name: "Pirelli P-Zero Tyre",
    category: "tyres",
    categoryLabel: "Tyres",
    price: 219.99,
    originalPrice: null,
    rating: 4.7,
    reviews: 98,
    badge: null,
    image: "images/products/prod-tyre-2.jpg",
    description: "The Pirelli P-Zero is the ultimate ultra-high performance tyre. Developed with motorsport DNA, it delivers exceptional handling and grip in all conditions.",
    specs: { Brand: "Pirelli", Size: "245/35ZR19", Load: "93Y", Type: "UHP Summer" }
  },
  {
    id: 10,
    name: "HKS Performance Exhaust",
    category: "parts",
    categoryLabel: "Parts",
    price: 599.99,
    originalPrice: 699.99,
    rating: 4.6,
    reviews: 45,
    badge: "SALE",
    image: "images/products/prod-exhaust-1.jpg",
    description: "Unleash your engine's voice with the HKS Performance Exhaust System. Crafted from titanium with carbon fiber tips for weight savings and an aggressive race-inspired tone.",
    specs: { Brand: "HKS", Material: "Titanium", Tips: "Carbon Fiber", Sound: "Aggressive" }
  },
  {
    id: 11,
    name: "Momo Racing Steering Wheel",
    category: "interior",
    categoryLabel: "Interior",
    price: 199.99,
    originalPrice: null,
    rating: 4.8,
    reviews: 34,
    badge: "NEW",
    image: "images/products/prod-wheel-1.jpg",
    description: "The Momo Racing Steering Wheel features premium leather with orange stitching, flat-bottom design, and integrated paddle shifter extensions for a true race-car feel.",
    specs: { Brand: "Momo", Diameter: "350mm", Material: "Leather/Carbon", Type: "Flat Bottom" }
  },
  {
    id: 12,
    name: "Philips LED Headlight Kit",
    category: "lighting",
    categoryLabel: "Lighting",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.5,
    reviews: 267,
    badge: "-20%",
    image: "images/products/prod-headlight-1.jpg",
    description: "Upgrade to brilliant white LED lighting with the Philips Headlight Kit. Produces 6000K crystal white light, 200% brighter than halogen, with built-in CANbus error-free design.",
    specs: { Brand: "Philips", Color: "6000K White", Lumens: "12000LM", Lifespan: "50000hrs" }
  }
];

// ============================================
// Cart Functions
// ============================================
const CART_KEY = 'autovault_cart';

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(productId, quantity = 1) {
  const cart = getCart();
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
      category: product.categoryLabel
    });
  }

  saveCart(cart);
  showToast('Added to cart!', `${product.name} has been added to your cart.`);
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
  renderCart();
}

function updateCartQuantity(productId, quantity) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.quantity = Math.max(1, Math.min(99, quantity));
    saveCart(cart);
    renderCart();
  }
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.quantity, 0);
}

function getCartTotal() {
  return getCart().reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function clearCart() {
  localStorage.removeItem(CART_KEY);
  updateCartBadge();
}

function updateCartBadge() {
  const badges = document.querySelectorAll('.cart-badge');
  const count = getCartCount();
  badges.forEach(badge => {
    if (count > 0) {
      badge.textContent = count;
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  });
}

// ============================================
// Toast Notification
// ============================================
function showToast(title, message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <div class="toast-title">${title}</div>
    <div class="toast-message">${message}</div>
  `;

  requestAnimationFrame(() => {
    toast.classList.add('active');
  });

  setTimeout(() => {
    toast.classList.remove('active');
  }, 3000);
}

// ============================================
// Modal
// ============================================
function openModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  let overlay = document.querySelector('.modal-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    document.body.appendChild(overlay);
  }

  overlay.innerHTML = `
    <div class="modal-content">
      <button class="modal-close">&times;</button>
      <div class="modal-body">
        <img src="${product.image}" alt="${product.name}" class="modal-image">
        <div class="modal-info">
          <span class="product-detail-badge ${product.badge === 'SALE' || product.badge === '-20%' ? 'sale' : 'new'}">${product.badge || 'FEATURED'}</span>
          <h2 class="product-detail-name" style="font-size:24px;margin:12px 0">${product.name}</h2>
          <div class="product-detail-price-row">
            <span class="product-detail-price">$${product.price.toFixed(2)}</span>
            ${product.originalPrice ? `<span class="product-detail-original">$${product.originalPrice.toFixed(2)}</span>` : ''}
          </div>
          <p class="product-detail-description">${product.description}</p>
          <div class="product-detail-actions" style="margin-top:20px">
            <button class="btn-add-cart" onclick="addToCart(${product.id}); closeModal();">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  `;

  overlay.querySelector('.modal-close').addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  requestAnimationFrame(() => overlay.classList.add('active'));
  document.addEventListener('keydown', handleEsc);
}

function closeModal() {
  const overlay = document.querySelector('.modal-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    setTimeout(() => {
      if (!overlay.classList.contains('active')) {
        overlay.innerHTML = '';
      }
    }, 300);
  }
  document.removeEventListener('keydown', handleEsc);
}

function handleEsc(e) {
  if (e.key === 'Escape') closeModal();
}

// ============================================
// Header Scroll Behavior
// ============================================
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  }, { passive: true });
}

// ============================================
// Mobile Menu
// ============================================
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const overlay = document.querySelector('.mobile-menu-overlay');
  const closeBtn = document.querySelector('.mobile-menu-close');

  if (!toggle || !overlay) return;

  toggle.addEventListener('click', () => overlay.classList.add('active'));
  closeBtn?.addEventListener('click', () => overlay.classList.remove('active'));
  overlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => overlay.classList.remove('active'));
  });
}

// ============================================
// Search Bar
// ============================================
function initSearchBar() {
  const searchBtn = document.getElementById('searchToggle');
  const searchBar = document.querySelector('.search-bar');

  if (!searchBtn || !searchBar) return;

  searchBtn.addEventListener('click', () => {
    searchBar.classList.toggle('active');
    if (searchBar.classList.contains('active')) {
      searchBar.querySelector('input')?.focus();
    }
  });

  document.addEventListener('click', (e) => {
    if (!searchBar.contains(e.target) && e.target !== searchBtn && !searchBtn.contains(e.target)) {
      searchBar.classList.remove('active');
    }
  });
}

// ============================================
// Loader
// ============================================
function initLoader() {
  const loader = document.querySelector('.loader-overlay');
  if (!loader) return;

  const counter = loader.querySelector('.loader-counter');
  const bar = loader.querySelector('.loader-progress-bar');

  let progress = 0;
  const duration = 1500;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    progress = Math.min(100, Math.floor((elapsed / duration) * 100));

    if (counter) counter.textContent = progress;
    if (bar) bar.style.width = progress + '%';

    if (progress < 100) {
      requestAnimationFrame(update);
    } else {
      setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => {
          loader.style.display = 'none';
        }, 800);
      }, 200);
    }
  }

  requestAnimationFrame(update);
}

// ============================================
// Custom Cursor
// ============================================
function initCursor() {
  if (window.matchMedia('(hover: none)').matches) return;

  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  document.body.appendChild(dot);

  let mouseX = 0, mouseY = 0;
  let dotX = 0, dotY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const clickables = document.querySelectorAll('a, button, .product-card, .category-card, input, select, textarea, .filter-pill');
  clickables.forEach(el => {
    el.addEventListener('mouseenter', () => dot.classList.add('expanded'));
    el.addEventListener('mouseleave', () => dot.classList.remove('expanded'));
  });

  function animate() {
    dotX += (mouseX - dotX) * 0.15;
    dotY += (mouseY - dotY) * 0.15;
    dot.style.left = dotX + 'px';
    dot.style.top = dotY + 'px';
    requestAnimationFrame(animate);
  }
  animate();
}

// ============================================
// Scroll Animations (Intersection Observer)
// ============================================
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Add animated class handler
  const style = document.createElement('style');
  style.textContent = '.animate-on-scroll.animated { opacity: 1 !important; transform: translateY(0) !important; }';
  document.head.appendChild(style);
}

// Stagger children
function initStaggerAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const children = entry.target.querySelectorAll('.stagger-child');
        children.forEach((child, i) => {
          setTimeout(() => {
            child.style.opacity = '1';
            child.style.transform = 'translateY(0)';
          }, i * 80);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.stagger-parent').forEach(el => {
    el.querySelectorAll('.stagger-child').forEach(child => {
      child.style.opacity = '0';
      child.style.transform = 'translateY(40px)';
      child.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    observer.observe(el);
  });
}

// ============================================
// Hero Animation
// ============================================
function initHeroAnimation() {
  const elements = document.querySelectorAll('.hero-animate');
  elements.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    setTimeout(() => {
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 500 + i * 200);
  });
}

// ============================================
// Product Filtering (Shop Page)
// ============================================
function initProductFilters() {
  const filterPills = document.querySelectorAll('.filter-pill');
  const productCards = document.querySelectorAll('.product-card');
  const sortSelect = document.getElementById('sortSelect');
  const grid = document.querySelector('.products-grid');

  if (!filterPills.length) return;

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const category = pill.dataset.category;
      let visibleCount = 0;

      productCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.classList.remove('hidden');
          card.style.display = '';
          visibleCount++;
        } else {
          card.classList.add('hidden');
          card.style.display = 'none';
        }
      });

      // Show/hide no results
      const noResults = document.querySelector('.no-results');
      if (noResults) {
        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    });
  });

  if (sortSelect && grid) {
    sortSelect.addEventListener('change', () => {
      const sort = sortSelect.value;
      const cards = [...grid.querySelectorAll('.product-card:not(.hidden)')];

      cards.sort((a, b) => {
        const aName = a.querySelector('.product-name')?.textContent || '';
        const bName = b.querySelector('.product-name')?.textContent || '';
        const aPrice = parseFloat(a.querySelector('.product-price')?.textContent?.replace('$', '') || 0);
        const bPrice = parseFloat(b.querySelector('.product-price')?.textContent?.replace('$', '') || 0);
        const aRating = parseFloat(a.dataset.rating || 0);
        const bRating = parseFloat(b.dataset.rating || 0);

        switch(sort) {
          case 'price-low': return aPrice - bPrice;
          case 'price-high': return bPrice - aPrice;
          case 'name': return aName.localeCompare(bName);
          case 'rating': return bRating - aRating;
          default: return 0;
        }
      });

      cards.forEach(card => grid.appendChild(card));
    });
  }
}

// ============================================
// Product Detail Page
// ============================================
function initProductDetail() {
  const mainImage = document.querySelector('.product-main-image');
  const thumbs = document.querySelectorAll('.product-thumb');

  if (!mainImage || !thumbs.length) return;

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const img = thumb.querySelector('img');
      if (img) {
        mainImage.src = img.src;
        mainImage.alt = img.alt;
      }
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });

  // Quantity selector
  const qtyInput = document.querySelector('.qty-input');
  const minusBtn = document.querySelector('.qty-btn.minus');
  const plusBtn = document.querySelector('.qty-btn.plus');

  if (qtyInput && minusBtn && plusBtn) {
    minusBtn.addEventListener('click', () => {
      qtyInput.value = Math.max(1, parseInt(qtyInput.value) - 1);
    });
    plusBtn.addEventListener('click', () => {
      qtyInput.value = Math.min(99, parseInt(qtyInput.value) + 1);
    });
  }

  // Add to cart on detail page
  const addBtn = document.querySelector('.btn-add-cart[data-product-id]');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const productId = parseInt(addBtn.dataset.productId);
      const qty = parseInt(qtyInput?.value || 1);
      addToCart(productId, qty);
      addBtn.classList.add('added');
      addBtn.textContent = '\u2713 Added';
      setTimeout(() => {
        addBtn.classList.remove('added');
        addBtn.textContent = 'Add to Cart';
      }, 2000);
    });
  }
}

// ============================================
// Cart Page
// ============================================
function renderCart() {
  const cartList = document.querySelector('.cart-list');
  const emptyState = document.querySelector('.empty-cart');
  const cartContent = document.querySelector('.cart-content');

  if (!cartList) return;

  const cart = getCart();

  if (cart.length === 0) {
    if (emptyState) emptyState.classList.remove('hidden');
    if (cartContent) cartContent.classList.add('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');
  if (cartContent) cartContent.classList.remove('hidden');

  cartList.innerHTML = cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <img src="${item.image}" alt="${item.name}" class="cart-item-image">
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-variant">${item.category}</div>
        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
      </div>
      <div class="cart-item-quantity">
        <div class="quantity-selector">
          <button class="qty-btn minus" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
          <input type="text" class="qty-input" value="${item.quantity}" readonly>
          <button class="qty-btn plus" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
        </div>
      </div>
      <div class="cart-item-total">$${(item.price * item.quantity).toFixed(2)}</div>
      <button class="remove-btn" onclick="removeFromCart(${item.id})">&times;</button>
    </div>
  `).join('');

  // Update summary
  const subtotal = getCartTotal();
  const subtotalEl = document.getElementById('cartSubtotal');
  const totalEl = document.getElementById('cartTotal');
  if (subtotalEl) subtotalEl.textContent = '$' + subtotal.toFixed(2);
  if (totalEl) totalEl.textContent = '$' + subtotal.toFixed(2);
}

// ============================================
// Login Page
// ============================================
function initLoginTabs() {
  const tabs = document.querySelectorAll('.login-tab');
  const forms = document.querySelectorAll('.login-form');

  if (!tabs.length) return;

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      forms.forEach(f => f.classList.remove('active'));
      if (forms[index]) forms[index].classList.add('active');
    });
  });
}

function initFormValidation() {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = loginForm.querySelector('input[type="email"]');
      const password = loginForm.querySelector('input[type="password"]');

      if (!validateEmail(email.value)) {
        showFieldError(email, 'Please enter a valid email');
        return;
      }
      if (password.value.length < 8) {
        showFieldError(password, 'Password must be at least 8 characters');
        return;
      }

      showToast('Welcome back!', 'You have successfully signed in.');
    });
  }

  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const inputs = registerForm.querySelectorAll('input');
      const name = inputs[0]?.value;
      const email = inputs[1]?.value;
      const password = inputs[2]?.value;
      const confirm = inputs[3]?.value;

      if (!name || name.length < 2) {
        showFieldError(inputs[0], 'Please enter your full name');
        return;
      }
      if (!validateEmail(email)) {
        showFieldError(inputs[1], 'Please enter a valid email');
        return;
      }
      if (password.length < 8) {
        showFieldError(inputs[2], 'Password must be at least 8 characters');
        return;
      }
      if (password !== confirm) {
        showFieldError(inputs[3], 'Passwords do not match');
        return;
      }

      showToast('Account created!', 'Welcome to AutoVault.');
    });
  }
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showFieldError(input, message) {
  const group = input.closest('.form-group');
  const error = group?.querySelector('.form-error');
  input.classList.add('error');
  if (error) {
    error.textContent = message;
    error.classList.add('active');
  }
  input.addEventListener('input', () => {
    input.classList.remove('error');
    if (error) error.classList.remove('active');
  }, { once: true });
}

// ============================================
// Newsletter
// ============================================
function initNewsletter() {
  const form = document.querySelector('.newsletter-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    const success = document.querySelector('.newsletter-success');

    if (!validateEmail(input.value)) {
      input.classList.add('shake');
      input.style.borderColor = 'var(--error)';
      setTimeout(() => {
        input.classList.remove('shake');
        input.style.borderColor = '';
      }, 500);
      return;
    }

    form.style.display = 'none';
    if (success) success.classList.add('active');
  });
}

// ============================================
// Render Product Cards
// ============================================
function renderProductCards(containerSelector, productList) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.innerHTML = productList.map(product => `
    <div class="product-card" data-category="${product.category}" data-rating="${product.rating}">
      <div class="product-card-image-wrapper">
        <img src="${product.image}" alt="${product.name}" class="product-card-image">
        ${product.badge ? `<span class="product-card-badge ${product.badge === 'SALE' || product.badge === '-20%' ? 'sale' : ''}">${product.badge}</span>` : ''}
        <div class="product-card-overlay">
          <button class="overlay-btn quick-view" onclick="openModal(${product.id})">Quick View</button>
          <button class="overlay-btn add-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      </div>
      <div class="product-card-info">
        <div class="product-category">${product.categoryLabel}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-price-row">
          <span class="product-price">$${product.price.toFixed(2)}</span>
          ${product.originalPrice ? `<span class="product-original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
        </div>
        <div class="product-rating">
          ${renderStars(product.rating)}
          <span class="rating-count">(${product.reviews})</span>
        </div>
      </div>
    </div>
  `).join('');
}

function renderStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars += '<svg width="14" height="14" viewBox="0 0 24 24" fill="#FFB800" stroke="#FFB800" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
    } else if (i - 0.5 <= rating) {
      stars += '<svg width="14" height="14" viewBox="0 0 24 24" stroke="#FFB800" stroke-width="2"><defs><linearGradient id="half"><stop offset="50%" stop-color="#FFB800"/><stop offset="50%" stop-color="transparent"/></linearGradient></defs><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="url(#half)"/></svg>';
    } else {
      stars += '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2A2A32" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
    }
  }
  return stars;
}

// ============================================
// Initialize Everything
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initHeaderScroll();
  initMobileMenu();
  initSearchBar();
  initCursor();
  initScrollAnimations();
  initStaggerAnimations();
  initHeroAnimation();
  initProductFilters();
  initProductDetail();
  initLoginTabs();
  initFormValidation();
  initNewsletter();
  renderCart();
  updateCartBadge();

  // Render featured products on homepage
  const featuredGrid = document.querySelector('.featured-grid');
  if (featuredGrid) {
    renderProductCards('.featured-grid', products.slice(0, 8));
  }

  // Render all products on shop page
  const shopGrid = document.querySelector('.shop-grid');
  if (shopGrid) {
    renderProductCards('.shop-grid', products);
  }

  // Render related products
  const relatedGrid = document.querySelector('.related-grid');
  if (relatedGrid) {
    renderProductCards('.related-grid', products.slice(2, 6));
  }
});
