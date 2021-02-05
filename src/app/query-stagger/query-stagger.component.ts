import { Component, OnInit } from "@angular/core";
import {
  trigger,
  query,
  stagger,
  style,
  transition,
  animate,
  AnimationEvent
} from "@angular/animations";

@Component({
  selector: "app-query-stagger",
  templateUrl: "./query-stagger.component.html",
  styleUrls: ["./query-stagger.component.css"],
  animations: [
    trigger("entering", [
      //state("in", style({ transform: "translateX(0)" })),
      transition(":enter", [
        query(".item", [
          style({ opacity: 0, transform: "translateY(-100px)" }),
          stagger(-100, [
            animate(500, style({ opacity: 1, transform: "none" }))
          ])
        ])
      ])
    ])
  ]
})
export class QueryStaggerComponent implements OnInit {
  allItems = ["item1", "item2", "item3"];
  items = [];
  constructor() {}

  ngOnInit() {
    setTimeout(() => (this.items = this.allItems), 1000);
  }
}
