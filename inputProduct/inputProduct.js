let localArr = localStorage.getItem("list_Product");
let localData = JSON.parse(localArr)
window.onload = drawNewProduct(localData)

function drawNewProduct(arr) {
    let count = Math.ceil(arr.length / 4)
    let addProduct="";
    for (let i = 0; i < count; i++) {
        for (let j = 1; j < 5; j++) {
             addProduct = "<div class=\"col\" id=\"No${i * 4 + j - 1}\">";
            if (i * 4 + j <= arr.length) {
                addProduct +=`
            <img src="${localData[i * 4 + j - 1].img}"alt="Snow" style="width:100%">
            <span class="content"> ${localData[i * 4 + j - 1].name}</span>
            <span class="contentPrice"> ${localData[i * 4 + j - 1].price}</span>
            <button id="buyItem3" class="btn">Mua ngay</button>
          `
                console.log(addProduct)
            }
            else break
        }
        addProduct += "</div>"
    }
    document.getElementById("productList").innerHTML = addProduct;
}