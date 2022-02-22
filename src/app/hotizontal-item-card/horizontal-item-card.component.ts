import { Component, Input } from "@angular/core";

@Component ({
    selector: "fm-horizontal-item-card",
    templateUrl: "horizontal-item-card.component.html",
    styleUrls: ["horizontal-item-card.component.css"]
})
export class HorizontalItemCardComponent {
    @Input() img: string;
    @Input() title: string;
    @Input() price: number;
    @Input() condition: string;

    constructor() {
        this.img = "";
        this.title = "NO-TITLE"
        this.price = -1;
        this. condition = "n/a";
    }
}