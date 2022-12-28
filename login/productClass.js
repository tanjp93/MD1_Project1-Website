class Product {
    id;
    name;
    img;
    price;

    constructor(id, name, img, price) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.price = price;
    }

    get id() {
        return this.id;
    }

    get name() {
        return this.name;
    }

    get img() {
        return this.img;
    }

    get price() {
        return this.price;
    }

    set id(id) {
        this.id = id;
    }

    set name(name) {
        this.name = name;
    }

    set img(img) {
        this.img = img;
    }

    set price(price) {
        this.price = price;
    }
}