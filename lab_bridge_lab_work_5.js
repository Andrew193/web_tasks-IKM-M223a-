class Page {
    render(renderer) {
        return renderer.renderPage(this);
    }
}

class Renderer {
    page;

    constructor(page) {
        this.page = page;
    }
    renderPage(page) {
        console.log(this.page || page, "Default method");
    }
}

class SimplePage extends Page {
    constructor(title, content) {
        super();
        this.title = title;
        this.content = content;
    }
}

class ProductPage extends Page {
    constructor(product) {
        super();
        this.product = product;
    }
}

class HTMLRenderer extends Renderer {
    constructor(page) {
        super(page);
    }

    renderPage(page) {
        return "HTMLRenderer rendered this:" + JSON.stringify(page)
    }
}

class JsonRenderer extends Renderer {
    constructor(page) {
        super(page);
    }
    renderPage(page) {
        return "JsonRenderer rendered this:" + JSON.stringify(page)
    }
}

class XmlRenderer extends Renderer {
    constructor(page) {
        super(page);
    }
    renderPage(page) {
        return "XmlRenderer rendered this:" + JSON.stringify(page)
    }
}

class Product {
    constructor(id, name, description, image) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
    }
}

const product = new Product(1, "Product 1 name", "Product 1 description", "productImage.png");
const productPage = new ProductPage(product);

const htmlRenderer = new HTMLRenderer();
const jsonRenderer = new JsonRenderer();
const xmlRenderer = new XmlRenderer();

const htmlResult = productPage.render(htmlRenderer);
const jsonResult = productPage.render(jsonRenderer);
const xmlResult = productPage.render(xmlRenderer);

console.log("HTML rendering:\n");
console.log(htmlResult);

console.log("\nJSON rendering:\n");
console.log(jsonResult);

console.log("\nXML rendering:\n");
console.log(xmlResult);
