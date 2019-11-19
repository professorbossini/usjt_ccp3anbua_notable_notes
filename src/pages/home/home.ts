import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoteService } from '../../app/note.service';
import { AngularFireDatabase } from 'angularfire2/database';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  

  notes;
  //injeção de dependência
  //é um tipo de inversão de controle
  constructor(public navCtrl: NavController,
               public noteService: NoteService) {
    //this.notes = this.noteService.notes;
  }

  ngOnInit (){
    this.notes = this.noteService.fetchNotes()
  }

  onCardClick (note){
    //console.log ("onCardClick", note)
    this.navCtrl.push('DetailPage', {noteParam: note})
  }

  onAddClick (){
    this.navCtrl.push ("DetailPage");
  }
}
