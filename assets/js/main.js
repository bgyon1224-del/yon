/*==================================================
OPTIK GLENN
MAIN.JS v2.2 (Premium Redesign)
==================================================*/

/*==================================================
MOBILE MENU
==================================================*/
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });
}

/*==================================================
CLOSE MENU AFTER CLICK
==================================================*/
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuToggle.classList.remove("active");
  });
});

/*==================================================
NAVBAR SHADOW ON SCROLL
==================================================*/
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (!navbar) return;
  if (window.scrollY > 40) {
    navbar.style.boxShadow = "0 8px 28px rgba(0,168,232,0.15)";
  } else {
    navbar.style.boxShadow = "0 2px 16px rgba(26,26,24,0.06)";
  }
});

/*==================================================
BACK TO TOP BUTTON
==================================================*/
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (!backToTop) return;
  if (window.scrollY > 400) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

if (backToTop) {
  backToTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/*==================================================
REVEAL ON SCROLL
==================================================*/
const revealElements = document.querySelectorAll(
  ".why-card,.service-card,.frame-card,.gallery-card,.step,.testimonial-card,.contact-card,.faq-item"
);

const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.85;
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/*==================================================
CUSTOM TOAST NOTIFICATION
==================================================*/
function showToast(message) {
  let toast = document.querySelector(".toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast-notification";
    toast.innerHTML = `<i class="fa-solid fa-circle-check toast-icon"></i> <span></span>`;
    document.body.appendChild(toast);
  }
  toast.querySelector("span").textContent = message;
  
  // Trigger animasi masuk
  setTimeout(() => toast.classList.add("show"), 10);
  
  // Sembunyikan setelah 3.5 detik
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

/*==================================================
REVIEW FORM
==================================================*/
const reviewForm = document.querySelector("#reviewForm");

if (reviewForm) {
  reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("Terima kasih. Review Anda berhasil dikirim.");
    reviewForm.reset();
  });
}

/*==================================================
CONTACT FORM
==================================================*/
const contactForm = document.querySelector("#contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("Terima kasih. Tim kami akan segera menghubungi Anda.");
    contactForm.reset();
  });
}

/*==================================================
FAQ ACCORDION
==================================================*/
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".faq-item");
    const isActive = item.classList.contains("active");
    document.querySelectorAll(".faq-item").forEach(el => el.classList.remove("active"));
    if (!isActive) item.classList.add("active");
  });
});

/*==================================================
SMOOTH SCROLL FOR ANCHOR LINKS
==================================================*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href === "#" || href.length < 2) return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/*==================================================
ACTIVE MENU ON SCROLL
==================================================*/
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-menu ul a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 130;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (current && link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

/*==================================================
LOADING FINISHED
==================================================*/
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
  console.log("OPTIK GLENN WEBSITE REDESIGN READY");
});

/*==================================================
END MAIN.JS
VERSION 2.2
==================================================*/