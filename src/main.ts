import { enableProdMode , importProvidersFrom} from '@angular/core';

import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AnalyticsService } from './app/shared/analytics.service';
import { RoutingModule } from './app/routing.module';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

bootstrapApplication(AppComponent , {providers:[AnalyticsService , importProvidersFrom(RoutingModule)]});
