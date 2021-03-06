import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { HomePage } from '../pages/home/home';
import { CameraPage } from '../pages/camera/camera';
import { SearchPage } from '../pages/search/search';
import { SearchOptionPage } from '../pages/search-option/search-option';
import { Contact } from '../pages/contact/contact';
import { List } from '../pages/list/list';
import { HttpModule } from '@angular/http';
import { WebApiService } from '../providers/web-api-service';
import { ResultsPage } from '../pages/results/results';
import { NoResultsPage } from '../pages/no-results/no-results';
import { CartazeteGeneratorPage } from '../pages/cartazete-generator/cartazete-generator';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder} from '@ionic-native/native-geocoder';
import { LoginPage } from '../pages/login/login';
import { FileTransfer, FileTransferObject, FileUploadOptions} from '@ionic-native/file-transfer/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
//Declaração de páginas (módulos) do aplicativo
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchPage,
    Contact,
    List,
    ResultsPage,
    NoResultsPage,
    CartazeteGeneratorPage,
    CameraPage,
    SearchOptionPage,
	LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SearchPage,
    Contact,
    List,
    ResultsPage,
    NoResultsPage,
    CartazeteGeneratorPage,
    SearchOptionPage,
    CameraPage,
	LoginPage
    ],
  providers: [
    BackgroundMode,
    FileTransfer,
    StatusBar,
    Camera,
    Geolocation,
    NativeGeocoder,
    [WebApiService],
    SocialSharing,

    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})

export class AppModule { }
