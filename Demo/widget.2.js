//Types of constructing data objects
const widget = {
    name: 'S',
    size: 'small',
    price: 20
};

class Widget {
    constructor(widgetData) {
        this.name = widget.name;
        this.size = widget.size;
        this.price = widget.price;
    }

    getInfo() {
        return this.name + ' ' + this.size + ' ' + this.price;
    }
}

const newWidgetUsingConstructor = new Widget({
    name:'L', 
    size: 'large', 
    price: 99}
);

const createWidget = (widgetData) => ({
    ...widgetData
});

const newWidgetNoConstructor = createWidget('M', 'medium', 55);