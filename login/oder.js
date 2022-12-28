class Dish {
    id;
    name;
    cost;
    count

    constructor(id, name, cost, count) {
        this.id = id;
        this.name = name;
        this.cost = cost;
        this.count = count;
    }

    get name() {
        return this.name;
    }

    get cost() {
        return this.cost;
    }

    get count() {
        return this.count;
    }

    setName(name) {
        this.name = name;
    }

    setCost(cost) {
        this.cost = cost;
    }

    setCount(count) {
        this.count = count;
    }
}

let count1 = +document.getElementById("choiceNumber1").value;
let count2 = +document.getElementById("choiceNumber1").value;
let count3 = +document.getElementById("choiceNumber1").value;
let count4 = +document.getElementById("choiceNumber1").value;
let count5 = +document.getElementById("choiceNumber1").value;
let count6 = +document.getElementById("choiceNumber1").value;

let cost1 = +document.getElementById("choiceNumber1").value;
let cost2 = +document.getElementById("choiceNumber1").value;
let cost3 = +document.getElementById("choiceNumber1").value;
let cost4 = +document.getElementById("choiceNumber1").value;
let cost5 = +document.getElementById("choiceNumber1").value;
let cost6 = +document.getElementById("choiceNumber1").value;
let dish1 = new Dish(1, "Món ăn 1", cost1, count1);
let dish2 = new Dish(2, "Món ăn 2", cost2, count1);
let dish3 = new Dish(3, "Món ăn 3", cost3, count1);
let dish4 = new Dish(4, "Món ăn 4", cost4, count1);
let dish5 = new Dish(5, "Món ăn 5", cost5, count1);
let dish6 = new Dish(6, "Món ăn 6", cost6, count1);

// function count() {
//     let countTotal = count1 + count2 + count3 + count4 + count5 + count6;
//     document.getElementById("count").value=countTotal;
// }



let plusProduct = [{id: 1, count: count1}, {id: 2, count: count2}, {id: 3, count: count3}, {
    id: 4,
    count: count4
}, {id: 5, count: count5}, {id: 6, count: count6}]
console.log("gia tri ban dau", plusProduct)

function countPlusDish(id) {
    let index
    for (let i = 0; i < plusProduct.length; i++) {
        if (plusProduct[i].id === id) {
            index = i;
            break
        }
    }
    plusProduct[index].count += 1
    console.log(plusProduct)
    // for (let i = 0; i < ; i++) {
    //
}
function countMinusDish(id) {
    let plusProduct = [{id: 1, count: count1}, {id: 2, count: count2}, {id: 3, count: count3}, {
        id: 4,
        count: count4
    }, {id: 5, count: count5}, {id: 6, count: count6}]
    console.log("gia tri ban dau", plusProduct)
    let index
    for (let i = 0; i < plusProduct.length; i++) {
        if (plusProduct[i].id === id) {
            index = i;
            break
        }
        plusProduct[index].count -= 1
        console.log("count minus", count)
    }
}
