import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  IgxTabsModule,
  IgxCardModule,
  IgxAvatarModule,
  IgxButtonModule,
  IgxRippleModule
} from "igniteui-angular";
import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon/';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FaqComponent } from './site/faq/faq.component';
import { FooterComponent } from './site/footer/footer.component';
import { GetstartedFormComponent } from './site/getstarted-form/getstarted-form.component';
import { HeaderComponent } from './site/header/header.component';
import { HomeComponent } from './site/home/home.component';
import { ItrComponent } from './site/itr/itr.component';
import { MaincarouselComponent } from './site/maincarousel/maincarousel.component';
import { NavigationBarComponent } from './site/navigation-bar/navigation-bar.component';
import { ServicesComponent } from './site/services/services.component';
import { ComplianceComponent } from './site/compliance/compliance.component';
import { GstComponent } from './site/gst/gst.component';
import { HomeStatsComponent } from './site/home-stats/home-stats.component';
import { AboutUsComponent } from './site/about-us/about-us.component';
import { FormsModule } from '@angular/forms';
import { AccountComponent } from './shared/auth/account/account.component';
import { TokenInterceptorService } from './site/service/interceptors/TokenInterceptorService';
import { SignupComponent } from './shared/auth/signup/signup.component';
import { LoginComponent } from './shared/auth/login/login.component';

const appRoute: Routes = [

  { path: '', component: HomeComponent },
  { path: 'itr/:id', component: ItrComponent },
  { path: 'gst/:id', component: GstComponent },
  { path: 'compliance', component: ComplianceComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationBarComponent,
    FooterComponent,
    MaincarouselComponent,
    HomeComponent,
    GetstartedFormComponent,
    FaqComponent,
    ServicesComponent,
    ItrComponent,
    GstComponent,
    ComplianceComponent,
    HomeStatsComponent,
    AccountComponent,
    AboutUsComponent,
    LoginComponent,
    SignupComponent
  ],
  entryComponents: [AccountComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
    IgxTabsModule,
		IgxCardModule,
		IgxAvatarModule,
		IgxButtonModule,
		IgxRippleModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
