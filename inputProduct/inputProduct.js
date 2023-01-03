let localArr = localStorage.getItem("list_Product");
let localData = JSON.parse(localArr)

window.onload = drawNewProduct(localData)

function drawNewProduct(arr) {
    let count = Math.ceil(arr.length / 4)
    let drawTable = "<table> <tr>";
    // console.log(count);
    for (let i = 0; i < count; i++) {
        for (let j = 1; j < 5; j++) {
            if (i * 4 + j <= arr.length) {
                drawTable += `<td class="tableTd">
                                <div class="divDisplay">
                                    <img src="${arr[i * 4 + j - 1].img} " class="imgDisplay">
                                     <span class="nameContent"> ${arr[i * 4 + j - 1].name}</span>
                                    <span class="priceContent">${arr[i * 4 + j - 1].price}</span>
                                    <button class="buttonBuy">Mua</button>
                                    </img>
                                </div>
                                  
                            </td>`
            } else break
        }
        drawTable += "</tr>"
    }
    document.getElementById("show-product-here").innerHTML = drawTable;
}

// function searchProduct() {
//     let inputSearch=document.getElementById("searchItem").value;
//     let listProducts = document.querySelectorAll(".tableTd")
//     console.log(listProducts)
//     // console.log(listProducts[0].firstElementChild.children[2].innerText)
//
//         for (let i = 0; i < listProducts.length; i++) {
//             if (listProducts[i].firstElementChild.children[1].innerText.toLowerCase().includes(inputSearch.toLowerCase())){
//                 listProducts[i].style.display = "block"
//             }
//             else {
//                 listProducts[i].style.display = "none"
//                 listProducts[i].style.display = "none"
//             }
//         }
// }
function searchProduct() {
    let inputSearch = document.getElementById("searchItem").value;
    let listProduct = document.querySelectorAll(".tableTd")
    console.log(listProduct[0].firstElementChild.children[1].innerText.toLowerCase())
    for (let i = 0; i < listProduct.length; i++) {
        if (listProduct[i].firstElementChild.children[1].innerText.toLowerCase().includes(inputSearch.toLowerCase())) {
            listProduct[i].style.display = "block"
        } else {
            listProduct[i].style.display = "none"
        }
    }
}

