/* =========================================================
   PUSAT PENGATURAN TAUTAN / URL TRYI THRIFTING
========================================================= */

const configLinks = {
    shopee: "https://shopee.co.id/", 
    tiktok: "https://www.tiktok.com/@tryi.trifth1?_r=1&_t=ZS-9BI5FnNhtvo", 
    instagram: "https://www.instagram.com/tryi_trifthing?igsh=NGhkbHgyNHN6NHJx", 
    whatsappNumber: "6283821804918", 
    whatsappMessage: "Halo TRYI THRIFTING, saya ingin bertanya mengenai koleksi jaket dan baju thrift.",
    whatsappGroup: "https://chat.whatsapp.com/FKYQpwPLvb6EXV01drxo58?s=cl&p=a&iam=2",
    facebook: "" 
};

/* =========================================================
   LOGIKA SISTEM & INTERACTIVE HOVER GLOW
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Persiapan URL WhatsApp
    const getWhatsAppUrl = () => {
        if (!configLinks.whatsappNumber) return "";
        const encodedMessage = encodeURIComponent(configLinks.whatsappMessage);
        return `https://wa.me/${configLinks.whatsappNumber}?text=${encodedMessage}`;
    };

    // 2. Pemetaan URL ke Tombol & Ikon
    const buttonMappings = {
        "link-shopee": configLinks.shopee,
        "icon-shopee": configLinks.shopee,
        
        "link-tiktok": configLinks.tiktok,
        "icon-tiktok": configLinks.tiktok,
        
        "link-instagram": configLinks.instagram,
        "icon-instagram": configLinks.instagram,
        
        "link-whatsapp": getWhatsAppUrl(),
        "icon-whatsapp": getWhatsAppUrl(),

        "link-wagroup": configLinks.whatsappGroup,
        
        "link-facebook": configLinks.facebook,
        "icon-facebook": configLinks.facebook
    };

    for (const [buttonId, url] of Object.entries(buttonMappings)) {
        const btnElement = document.getElementById(buttonId);
        if (btnElement) {
            if (url && url.trim() !== "") {
                btnElement.href = url;
            } else {
                btnElement.classList.add("hidden");
            }
        }
    }

    // 3. Mengatur Tahun Footer Otomatis
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 4. ANIMASI INTERAKTIF UNTUK TOMBOL UTAMA (Links Button)
    const buttons = document.querySelectorAll(".link-btn");
    const linksContainer = document.getElementById("interactive-links-container");

    const firstButton = document.getElementById("link-shopee");
    if (firstButton && !firstButton.classList.contains("hidden")) {
        firstButton.classList.add("glow-active");
    }

    buttons.forEach(btn => {
        btn.addEventListener("pointerenter", () => {
            buttons.forEach(b => b.classList.remove("glow-active"));
            btn.classList.add("glow-active");
        });

        btn.addEventListener("focus", () => {
            buttons.forEach(b => b.classList.remove("glow-active"));
            btn.classList.add("glow-active");
        });
    });

    if (linksContainer) {
        linksContainer.addEventListener("pointerleave", () => {
            buttons.forEach(b => b.classList.remove("glow-active"));
        });
    }

    // 5. REVISI FITUR 2: INTERAKSI SENTUH UNTUK SOCIAL ICON BAR DI SMARTPHONE
    const socialIcons = document.querySelectorAll(".social-icons-bar a");
    
    socialIcons.forEach(icon => {
        // Saat ikon disentuh di HP, tambahkan class glow spesifik
        icon.addEventListener("touchstart", () => {
            socialIcons.forEach(i => i.classList.remove("active-brand-glow"));
            icon.classList.add("active-brand-glow");
        }, { passive: true });
    });

    // Jika user menyentuh area luar Icon Bar, hilangkan glow dari ikon
    document.addEventListener("touchstart", (e) => {
        if (!e.target.closest('.social-icons-bar')) {
            socialIcons.forEach(i => i.classList.remove("active-brand-glow"));
        }
    }, { passive: true });
});