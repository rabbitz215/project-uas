let kategori = [{
        nama: "All",
        link: "index.html"
    },
    {
        nama: "Mouse",
        link: "mouse.html"
    },
    {
        nama: "Keyboard",
        link: "keyboard.html"
    },
    {
        nama: "Headset",
        link: "headset.html"
    }
];

let isi = document.getElementById("isi-kategori");

kategori.forEach((item) => {
    isi.innerHTML += '<li><a href="' + item.link + '" class="kat">' + item.nama + '</a></li>';
});


function message(id, text) {
    document.getElementById(id).innerHTML = "<b>" + text + "</b>";
    document.getElementById(id).style.display = "inline";
}

const username = "admin";
const password = "123";

function ceklogin() {
    let userlogin = document.getElementById("username").value;
    let passlogin = document.getElementById("password").value;
    if (userlogin === "" || userlogin === null) {
        message("alert", "Username wajib diisi!!");

    } else if (passlogin === "" || passlogin === null) {
        message("alert", "Password wajib diisi!!");
    } else {
        if (userlogin === username && passlogin === password) {
            alert("Login Berhasil, Selamat Datang " + userlogin);
            window.location.href = "index.html";
        } else {
            alert("Username/Password Salah");
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
        }
    }
}