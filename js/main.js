// LocalStorage
const localText = document.getElementById('local-text');
const localImage = document.getElementById('local-image');

const localFontSelect = document.getElementById('local-font');
const localBrandSelect = document.getElementById('local-brand');


if (!localStorage.getItem('brand') || !localStorage.getItem('font')) {
    populateLocalStorage();
} else {
    setStorageStyles();
}

function populateLocalStorage(){
    localStorage.setItem('font', document.getElementById('local-font').value);
    localStorage.setItem('brand', document.getElementById('local-brand').value);

    setStorageStyles();
}

function setStorageStyles(){
    const currnetFont = localStorage.getItem('font');
    const currnetBrand = localStorage.getItem('brand');

    document.getElementById('local-font').value = currnetFont;
    document.getElementById('local-brand').value = currnetBrand;

    localText.className = getClassName(currnetFont);
    localImage.setAttribute('src', currnetBrand);
}

localFontSelect.addEventListener('change', populateLocalStorage);
localBrandSelect.addEventListener('change', populateLocalStorage);

// Document.cookie
const cookieText = document.getElementById('cookie-text');
const cookieImage = document.getElementById('cookie-image');

const cookieFontSelect = document.getElementById('cookie-font');
const cookieBrandSelect = document.getElementById('cookie-brand');

function getCookie(name) { // function from https://learn.javascript.ru/cookie
    const matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value){
    const newCookie = `${name}=${encodeURIComponent(value)};`;
    document.cookie = newCookie;
}

if (!getCookie('brand') || !getCookie('font')) {
    populateCookieStorage();
} else {
    setCookieStyles();
}

function populateCookieStorage() {
    setCookie('font', document.getElementById('cookie-font').value);
    setCookie('brand', document.getElementById('cookie-brand').value);

    setCookieStyles();
}

function setCookieStyles() { 
    /*
    *   For security purposes some browsers like Chrome does not allow cookies to be set in the file:// protocol, 
    *   if you are using like that then the behavior is expected.
    * 
    *   https://github.com/js-cookie/js-cookie/issues/129#issuecomment-178854498
    * 
    */
    const currnetFont = getCookie('font');
    const currnetBrand = getCookie('brand');

    document.getElementById('cookie-font').value = currnetFont;
    document.getElementById('cookie-brand').value = currnetBrand;

    cookieText.className = getClassName(currnetFont);
    cookieImage.setAttribute('src', currnetBrand);
}

cookieFontSelect.addEventListener('change', populateCookieStorage);
cookieBrandSelect.addEventListener('change', populateCookieStorage);

function getClassName(classCode){
    if (classCode === '0'){
        return 'storage__content-text_style_serif';
    } else if (classCode === '1'){
        return 'storage__content-text_style_sans-serif';
    } else if (classCode === '2'){
        return 'storage__content-text_style_monospaced';
    }
}
