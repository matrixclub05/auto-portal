import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ShopComponent} from "./pages/shop/shop.component";
import {RegistrationComponent} from "./registration/moduleView/registration.component";
import {AppRoutingModule} from "./app-routing.module";
import {RegistrationModule} from "./registration/registration.module";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {ContentComponent} from "./components/content/content.component";
import {ChatComponent} from "./chat/chat.component";
import {GarageComponent} from "./garage/moduleView/garage.component";
import {GarageModule} from "./garage/garage.module";
import {VehicleModelsComponent} from "./garage/vehicle-models/vehicle-models.component";
import {LeftNavComponent} from "./components/left-nav/left-nav.component";
import {MainComponent} from "./pages/main/component/main.component";
import {ProfileComponent} from "./pages/profile/component/profile.component";
import {CarStoreComponent} from "./pages/profile/car-store/car-store.component";
import {StartComponent} from "./pages/profile/start/start.component";
import {LoginServiceService} from "./global-services/login-service.service";
import {GarageCarsComponent} from "./garage/garage-cars/garage-cars.component";
import {GarageSingleCarComponent } from './garage/garage-single-car/garage-single-car.component';
import {BanerComponent } from './baner/baner.component';
import {ServiceBookComponent} from "./garage/service-book/service-book.component";
import {AddToGarageButtonComponent} from "./garage/add-to-garage-button/add-to-garage-button.component";
import {BrandListComponent } from './components/brand-list/brand-list.component';
import {CategoriesComponent } from './components/categories/categories.component';
import {CarsSelectorComponent} from "./garage/cars-selector/cars-selector.component";
import {NativeWindowTools} from "./global-services/NativeWindowTools";
import { StoreServicesComponent } from './pages/profile/store-services/store-services.component';
import { RolloverBtnComponent } from './components/rollover-btn/rollover-btn.component';
import {SignUpForServiceComponent} from "./garage/sign-up-for-service/sign-up-for-service.component";
import { AboutComponent } from './pages/about/about.component';
import { PersonalComponent } from './pages/profile/personal/personal.component';
import { ServiceComponent } from './pages/service/service.component';
import {CarsComponent} from "./pages/shop/cars/cars.component";
import {MachinesComponent} from "./pages/shop/machines/machines.component";
import {PartsComponent} from "./pages/shop/parts/parts.component";
import {GoodsComponent} from "./pages/shop/goods/goods.component";


@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    RegistrationComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    ChatComponent,
    GarageComponent,
    VehicleModelsComponent,
    LeftNavComponent,
    MainComponent,
    ProfileComponent,
    CarStoreComponent,
    StartComponent,
    GarageCarsComponent,
    GarageSingleCarComponent,
    BanerComponent,
    BrandListComponent,
    AddToGarageButtonComponent,
    CategoriesComponent,
    ServiceBookComponent,
    CarsSelectorComponent,
    CarsComponent,
    MachinesComponent,
    PartsComponent,
    GoodsComponent,
    StoreServicesComponent,
    RolloverBtnComponent,
    SignUpForServiceComponent,
    AboutComponent,
    PersonalComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RegistrationModule,
    GarageModule,
    NgbModule.forRoot()
  ],
  providers: [LoginServiceService, NativeWindowTools],
  bootstrap: [AppComponent]
})
export class AppModule { }
