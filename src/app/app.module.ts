import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NoteService } from './note.service';

import {AngularFireModule} from 'angularfire2'
import {AngularFireDatabaseModule}  from 'angularfire2/database'

export const firebaseConfig = {
  apiKey: "AIzaSyB_NHVdcNFLQgVPgVp6QvqnNOCLqdkS5KA",
  authDomain: "usjt-ccp3bnbua-notable-notes.firebaseapp.com",
  databaseURL: "https://usjt-ccp3bnbua-notable-notes.firebaseio.com",
  projectId: "usjt-ccp3bnbua-notable-notes",
  storageBucket: "usjt-ccp3bnbua-notable-notes.appspot.com",
  messagingSenderId: "626282068543",
  appId: "1:626282068543:web:43617f2ecfd84df72bd68a",
  measurementId: "G-5W07816X7D"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NoteService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
