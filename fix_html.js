const fs = require('fs');
const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.html'));

const targetRE = /<a href="dharm-knowledge\.html" class="mantro-btn" data-i18n="nav_dharm_knowledge">Dharm Knowledge<\/a>\s*<div class="lang-switcher">\s*<label for="site-lang" data-i18n="site_lang_label">Site language<\/label>\s*<select id="site-lang" aria-label="Site language">\s*<option value="en" data-i18n-label="opt_lang_en">English<\/option>\s*<option value="gu" data-i18n-label="opt_lang_gu">ગુજરાતી<\/option>\s*<\/select>\s*<\/div>\s*<\/div>\s*<a class="header-profile"/g;

const replacement = `<a href="dharm-knowledge.html" class="mantro-btn" data-i18n="nav_dharm_knowledge">Dharm Knowledge</a>
        </div>
        <div class="lang-switcher">
          <label for="site-lang" data-i18n="site_lang_label">Site language</label>
          <select id="site-lang" aria-label="Site language">
            <option value="en" data-i18n-label="opt_lang_en">English</option>
            <option value="gu" data-i18n-label="opt_lang_gu">ગુજરાતી</option>
          </select>
        </div>
        <a class="header-profile"`;

let count = 0;
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  if(targetRE.test(content)) {
    content = content.replace(targetRE, replacement);
    fs.writeFileSync(f, content);
    console.log('Fixed ' + f);
    count++;
  }
});

console.log('Total fixed: ' + count);
