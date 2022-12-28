let arr = JSON.parse(localStorage.getItem("list_Product"));
if (arr == null) {
    arr = [];
}
let tableExpand;
let id = 0;

function creatTable() {
    let productName = document.getElementById("product").value;
    let img = document.getElementById("img").value;
    let price = document.getElementById("price").value;
    if (arr.length === 0) {
        id = 1;
    } else {
        id = arr[arr.length - 1].id + 1;
    }
    if (productName == "") {
        alert("Vui lòng nhập Tên sản phẩm")
    } else {
        let newProduct = new Product(id, productName, img, price);
        arr.push(newProduct)
        localStorage.setItem("list_Product",JSON.stringify(arr))
        drawTable(arr)
        clearData()
    }
}

let test;

function editData(id) {
    test = id
    document.getElementById("product").value = arr[id].name;
    document.getElementById("img").value = arr[id].img;
    document.getElementById("price").value = arr[id].price;
    document.getElementById("btn").style.display = "none";
    document.getElementById("btn1").style.display = "inline-block";
}

function deleteComment(id) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === id) {
            arr.splice(i, 1);
            drawTable(arr)
        }
    }
}

function drawTable(arr) {
    tableExpand = "";
    console.log("arr", arr)
    for (let i = 0; i < arr.length; i++) {
        tableExpand += `
    <tr>
    <td >${i + 1}</td> 
    <td>HL${arr[i].id}</td>
     <td id="product${arr[i].id}">${arr[i].name}</td>
     <td  ><img class="sizeImg" src="${arr[i].img}" alt=""></td>
     <td >${arr[i].price}</td>
<!--     <td><button onclick="editData(${arr[i].id})"><i class="bi bi-pencil-fill"></i></button></td>-->
     <td><button onclick="editData(${i})"><i class="bi bi-pencil-fill"></i></button></td>
    
     <td ><button onclick="deleteComment(${arr[i].id})"><i class="bi bi-trash3-fill"></i></button></td>

</tr>`
    }
    document.getElementById("creatTable").innerHTML = tableExpand;
}

function clearData() {
    document.getElementById("product").value = ""
    document.getElementById("img").value = ""
    document.getElementById("price").value = ""
}

function update() {
    arr[test].name = document.getElementById("product").value;
    arr[test].img = document.getElementById("img").value;
    arr[test].price = document.getElementById("price").value;
    localStorage.setItem("list_Product",JSON.stringify(arr))
    drawTable(arr)
    document.getElementById("btn").style.display = "inline-block";
    document.getElementById("btn1").style.display = "none";
    document.getElementById("product").value = ""
    document.getElementById("img").value = ""
    document.getElementById("price").value = ""
}
