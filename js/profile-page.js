(function () {
  "use strict";

  var STORAGE_KEY = "religionUserProfile";
  var MAX_EDGE = 400;
  var JPEG_QUALITY = 0.82;

  function $(id) {
    return document.getElementById(id);
  }

  function t(key) {
    return window.SITE_I18N ? window.SITE_I18N.t(key) : key;
  }

  function loadStored() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }

  function saveStored(obj) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
  }

  function readForm() {
    return {
      fullName: $("profile-name").value.trim(),
      email: $("profile-email").value.trim(),
      phone: $("profile-phone").value.trim(),
      city: $("profile-city").value.trim(),
      religion: $("profile-religion").value.trim(),
      bio: $("profile-bio").value.trim()
    };
  }

  function writeForm(data) {
    if (!data) return;
    $("profile-name").value = data.fullName || "";
    $("profile-email").value = data.email || "";
    $("profile-phone").value = data.phone || "";
    $("profile-city").value = data.city || "";
    $("profile-religion").value = data.religion || "";
    $("profile-bio").value = data.bio || "";
  }

  function setMessage(text, isError) {
    var el = $("profile-message");
    if (!el) return;
    el.textContent = text || "";
    el.classList.toggle("profile-message--error", !!isError);
    el.classList.toggle("profile-message--ok", !!text && !isError);
    if (!text) {
      el.classList.remove("profile-message--error", "profile-message--ok");
    }
  }

  function updatePhotoUI(imageDataUrl) {
    var img = $("profile-photo-preview");
    var ph = $("profile-photo-placeholder");
    var removeBtn = $("profile-remove-photo");
    if (!img || !ph) return;
    if (imageDataUrl) {
      img.src = imageDataUrl;
      img.hidden = false;
      ph.hidden = true;
      if (removeBtn) removeBtn.disabled = false;
    } else {
      img.removeAttribute("src");
      img.hidden = true;
      ph.hidden = false;
      if (removeBtn) removeBtn.disabled = true;
    }
  }

  function compressImage(file, callback) {
    var reader = new FileReader();
    reader.onload = function () {
      var dataUrl = reader.result;
      var image = new Image();
      image.onload = function () {
        var w = image.width;
        var h = image.height;
        var scale = Math.min(1, MAX_EDGE / Math.max(w, h));
        var cw = Math.max(1, Math.round(w * scale));
        var ch = Math.max(1, Math.round(h * scale));
        var canvas = document.createElement("canvas");
        canvas.width = cw;
        canvas.height = ch;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, cw, ch);
        var out;
        try {
          out = canvas.toDataURL("image/jpeg", JPEG_QUALITY);
        } catch (e) {
          callback(new Error("encode"));
          return;
        }
        callback(null, out);
      };
      image.onerror = function () {
        callback(new Error("decode"));
      };
      image.src = dataUrl;
    };
    reader.onerror = function () {
      callback(new Error("read"));
    };
    reader.readAsDataURL(file);
  }

  function validate() {
    var f = readForm();
    if (!f.fullName || !f.email || !f.bio) {
      setMessage(t("profile_err_required"), true);
      return false;
    }
    var emailEl = $("profile-email");
    if (emailEl && typeof emailEl.checkValidity === "function" && !emailEl.checkValidity()) {
      setMessage(t("profile_err_email"), true);
      return false;
    }
    return true;
  }

  function init() {
    var form = $("profile-form");
    if (!form) return;

    var currentImage = null;

    function applyLoaded(data) {
      if (data) {
        writeForm(data);
        currentImage = data.imageDataUrl || null;
      } else {
        currentImage = null;
      }
      updatePhotoUI(currentImage);
    }

    var stored = loadStored();
    applyLoaded(stored);

    $("profile-upload-btn").addEventListener("click", function () {
      $("profile-file").click();
    });

    $("profile-file").addEventListener("change", function () {
      var file = this.files && this.files[0];
      if (!file) return;
      if (!file.type.match(/^image\//)) {
        setMessage(t("profile_err_image"), true);
        this.value = "";
        return;
      }
      compressImage(file, function (err, dataUrl) {
        $("profile-file").value = "";
        if (err || !dataUrl) {
          setMessage(t("profile_err_image"), true);
          return;
        }
        currentImage = dataUrl;
        updatePhotoUI(currentImage);
        setMessage("");
      });
    });

    $("profile-remove-photo").addEventListener("click", function () {
      currentImage = null;
      updatePhotoUI(null);
      $("profile-file").value = "";
      setMessage("");
      var existing = loadStored();
      if (existing) {
        existing.imageDataUrl = null;
        try {
          saveStored(existing);
        } catch (e) {
          if (e.name === "QuotaExceededError") {
            setMessage(t("profile_err_storage"), true);
          }
        }
      }
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      setMessage("");
      if (!validate()) return;
      var data = readForm();
      data.imageDataUrl = currentImage;
      try {
        saveStored(data);
        setMessage(t("profile_saved"), false);
      } catch (err) {
        if (err.name === "QuotaExceededError") {
          setMessage(t("profile_err_storage"), true);
        } else {
          setMessage(t("profile_err_storage"), true);
        }
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
