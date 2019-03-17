import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatdbPage } from './chatdb';

@NgModule({
  declarations: [
    ChatdbPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatdbPage),
  ],
})
export class ChatdbPageModule {}
