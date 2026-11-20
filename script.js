/* =====================================================
   TAMAN HIAS GREEN HOUSE - JAVASCRIPT
===================================================== */


/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("show")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    } else {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  });

  // Tutup menu setelah memilih navigasi
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");

      const icon = menuToggle.querySelector("i");

      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    });
  });
}


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveNavigation() {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 180;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveNavigation);


/* =====================================================
   PRODUCT FILTER
   Semua / Indoor / Outdoor / Perlengkapan
===================================================== */

const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");


function filterProducts(category) {

  productCards.forEach((card) => {

    const categories =
      (card.dataset.category || "")
        .toLowerCase()
        .split(" ");

    let showCard = false;

    // Tampilkan semua produk
    if (category === "all") {
      showCard = true;
    }

    // Indoor
    else if (category === "indoor") {
      showCard =
        categories.includes("indoor") ||
        categories.includes("indoor-outdoor");
    }

    // Outdoor
    else if (category === "outdoor") {
      showCard =
        categories.includes("outdoor") ||
        categories.includes("indoor-outdoor");
    }

    // Perlengkapan
    else if (category === "perlengkapan") {
      showCard =
        categories.includes("perlengkapan") ||
        categories.includes("media") ||
        categories.includes("pupuk") ||
        categories.includes("pot");
    }

    if (showCard) {
      card.classList.remove("hide");
    } else {
      card.classList.add("hide");
    }

  });
}


/* =========================
   FILTER BUTTON
========================= */

filterButtons.forEach((button) => {

  button.addEventListener("click", () => {

    // Hapus active dari semua tombol
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    // Tambahkan active ke tombol yang dipilih
    button.classList.add("active");

    const category = button.dataset.filter;

    filterProducts(category);

  });

});


/* =====================================================
   CATEGORY CARD
===================================================== */

const categoryCards = document.querySelectorAll(".category-card");

categoryCards.forEach((card) => {

  card.addEventListener("click", () => {

    const category = card.dataset.filter;

    // Update tombol filter
    filterButtons.forEach((button) => {

      button.classList.remove("active");

      if (button.dataset.filter === category) {
        button.classList.add("active");
      }

    });

    // Filter produk
    filterProducts(category);

    // Scroll ke bagian produk
    const productSection =
      document.getElementById("produk") ||
      document.getElementById("komoditas");

    if (productSection) {
      productSection.scrollIntoView({
        behavior: "smooth"
      });
    }

  });

});


/* =====================================================
   DATA PRODUK TAMAN HIAS GREEN HOUSE
===================================================== */

const products = {

  /* =========================
     TANAMAN INDOOR
  ========================= */

  monstera: {
    name: "Monstera Deliciosa",
    category: "Tanaman Hias Indoor",
    price: "Rp85.000",
    size: "40–60 cm",

    image:
      "https://images.unsplash.com/photo-1614594575926-7b7f2f3f0b0c?auto=format&fit=crop&w=800&q=85",

    description:
      "Monstera Deliciosa merupakan tanaman tropis dengan daun lebar dan karakteristik lubang alami. Cocok untuk ruang tamu, kamar, ruang kerja, maupun kantor.",

    usage:
      "Cocok digunakan sebagai dekorasi ruang indoor, sudut ruangan, ruang kerja, dan area rumah dengan cahaya tidak langsung.",

    care: [
      "Letakkan pada area dengan cahaya terang tidak langsung.",
      "Siram ketika permukaan media mulai mengering.",
      "Gunakan media tanam yang memiliki drainase baik.",
      "Berikan pupuk setiap 1–2 bulan.",
      "Bersihkan daun secara rutin agar tetap sehat."
    ]
  },


  aglaonema: {
    name: "Aglaonema",
    category: "Tanaman Hias Indoor",
    price: "Rp75.000",
    size: "30–45 cm",

    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=800&q=85",

    description:
      "Aglaonema merupakan tanaman hias dengan warna dan motif daun yang menarik. Sangat cocok untuk mempercantik meja, ruang tamu, kamar, dan kantor.",

    usage:
      "Cocok digunakan sebagai tanaman dekorasi meja, ruang tamu, kamar tidur, ruang kerja, maupun kantor.",

    care: [
      "Gunakan cahaya terang tidak langsung.",
      "Hindari sinar matahari langsung terlalu lama.",
      "Siram ketika media mulai mengering.",
      "Bersihkan daun secara rutin.",
      "Berikan pupuk secara berkala."
    ]
  },


  calathea: {
    name: "Calathea",
    category: "Tanaman Hias Indoor",
    price: "Rp65.000",
    size: "25–40 cm",

    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=85",

    description:
      "Calathea memiliki pola daun yang unik dan menarik. Tanaman ini cocok untuk pecinta tanaman yang ingin menghadirkan suasana tropis dan segar di dalam ruangan.",

    usage:
      "Cocok sebagai dekorasi kamar, ruang tamu, ruang kerja, meja kantor, dan area indoor lainnya.",

    care: [
      "Letakkan di tempat dengan cahaya tidak langsung.",
      "Jaga media tetap sedikit lembap.",
      "Hindari panas matahari langsung.",
      "Pastikan sirkulasi udara baik.",
      "Gunakan air secukupnya dan jangan sampai tergenang."
    ]
  },


  philodendron: {
    name: "Philodendron",
    category: "Tanaman Hias Indoor",
    price: "Rp90.000",
    size: "30–50 cm",

    image:
      "https://images.unsplash.com/photo-1611909023032-2d6b313f1f4f?auto=format&fit=crop&w=800&q=85",

    description:
      "Philodendron merupakan tanaman tropis dengan daun hijau yang memberikan kesan natural, segar, dan modern pada interior.",

    usage:
      "Cocok untuk dekorasi ruang tamu, kamar, kantor, meja kerja, dan sudut ruangan.",

    care: [
      "Letakkan pada cahaya terang tidak langsung.",
      "Siram ketika media mulai mengering.",
      "Gunakan media tanam yang porous.",
      "Berikan pupuk secara berkala.",
      "Jangan biarkan akar terendam air."
    ]
  },


  /* =========================
     TANAMAN INDOOR & OUTDOOR
  ========================= */

  sansevieria: {
    name: "Sansevieria",
    category: "Tanaman Indoor & Outdoor",
    price: "Rp55.000",
    size: "30–70 cm",

    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2a9c?auto=format&fit=crop&w=800&q=85",

    description:
      "Sansevieria memiliki bentuk daun tegak yang elegan dan mudah dirawat. Tanaman ini dapat digunakan sebagai dekorasi indoor maupun outdoor.",

    usage:
      "Cocok digunakan di ruang tamu, kamar, kantor, teras, balkon, maupun taman.",

    care: [
      "Dapat ditempatkan pada cahaya terang maupun teduh.",
      "Jangan terlalu sering menyiram.",
      "Gunakan pot dengan lubang drainase.",
      "Biarkan media mengering sebelum disiram kembali.",
      "Hindari genangan air."
    ]
  },


  sukulen: {
    name: "Sukulen",
    category: "Tanaman Indoor & Outdoor",
    price: "Rp25.000",
    size: "8–15 cm",

    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=800&q=85",

    description:
      "Sukulen memiliki bentuk yang beragam dan unik. Ukurannya yang kecil membuatnya cocok untuk meja kerja, rak, kamar, balkon, maupun koleksi tanaman.",

    usage:
      "Cocok untuk koleksi tanaman, dekorasi meja, rak, kamar, balkon, dan taman mini.",

    care: [
      "Letakkan di tempat yang mendapat cahaya cukup.",
      "Jangan terlalu sering menyiram.",
      "Gunakan media tanam khusus sukulen.",
      "Pastikan pot memiliki lubang drainase.",
      "Hindari media terlalu lembap."
    ]
  },


  /* =========================
     TANAMAN OUTDOOR
  ========================= */

  kaktus: {
    name: "Kaktus",
    category: "Tanaman Hias Outdoor",
    price: "Rp35.000",
    size: "15–30 cm",

    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=85",

    description:
      "Kaktus merupakan tanaman yang menyukai cahaya dan memiliki bentuk unik. Cocok untuk taman mini, teras, balkon, maupun area outdoor.",

    usage:
      "Cocok digunakan sebagai dekorasi teras, balkon, taman, halaman rumah, maupun taman mini.",

    care: [
      "Berikan cahaya matahari yang cukup.",
      "Siram hanya ketika media benar-benar kering.",
      "Gunakan media khusus kaktus.",
      "Pastikan tidak ada genangan air.",
      "Gunakan pot dengan drainase yang baik."
    ]
  },


  /* =========================
     PERLENGKAPAN
  ========================= */

  pot: {
    name: "Pot Minimalis",
    category: "Perlengkapan Tanaman",
    price: "Rp45.000",
    size: "20–30 cm",

    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=85",

    description:
      "Pot minimalis dengan desain sederhana yang cocok digunakan untuk berbagai jenis tanaman indoor maupun outdoor.",

    usage:
      "Gunakan sebagai wadah tanaman. Pilih ukuran pot sesuai dengan ukuran akar dan pertumbuhan tanaman.",

    care: [
      "Sesuaikan ukuran pot dengan ukuran tanaman.",
      "Pastikan pot memiliki lubang drainase.",
      "Bersihkan pot secara berkala.",
      "Gunakan tatakan jika digunakan di dalam ruangan."
    ]
  },


  media: {
    name: "Media Tanam Premium",
    category: "Perlengkapan Tanaman",
    price: "Rp30.000",
    size: "5 Liter",

    image:
      "https://images.unsplash.com/photo-1599685315640-7e6f1c7e8f13?auto=format&fit=crop&w=800&q=85",

    description:
      "Media tanam premium yang membantu menjaga sirkulasi udara, kelembapan, dan perkembangan akar tanaman.",

    usage:
      "Gunakan sebagai media utama atau campurkan dengan bahan lain sesuai kebutuhan tanaman.",

    care: [
      "Gunakan sesuai kebutuhan tanaman.",
      "Campurkan dengan media lain jika diperlukan.",
      "Pastikan media tidak terlalu padat.",
      "Ganti media secara berkala."
    ]
  },


  pupuk: {
    name: "Pupuk Tanaman",
    category: "Perawatan Tanaman",
    price: "Rp28.000",
    size: "500 gr",

    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=85",

    description:
      "Pupuk tanaman untuk membantu memenuhi kebutuhan nutrisi sehingga tanaman dapat tumbuh lebih sehat, subur, dan memiliki perkembangan yang optimal.",

    usage:
      "Gunakan pupuk sesuai jenis tanaman dan dosis yang dianjurkan pada kemasan.",

    care: [
      "Gunakan sesuai dosis pada kemasan.",
      "Jangan memberikan pupuk secara berlebihan.",
      "Gunakan pada media yang lembap.",
      "Berikan secara berkala sesuai jenis tanaman.",
      "Simpan pupuk di tempat yang kering."
    ]
  }

};


/* =====================================================
   PRODUCT MODAL / DETAIL PRODUK
===================================================== */

const modal = document.getElementById("productModal");
const modalClose = document.getElementById("modalClose");
const modalProductContent =
  document.getElementById("modalProductContent");

const detailButtons =
  document.querySelectorAll(".detail-btn");


if (
  modal &&
  modalClose &&
  modalProductContent
) {

  detailButtons.forEach((button) => {

    button.addEventListener("click", () => {

      const productId =
        button.dataset.product;

      const product =
        products[productId];

      if (!product) {
        console.error(
          "Produk tidak ditemukan:",
          productId
        );

        return;
      }


      modalProductContent.innerHTML = `

        <div class="modal-product">

          <div class="modal-product-image">

            <img
              src="${product.image}"
              alt="${product.name}"
            >

          </div>


          <div class="modal-product-info">

            <span class="section-label">
              ${product.category}
            </span>


            <h2>
              ${product.name}
            </h2>


            <span class="modal-price">
              ${product.price}
            </span>


            <p>
              ${product.description}
            </p>


            <div class="modal-meta">

              <div>
                <span>Ukuran</span>
                <strong>${product.size}</strong>
              </div>


              <div>
                <span>Harga</span>
                <strong>${product.price}</strong>
              </div>

            </div>


            <div class="modal-care">

              <h4>
                <i class="fa-solid fa-circle-info"></i>
                Cara Penggunaan
              </h4>

              <p>
                ${product.usage}
              </p>

            </div>


            <div class="modal-care">

              <h4>
                <i class="fa-solid fa-seedling"></i>
                Cara Perawatan
              </h4>

              <ul>

                ${product.care
                  .map(
                    (item) =>
                      `<li>${item}</li>`
                  )
                  .join("")}

              </ul>

            </div>


            <a
              href="#kontak"
              class="btn btn-primary modal-contact-btn"
            >
              Tanya Produk
              <i class="fa-solid fa-arrow-right"></i>
            </a>

          </div>

        </div>

      `;


      modal.classList.add("show");

      document.body.style.overflow =
        "hidden";

    });

  });


  /* =========================
     CLOSE MODAL
  ========================= */

  function closeModal() {

    modal.classList.remove("show");

    document.body.style.overflow = "";

  }


  modalClose.addEventListener(
    "click",
    closeModal
  );


  modal.addEventListener(
    "click",
    (event) => {

      if (
        event.target === modal
      ) {
        closeModal();
      }

    }
  );


  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "Escape" &&
        modal.classList.contains("show")
      ) {
        closeModal();
      }

    }
  );

}


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
  document.getElementById("contactForm");

const formMessage =
  document.getElementById("formMessage");


if (contactForm && formMessage) {

  contactForm.addEventListener(
    "submit",
    (event) => {

      event.preventDefault();


      const name =
        document
          .getElementById("name")
          .value
          .trim();


      const email =
        document
          .getElementById("email")
          .value
          .trim();


      const subject =
        document
          .getElementById("subject")
          .value;


      const message =
        document
          .getElementById("message")
          .value
          .trim();


      if (
        !name ||
        !email ||
        !subject ||
        !message
      ) {

        formMessage.textContent =
          "Mohon lengkapi semua data terlebih dahulu.";

        formMessage.classList.add("error");

        return;

      }


      formMessage.classList.remove(
        "error"
      );


      formMessage.textContent =
        `Terima kasih, ${name}! Pesan Anda berhasil dikirim. Kami akan segera menghubungi Anda.`;


      contactForm.reset();

    }
  );

}


/* =====================================================
   BACK TO TOP
===================================================== */

const backToTop =
  document.getElementById("backToTop");


if (backToTop) {

  window.addEventListener(
    "scroll",
    () => {

      if (window.scrollY > 500) {

        backToTop.classList.add(
          "show"
        );

      } else {

        backToTop.classList.remove(
          "show"
        );

      }

    }
  );


  backToTop.addEventListener(
    "click",
    () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );

}


/* =====================================================
   FOOTER YEAR
===================================================== */

const yearElement =
  document.getElementById("year");


if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}


/* =====================================================
   REVEAL ANIMATION
===================================================== */

const revealElements =
  document.querySelectorAll(
    ".product-card, .care-card, .category-card"
  );


if (
  revealElements.length > 0 &&
  "IntersectionObserver" in window
) {

  const observer =
    new IntersectionObserver(
      (entries) => {

        entries.forEach(
          (entry) => {

            if (
              entry.isIntersecting
            ) {

              entry.target.style.opacity =
                "1";

              entry.target.style.transform =
                "translateY(0)";

              observer.unobserve(
                entry.target
              );

            }

          }
        );

      },
      {
        threshold: 0.1
      }
    );


  revealElements.forEach(
    (element) => {

      element.style.opacity =
        "0";

      element.style.transform =
        "translateY(25px)";

      element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

      observer.observe(
        element
      );

    }
  );

}


/* =====================================================
   SMOOTH SCROLL
===================================================== */

document
  .querySelectorAll('a[href^="#"]')
  .forEach((link) => {

    link.addEventListener(
      "click",
      (event) => {

        const targetId =
          link.getAttribute("href");

        if (
          !targetId ||
          targetId === "#"
        ) {
          return;
        }


        const target =
          document.querySelector(
            targetId
          );


        if (target) {

          event.preventDefault();

          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }

      }
    );

  });