class Users {
    id
    name;
    email;
    password

    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    // getId(){
    //     return this.id
    // }
    // setId(id){
    //     this.id
    // }
    getName() {
        return this.name
    }

    setName(name) {
        this.name
    }

    getEmail() {
        return this.email
    }

    setEmail(email) {
        this.email
    }

    getPassword() {
        return this.password
    }

    setPassword(password) {
        this.password
    }

    getID() {
        return this.id
    }

    setID(id) {
        this.id
    }
}


function validatePassword(pw) {
    return /[A-Z]/.test(pw) &&
        /[a-z]/.test(pw) &&
        /[0-9]/.test(pw) &&
        // /[^A-Za-z0-9]/.test(pw) &&
        pw.length > 4;

}

// let a="??????????"
// let b=validatePassword(a);
// console.log("b>>>>>>",b)


let check = false;
let id
let userName
let email
let password
let rePassword
let checkBox

function checkSignUp() {
    userName = document.getElementById("inputNameUser").value;
    email = document.getElementById("inputEmailUser").value;
    password = document.getElementById("inputPassword").value;
    rePassword = document.getElementById("reInputPassword").value;
    checkBox = document.getElementById("checkBox").checked;
    let checkUser = false;
    let checkEmail = false;
    let checkPassword = false;
    let checkRePassword = false;
    check = false;
    if (userName.trim() == "") {
        document.getElementById("errorUser").innerHTML = " Tên người dùng không được để trống";
        return;
    } else {
        document.getElementById("errorUser").innerHTML = "";
        checkUser = true
    }
    if (email.trim() == "") {
        document.getElementById("errorEmail").innerHTML = " Email không được để trống"
        return
    } else if (validateEmail(email)) {
        document.getElementById("errorEmail").innerHTML = "";
        checkEmail = true;
    } else {
        document.getElementById("errorEmail").innerHTML = "Yêu cầu nhập đúng định dạng";
        checkEmail = false
    }
    if (password.trim() == "") {
        document.getElementById("errorPassword").innerHTML = " Password không được để trống"
        return
    } else {
        if (password.length < 6) {
            document.getElementById("errorPassword").innerHTML = " Password phải nhiều hơn 6 ký tự"
            return
        } else if (validatePassword(password)) {
            document.getElementById("errorPassword").innerHTML = "";
            checkPassword = true;
        } else {
            document.getElementById("errorPassword").innerHTML = "Password phải bao gồm chữ cái viết hoa,thường,kí tự đặc biệt và số";
            checkPassword = false;
        }
    }
    if (rePassword.trim() == "") {
        document.getElementById("errorRePassword").innerHTML = " Xin vui lòng nhập lại Password";
    } else if (rePassword.trim() === password.trim()) {
        document.getElementById("errorRePassword").innerHTML = "";
        checkRePassword = true;
    } else {
        document.getElementById("errorRePassword").innerHTML = "Password bạn nhập không trùng khớp"
        checkRePassword = false;
    }
    if (checkUser && checkEmail && checkPassword && checkRePassword && checkBox) {
        check = true;
    }
    return check
}

function signUp() {
    let listUser = JSON.parse(localStorage.getItem("list_User"))
    if (listUser == null) {
        listUser = []
    }
    if (check) {
        userName = document.getElementById("inputNameUser").value;
        email = document.getElementById("inputEmailUser").value;
        password = document.getElementById("inputPassword").value;
        rePassword = document.getElementById("reInputPassword").value;
        if (listUser.length == 0) {
            id = 1
            let user = new Users(id, userName, email, password);
            listUser.push(user);
            localStorage.removeItem("list_User");
            localStorage.setItem("list_User", JSON.stringify(listUser))
        } else {
            let checkValidate = false
            for (let i = 0; i < listUser.length; i++) {
                if (email === listUser[i].email) {
                    checkValidate = true;
                    break;
                }
            }
            if (checkValidate) {
                document.getElementById("failRegister").innerHTML = "Email đã tồn tại"
            } else {
                id = listUser[listUser.length - 1].id + 1
                let user = new Users(id, userName, email, password);
                listUser.push(user);
                localStorage.removeItem("list_User");
                localStorage.setItem("list_User", JSON.stringify(listUser))
                let registerSuccess = confirm("Đăng kí thành công\n" + "User  :" + userName + "\n" + "Email đăng kí:  " + email);
                if (registerSuccess) {
                    location.href = "../index.html"
                }
            }
        }
    }
}

function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    return (false)
}
