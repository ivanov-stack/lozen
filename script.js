const key='lozen_lang';let lang=localStorage.getItem(key)||'bg';function applyLang(){document.documentElement.lang=lang;document.querySelectorAll('[data-bg]').forEach(el=>{el.innerHTML=lang==='bg'?el.dataset.bg:el.dataset.en});const btn=document.getElementById('langToggle');if(btn)btn.textContent=lang==='bg'?'EN':'BG';document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(el=>{const ph=el.getAttribute('placeholder');if(ph&&ph.includes('/')){const parts=ph.split('/').map(s=>s.trim());el.placeholder=lang==='bg'?parts[0]:parts[1]||parts[0];}})}document.addEventListener('DOMContentLoaded',()=>{const btn=document.getElementById('langToggle');if(btn)btn.addEventListener('click',()=>{lang=lang==// Language switcher
const key = 'lozen_lang';
let lang = localStorage.getItem(key) || 'bg';

function applyLang() {
  document.documentElement.lang = lang;
  
  document.querySelectorAll('[data-bg]').forEach(el => {
    el.innerHTML = lang === 'bg' ? el.dataset.bg : el.dataset.en;
  });
  
  const btn = document.getElementById('langToggle');
  if(btn) btn.textContent = lang === 'bg' ? 'EN' : 'BG';
  
  document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(el => {
    const ph = el.getAttribute('placeholder');
    if(ph && ph.includes('/')) {
      const parts = ph.split('/').map(s => s.trim());
      el.placeholder = lang === 'bg' ? parts[0] : parts[1] || parts[0];
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('langToggle');
  if(btn) btn.addEventListener('click', () => {
    lang = lang === 'bg' ? 'en' : 'bg';
    localStorage.setItem(key, lang);
    applyLang();
  });

  applyLang();
  
  // Gallery modal
  const modal = document.getElementById("galleryModal");
  const modalImg = document.getElementById("modalImage");
  const captionText = document.getElementById("modalCaption");
  const galleryItems = document.querySelectorAll(".gallery-item");
  const closeBtn = modal.querySelector(".close");
  const prevBtn = modal.querySelector(".prev");
  const nextBtn = modal.querySelector(".next");
  
  let currentIndex = 0;
  let startX = 0;
  let endX = 0;

  function openModal(index) {
    currentIndex = index;
    modal.style.display = "block";
    modalImg.src = galleryItems[currentIndex].src;
    captionText.innerHTML = galleryItems[currentIndex].alt || "";
  }

  function showImage(index) {
    currentIndex = (index + galleryItems.length) % galleryItems.length;
    modalImg.src = galleryItems[currentIndex].src;
    captionText.innerHTML = galleryItems[currentIndex].alt || "";
  }

  galleryItems.forEach((img, i) => {
    img.addEventListener("click", () => openModal(i));
  });

  closeBtn.onclick = () => { modal.style.display = "none"; };
  prevBtn.onclick = () => showImage(currentIndex - 1);
  nextBtn.onclick = () => showImage(currentIndex + 1);

  // Swipe support
  modalImg.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });
  modalImg.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    if(startX - endX > 50) { // swipe left
      showImage(currentIndex + 1);
    } else if(endX - startX > 50) { // swipe right
      showImage(currentIndex - 1);
    }
  });

  window.onclick = (event) => {
    if (event.target === modal) modal.style.display = "none";
  };
});='bg'?'en':'bg';localStorage.setItem(key,lang);applyLang();});applyLang();});
