import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatMorsePage } from './chatdb';

@NgModule({
  declarations: [
    ChatMorsePage,
  ],
  imports: [
    IonicPageModule.forChild(ChatMorsePage),
  ],
})
export class ChatdbPageModule {}
