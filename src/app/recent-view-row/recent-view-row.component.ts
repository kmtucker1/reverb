import { Component, Input } from "@angular/core";

@Component ({
    selector: "fm-recent-view-row",
    templateUrl: "recent-view-row.component.html",
    styleUrls: ["recent-view-row.component.css"]
})
export class RecentViewRowComponent {
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