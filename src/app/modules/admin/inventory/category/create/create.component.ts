import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"],
})
export class CreateComponent implements OnInit {
  public params: any;
  constructor(private route: ActivatedRoute) {
    this.params = this.route.snapshot.params;
  }

  ngOnInit(): void {}
}
