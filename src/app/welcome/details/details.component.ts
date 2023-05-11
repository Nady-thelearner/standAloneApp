import { Component } from "@angular/core";
import { AnalyticsService } from "src/app/shared/analytics.service";
import { HighlightDirective } from "src/app/shared/highlight.directive";

@Component({
  imports: [HighlightDirective],
  standalone: true,
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent {
  constructor(private analyticsService: AnalyticsService) {}

  onClick() {
    this.analyticsService.registerClick();
  }
}
