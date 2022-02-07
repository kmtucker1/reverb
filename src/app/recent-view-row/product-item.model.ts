export class ProductItemModel {
    img: string;
    title: string;
    price: number;
    condition: string;

    constructor(img: string, title: string, price: number, condition: string) {
        this.img = img;
        this.title = title;
        this.price = price;
        this.condition = condition;
    }
}