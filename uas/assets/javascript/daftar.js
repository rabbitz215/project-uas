document.getElementById("nama").onkeyup = function () {
    let up = document.getElementById("nama");
    up.value = up.value.toUpperCase();
}

document.getElementById("password1").onchange = function () {
    let pw = document.getElementById("password").value;
    let pw1 = document.getElementById("password1").value;
    if (pw !== pw1) {
        document.getElementById("cc").style.display = "inline-block";
        document.getElementById("btn-daftar").disabled = true;
    } else {
        document.getElementById("cc").style.display = "none";
        document.getElementById("btn-daftar").disabled = false;
    }
}

document.getElementById("btn-daftar").disabled = true;

document.getElementById("btn-daftar").onclick = function () {
    let today = new Date();
    const month = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    let bt = month[today.getMonth()] + today.getFullYear();

    let nama = document.getElementById("nama").value;
    let email = document.getElementById("username").value;
    let telp = document.getElementById("tlp").value;
    let pw = document.getElementById("password").value;
    let pw1 = document.getElementById("password1").value;
    if (nama === "" || email === "" || telp === "" || pw === "" || pw1 === "") {
        alert("Mohon isi seluruh data form");
    } else {
        document.getElementById("trm").style.display = "inline";
        document.getElementById("isi-daftar").style.display = "none";

        let kode = bt + nama.substring(0, 2);

        let data = '<div class="row mt-5">';
        data += '<div class="col-md-2"></div>';
        data += '<div class="col-md-2"><label for="nama"><b>Nama</b></label></div>';
        data += '<div class="col-md-5"><p><b>: ' + nama + '</b></p></div></div>';
        data += '<div class="row mt-2">';
        data += '<div class="col-md-2"></div>';
        data += '<div class="col-md-2"><label for="username"><b>Username</b></label></div>';
        data += '<div class="col-md-5"><p><b>: ' + email + '</b></p></div></div>';
        data += '<div class="row mt-2">';
        data += '<div class="col-md-2"></div>';
        data += '<div class="col-md-2"><label for="telp"><b>No Telp</b></label></div>';
        data += '<div class="col-md-5"><p><b>: ' + telp + '</b></p></div></div>';
        data += '<div class="row mt-2">';
        data += '<div class="col-md-2"></div>';
        data += '<div class="col-md-2"><label for="kode"><b>Kode Member</b></label></div>';
        data += '<div class="col-md-5"><p><b>: ' + kode + '</b></p></div></div>';
        data += '<div class="row mt-5"><div class="col-md-12 text-center"><h2><b>Silahkan cek email untuk verifikasi !!!</b></h2></div></div>'


        document.getElementById("trm").innerHTML += data;
    }
}