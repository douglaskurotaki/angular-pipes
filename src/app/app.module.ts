import { SettingsService } from "./settings.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ExemplosPipesComponent } from "./exemplos-pipes/exemplos-pipes.component";
import { CamelCasePipe } from "./camel-case.pipe";
import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";
import { FiltroArrayPipe } from "./filtro-array.pipe";

registerLocaleData(localePt, "pt-BR");

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe
  ],
  imports: [BrowserModule, FormsModule],
  providers: [
    // {
    //   provide: LOCALE_ID,
    //   useValue: "pt-BR"
    // }
    SettingsService,
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: settingsService => settingsService.getLocale()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
