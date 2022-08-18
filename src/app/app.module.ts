import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MessagePageComponent } from './pages/message-page/message-page.component';

const routes: Route[] = [
  { path: 'message/:id', component: MessagePageComponent },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent, MessagePageComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
