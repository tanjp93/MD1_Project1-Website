let localArr = localStorage.getItem("list_Product");
let localData = JSON.parse(localArr)
// function searchProduct() {
//     let inputSearch=document.getElementById("searchItem").value;
//     console.log(inputSearch)
// else{
//         let listSearch=[];
//         for (let i = 0; i < localData.length; i++) {
//             if (localData[i].name.toLowerCase().search(inputSearch.toLowerCase())!==-1){
//                 listSearch.push(localData[i])
//             }
//         }
//         drawTable(listSearch)
//         console.log(listSearch)
//     }
// }
//

window.onload = drawNewProduct(localData)
function drawNewProduct(arr) {
    let count=Math.ceil(arr.length / 4)
    let drawTable = "<table> <tr>";
    // console.log(count);
    for (let i = 0; i < count; i++) {
        for (let j = 1; j < 5; j++) {
            if (i * 4 + j <= arr.length){
                drawTable += `<td class="tableTd">
                                <div class="divDisplay">
                                    <img src="${arr[i * 4 + j - 1].img} " class="imgDisplay">
                                     <span class="nameContent"> ${arr[i * 4 + j - 1].name}</span>
                                    <span class="priceContent">${arr[i * 4 + j - 1].price}</span>
                                    <button class="buttonBuy">Mua</button>
                                    </img>
                                </div>
                                  
                            </td>`
            }else  break
        }
        drawTable += "</tr>"
    }
    document.getElementById("show-product-here").innerHTML = drawTable;
}
