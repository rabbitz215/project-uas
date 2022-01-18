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

let barang = [{
        nama: "Logitech G Pro X Wireless",
        link: "detail1.html",
        gambar: "4.jpg",
        harga: "Rp.2.100.000"
    },
    {
        nama: "Razer Deathadder",
        link: "detail2.html",
        gambar: "2.jpg",
        harga: "Rp.1.100.000"
    },
    {
        nama: "Steelseries Apex Pro",
        link: "detail3.html",
        gambar: "3.jpg",
        harga: "Rp.2.500.000"
    },
    {
        nama: "Steelseries Sensei Ten",
        link: "#",
        gambar: "sensei.jpg",
        harga: "Rp.910.000"
    },
    {
        nama: "Razer Huntsman",
        link: "#",
        gambar: "huntsman.jpg",
        harga: "Rp.2.199.000"
    },
    {
        nama: "Steelseries Arctis Pro",
        link: "#",
        gambar: "arctis.jpg",
        harga: "Rp.2.800.000"
    },
];

let listbarang = document.getElementById("kontenview");

barang.forEach((product) => {
    let isiproduct = '';
    isiproduct += '<div class="col-md-4 text-center pb-5">';
    isiproduct += '<img src="assets/image/' + product.gambar + '" width="75%">';
    isiproduct += '<div class="nama-barang text-center">';
    isiproduct += '<h5 class="pt-3">' + product.nama + '</h5><b>' + product.harga + '</b>';
    isiproduct += '</div>';
    isiproduct += '<div class="d-grid gap-2">';
    isiproduct += '<a href="' + product.link + '" class="btn btn-info"><b class="detail">Detail</b></a>';
    isiproduct += '</div>';
    isiproduct += '</div>';

    listbarang.innerHTML += isiproduct;
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