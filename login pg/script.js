function showHome() {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('signupContainer').style.display = 'none';
    document.getElementById('aboutUsContainer').style.display = 'none';
    document.getElementById('productsContainer').style.display = 'none';
    document.getElementById('homePage').style.display = 'block';
}

function showLogin() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('signupContainer').style.display = 'none';
    document.getElementById('aboutUsContainer').style.display = 'none';
    document.getElementById('productsContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'block';
}

function showSignup() {
    // document.getElementById('homePage').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('aboutUsContainer').style.display = 'none';
    document.getElementById('productsContainer').style.display = 'none';
    document.getElementById('signupContainer').style.display = 'block';
}

function showAboutUs() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('signupContainer').style.display = 'none';
    document.getElementById('productsContainer').style.display = 'none';
    document.getElementById('aboutUsContainer').style.display = 'block';
}

function showProducts() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('signupContainer').style.display = 'none';
    document.getElementById('aboutUsContainer').style.display = 'none';
    document.getElementById('productsContainer').style.display = 'block';
}