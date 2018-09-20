//Types of constructing data objects
const widget = {
    name: 'S',
    size: 'small',
    price: 20
};

class Widget {
    constructor(name, size, price) {
        this.name = name;
        this.size = size;
        this.price = price;
    }

    getInfo() {
        return this.name + ' ' + this.size + ' ' + this.price;
    }
}

const newWidgetUsingConstructor = new Widget('L', 'large', 99);

const createWidget = (name, size, price) => ({
    name, size, price
});

const newWidgetNoConstructor = createWidget('M', 'medium', 55);