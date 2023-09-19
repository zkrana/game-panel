const dropdownButton = document.getElementById('dropdownMenuButton1');
const flagMenu = document.getElementById('flag-menu');

// Toggle the dropdown when the button is clicked
dropdownButton.addEventListener('click', () => {
    flagMenu.classList.toggle('showFlag');
});

// Hide the dropdown when it loses focus (e.g., when clicking outside)
dropdownButton.addEventListener('blur', () => {
    flagMenu.classList.remove('showFlag');
});


function showLogoutPopup() {
    document.getElementById("logout-popup").classList.add('showLogout');
    document.getElementById("overlay").style.display = "block";
}

function hideLogoutPopup() {
    document.getElementById("logout-popup").classList.remove('showLogout')
    document.getElementById("overlay").style.display = "none";
}

function logout() {
    alert("You are now logged out.");
    hideLogoutPopup();
}

document.getElementById('home').addEventListener('click', (event) => {
// Prevent the default link behavior
event.preventDefault();

// Show the avatar popup
showAvatarPopup();
});

function showAvatarPopup() {
document.getElementById("avatar-popup").classList.add('showAvatar');
document.getElementById("overlay").style.display = "block";
}

function hideAvatarPopup() {
document.getElementById("avatar-popup").classList.remove('showAvatar');
document.getElementById("homeClose").classList.remove('showAvatar');
document.getElementById("overlay").style.display = "none";
}


function saveAvatarData(){
hideAvatarPopup();
}




function showtransPopup() {
document.getElementById("transaksi").classList.add('showtransaksi');
document.getElementById("overlay").style.display = "block";
}

function hidetransPopup() {
document.getElementById("transaksi").classList.remove('showtransaksi');
document.getElementById("homeClose").classList.remove('showtransaksi');
document.getElementById("overlay").style.display = "none";
}


function keamananPopup() {
document.getElementById("keamananP").classList.add('showkeamanan');
document.getElementById("overlay").style.display = "block";
}

function hidekeamananPopup() {
document.getElementById("keamananP").classList.remove('showkeamanan');
document.getElementById("homeClose").classList.remove('showkeamanan');
document.getElementById("overlay").style.display = "none";
}