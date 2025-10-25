// Daniel Phone — Full static SPA with Dashboard (vanilla JS)

// Save as script.js. Uses hash routing: #/, #/product/:id, #/cart, #/checkout, #/dashboard

// ---------- Product data (iPhones + Samsung) ----------

const DEFAULT_PRODUCTS = [

  // iPhones (recent)

  {

    id: 'iphone-16-pro-max',

    title: 'iPhone 16 Pro Max',

    category: 'iPhone',

    price: 1399,

    rating: 4.9,

    image: 'https://images.unsplash.com/photo-1710946556580-8e4d6e6a2b1d?auto=format&fit=crop&w=1200&q=80',

    description: 'iPhone 16 Pro Max — top-tier performance, advanced photography, and long battery life. Ideal for creators and power users.',

    specs: [

      '6.7" ProMotion OLED display',

      'A18 Pro chip',

      '256GB / 512GB / 1TB',

      '48MP main + telephoto options',

      'USB-C + MagSafe'

    ],

    longText: 'The iPhone 16 Pro Max represents Apple\'s most compelling hardware and software integration. With the A18 Pro chipset, users get unrivaled performance for content creation, gaming, and multitasking. The advanced camera system adds computational enhancements for low light and professional workflows.',

    notes: 'Shipping typically within 1-3 days for in-stock models. Verified units come with 30-day return policy (demo).'

  },

  {

    id: 'iphone-16-pro',

    title: 'iPhone 16 Pro',

    category: 'iPhone',

    price: 1199,

    rating: 4.9,

    image: 'https://images.unsplash.com/photo-1710946556580-8e4d6e6a2b1d?auto=format&fit=crop&w=900&q=80',

    description: 'iPhone 16 Pro — compact pro-level performance, ideal for professionals who prefer a smaller footprint.',

    specs: [

      '6.3" ProMotion OLED',

      'A18 Pro chip',

      '128GB / 256GB / 512GB',

      '48MP camera system'

    ],

    longText: 'A portable powerhouse, the iPhone 16 Pro brings the A18 Pro performance to a hand-friendly size without sacrificing camera prowess or battery resilience.',

    notes: 'Great choice for photographers and mobile video creators.'

  },

  {

    id: 'iphone-16',

    title: 'iPhone 16',

    category: 'iPhone',

    price: 899,

    rating: 4.7,

    image: 'https://images.unsplash.com/photo-1710946449607-6a8b3bd6a1a8?auto=format&fit=crop&w=900&q=80',

    description: 'iPhone 16 — balances performance and value, modern design and great battery life.',

    specs: ['6.1" OLED', 'A17 chip', '128GB / 256GB / 512GB'],

    longText: 'The iPhone 16 is a balanced choice — offering modern features and solid everyday performance at a competitive price.',

    notes: 'Often the best value for most users.'

  },

  {

    id: 'iphone-15-pro-max',

    title: 'iPhone 15 Pro Max',

    category: 'iPhone',

    price: 1299,

    rating: 4.9,

    image: 'https://images.unsplash.com/photo-1695040980078-191fddfc2a67?auto=format&fit=crop&w=1200&q=80',

    description: 'iPhone 15 Pro Max — titanium frame, A17 Pro chip and top-tier camera hardware.',

    specs: ['6.7" OLED', 'A17 Pro', 'Up to 1TB', 'Periscope telephoto (select SKUs)'],

    longText: 'Still a favorite among power users, the iPhone 15 Pro Max combines premium materials and long battery runtime for heavy usage days.',

    notes: 'Select SKUs include advanced telephoto lenses.'

  },

  // Samsung (recent)

  {

    id: 'samsung-s24-ultra',

    title: 'Samsung Galaxy S24 Ultra',

    category: 'Samsung',

    price: 1299,

    rating: 4.8,

    image: 'https://images.unsplash.com/photo-1717431516084-6b9b3d0c1f2c?auto=format&fit=crop&w=1200&q=80',

    description: 'Galaxy S24 Ultra — flagship-level hardware with a focus on pro camera tools, AI enhancements, and S Pen support.',

    specs: [

      '6.8" Dynamic AMOLED',

      'Snapdragon/Exynos latest',

      '200MP sensor (select), multi-lens array',

      'S Pen support on some SKUs'

    ],

    longText: 'The S24 Ultra continues Samsung\'s leadership on displays and camera versatility. It excels at zoom capabilities and photo flexibility for power users and professionals.',

    notes: 'Strong choices for mobile photographers and productivity users.'

  },

  {

    id: 'samsung-s23-ultra',

    title: 'Samsung Galaxy S23 Ultra',

    category: 'Samsung',

    price: 1099,

    rating: 4.7,

    image: 'https://images.unsplash.com/photo-1673503565857-0d6b8a90f9fa?auto=format&fit=crop&w=900&q=80',

    description: 'Galaxy S23 Ultra — proven flagship with a focus on camera performance and large, bright display.',

    specs: ['6.8" Dynamic AMOLED', 'High resolution camera array', 'Up to 1TB storage'],

    longText: 'A reliable flagship that offers excellent performance, display brightness, and imaging capabilities. A great alternative to the top iPhone models for users favoring Android.',

    notes: 'Good balance of price and performance.'

  },

  {

    id: 'samsung-z-fold-6',

    title: 'Samsung Galaxy Z Fold 6',

    category: 'Samsung',

    price: 1899,

    rating: 4.6,

    image: 'https://images.unsplash.com/photo-1682685790338-4bdc8f1d2cfc?auto=format&fit=crop&w=900&q=80',

    description: 'Galaxy Z Fold 6 — foldable powerhouse for multitaskers who want tablet-sized workflows in a pocketable form.',

    specs: ['Inner Foldable AMOLED', 'Multitasking UI', 'Premium hinge mechanics'],

    longText: 'Foldables enable unique productivity use cases. The Z Fold line is for those who want the best multitasking experience on Android.',

    notes: 'Handle with care. Great for power users and multitaskers.'

  },

  {

    id: 'samsung-z-flip-6',

    title: 'Samsung Galaxy Z Flip 6',

    category: 'Samsung',

    price: 999,

    rating: 4.4,

    image: 'https://images.unsplash.com/photo-1680731266426-93a3b3c5a9f0?auto=format&fit=crop&w=900&q=80',

    description: 'Galaxy Z Flip 6 — compact flip phone with a large cover screen and retro-modern style.',

    specs: ['Pocketable foldable', 'Cover screen interactions', 'Strong selfie camera'],

    longText: 'The Z Flip blends nostalgia with modern hardware and excellent camera tools for social users.',

    notes: 'Lightweight and stylish — popular among trend-conscious buyers.'

  },

  {

    id: 'samsung-a55',

    title: 'Samsung Galaxy A55',

    category: 'Samsung',

    price: 399,

    rating: 4.2,

    image: 'https://images.unsplash.com/photo-1629907014502-4632f3a1797a?auto=format&fit=crop&w=900&q=80',

    description: 'Galaxy A55 — value-focused smartphone with solid display and battery life for everyday users.',

    specs: ['AMOLED display', 'Midrange SoC', 'Long battery life'],

    longText: 'A strong midrange choice, balancing good screen quality and battery life at a reasonable price point.',

    notes: 'Excellent value option for buyers on a budget.'

  }

];

// ---------- State ----------

const $ = s => document.querySelector(s);

const $all = s => Array.from(document.querySelectorAll(s));

let state = {

  products: JSON.parse(localStorage.getItem('dp_products')) || DEFAULT_PRODUCTS.slice(),

  cart: JSON.parse(localStorage.getItem('dp_cart') || '{}'),

  filter: { q: '', category: 'all', sort: 'featured' }

};

// ---------- Persistence ----------

function persistProducts(){ localStorage.setItem('dp_products', JSON.stringify(state.products)); }

function saveCart(){ localStorage.setItem('dp_cart', JSON.stringify(state.cart)); updateCartBadge(); }

function updateCartBadge(){ const count = Object.values(state.cart).reduce((s,i)=>s+i.qty,0); $('#cart-badge').textContent = count; }

// ---------- Helpers ----------

function el(html){ const t = document.createElement('div'); t.innerHTML = html.trim(); return t.firstElementChild; }

function applyFilters(list){

  let out = list.slice();

  const q = state.filter.q.trim().toLowerCase();

  if(q) out = out.filter(p => (p.title + ' ' + p.description + ' ' + (p.specs||[]).join(' ')).toLowerCase().includes(q));

  if(state.filter.category !== 'all') out = out.filter(p => p.category === state.filter.category);

  if(state.filter.sort === 'price-asc') out.sort((a,b)=>a.price-b.price);

  if(state.filter.sort === 'price-desc') out.sort((a,b)=>b.price-a.price);

  return out;

}

// ---------- Renderers ----------

function renderHome(){

  const tpl = document.getElementById('home-template'); const clone = tpl.content.cloneNode(true);

  const grid = clone.querySelector('#products-grid');

  const filtered = applyFilters(state.products);

  grid.innerHTML = filtered.map(p => `

    <article class="product-card" data-id="${p.id}">

      <img src="${p.image}" alt="${p.title}">

      <div class="product-info">

        <h3>${p.title}</h3>

        <p class="muted">${p.category} · ${p.rating}★</p>

        <p class="muted small">${p.description}</p>

        <div class="card-footer">

          <div class="price">$${p.price}</div>

          <button class="add-btn" data-id="${p.id}">Add</button>

        </div>

      </div>

    </article>

  `).join('');

  grid.querySelectorAll('.product-card img, .product-card h3').forEach(elm=>elm.addEventListener('click', e=>{

    const article = e.target.closest('.product-card'); location.hash = `#/product/${article.dataset.id}`;

  }));

  grid.querySelectorAll('.add-btn').forEach(b=>b.addEventListener('click', e=>{ addToCart(e.currentTarget.dataset.id,1); }));

  const sortSelect = clone.querySelector('#sort-select'); sortSelect.value = state.filter.sort;

  sortSelect.addEventListener('change', e=>{ state.filter.sort = e.target.value; render(); });

  return clone;

}

function renderProduct(id){

  const tpl = document.getElementById('product-template'); const clone = tpl.content.cloneNode(true);

  const p = state.products.find(x=>x.id===id);

  if(!p) return el('<section class="container"><p>Product not found.</p></section>');

  clone.getElementById('pd-main').src = p.image;

  clone.getElementById('pd-main').alt = p.title;

  clone.getElementById('pd-title').textContent = p.title;

  clone.getElementById('pd-category').textContent = p.category;

  clone.getElementById('pd-desc').textContent = p.description;

  clone.getElementById('pd-long').textContent = p.longText || '';

  clone.getElementById('pd-notes').textContent = p.notes || '';

  const specs = clone.getElementById('pd-specs'); specs.innerHTML = (p.specs||[]).map(s=>`<li>${s}</li>`).join('');

  clone.getElementById('pd-price').textContent = `$${p.price}`;

  clone.getElementById('pd-rating').textContent = `${p.rating} ★`;

  clone.getElementById('pd-add').addEventListener('click', ()=>{ const qty = Number(clone.getElementById('pd-qty').value)||1; addToCart(p.id, qty); });

  return clone;

}

function renderCart(){

  const tpl = document.getElementById('cart-template'); const clone = tpl.content.cloneNode(true);

  const list = clone.getElementById('cart-list');

  const items = Object.entries(state.cart).map(([id,item])=>({ ...item, id }));

  if(items.length===0) list.innerHTML = '<p class="muted">Your cart is empty.</p>';

  else list.innerHTML = items.map(it=>{

    const p = state.products.find(x=>x.id===it.id);

    return `

    <div class="cart-item" data-id="${it.id}">

      <img src="${p.image}" alt="${p.title}">

      <div style="flex:1">

        <strong>${p.title}</strong>

        <div class="muted small">${p.category}</div>

      </div>

      <div style="text-align:right">

        <div>$${p.price} x <input class="cart-qty" data-id="${it.id}" style="width:50px" type="number" min="1" value="${it.qty}"></div>

        <div class="muted small">$${(p.price*it.qty).toFixed(2)}</div>

        <button class="add-btn secondary remove-btn" data-id="${it.id}">Remove</button>

      </div>

    </div>`;

  }).join('');

  clone.getElementById('cart-subtotal').textContent = `$${cartSubtotal().toFixed(2)}`;

  clone.querySelectorAll('.cart-qty').forEach(input=>input.addEventListener('change', e=>{ const id=e.target.dataset.id; state.cart[id].qty = Number(e.target.value)||1; saveCart(); render(); }));

  clone.querySelectorAll('.remove-btn').forEach(b=>b.addEventListener('click', e=>{ delete state.cart[e.target.dataset.id]; saveCart(); render(); }));

  return clone;

}

function renderCheckout(){

  const tpl = document.getElementById('checkout-template'); const clone = tpl.content.cloneNode(true);

  const form = clone.getElementById('checkout-form');

  form.addEventListener('submit', e=>{

    e.preventDefault();

    alert('Order placed! Thank you — this is a demo checkout.');

    state.cart = {}; saveCart(); location.hash = '#/';

  });

  return clone;

}

function renderDashboard(){

  const tpl = document.getElementById('dashboard-template'); const clone = tpl.content.cloneNode(true);

  clone.getElementById('stat-count').textContent = state.products.length;

  clone.getElementById('stat-cart').textContent = Object.values(state.cart).reduce((s,i)=>s+i.qty,0);

  const adminList = clone.getElementById('admin-list');

  const filtered = (clone.querySelector('#admin-filter') ? state.products : state.products).slice();

  adminList.innerHTML = filtered.map(p=>`

    <div class="admin-card" data-id="${p.id}">

      <img src="${p.image}" alt="${p.title}">

      <strong>${p.title}</strong>

      <div class="muted small">${p.category} • $${p.price}</div>

      <p class="muted small">${p.description.slice(0,100)}...</p>

      <div style="margin-top:0.6rem;display:flex;gap:0.5rem">

        <button class="btn admin-edit" data-id="${p.id}">Edit</button>

        <button class="btn ghost admin-delete" data-id="${p.id}">Delete</button>

      </div>

    </div>

  `).join('');

  // Admin events

  clone.querySelector('#add-product-btn').addEventListener('click', ()=>{ openAdminForm(); });

  clone.querySelectorAll('.admin-delete').forEach(b=>b.addEventListener('click', e=>{

    const id = e.target.dataset.id; if(confirm('Delete product?')){ state.products = state.products.filter(x=>x.id!==id); persistProducts(); render(); }

  }));

  clone.querySelectorAll('.admin-edit').forEach(b=>b.addEventListener('click', e=>{ openAdminForm(e.target.dataset.id); }));

  // Admin search/filter

  clone.querySelector('#admin-search').addEventListener('input', e=>{

    const q = e.target.value.toLowerCase();

    const cards = clone.querySelectorAll('.admin-card');

    cards.forEach(c=>{

      const id = c.dataset.id; const p = state.products.find(x=>x.id===id);

      c.style.display = (p.title.toLowerCase().includes(q) || (p.description||'').toLowerCase().includes(q)) ? '' : 'none';

    });

  });

  clone.querySelector('#admin-filter').addEventListener('change', e=>{

    const f = e.target.value;

    const cards = clone.querySelectorAll('.admin-card');

    cards.forEach(c=>{

      const id = c.dataset.id; const p = state.products.find(x=>x.id===id);

      c.style.display = (f==='all' || p.category===f) ? '' : 'none';

    });

  });

  // Admin form controls

  function openAdminForm(id){

    const wrap = clone.getElementById('admin-form-wrap'); wrap.classList.remove('hidden');

    const form = clone.getElementById('admin-form');

    clone.getElementById('admin-form-title').textContent = id ? 'Edit product' : 'Add product';

    if(id){

      const p = state.products.find(x=>x.id===id);

      form.title.value = p.title; form.category.value = p.category; form.price.value = p.price;

      form.image.value = p.image; form.description.value = p.description; form.specs.value = (p.specs||[]).join('\n');

      form.dataset.editId = id;

    } else {

      form.reset(); delete form.dataset.editId;

    }

  }

  clone.getElementById('admin-cancel').addEventListener('click', ()=>{ clone.getElementById('admin-form-wrap').classList.add('hidden'); });

  clone.getElementById('admin-form').addEventListener('submit', e=>{

    e.preventDefault();

    const f = e.target;

    const obj = {

      id: f.dataset.editId || ('p-'+Math.random().toString(36).slice(2,9)),

      title: f.title.value.trim(),

      category: f.category.value.trim(),

      price: Number(f.price.value),

      image: f.image.value.trim(),

      description: f.description.value.trim(),

      specs: f.specs.value.split('\n').map(s=>s.trim()).filter(Boolean),

      rating: 4.5,

      longText: f.description.value.trim(),

      notes: 'Managed from dashboard (demo).'

    };

    if(f.dataset.editId){

      state.products = state.products.map(p=>p.id===obj.id?obj:p);

    } else {

      state.products.unshift(obj);

    }

    persistProducts(); clone.getElementById('admin-form-wrap').classList.add('hidden'); render();

  });

  return clone;

}

// ---------- Cart + actions ----------

function cartSubtotal(){ return Object.entries(state.cart).reduce((sum,[id,it])=>{ const p = state.products.find(x=>x.id===id); return sum + (p ? p.price*it.qty : 0); },0); }

function addToCart(id, qty=1){

  if(!state.cart[id]) state.cart[id] = { qty: 0 };

  state.cart[id].qty += qty; saveCart(); flashToast('Added to cart');

}

// ---------- Small UI ----------

function flashToast(msg){

  const t = el(`<div style="position:fixed;right:16px;bottom:24px;background:#021124;color:#fff;padding:10px 14px;border-radius:8px;box-shadow:0 6px 20px rgba(2,6,23,0.3);z-index:999">${msg}</div>`);

  document.body.appendChild(t); setTimeout(()=>t.remove(), 1400);

}

// ---------- Router ----------

function mountView(){

  const root = $('#app'); root.innerHTML = '';

  const hash = location.hash || '#/';

  if(hash.startsWith('#/product/')){ const id = hash.replace('#/product/',''); root.appendChild(renderProduct(id)); }

  else if(hash.startsWith('#/cart')){ root.appendChild(renderCart()); }

  else if(hash.startsWith('#/checkout')){ root.appendChild(renderCheckout()); }

  else if(hash.startsWith('#/dashboard')){ root.appendChild(renderDashboard()); }

  else { root.appendChild(renderHome()); }

}

function render(){

  mountView(); updateCartBadge(); $('#year').textContent = new Date().getFullYear();

}

// ---------- Init ----------

window.addEventListener('hashchange', ()=>render());

window.addEventListener('load', ()=>{

  // Search & filters

  $('#search').addEventListener('input', e=>{ state.filter.q = e.target.value; render(); });

  $('#category-filter').addEventListener('change', e=>{ state.filter.category = e.target.value; render(); });

  $('#sort-select')?.addEventListener('change', e=>{ state.filter.sort = e.target.value; render(); });

  $('#view-cart').addEventListener('click', ()=>{ location.hash = '#/cart'; });

  $('#mobile-menu-toggle').addEventListener('click', ()=>{ $('#mobile-menu').classList.toggle('open'); });

  render();

});

// Expose for debug

window.DP = { state, addToCart, persistProducts, saveCart };