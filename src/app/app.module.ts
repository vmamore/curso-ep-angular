import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';

// components
import { AppComponent } from './app.component';
import { MenuSuperiorComponent } from './shared/menu-superior/menu-superior.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainPrincipalComponent } from './shared/main-principal/main-principal.component';
import { HomeComponent } from './home/home.component';
import { MenuLoginComponent } from './shared/menu-login/menu-login.component';
import { ListaEventosComponent } from './eventos/lista-eventos/lista-eventos.component';

// services
import { SeoService } from './services/seo.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuSuperiorComponent,
    FooterComponent,
    MainPrincipalComponent,
    HomeComponent,
    MenuLoginComponent,
    ListaEventosComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false })
  ],
  providers: [Title, SeoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
