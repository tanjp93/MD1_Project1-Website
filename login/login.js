function loginWebsite() {
    let email = document.getElementById("emailLogin").value;
    let password = document.getElementById("passwordLogin").value;
    let user = localStorage.getItem("list_User");
    console.log(user)
    let listUser = JSON.parse(user);
    if (email.trim() === "") {
        document.getElementById("errorEmailLogin").innerHTML = "Vui lòng nhập Email"
        return
    }
    if (password.trim() === "") {
        document.getElementById("errorPasswordLogin").innerHTML = "Vui lòng nhập Password"
        return
    } else {
        for (let i = 0; i < listUser.length; i++) {
            if (email === listUser[i].email && password === listUser[i].password) {
                let registerSuccess = confirm("Đăng nhập thành công");
                if (registerSuccess) {
                    location.href = "../index.html"
                }
            } else {
                document.getElementById("errorPasswordLogin").innerHTML = "Email hoặc Password không đúng"
            }
        }
    }
}