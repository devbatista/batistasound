// Atualiza ano do rodapé
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Menu mobile
const mobileBtn = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const iconOpen = document.getElementById("mobile-menu-icon-open");
const iconClose = document.getElementById("mobile-menu-icon-close");

if (mobileBtn && mobileMenu && iconOpen && iconClose) {
  mobileBtn.addEventListener("click", () => {
    const isOpen = !mobileMenu.classList.contains("hidden");
    mobileMenu.classList.toggle("hidden", isOpen);
    iconOpen.classList.toggle("hidden", !isOpen);
    iconClose.classList.toggle("hidden", isOpen);
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      iconOpen.classList.remove("hidden");
      iconClose.classList.add("hidden");
    });
  });
}

// Modal simples da galeria
const thumbs = document.querySelectorAll(".gallery-thumb");
const modal = document.getElementById("gallery-modal");
const modalImg = document.getElementById("gallery-modal-image");
const modalClose = document.getElementById("gallery-modal-close");

function closeModal() {
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

if (thumbs && modal && modalImg && modalClose) {
  thumbs.forEach((btn) => {
    btn.addEventListener("click", () => {
      const src = btn.getAttribute("data-image");
      const alt = btn.getAttribute("data-alt") || "Imagem ampliada";
      if (!src) return;
      modalImg.src = src;
      modalImg.alt = alt;
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    });
  });

  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}
