# HTML/CSS/JS Migration Guide & SEO Preservation

This document contains all necessary information to convert the current Vite React project to a static HTML/CSS/JS website while preserving Google SEO rankings.

---

## 1. Design System Prompt
**Copy and paste this section to your AI or Template Designer:**

```markdown
# Design System & Theme Configuration

## 1. Color Palette
- **Backgrounds**:
  - Primary: `#ffffff` (White)
  - Secondary/Section: `#f8fafc` (Slate-50)
  - Dark Overlay: `rgba(0, 0, 0, 0.7)` (for hero text readability)
- **Typography**:
  - Headings (Dark): `#0f172a` (Slate-900)
  - Body Text (Gray): `#475569` (Slate-600)
  - Accent/Links: `#3b82f6` (Blue-500)
- **UI Elements**:
  - Borders: `#e2e8f0` (Slate-200)

## 2. Typography (Google Fonts)
- **Headings**: "Playfair Display", serif (Weights: 400, 700)
- **Body**: "Inter", sans-serif (Weights: 400, 500, 600)
- **Import Link**:
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">

## 3. UI Components
- **Navbar**: Sticky top, white background with 70% opacity and blur (`backdrop-filter: blur(10px)`), bottom border.
- **Buttons**: Rounded corners, solid slate-900 background with white text, hover effect lifts button slightly.
- **Animations**: Use "Fade Up" and "Slide In" animations for text and images as they scroll into view.
```

---

## 2. Global HTML Requirements
**Include these tags in the `<head>` of EVERY `.html` file:**

```html
<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/logo_no_bg.png" />

<!-- Viewport -->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<!-- Google Verification (CRITICAL FOR SEO) -->
<meta name="google-site-verification" content="iYnGZLEd_iOg8Nm7g_KT2uTV6KAF98kwR2jZjOBcaXM" />

<!-- Font Preloading -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

---

## 3. Page-by-Page SEO Data
**Create these specific HTML files and use the exact Title and Meta Description tags provided:**

### **1. Home Page (`index.html`)**
```html
<title>ADSONS Group of Industries | Trusted By Top Brands</title>
<meta name="description" content="Certified preshrink elastic manufacturer. Leading the way in sustainable manufacturing and innovation. Polyester knitted elastics, yarns, tapes, cords, and more.">
```

### **2. About Us (`about.html`)**
```html
<title>About Us | ADSONS Group of Industries</title>
<meta name="description" content="Learn about ADSONS, a leader in sustainable manufacturing, innovation, and certified preshrink elastic solutions. Discover our story, values, and commitment to quality.">
```

### **3. Products Main (`products.html`)**
```html
<title>Products | ADSONS Group of Industries</title>
<meta name="description" content="Explore our range of certified preshrink elastics, premium cords, tapes, buttons, and textile accessories. Sustainable, innovative, and trusted by global brands.">
```

### **4. Events (`events.html`)**
```html
<title>Events | ADSONS Group of Industries</title>
<meta name="description" content="Stay updated with ADSONS' latest events, exhibitions, and industry participation. Discover our presence in global textile and garment expos.">
```

### **5. Workflow (`workflow.html`)**
```html
<title>Workflow | ADSONS Group of Industries</title>
<meta name="description" content="Explore ADSONS' manufacturing workflow: from raw material selection to quality assurance. Discover our commitment to precision, efficiency, and sustainability.">
```

### **6. Certifications (`certifications.html`)**
```html
<title>Certifications | ADSONS Group of Industries</title>
<meta name="description" content="View ADSONS' certifications including OEKO-TEX, Target nominated supplier, and more. Commitment to quality, compliance, and sustainable manufacturing.">
```

### **7. Contact (`contact.html`)**
```html
<title>Contact Us | ADSONS Group of Industries</title>
<meta name="description" content="Contact ADSONS for certified preshrink elastics, sustainable textile solutions, and premium garment accessories. Reach out for inquiries, quotes, and support.">
```

---

## 4. Sub-Product Pages (Optimized SEO)
*These pages need separate HTML files to maintain structure.*

### **8. Elastics (`products/elastics.html`)**
```html
<title>Preshrink Elastics & Knitting Tapes | ADSONS</title>
<meta name="description" content="High-quality polyester knitted elastics, nylon bands, and stretchy tapes. Durable, flexible, and perfect for garments and sportswear.">
```

### **9. Tapes (`products/tapes.html`)**
```html
<title>Woven & Braided Tapes | ADSONS</title>
<meta name="description" content="Custom woven tapes, thick & thin knit tapes, and braided tapes. Available in various patterns, textures, and eco-friendly dyed yarns.">
```

### **10. Cords (`products/cords.html`)**
```html
<title>Premium Cords & Drawstrings | ADSONS</title>
<meta name="description" content="Durable braided cords, rubber strings, and jacquard drawstrings. Perfect for hoodies, shoelaces, and industrial applications.">
```

### **11. Buttons (`products/buttons.html`)**
```html
<title>Garment Buttons (Metal, Wood, Shell) | ADSONS</title>
<meta name="description" content="Exquisite button collection including metal, plastic, wood, shell, and coconut buttons. The perfect finishing touch for any garment.">
```

---

## 5. Technical Migration Checklist

1.  **Assets Folder**:
    *   Copy the entire `public/` folder from the React project to the root of your new HTML project.
    *   Ensure folders `hero/`, `products/`, `workflow/`, `certificates/` are preserved.

2.  **JavaScript Replacements**:
    *   **React Router** → Standard `<a href="page.html">` links.
    *   **Framer Motion** → Use **AOS (Animate On Scroll)** library or CSS `@keyframes`.
    *   **Parallax Carousel** → Use **Swiper.js** library.
    *   **Lucide React Icons** → Use **Phosphor Icons** or **FontAwesome** (CDN).

3.  **CSS Setup**:
    *   Use **Tailwind CSS** (via CDN for simplicity or CLI for production) OR standard CSS variables matching the palette above.
