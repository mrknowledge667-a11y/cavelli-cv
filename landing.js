(function () {
  const designImages = {
    logo: 'https://lh3.googleusercontent.com/aida/AP1WRLsaOaEoTk3wlBxwN6WnBvQzsi4IHgHiFsMJ6zIHESiB8KjaCAipYpCJivFD953Dhdgu4huiWmOSRNcpcUyfLPH2rDwqXHylgAOUQDmP5hGxcR0I-P-YAOOHj40x8OLZHs6WO3WnuPk3HrhmmYlSqPBj1eUMu7qm-1E6SfSIRgCtJ0YUrF0g86BkUQeqit87RLk2ZIKJS6k3VkPd9cN0815M7H5b95ssRLGkIIiTfuLcoArlY6oriQpWJg',
    hero1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEUEtwDE8vhzWzMJZZDcAG6BgsxnlA6SJRwDW5KYL_JdVoiJuAJlOfz4Da5T1j-0dFEP7dej_QR-4KMYhm0s7scTNED_YTOptmi8x9-ZIs7DGWqIBU4VRFdob4WGEia6lOiTJL95AtbHEN1GOOIT2yfi7tCtwTCNVN2iCQ2ASSgzxh-NtqNj9bfp3hOasF9gPSXsM404U0tDPgXShTERVavEcGGGkYsaqVo7zHDlM-eVC5FYhPGy5DBjWVsU97g4hfJN6u-5j_WN0',
    hero2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBobGoQ5XaNiGGIGZXc2oQaGL48LvY39TKXxMtXmyuFUygOSlfEjo0alAqVITD3OLdxdVOqHuH5TI-7Zdm-KLaQyEZBGtgg2nqFC2maAD249iFo-Yf5bLFw_gibakODGo7rRBo4hVbOp9PKuSmMNRhdsq0Z81qM-S9o-eRO7JHp8C2VUvdyxoyR_Dbb0l8XnNEBlugyxoV_iEuJoth09wJiF48fGH941CIT0tujUD8mWtTbRs7v4zn9M7wDyJHmkTBfE-KP3umvB2o',
    hero3: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALzWQT2EDlO39sJtd0vcj_dCMRcpe2Mhb2-NSVG8bO0gXDrXzcx8G49FBH9hqYmtAEDly8-hCIzjIi5VzQVQumMODNdWd3Obi4o7nLVYxbGyLOBg-7-iuAP7b1HevNgrtVqMAJb7DTl-fQ0OSRtfSDTYjLtlzjSD6c-eG6fh0bnj1X5Gj1ubaLPqFNOEsxOfp0W-D2FHXw50k9RVAjydEFBrUvzEtbAVkpai-sj9KNhTWGgllUPfi4IpqxTVOp1XRmCIdAZs0glXQ',
    hero4: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD18j0SjcKaRXXGJYNPsN1grmQyGHdB4mQjiPVrCYN6yNyqufuWXJLQe2OA1zZUVcrT1ffpACpMukUtb5_PJQdmr_jZRGCLi0fDqtdrWc7pSP4Mi8AbStnLmfsx03vpqCDfAsl28lD-2COIAXXA7nT1jNN5rO_2V1Z0pwr-QnonH09VUD5QNVxqfpBAL9B8CpI7DSaRE6fsHr4ZrcNPVVYVzLV8rmNxMWKu1GUQEeHygVS9dQ7QiQoafVkHFAfnji4xo1HRF1MYJPQ',
    boutique: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvnTjCY22D98yWEZK8l1CkL3oTMXR7_5sg-Wp4RV_MLS73rOMh6ExHabuxZZ4fjbRO_-oxNZ61uRLnJHZMXO0mkrJfldO54WASM3wx0PRefQfLAQfJwzZCg-w_MfUxfUCNI3nYVrvUGJsKZC4wq_ldNVXOAAQmutWRbQtwZ9uXblkgfvKYNfYjKpefhNKC9u7QsRZB0iUq8CTDMUyTZpyWCqJGMmDAKfk33qffWZbj1ru02BAC-hAjPJ0JOWFXAR25m6kLYfgHaik',
    dresses: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtZBUvFDikBoGiFQsiXVsvvu8-RBgskoup5rkzZzexdVJyKId4mY9BEn9dJUT2mde2U3lf2acHTk0cRklBuXggOkXB0Ze23KWa_Eomv7O4yvbHKITxjH-5_kKz5fGK0xAyqiKFs-owe7kSiKEIOVKuu97mcja44UW6i5ztpfKTPtoA6eLnAM0MVqtvrpiGyFYMQDXsQd8urj78wK1gvCTja_0sHxOwM50aOtMnKdZTSvH3og1MPJTF0AhnT_WOoPQ-9CAvAviXELQ',
    blazers: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1UZjV_eT1VYrqihr2DULf4YSpMatwAe2w9Nv55za9XGMNy9kHIsaxyvyBSVLMiuk6eQ8jl6IdRXt8MtXypljM5EBiT0gmEc1BkuwphnIHqqELV0_YC_7rTWsx3tXAi7JnNfS8K6OvEg1tHTCANlvqAYo3QiVjT2ssAeDbrvPgBA9KCqxW8qiKlb8gT_mGoYTc1O6nEQnl6zUc6vzdmfy-ACz6IvJgY_nmMmnzY3Px56uQGbUXQFF0ghjSrbuyc0CFbzyATzDQ8yc',
    jeans: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsn_S9Gkc65YXieJlbOWO1OxTSDB4Grf-M88S20EqlWTh6cusxjcOP5gXfvTrvrKrlt--OKezm7i9sfOVgHvW5hYD49x44K_173XFpJpqOEUEAvf_doisvdVt7jmEZnX2r1YbIeg9cy8Jtp3qwhqcfBKCYVl8smpZSXoIxDVixorCjrOV2O2P6zJvt4rWK7-H2gI3DuIUmJKbOT8rLL7-RONDcg6V6D6-tXPBRKMdSxUk-0XILDw_oHZ2EeNs4bS0fQybpC7stISs',
    accessories: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3zYVealpU45kmNoxDhfTtgKALvRcaxBVj-hR4W406X3_hCtL_yXVklf7Ixxya2gXC2_JgQPrR5_11g1BSE67ZQ_DAU7SZtVbxnkm91wylF9foaYuuRn3rC5vduLPi7y-dAfiCuj7Pm5YeFwFzzOkcXDgyTfGBzcOKFpgUyGZjYBMUksAaY_6pTlA5MXUxMTOFtAnohby4s-yo_D78x3QfFRE9wvSDpa21ejPBwAv5usT990_wJHfPPTBcEjCVRZGbvBbHC4xGLxI',
    knitwear: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBM7jlbg0UruR4FQVDMA39I8Reu9c-4UiglSggkBm2bVd6ZInjluW9Zdt1P2S4p_tZF41Cai6HU-VzznktH0w2JC9syPLwDkSFeRKopuGuAJaaYpnsAJueEhEIYSOyPN5sTXeKTICFJwnt7PMcSms_VnM6-Bed0u6kDZj1gTGoVapg34qd6Ixe2P3o-itR04kQO1j4RlM0LfBQOgRlMPCSxXVME8BJiGdwdjOAY-FwWLlVZzo96AZg-dxpmNdqfJ4CTjq1WAQY5Q2k'
  };

  const categories = [
    {
      name: 'Jeans & Pants',
      arabic: 'البناطيل',
      share: '25%',
      slug: '#jeans-pants',
      description: 'The strongest department: denim fits, tailoring, relaxed shapes, and everyday pants.',
      image_url: designImages.jeans,
      subcategories: [
        { ar: 'وايد ليج جينز', en: 'Wide Leg Jeans' },
        { ar: 'ستريت جينز', en: 'Straight Jeans' },
        { ar: 'مام فيت جينز', en: 'Mom Fit Jeans' },
        { ar: 'باجي جينز', en: 'Baggy Jeans' },
        { ar: 'كارجو بانتس', en: 'Cargo Pants' },
        { ar: 'هاي ويست بانتس', en: 'High Waist Pants' },
        { ar: 'بالازو بانتس', en: 'Palazzo Pants' },
        { ar: 'لينن بانتس', en: 'Linen Pants' },
        { ar: 'فورمال بانتس', en: 'Formal Pants' },
        { ar: 'ليذر بانتس', en: 'Leather Pants' },
        { ar: 'ليجنجز', en: 'Leggings' },
        { ar: 'فليرد بانتس', en: 'Flared Pants' }
      ]
    },
    {
      name: 'T-Shirts & Tops',
      arabic: 'التيشرتات والتوبات',
      share: '25%',
      slug: '#tops',
      description: 'Daily essentials and statement tops for casual, summer, and layered looks.',
      image_url: designImages.knitwear,
      subcategories: [
        { ar: 'أوفر سايز تيشرت', en: 'Oversized T-Shirts' },
        { ar: 'بيسك تيشرت', en: 'Basic T-Shirts' },
        { ar: 'برينتد تيشرت', en: 'Printed T-Shirts' },
        { ar: 'كروب توب', en: 'Crop Tops' },
        { ar: 'ريبد توب', en: 'Ribbed Tops' },
        { ar: 'بودي سوت', en: 'Bodysuit' },
        { ar: 'تانك توب', en: 'Tank Tops' },
        { ar: 'أوف شولدر توب', en: 'Off Shoulder Tops' }
      ]
    },
    {
      name: 'Shirts',
      arabic: 'القمصان',
      share: 'Core',
      slug: '#shirts',
      description: 'Clean button-downs, linen textures, satin polish, and printed edits.',
      image_url: designImages.blazers,
      subcategories: [
        { ar: 'أوفر سايز شيرت', en: 'Oversized Shirts' },
        { ar: 'لينن شيرت', en: 'Linen Shirts' },
        { ar: 'ساتان شيرت', en: 'Satin Shirts' },
        { ar: 'سترايبد شيرت', en: 'Striped Shirts' },
        { ar: 'دينم شيرت', en: 'Denim Shirts' },
        { ar: 'برينتد شيرت', en: 'Printed Shirts' }
      ]
    },
    {
      name: 'Dresses',
      arabic: 'الفساتين',
      share: '15%',
      slug: '#dresses',
      description: 'From casual day dresses to evening silhouettes and summer floral pieces.',
      image_url: designImages.dresses,
      subcategories: [
        { ar: 'كاجوال دريس', en: 'Casual Dresses' },
        { ar: 'ميدي دريس', en: 'Midi Dresses' },
        { ar: 'ماكسي دريس', en: 'Maxi Dresses' },
        { ar: 'فلورال دريس', en: 'Floral Dresses' },
        { ar: 'ساتان دريس', en: 'Satin Dresses' },
        { ar: 'إيفنينج دريس', en: 'Evening Dresses' },
        { ar: 'سمر دريس', en: 'Summer Dresses' }
      ]
    },
    {
      name: 'Jackets & Blazers',
      arabic: 'الجواكيت والبليزرات',
      share: '10%',
      slug: '#jackets-blazers',
      description: 'Layering heroes: tailored blazers, leather jackets, trench coats, and cardigans.',
      image_url: designImages.blazers,
      subcategories: [
        { ar: 'بليزر', en: 'Blazers' },
        { ar: 'دينم جاكيت', en: 'Denim Jackets' },
        { ar: 'ليذر جاكيت', en: 'Leather Jackets' },
        { ar: 'كارديجان', en: 'Cardigans' },
        { ar: 'ترينش كوت', en: 'Trench Coats' },
        { ar: 'بومبر جاكيت', en: 'Bomber Jackets' }
      ]
    },
    {
      name: 'Jumpsuits',
      arabic: 'الجامبسوت',
      share: 'Edit',
      slug: '#jumpsuits',
      description: 'One-piece styling for casual, linen, formal, and denim looks.',
      image_url: designImages.hero3,
      subcategories: [
        { ar: 'كاجوال جامبسوت', en: 'Casual Jumpsuits' },
        { ar: 'لينن جامبسوت', en: 'Linen Jumpsuits' },
        { ar: 'فورمال جامبسوت', en: 'Formal Jumpsuits' },
        { ar: 'دينم جامبسوت', en: 'Denim Jumpsuits' }
      ]
    },
    {
      name: 'Sets',
      arabic: 'الأطقم',
      share: '20%',
      slug: '#sets',
      description: 'Coordinated sets with strong store priority for easy complete outfits.',
      image_url: designImages.hero2,
      subcategories: [
        { ar: 'لينن سيت', en: 'Linen Sets' },
        { ar: 'كاجوال سيت', en: 'Casual Sets' },
        { ar: 'فورمال سيت', en: 'Formal Sets' },
        { ar: 'نيت سيت', en: 'Knit Sets' },
        { ar: 'سمر سيت', en: 'Summer Sets' }
      ]
    },
    {
      name: 'Skirts',
      arabic: 'الجيبات',
      share: 'Edit',
      slug: '#skirts',
      description: 'Mini, midi, maxi, pleated, and denim skirts for versatile styling.',
      image_url: designImages.dresses,
      subcategories: [
        { ar: 'ميني سكيرت', en: 'Mini Skirts' },
        { ar: 'ميدي سكيرت', en: 'Midi Skirts' },
        { ar: 'ماكسي سكيرت', en: 'Maxi Skirts' },
        { ar: 'بليتد سكيرت', en: 'Pleated Skirts' },
        { ar: 'دينم سكيرت', en: 'Denim Skirts' }
      ]
    },
    {
      name: 'Bags & Accessories',
      arabic: 'الشنط والإكسسوارات',
      share: '5%',
      slug: '#accessories',
      description: 'Finishing pieces: bags, wallets, belts, sunglasses, and fashion accessories.',
      image_url: designImages.accessories,
      subcategories: [
        { ar: 'هاند باج', en: 'Hand Bags' },
        { ar: 'وولت / محفظة', en: 'Wallets' },
        { ar: 'بيلتس', en: 'Belts' },
        { ar: 'صن جلاسز', en: 'Sunglasses' },
        { ar: 'فاشون أكسسوريز', en: 'Fashion Accessories' }
      ]
    }
  ];

  const storeMix = [
    { label: 'Jeans & Pants', value: 25 },
    { label: 'Shirts, T-Shirts & Tops', value: 25 },
    { label: 'Sets', value: 20 },
    { label: 'Dresses', value: 15 },
    { label: 'Blazers & Jackets', value: 10 },
    { label: 'Bags & Accessories', value: 5 }
  ];

  const products = [
    { id: 1, name: 'Wide Leg Denim Edit', brand: 'Jeans & Pants', price_display: '25% Priority', image_url: designImages.jeans, is_new: true },
    { id: 2, name: 'Oversized T-Shirt Capsule', brand: 'T-Shirts & Tops', price_display: '25% Priority', image_url: designImages.knitwear, is_new: true },
    { id: 3, name: 'Linen Shirt Selection', brand: 'Shirts', price_display: 'Core Department', image_url: designImages.blazers, is_new: false },
    { id: 4, name: 'Linen Summer Set', brand: 'Sets', price_display: '20% Priority', image_url: designImages.hero2, is_new: true },
    { id: 5, name: 'Satin Evening Dress', brand: 'Dresses', price_display: '15% Priority', image_url: designImages.dresses, is_new: false },
    { id: 6, name: 'Tailored Blazer Look', brand: 'Jackets & Blazers', price_display: '10% Priority', image_url: designImages.blazers, is_new: false },
    { id: 7, name: 'Pleated Midi Skirt', brand: 'Skirts', price_display: 'Seasonal Edit', image_url: designImages.dresses, is_new: false },
    { id: 8, name: 'Hand Bag & Belt Story', brand: 'Bags & Accessories', price_display: '5% Priority', image_url: designImages.accessories, is_new: false }
  ];

  const navItems = [
    { label: 'Jeans', categoryName: 'Jeans & Pants' },
    { label: 'Tops', categoryName: 'T-Shirts & Tops' },
    { label: 'Dresses', categoryName: 'Dresses' },
    { label: 'Sets', categoryName: 'Sets' },
    { label: 'Blazers', categoryName: 'Jackets & Blazers' },
    { label: 'Accessories', categoryName: 'Bags & Accessories' },
    { label: 'All Collections', categoryName: 'ALL' }
  ];

  const orderItems = [];

  function isLandingPath() {
    const path = window.location.pathname.replace(/\/+$/, '') || '/';
    return path === '/' || path.endsWith('/index.html');
  }

  function syncVisibility() {
    document.documentElement.classList.toggle('cavelli-landing-active', isLandingPath());
  }

  function setImage(img, src, alt) {
    img.src = src;
    img.alt = alt || 'CAVELLI STORE';
    img.onerror = function () {
      this.onerror = null;
      this.classList.add('wm-skeleton');
    };
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function renderSubcategoryList(subcategories, compact = false) {
    return subcategories
      .map((subcategory) => `
        <span class="${compact ? 'is-compact' : ''}">
          <b dir="rtl">${escapeHtml(subcategory.ar)}</b>
          <small>${escapeHtml(subcategory.en)}</small>
        </span>
      `)
      .join('');
  }

  function renderNavDropdown() {
    const nav = document.querySelector('[data-wm-navlinks]');
    if (!nav) return;

    nav.innerHTML = navItems.map((item) => {
      const selectedCategories = item.categoryName === 'ALL'
        ? categories
        : categories.filter((category) => category.name === item.categoryName);
      const primaryCategory = selectedCategories[0] || categories[0];

      const dropdownHtml = item.categoryName === 'ALL'
        ? selectedCategories.map((category) => `
          <div class="wm-nav-dropdown-group">
            <strong>${escapeHtml(category.name)}</strong>
            <em dir="rtl">${escapeHtml(category.arabic)}</em>
            <div class="wm-nav-subgrid">
              ${renderSubcategoryList(category.subcategories.slice(0, 6), true)}
            </div>
          </div>
        `).join('')
        : `
          <div class="wm-nav-dropdown-group">
            <strong>${escapeHtml(primaryCategory.name)}</strong>
            <em dir="rtl">${escapeHtml(primaryCategory.arabic)}</em>
            <div class="wm-nav-subgrid">
              ${renderSubcategoryList(primaryCategory.subcategories, true)}
            </div>
          </div>
        `;

      return `
        <div class="wm-nav-item">
          <a href="#categories">${escapeHtml(item.label)}</a>
          <div class="wm-nav-dropdown ${item.categoryName === 'ALL' ? 'is-wide' : ''}">
            ${dropdownHtml}
          </div>
        </div>
      `;
    }).join('');
  }

  function renderHero() {
    const slideWrap = document.querySelector('[data-wm-slides]');
    const slides = [designImages.hero1, designImages.hero2, designImages.hero3, designImages.hero4];

    const logo = document.querySelector('[data-wm-logo]');
    if (logo) logo.src = designImages.logo;
    document.querySelector('[data-wm-hero-kicker]').textContent = 'Women Fashion Store';
    document.querySelector('[data-wm-hero-title]').textContent = '#WOMAN OF THE DAY';
    document.querySelector('[data-wm-hero-subtitle]').textContent = 'Discover polished silhouettes, luxury textures, and everyday statement pieces curated for modern femininity.';
    slideWrap.innerHTML = '';

    slides.forEach((src, index) => {
      const slide = document.createElement('div');
      slide.className = `wm-slide${index === 0 ? ' is-active' : ''}`;
      const img = document.createElement('img');
      setImage(img, src, `CAVELLI STORE hero ${index + 1}`);
      slide.appendChild(img);
      slideWrap.appendChild(slide);
    });
  }

  function renderPromo() {
    document.querySelector('[data-wm-promo-title]').textContent = 'A Complete Women Wardrobe';
    document.querySelector('[data-wm-promo-text]').textContent = 'Structured around jeans, pants, tops, shirts, sets, dresses, outerwear, skirts, jumpsuits, bags, and accessories.';
    setImage(document.querySelector('[data-wm-promo-image]'), designImages.boutique, 'CAVELLI STORE boutique');
  }

  function renderCategories() {
    const grid = document.querySelector('[data-wm-categories]');
    document.querySelector('[data-wm-categories-title]').textContent = 'Women Categories';
    document.querySelector('[data-wm-categories-subtitle]').textContent = 'A complete women fashion catalog structured by main departments, subcategories, and store priority.';
    grid.innerHTML = '';

    categories.forEach((category) => {
      const card = document.createElement('a');
      card.className = 'wm-category-card';
      card.href = category.slug;

      const img = document.createElement('img');
      setImage(img, category.image_url, category.name);

      const content = document.createElement('div');
      content.className = 'wm-category-content';
      const subcategoryHtml = renderSubcategoryList(category.subcategories);
      content.innerHTML = `
        <div class="wm-category-topline">
          <span>${escapeHtml(category.arabic)}</span>
          <strong>${escapeHtml(category.share)}</strong>
        </div>
        <h3>${escapeHtml(category.name)}</h3>
        <p>${escapeHtml(category.description)}</p>
        <em class="wm-hover-hint">Hover to view subcategories</em>
        <div class="wm-subcategory-list">${subcategoryHtml}</div>
      `;

      card.appendChild(img);
      card.appendChild(content);
      grid.appendChild(card);
    });
  }

  function renderStoreMix() {
    const list = document.querySelector('[data-wm-store-mix]');
    if (!list) return;
    list.innerHTML = '';

    storeMix.forEach((item) => {
      const row = document.createElement('div');
      row.className = 'wm-mix-row';
      row.innerHTML = `
        <div class="wm-mix-label">
          <span>${escapeHtml(item.label)}</span>
          <strong>${item.value}%</strong>
        </div>
        <div class="wm-mix-track"><span style="width:${item.value}%"></span></div>
      `;
      list.appendChild(row);
    });
  }

  function findCategory(name) {
    return categories.find((category) => category.name === name) || categories[0];
  }

  function formatSubcategory(subcategory) {
    return `${subcategory.ar} (${subcategory.en})`;
  }

  function renderOrderOptions() {
    const form = document.querySelector('[data-wm-order-form]');
    const categorySelect = document.querySelector('[data-wm-order-category]');
    const subcategorySelect = document.querySelector('[data-wm-order-subcategory]');
    if (!form || !categorySelect || !subcategorySelect) return;

    categorySelect.innerHTML = categories
      .map((category) => `<option value="${escapeHtml(category.name)}">${escapeHtml(category.arabic)} (${escapeHtml(category.name)})</option>`)
      .join('');

    function syncSubcategories() {
      const category = findCategory(categorySelect.value);
      subcategorySelect.innerHTML = category.subcategories
        .map((subcategory, index) => `<option value="${index}">${escapeHtml(formatSubcategory(subcategory))}</option>`)
        .join('');
    }

    categorySelect.addEventListener('change', syncSubcategories);
    syncSubcategories();
  }

  function renderOrderItems() {
    const container = document.querySelector('[data-wm-order-items]');
    if (!container) return;

    if (!orderItems.length) {
      container.innerHTML = '<p>No items selected yet.</p>';
      return;
    }

    container.innerHTML = orderItems.map((item, index) => `
      <div class="wm-order-item">
        <div>
          <strong>${escapeHtml(item.product)}</strong>
          <span>${escapeHtml(item.category)} / Qty ${escapeHtml(item.quantity)}</span>
          <small>${escapeHtml([item.size, item.color].filter(Boolean).join(' / ') || 'No size or color selected')}</small>
        </div>
        <button type="button" data-wm-remove-item="${index}">Remove</button>
      </div>
    `).join('');

    container.querySelectorAll('[data-wm-remove-item]').forEach((button) => {
      button.addEventListener('click', () => {
        orderItems.splice(Number(button.dataset.wmRemoveItem), 1);
        renderOrderItems();
      });
    });
  }

  function buildOrderSummary(form) {
    const data = new FormData(form);
    const mapsLocation = data.get('manualMapLocation') || data.get('mapLocation') || '-';
    const lines = [
      'CAVELLI STORE ORDER REQUEST',
      `Name: ${data.get('customerName') || '-'}`,
      `Phone: ${data.get('customerPhone') || '-'}`,
      `Address: ${data.get('address') || '-'}`,
      `Google Maps Location: ${mapsLocation}`,
      '',
      'Items:'
    ];

    orderItems.forEach((item, index) => {
      lines.push(`${index + 1}. ${item.product}`);
      lines.push(`   Category: ${item.category}`);
      lines.push(`   Qty: ${item.quantity || 1}`);
      if (item.size) lines.push(`   Size: ${item.size}`);
      if (item.color) lines.push(`   Color: ${item.color}`);
    });

    const notes = String(data.get('notes') || '').trim();
    if (notes) {
      lines.push('');
      lines.push(`Notes: ${notes}`);
    }

    return lines.join('\n');
  }

  function setupOrderForm() {
    const form = document.querySelector('[data-wm-order-form]');
    const addButton = document.querySelector('[data-wm-add-item]');
    const categorySelect = document.querySelector('[data-wm-order-category]');
    const subcategorySelect = document.querySelector('[data-wm-order-subcategory]');
    const result = document.querySelector('[data-wm-order-result]');
    const locationButton = document.querySelector('[data-wm-get-location]');
    const locationInput = document.querySelector('[data-wm-map-location]');
    const locationStatus = document.querySelector('[data-wm-location-status]');
    if (!form || !addButton || !categorySelect || !subcategorySelect || !result) return;

    if (locationButton && locationInput && locationStatus) {
      locationButton.addEventListener('click', () => {
        if (!navigator.geolocation) {
          locationStatus.textContent = 'Location is not supported by this browser. Please write your address manually.';
          return;
        }

        locationStatus.textContent = 'Getting your location...';
        locationButton.disabled = true;

        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
            locationInput.value = mapsUrl;
            locationStatus.innerHTML = `Location added: <a href="${mapsUrl}" target="_blank" rel="noopener">Open in Google Maps</a>`;
            locationButton.disabled = false;
          },
          () => {
            locationStatus.textContent = 'Could not get location. Please allow location access or write your address manually.';
            locationButton.disabled = false;
          },
          { enableHighAccuracy: true, timeout: 12000, maximumAge: 60000 }
        );
      });
    }

    addButton.addEventListener('click', () => {
      const category = findCategory(categorySelect.value);
      const selectedSubcategory = category.subcategories[Number(subcategorySelect.value)] || category.subcategories[0];
      const data = new FormData(form);

      orderItems.push({
        category: `${category.arabic} (${category.name})`,
        product: formatSubcategory(selectedSubcategory),
        quantity: data.get('quantity') || '1',
        size: data.get('size') || '',
        color: data.get('color') || ''
      });

      renderOrderItems();
      result.textContent = '';
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!orderItems.length) {
        addButton.click();
      }

      const summary = buildOrderSummary(form);
      result.textContent = summary;

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(summary).catch(() => {});
      }
    });
  }

  function renderProducts() {
    const grid = document.querySelector('[data-wm-products]');
    document.querySelector('[data-wm-products-title]').textContent = 'Featured Departments';
    document.querySelector('[data-wm-products-subtitle]').textContent = 'A merchandising preview that follows the requested store mix and category priorities.';
    grid.innerHTML = '';

    products.forEach((product, index) => {
      const card = document.createElement('a');
      card.className = 'wm-product-card';
      card.href = '#products';

      const media = document.createElement('div');
      media.className = 'wm-product-media';
      const img = document.createElement('img');
      setImage(img, product.image_url, product.name);
      media.appendChild(img);

      if (product.is_new || index === 0) {
        const badge = document.createElement('span');
        badge.className = 'wm-badge';
        badge.textContent = product.is_new ? 'New' : 'Featured';
        media.appendChild(badge);
      }

      const title = document.createElement('h3');
      title.textContent = product.name;
      const meta = document.createElement('p');
      meta.textContent = product.price_display;

      card.appendChild(media);
      card.appendChild(title);
      card.appendChild(meta);
      grid.appendChild(card);
    });
  }

  function renderAll() {
    renderHero();
    renderPromo();
    renderNavDropdown();
    renderCategories();
    renderStoreMix();
    renderOrderOptions();
    renderOrderItems();
    setupOrderForm();
    renderProducts();
  }

  function startSlider() {
    window.setInterval(() => {
      const slides = Array.from(document.querySelectorAll('.wm-slide'));
      if (slides.length < 2) return;
      const current = Math.max(0, slides.findIndex((slide) => slide.classList.contains('is-active')));
      slides[current].classList.remove('is-active');
      slides[(current + 1) % slides.length].classList.add('is-active');
    }, 5000);
  }

  function boot() {
    syncVisibility();
    renderAll();
    startSlider();
    window.addEventListener('popstate', syncVisibility);
    document.addEventListener('click', () => setTimeout(syncVisibility, 0));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
