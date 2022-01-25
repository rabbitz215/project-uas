function message(id, text) {
    document.getElementById(id).innerHTML = "<b>" + text + "</b>";
    document.getElementById(id).style.display = "inline";
}

const username = "admin";
const password = "123";

function ceklogin() {
    let userlogin = document.getElementById("usernamelogin").value;
    let passlogin = document.getElementById("passwordlogin").value;
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
            document.getElementById("usernamelogin").value = "";
            document.getElementById("passwordlogin").value = "";
        }
    }
}
