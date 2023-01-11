import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigService } from './config.service';
import { PeopleComponent } from './people/people.component';

export function initializeApp(configService: ConfigService) {
  return async () => {
    console.log(
      '%cProduction: ' + environment.production,
      'background-color:blue'
    );
    console.log('%cinit config', 'background-color: green');
    try {
      await configService.loadConfig();
      console.log(configService.getConfig());
    } catch (e) {
      console.log(e);
    }
  };
}

@NgModule({
  declarations: [AppComponent, PeopleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ConfigService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
