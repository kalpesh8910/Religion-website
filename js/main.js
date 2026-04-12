(function () {
  "use strict";

  var data = window.SITE_DATA || { mantras: [], religions: [], rishiVansh: [], photos: [] };
  var I = function () {
    return window.SITE_I18N;
  };

  var siteLangBound = false;
  var mantroInitDone = false;
  var rishiVanshInitDone = false;
  window.__refreshMantraPage = null;

  function $(sel, root) {
    return (root || document).querySelector(sel);
  }

  function $all(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  function pickLocalized(obj, field, lang) {
    var guKey = field + "_gu";
    if (lang === "gu" && obj[guKey] != null && String(obj[guKey]).trim() !== "") {
      return obj[guKey];
    }
    return obj[field] != null ? obj[field] : "";
  }

  function pickLocalizedPractices(obj, lang) {
    if (lang === "gu" && obj.practices_gu && obj.practices_gu.length) {
      return obj.practices_gu;
    }
    return obj.practices || [];
  }

  function bindSiteLangSelect() {
    if (siteLangBound) return;
    var sel = $("#site-lang");
    if (!sel) return;
    siteLangBound = true;
    sel.addEventListener("change", function () {
      I().setStoredLang(sel.value);
      I().applyDomLang(I().getLang());
      applyStaticI18n();
      refreshDynamicContent();
    });
  }

  function applyStaticI18n() {
    var bundle = I();
    var lang = bundle.getLang();
    bundle.applyDomLang(lang);

    var siteSel = $("#site-lang");
    if (siteSel) {
      siteSel.value = lang;
      siteSel.setAttribute("aria-label", bundle.t("site_lang_label"));
    }

    if (siteSel) {
      $all("option[data-i18n-label]", siteSel).forEach(function (opt) {
        var k = opt.getAttribute("data-i18n-label");
        if (k) opt.textContent = bundle.t(k);
      });
    }

    $all("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (k) el.textContent = bundle.t(k);
    });

    $all("[data-i18n-html]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-html");
      if (k) el.innerHTML = bundle.t(k);
    });

    $all("[data-i18n-aria-label]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-aria-label");
      if (k) el.setAttribute("aria-label", bundle.t(k));
    });

    $all("[data-i18n-alt]").forEach(function (el) {
      var ka = el.getAttribute("data-i18n-alt");
      if (ka) el.setAttribute("alt", bundle.t(ka));
    });

    $all("[data-i18n-placeholder]").forEach(function (el) {
      var kp = el.getAttribute("data-i18n-placeholder");
      if (kp) el.setAttribute("placeholder", bundle.t(kp));
    });

    var path = window.location.pathname.split("/").pop() || "index.html";
    var meta = document.querySelector('meta[name="description"]');
    if (meta) {
      var metaKey = "meta_index";
      if (path === "mantras.html") metaKey = "meta_mantras";
      else if (path === "religions.html") metaKey = "meta_religions";
      else if (path === "rishi-vansh.html") metaKey = "meta_rishi_vansh";
      else if (path === "profile.html") metaKey = "meta_profile";
      else if (path === "photos.html") metaKey = "meta_photos";
      else if (path === "dharm-knowledge.html") metaKey = "meta_dharm_knowledge";
      meta.setAttribute("content", bundle.t(metaKey));
    }

    updateDocumentTitle();
  }

  function updateDocumentTitle() {
    var bundle = I();
    var path = window.location.pathname.split("/").pop() || "index.html";
    if (path === "index.html" || path === "") {
      document.title = bundle.t("doc_title_index");
      return;
    }
    if (path === "religions.html") {
      document.title = bundle.t("doc_title_religions");
      return;
    }
    if (path === "rishi-vansh.html") {
      document.title = bundle.t("doc_title_rishi_vansh");
      return;
    }
    if (path === "profile.html") {
      document.title = bundle.t("doc_title_profile");
      return;
    }
    if (path === "photos.html") {
      document.title = bundle.t("doc_title_photos");
      return;
    }
    if (path === "dharm-knowledge.html") {
      document.title = bundle.t("doc_title_dharm_knowledge");
      return;
    }
    if (path === "mantras.html") {
      if (!window.location.hash) {
        document.title = bundle.t("doc_title_mantras");
      }
    }
  }

  function refreshDynamicContent() {
    if (typeof window.__refreshMantraPage === "function") {
      window.__refreshMantraPage();
    }
    renderReligions();
    if (typeof window.__refreshRishiVanshPage === "function") {
      window.__refreshRishiVanshPage();
    } else {
      renderRishiVansh();
    }
    if (typeof window.__refreshPhotosPage === "function") {
      window.__refreshPhotosPage();
    }
    renderMantroDropdown();
  }

  function setActiveNav() {
    var path = window.location.pathname.split("/").pop() || "index.html";
    $all("nav a[href]").forEach(function (a) {
      var href = a.getAttribute("href");
      if (href === path || (path === "" && href === "index.html")) {
        a.setAttribute("aria-current", "page");
      } else {
        a.removeAttribute("aria-current");
      }
    });
    $all("a.header-profile[href]").forEach(function (a) {
      var href = a.getAttribute("href");
      if (href === path) {
        a.setAttribute("aria-current", "page");
      } else {
        a.removeAttribute("aria-current");
      }
    });

    // Highlight any "tab-like" header links implemented as buttons (e.g. Dharm Knowledge).
    $all(".header-nav-wrap a.mantro-btn[href]").forEach(function (a) {
      var href = a.getAttribute("href");
      if (href === path || (path === "" && href === "index.html")) {
        a.setAttribute("aria-current", "page");
      } else {
        a.removeAttribute("aria-current");
      }
    });
  }

  function uniqueSorted(arr) {
    return arr.filter(Boolean).filter(function (v, i, self) {
      return self.indexOf(v) === i;
    }).sort();
  }

  function slugFromTitle(title) {
    if (!title) return "";
    return String(title)
      .toLowerCase()
      .replace(/['']/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  }

  function normalizeSlug(s) {
    return String(s || "")
      .toLowerCase()
      .replace(/[^a-z0-9-]+/g, "-")
      .replace(/^-|-$/g, "");
  }

  function buildMantraSlugs(mantras) {
    var slugToIndex = {};
    var indexToSlug = [];
    var used = {};
    mantras.forEach(function (m, i) {
      var base = normalizeSlug(m.id || m.slug || slugFromTitle(m.title));
      if (!base) base = "mantra";
      var s = base;
      if (used[s]) s = base + "-" + i;
      used[s] = true;
      indexToSlug[i] = s;
      slugToIndex[s] = i;
    });
    return { slugToIndex: slugToIndex, indexToSlug: indexToSlug };
  }

  function clearHash() {
    var path = window.location.pathname + window.location.search;
    if (window.history.replaceState) {
      window.history.replaceState(null, "", path);
    } else {
      window.location.hash = "";
    }
  }

  function escapeHtml(s) {
    if (s == null) return "";
    var div = document.createElement("div");
    div.textContent = s;
    return div.innerHTML;
  }

  function mantraHindiBody(m) {
    if (m.text_hi != null && String(m.text_hi).trim() !== "") return String(m.text_hi);
    return m.text != null ? String(m.text) : "";
  }

  function mantraGujaratiBody(m) {
    return m.text_gu != null && String(m.text_gu).trim() !== "" ? String(m.text_gu) : "";
  }

  function mantraDetailTextLang(m, L) {
    if (L === "gu" && m.text_gu != null && String(m.text_gu).trim() !== "") return "gu";
    return "sa";
  }

  function buildMantraDetailHtml(m, L) {
    var title = pickLocalized(m, "title", L) || I().t("untitled");
    var rel = pickLocalized(m, "religion", L);
    var lng = pickLocalized(m, "language", L);
    var meta = [];
    if (rel) meta.push(escapeHtml(rel));
    if (lng) meta.push(escapeHtml(lng));
    var metaHtml = meta.length ? '<p class="meta">' + meta.join(" · ") + "</p>" : "";

    var hi = mantraHindiBody(m).trim();
    var gu = mantraGujaratiBody(m).trim();

    function langBlock(headingKey, textBody, langAttr, transRaw) {
      var trans = transRaw != null ? String(transRaw).trim() : "";
      var inner =
        '<div class="mantra-lang-block">' +
        '<h3 class="mantra-lang-heading">' +
        escapeHtml(I().t(headingKey)) +
        "</h3>" +
        '<p class="mantra-text" lang="' +
        langAttr +
        '">' +
        escapeHtml(textBody) +
        "</p>";
      if (trans) {
        inner +=
          '<p class="translation"><span class="meaning-label">' +
          escapeHtml(I().t("meaning_label")) +
          "</span> " +
          escapeHtml(trans) +
          "</p>";
      }
      inner += "</div>";
      return inner;
    }

    if (hi && gu) {
      var transHi =
        m.translation_hi != null && String(m.translation_hi).trim() !== ""
          ? m.translation_hi
          : m.translation != null
            ? String(m.translation)
            : "";
      var transGu = m.translation_gu != null ? String(m.translation_gu) : "";

      var notesHi = m.notes_hi != null && String(m.notes_hi).trim() !== "" ? String(m.notes_hi).trim() : "";
      var notesGu = m.notes_gu != null && String(m.notes_gu).trim() !== "" ? String(m.notes_gu).trim() : "";
      var notesHtml = "";
      if (notesHi || notesGu) {
        var nh = "";
        if (notesHi) nh += langBlock("mantra_notes_heading_en", notesHi, "gu", "");
        if (notesGu) nh += langBlock("mantra_notes_heading_gu", notesGu, "gu", "");
        notesHtml = '<div class="mantra-bilingual" style="margin-top:1rem">' + nh + "</div>";
      }
      return (
        '<h2 class="mantra-detail-title">' +
        escapeHtml(title) +
        "</h2>" +
        metaHtml +
        '<div class="mantra-bilingual">' +
        langBlock("mantra_heading_hi", hi, "hi", transHi) +
        langBlock("mantra_heading_gu", gu, "gu", transGu) +
        "</div>" +
        notesHtml
      );
    }

    if (gu && !hi) {
      return (
        '<h2 class="mantra-detail-title">' +
        escapeHtml(title) +
        "</h2>" +
        metaHtml +
        '<div class="mantra-bilingual">' +
        langBlock("mantra_heading_gu", gu, "gu", m.translation_gu) +
        "</div>"
      );
    }

    var text = pickLocalized(m, "text", L);
    var trans = pickLocalized(m, "translation", L);
    var tl = mantraDetailTextLang(m, L);
    var notesSingle = pickLocalized(m, "notes", L);
    return (
      '<h2 class="mantra-detail-title">' +
      escapeHtml(title) +
      "</h2>" +
      metaHtml +
      '<p class="mantra-text" lang="' +
      tl +
      '">' +
      escapeHtml(text) +
      "</p>" +
      (trans ? '<p class="translation">' + escapeHtml(trans) + "</p>" : "") +
      (notesSingle ? '<p class="religion-desc" style="margin-top:0.75rem;white-space:pre-wrap">' + escapeHtml(notesSingle) + "</p>" : "")
    );
  }

  function buildRishiSlugs(items) {
    var slugToIndex = {};
    var indexToSlug = [];
    var used = {};
    items.forEach(function (r, i) {
      var base = normalizeSlug(r.id || slugFromTitle(r.name));
      if (!base) base = "rishi";
      var s = base;
      if (used[s]) s = base + "-" + i;
      used[s] = true;
      indexToSlug[i] = s;
      slugToIndex[s] = i;
    });
    return { slugToIndex: slugToIndex, indexToSlug: indexToSlug };
  }

  function buildRishiDetailHtml(r) {
    var L = I().getLang();
    var title = pickLocalized(r, "name", L) || I().t("untitled");
    var rels = r.relations || [];
    var blank = I().t("rishi_value_blank");
    var detEn = r.details != null ? String(r.details).trim() : "";
    var detGu = r.details_gu != null ? String(r.details_gu).trim() : "";

    function rowsForLang(useGu) {
      var parts = [];
      rels.forEach(function (row) {
        var role = useGu ? (row.role_gu || row.role || "") : (row.role || "");
        var raw = useGu
          ? row.value_gu != null && String(row.value_gu).trim() !== ""
            ? row.value_gu
            : row.value
          : row.value;
        var val =
          raw != null && String(raw).trim() !== "" ? String(raw) : blank;
        parts.push(
          '<div class="rishi-rel-row">' +
          '<span class="rishi-rel-role">' +
          escapeHtml(role) +
          "</span>" +
          '<span class="rishi-rel-sep">:</span>' +
          '<span class="rishi-rel-val">' +
          escapeHtml(val) +
          "</span>" +
          "</div>"
        );
      });
      return parts.join("");
    }

    var enRows = rowsForLang(false);
    var guRows = rowsForLang(true);

    var notesHtml = "";
    if (detEn || detGu) {
      var nb = "";
      if (detEn) {
        var headEn = r.details_notes_heading_en || I().t("rishi_notes_heading_en");
        nb +=
          '<div class="mantra-lang-block">' +
          '<h3 class="mantra-lang-heading">' +
          escapeHtml(headEn) +
          "</h3>" +
          '<p class="rishi-detail-note" lang="' +
          escapeHtml(r.details_lang || "en") +
          '">' +
          escapeHtml(detEn).replace(/\n/g, "<br>") +
          "</p></div>";
      }
      if (detGu) {
        var headGu = r.details_notes_heading_gu || I().t("rishi_notes_heading_gu");
        nb +=
          '<div class="mantra-lang-block">' +
          '<h3 class="mantra-lang-heading">' +
          escapeHtml(headGu) +
          "</h3>" +
          '<p class="rishi-detail-note" lang="gu">' +
          escapeHtml(detGu).replace(/\n/g, "<br>") +
          "</p></div>";
      }
      notesHtml = '<div class="mantra-bilingual rishi-detail-notes">' + nb + "</div>";
    }

    return (
      '<h2 class="mantra-detail-title">' +
      escapeHtml(title) +
      "</h2>" +
      notesHtml +
      '<div class="mantra-bilingual">' +
      '<div class="mantra-lang-block">' +
      '<h3 class="mantra-lang-heading">' +
      escapeHtml(I().t("rishi_heading_en")) +
      "</h3>" +
      '<div class="rishi-relations" lang="en">' +
      enRows +
      "</div></div>" +
      '<div class="mantra-lang-block">' +
      '<h3 class="mantra-lang-heading">' +
      escapeHtml(I().t("rishi_heading_gu")) +
      "</h3>" +
      '<div class="rishi-relations" lang="gu">' +
      guRows +
      "</div></div></div>"
    );
  }

  function initHeroCarousel() {
    var root = $("#hero-carousel");
    if (!root) return;
    var slides = $all(".hero-slide", root);
    if (slides.length === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      slides.forEach(function (s, idx) {
        s.classList.toggle("is-active", idx === 0);
      });
      return;
    }
    var idx = 0;
    var n = slides.length;
    setInterval(function () {
      slides[idx].classList.remove("is-active");
      idx = (idx + 1) % n;
      slides[idx].classList.add("is-active");
    }, 3000);
  }

  function renderMantroDropdown() {
    var wrap = $("#mantro-wrap");
    var listRoot = $("#mantro-list");
    var panel = $("#mantro-panel");
    var btn = $("#mantro-btn");
    if (!wrap || !listRoot || !btn || !panel) return;

    var mantras = data.mantras || [];
    var maps = buildMantraSlugs(mantras);
    var L = I().getLang();

    listRoot.innerHTML = "";
    mantras.forEach(function (m, i) {
      var slug = maps.indexToSlug[i];
      var label;
      if (m.mantro_title) {
        label = L === "gu" && m.mantro_title_gu ? m.mantro_title_gu : m.mantro_title;
      } else {
        label = pickLocalized(m, "title", L) || I().t("untitled");
      }
      var li = document.createElement("li");
      li.setAttribute("role", "none");
      var a = document.createElement("a");
      a.className = "mantro-link";
      a.href = "mantras.html#" + encodeURIComponent(slug);
      a.setAttribute("role", "menuitem");
      a.textContent = label;
      li.appendChild(a);
      listRoot.appendChild(li);
    });

    if (!mantroInitDone) {
      mantroInitDone = true;
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        wrap.classList.toggle("mantro-is-open");
        btn.setAttribute("aria-expanded", wrap.classList.contains("mantro-is-open"));
      });
      document.addEventListener("click", function () {
        wrap.classList.remove("mantro-is-open");
        btn.setAttribute("aria-expanded", "false");
      });
      wrap.addEventListener("click", function (e) {
        e.stopPropagation();
      });
    }
  }

  function initMantrasPage() {
    var listEl = $("#mantra-list");
    var listPanel = $("#mantra-list-panel");
    var detailPanel = $("#mantra-detail-panel");
    var detailContent = $("#mantra-detail-content");
    var backBtn = $("#mantra-back");
    var filterRel = $("#filter-mantra-religion");
    var filterLang = $("#filter-mantra-language");
    var listHint = $("#mantra-list-hint");
    var globalEmpty = $("#mantra-global-empty");

    if (!listEl || !listPanel || !detailPanel || !detailContent) return;

    var mantras = data.mantras || [];
    var maps = buildMantraSlugs(mantras);

    function lang() {
      return I().getLang();
    }

    function showList() {
      detailPanel.hidden = true;
      listPanel.hidden = false;
      if (listHint) listHint.hidden = false;
      clearHash();
      document.title = I().t("doc_title_mantras");
      if (backBtn) backBtn.blur();
    }

    function showDetailBySlug(slug) {
      var idx = maps.slugToIndex[slug];
      if (idx === undefined) {
        showList();
        return;
      }
      var m = mantras[idx];
      var L = lang();
      listPanel.hidden = true;
      if (listHint) listHint.hidden = true;
      detailPanel.hidden = false;

      detailContent.innerHTML = buildMantraDetailHtml(m, L);
      var title = pickLocalized(m, "title", L) || I().t("untitled");
      document.title = title + I().t("doc_title_mantra_detail_suffix");
      if (backBtn) backBtn.focus();
    }

    function syncFromHash() {
      var raw = window.location.hash.replace(/^#/, "");
      var slug = raw ? decodeURIComponent(raw) : "";
      if (slug) {
        showDetailBySlug(slug);
      } else {
        detailPanel.hidden = true;
        listPanel.hidden = false;
        if (listHint) listHint.hidden = false;
        document.title = I().t("doc_title_mantras");
      }
    }

    if (mantras.length === 0) {
      listEl.innerHTML = "";
      if (globalEmpty) globalEmpty.hidden = false;
      if (listHint) listHint.hidden = true;
      detailPanel.hidden = true;
      window.__refreshMantraPage = function () {
        if (globalEmpty) globalEmpty.innerHTML = I().t("empty_no_mantras_html");
      };
      window.__refreshMantraPage();
      return;
    }

    if (globalEmpty) globalEmpty.hidden = true;

    var religions = uniqueSorted(mantras.map(function (m) { return m.religion; }));
    var langs = uniqueSorted(mantras.map(function (m) { return m.language; }));

    if (filterRel && filterRel.options.length <= 1) {
      religions.forEach(function (r) {
        var opt = document.createElement("option");
        opt.value = r;
        opt.textContent = r;
        filterRel.appendChild(opt);
      });
    }
    if (filterLang && filterLang.options.length <= 1) {
      langs.forEach(function (l) {
        var opt = document.createElement("option");
        opt.value = l;
        opt.textContent = l;
        filterLang.appendChild(opt);
      });
    }

    function updateMantraFilterOptionLabels() {
      if (!filterRel || !filterLang) return;
      var L = lang();
      $all("option", filterRel).forEach(function (opt) {
        if (!opt.value) return;
        var sample;
        for (var i = 0; i < mantras.length; i++) {
          if (mantras[i].religion === opt.value) {
            sample = mantras[i];
            break;
          }
        }
        var label = sample ? pickLocalized(sample, "religion", L) : "";
        opt.textContent = label || opt.value;
      });
      $all("option", filterLang).forEach(function (opt) {
        if (!opt.value) return;
        var sample;
        for (var j = 0; j < mantras.length; j++) {
          if (mantras[j].language === opt.value) {
            sample = mantras[j];
            break;
          }
        }
        var langLabel = sample ? pickLocalized(sample, "language", L) : "";
        opt.textContent = langLabel || opt.value;
      });
    }

    function renderList() {
      var L = lang();
      var rVal = filterRel ? filterRel.value : "";
      var lVal = filterLang ? filterLang.value : "";
      var filtered = mantras.filter(function (m) {
        if (rVal && m.religion !== rVal) return false;
        if (lVal && m.language !== lVal) return false;
        return true;
      });

      listEl.innerHTML = "";
      if (filtered.length === 0) {
        var p = document.createElement("li");
        p.className = "mantra-list-empty";
        p.innerHTML = '<p class="empty-state">' + escapeHtml(I().t("empty_filter_mantras")) + "</p>";
        listEl.appendChild(p);
        return;
      }

      filtered.forEach(function (m) {
        var idx = mantras.indexOf(m);
        var slug = maps.indexToSlug[idx];
        var li = document.createElement("li");
        li.className = "mantra-list-item";

        var displayTitle = pickLocalized(m, "title", L) || I().t("untitled");
        var relD = pickLocalized(m, "religion", L);
        var lngD = pickLocalized(m, "language", L);

        var a = document.createElement("a");
        a.className = "mantra-list-link";
        a.href = "#" + encodeURIComponent(slug);
        a.setAttribute("aria-label", I().t("open_mantra_prefix") + displayTitle);

        var titleSpan = document.createElement("span");
        titleSpan.className = "mantra-list-title";
        titleSpan.textContent = displayTitle;

        var metaBits = [];
        if (relD) metaBits.push(relD);
        if (lngD) metaBits.push(lngD);
        if (metaBits.length) {
          var metaSpan = document.createElement("span");
          metaSpan.className = "mantra-list-meta";
          metaSpan.textContent = metaBits.join(" · ");
          a.appendChild(titleSpan);
          a.appendChild(metaSpan);
        } else {
          a.appendChild(titleSpan);
        }

        var chev = document.createElement("span");
        chev.className = "mantra-list-chevron";
        chev.setAttribute("aria-hidden", "true");
        chev.textContent = "→";

        a.appendChild(chev);
        li.appendChild(a);
        listEl.appendChild(li);
      });
    }

    function onFilterChange() {
      clearHash();
      renderList();
      syncFromHash();
    }

    if (filterRel) filterRel.addEventListener("change", onFilterChange);
    if (filterLang) filterLang.addEventListener("change", onFilterChange);

    if (backBtn) {
      backBtn.addEventListener("click", function () {
        showList();
      });
    }

    window.addEventListener("hashchange", syncFromHash);

    window.__refreshMantraPage = function () {
      updateMantraFilterOptionLabels();
      renderList();
      var raw = window.location.hash.replace(/^#/, "");
      if (raw) {
        showDetailBySlug(decodeURIComponent(raw));
      } else {
        detailPanel.hidden = true;
        listPanel.hidden = false;
        if (listHint) listHint.hidden = false;
        document.title = I().t("doc_title_mantras");
      }
    };

    updateMantraFilterOptionLabels();
    renderList();
    syncFromHash();
  }

  function renderMantras() {
    if ($("#mantra-list") && $("#mantra-detail-panel")) {
      initMantrasPage();
    }
  }

  function renderReligions() {
    var container = $("#religion-list");
    if (!container) return;

    var items = data.religions || [];
    var L = I().getLang();

    if (items.length === 0) {
      container.innerHTML =
        '<p class="empty-state">' + I().t("empty_no_religions_html") + "</p>";
      return;
    }

    container.innerHTML = "";
    items.forEach(function (r) {
      var card = document.createElement("article");
      card.className = "card";
      var name = pickLocalized(r, "name", L) || I().t("untitled");
      var summary = pickLocalized(r, "summary", L);
      var details = pickLocalized(r, "details", L);
      var practices = pickLocalizedPractices(r, L);
      var practicesHtml = "";
      if (practices.length) {
        practicesHtml =
          "<ul class=\"practices\">" +
          practices.map(function (p) { return "<li>" + escapeHtml(p) + "</li>"; }).join("") +
          "</ul>";
      }
      var overviewLabel = escapeHtml(I().t("overview_label"));
      card.innerHTML =
        "<h3>" + escapeHtml(name) + "</h3>" +
        (summary ? '<p class="religion-desc"><strong>' + overviewLabel + "</strong> " + escapeHtml(summary) + "</p>" : "") +
        (details ? '<p class="religion-desc">' + escapeHtml(details) + "</p>" : "") +
        practicesHtml;
      container.appendChild(card);
    });
  }

  function initRishiVanshPage() {
    var listEl = $("#rishi-list");
    var listPanel = $("#rishi-list-panel");
    var detailPanel = $("#rishi-detail-panel");
    var detailContent = $("#rishi-detail-content");
    var backBtn = $("#rishi-back");
    var listHint = $("#rishi-list-hint");
    var globalEmpty = $("#rishi-global-empty");

    if (!listEl || !listPanel || !detailPanel || !detailContent) return;

    var items = data.rishiVansh || [];
    var maps = buildRishiSlugs(items);

    function lang() {
      return I().getLang();
    }

    function showList() {
      detailPanel.hidden = true;
      listPanel.hidden = false;
      if (listHint) listHint.hidden = false;
      clearHash();
      document.title = I().t("doc_title_rishi_vansh");
      if (backBtn) backBtn.blur();
    }

    function showDetailBySlug(slug) {
      var idx = maps.slugToIndex[slug];
      if (idx === undefined) {
        showList();
        return;
      }
      var r = items[idx];
      listPanel.hidden = true;
      if (listHint) listHint.hidden = true;
      detailPanel.hidden = false;

      detailContent.innerHTML = buildRishiDetailHtml(r);
      var title = pickLocalized(r, "name", lang()) || I().t("untitled");
      document.title = title + I().t("doc_title_rishi_detail_suffix");
      if (backBtn) backBtn.focus();
    }

    function syncFromHash() {
      var raw = window.location.hash.replace(/^#/, "");
      var slug = raw ? decodeURIComponent(raw) : "";
      if (slug) {
        showDetailBySlug(slug);
      } else {
        detailPanel.hidden = true;
        listPanel.hidden = false;
        if (listHint) listHint.hidden = false;
        document.title = I().t("doc_title_rishi_vansh");
      }
    }

    if (items.length === 0) {
      listEl.innerHTML = "";
      if (globalEmpty) {
        globalEmpty.hidden = false;
        globalEmpty.innerHTML = I().t("empty_no_rishi_vansh_html");
      }
      if (listHint) listHint.hidden = true;
      detailPanel.hidden = true;
      window.__refreshRishiVanshPage = function () {
        if (globalEmpty) globalEmpty.innerHTML = I().t("empty_no_rishi_vansh_html");
      };
      window.__refreshRishiVanshPage();
      return;
    }

    if (globalEmpty) globalEmpty.hidden = true;

    function renderList() {
      var L = lang();
      listEl.innerHTML = "";
      items.forEach(function (r, i) {
        var slug = maps.indexToSlug[i];
        var li = document.createElement("li");
        li.className = "mantra-list-item";

        var displayTitle = pickLocalized(r, "name", L) || I().t("untitled");

        var a = document.createElement("a");
        a.className = "mantra-list-link";
        a.href = "#" + encodeURIComponent(slug);
        a.setAttribute("aria-label", I().t("open_rishi_prefix") + displayTitle);

        var titleSpan = document.createElement("span");
        titleSpan.className = "mantra-list-title";
        titleSpan.textContent = displayTitle;

        a.appendChild(titleSpan);

        var chev = document.createElement("span");
        chev.className = "mantra-list-chevron";
        chev.setAttribute("aria-hidden", "true");
        chev.textContent = "→";

        a.appendChild(chev);
        li.appendChild(a);
        listEl.appendChild(li);
      });
    }

    if (!rishiVanshInitDone) {
      rishiVanshInitDone = true;
      if (backBtn) {
        backBtn.addEventListener("click", function () {
          showList();
        });
      }
      window.addEventListener("hashchange", syncFromHash);
    }

    window.__refreshRishiVanshPage = function () {
      items = data.rishiVansh || [];
      maps = buildRishiSlugs(items);
      if (items.length === 0) {
        listEl.innerHTML = "";
        if (globalEmpty) {
          globalEmpty.hidden = false;
          globalEmpty.innerHTML = I().t("empty_no_rishi_vansh_html");
        }
        if (listHint) listHint.hidden = true;
        detailPanel.hidden = true;
        listPanel.hidden = false;
        document.title = I().t("doc_title_rishi_vansh");
        return;
      }
      if (globalEmpty) globalEmpty.hidden = true;
      if (listHint) listHint.hidden = false;
      renderList();
      var raw = window.location.hash.replace(/^#/, "");
      if (raw) {
        showDetailBySlug(decodeURIComponent(raw));
      } else {
        detailPanel.hidden = true;
        listPanel.hidden = false;
        document.title = I().t("doc_title_rishi_vansh");
      }
    };

    renderList();
    syncFromHash();
  }

  function renderRishiVansh() {
    if ($("#rishi-list") && $("#rishi-detail-panel")) {
      initRishiVanshPage();
    }
  }

  function initPhotosPage() {
    var gallery = $("#photo-gallery");
    var emptyEl = $("#photos-global-empty");
    if (!gallery) return;

    function render() {
      var items = data.photos || [];
      var L = I().getLang();
      gallery.innerHTML = "";
      if (items.length === 0) {
        if (emptyEl) {
          emptyEl.hidden = false;
          emptyEl.innerHTML = I().t("empty_no_photos_html");
        }
        return;
      }
      if (emptyEl) emptyEl.hidden = true;
      items.forEach(function (p) {
        var fig = document.createElement("figure");
        fig.className = "photo-card";
        var img = document.createElement("img");
        img.src = p.src || "";
        img.alt = pickLocalized(p, "alt", L) || "";
        img.loading = "lazy";
        img.decoding = "async";
        if (p.width) img.width = Number(p.width);
        if (p.height) img.height = Number(p.height);
        fig.appendChild(img);
        var capText = pickLocalized(p, "caption", L);
        if (capText) {
          var fc = document.createElement("figcaption");
          fc.textContent = capText;
          fig.appendChild(fc);
        }
        gallery.appendChild(fig);
      });
    }

    window.__refreshPhotosPage = function () {
      render();
    };
    render();
  }

  function renderPhotos() {
    if ($("#photo-gallery")) {
      initPhotosPage();
    }
  }

  // Mandatory name gate (first visit) — stored in localStorage
  function getStoredVisitorName() {
    try {
      var v = localStorage.getItem("religionVisitorName");
      return v ? String(v) : "";
    } catch (e) {
      return "";
    }
  }

  function setStoredVisitorName(name) {
    try {
      localStorage.setItem("religionVisitorName", String(name || "").trim());
    } catch (e) { }
  }

  function getStoredProfileName() {
    try {
      var raw = localStorage.getItem("religionUserProfile");
      if (!raw) return "";
      var obj = JSON.parse(raw);
      return obj && obj.fullName ? String(obj.fullName) : "";
    } catch (e) {
      return "";
    }
  }

  function ensureVisitorName() {
    var existing = getStoredVisitorName().trim();
    if (existing) return;

    var bundle = I();

    var overlay = document.createElement("div");
    overlay.className = "name-gate";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", bundle ? bundle.t("name_gate_title") : "Enter your name");

    var card = document.createElement("div");
    card.className = "name-gate-card";

    var h = document.createElement("h2");
    h.className = "name-gate-title";
    h.textContent = bundle ? bundle.t("name_gate_title") : "Enter your name";

    var p = document.createElement("p");
    p.className = "name-gate-desc";
    p.textContent = bundle ? bundle.t("name_gate_desc") : "Please enter your name to continue.";

    var label = document.createElement("label");
    label.className = "name-gate-label";
    label.setAttribute("for", "name-gate-input");
    label.textContent = bundle ? bundle.t("name_gate_label") : "Full name";

    var input = document.createElement("input");
    input.type = "text";
    input.id = "name-gate-input";
    input.className = "name-gate-input";
    input.autocomplete = "name";
    input.placeholder = bundle ? bundle.t("name_gate_placeholder") : "Your name";
    input.value = getStoredProfileName().trim();

    var err = document.createElement("p");
    err.className = "name-gate-error";
    err.setAttribute("role", "status");
    err.setAttribute("aria-live", "polite");
    err.textContent = "";

    var actions = document.createElement("div");
    actions.className = "name-gate-actions";

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "name-gate-btn";
    btn.textContent = bundle ? bundle.t("name_gate_continue") : "Continue";

    function showError(msg) {
      err.textContent = msg || "";
    }

    function submit() {
      var val = String(input.value || "").trim();
      if (!val) {
        showError(bundle ? bundle.t("name_gate_error_required") : "Name is required.");
        input.focus();
        return;
      }

      btn.disabled = true;
      btn.textContent = "Saving...";

      // Replace this with your actual Formspree ID URL
      var FORMSPREE_URL = "https://formspree.io/f/xzdknrov";

      fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ VisitorName: val, Time: new Date().toLocaleString() })
      }).then(function (res) {
        return res.json();
      }).then(function () {
        setStoredVisitorName(val);
        overlay.remove();
      }).catch(function (err) {
        console.error("Failed to save via Formspree:", err);
        // Let the user in even if internet drops or Formspree URL is empty
        setStoredVisitorName(val);
        overlay.remove();
      });
    }

    btn.addEventListener("click", submit);
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        submit();
      }
    });

    // Trap interaction: prevent clicking outside to close
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) {
        input.focus();
      }
    });

    actions.appendChild(btn);
    card.appendChild(h);
    card.appendChild(p);
    card.appendChild(label);
    card.appendChild(input);
    card.appendChild(err);
    card.appendChild(actions);
    overlay.appendChild(card);
    document.body.appendChild(overlay);
    input.focus();
  }

  // Header avatar (uses stored profile photo if available)
  function getStoredProfile() {
    try {
      var raw = localStorage.getItem("religionUserProfile");
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function applyHeaderAvatar() {
    var prof = getStoredProfile();
    var dataUrl = prof && prof.imageDataUrl ? String(prof.imageDataUrl) : "";
    $all("a.header-profile").forEach(function (link) {
      var svg = $(".header-profile-icon", link);
      var existingImg = $(".header-profile-avatar", link);
      if (dataUrl) {
        if (!existingImg) {
          existingImg = document.createElement("img");
          existingImg.className = "header-profile-avatar";
          // Insert avatar before label, in place of svg
          if (svg && svg.parentNode === link) {
            link.insertBefore(existingImg, svg);
            svg.style.display = "none";
          } else {
            link.insertBefore(existingImg, link.firstChild);
          }
        }
        existingImg.src = dataUrl;
        if (svg) svg.style.display = "none";
      } else {
        if (existingImg && existingImg.parentNode) {
          existingImg.parentNode.removeChild(existingImg);
        }
        if (svg) svg.style.display = "";
      }
    });
  }

  function initMobileMenu() {
    var headerRight = $(".header-right-cluster");
    var navWrap = $(".header-nav-wrap");
    if (!headerRight || !navWrap) return;

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "mobile-menu-btn";
    btn.setAttribute("aria-label", "Toggle navigation");
    btn.setAttribute("aria-expanded", "false");
    btn.innerHTML = '<svg class="mobile-menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>';

    // Insert button before everything else in the right cluster, so it aligns near the logo on mobile if we want, or at the start of the remaining items
    headerRight.insertBefore(btn, headerRight.firstChild);

    btn.addEventListener("click", function () {
      navWrap.classList.toggle("nav-is-open");
      var isOpen = navWrap.classList.contains("nav-is-open");
      btn.setAttribute("aria-expanded", isOpen);
      if (isOpen) {
        btn.innerHTML = '<svg class="mobile-menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>';
      } else {
        btn.innerHTML = '<svg class="mobile-menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>';
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (!window.SITE_I18N) return;
    I().applyDomLang(I().getLang());
    var siteSel = $("#site-lang");
    if (siteSel) siteSel.value = I().getLang();
    bindSiteLangSelect();
    applyStaticI18n();
    setActiveNav();
    renderMantras();
    renderReligions();
    renderRishiVansh();
    renderPhotos();
    renderMantroDropdown();
    initHeroCarousel();
    applyHeaderAvatar();
    ensureVisitorName();
    initMobileMenu();

    // Basic anti-inspect countermeasures
    document.addEventListener("contextmenu", function(e) {
      e.preventDefault();
    });
    document.addEventListener("keydown", function(e) {
      if (e.key === "F12") {
        e.preventDefault();
      }
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "i") {
        e.preventDefault();
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "u") {
        e.preventDefault();
      }
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "j") {
        e.preventDefault();
      }
    });
  });
})();
