import { AngularFireDatabase } from "angularfire2/database";
import { Injectable } from "@angular/core";
import { ThrowStmt } from "@angular/compiler";


@Injectable()
export  class NoteService{
  
  
  constructor (public db: AngularFireDatabase){
    
  }
  
  notes = [
        {
          id: 1,
          content: "Estudar em breve",
          date: "2019-01-01",
          title: `Firebase`
        },
        {
          id: 2,
          date: '2019-11-04',
          content: 'Para entender Ionic',
          title: "Angular"
        },
        {
          id: 3,
          date: '2019-01-04',
          content: "Sistema de controle de versão",
          title: "GIT"
        }
      ]

      removeNote (note){
        /*let i = this.notes.indexOf(note);
        if (i >= 0)
            this.notes.splice(i, 1); */
        this.db.object("/notes/" + note.$key).remove();
      }
      addNote (note){
          //this.notes.push(note);
          this.db.list("/notes/").push({
            title: note.title,
            content: note.content,
            date: note.date
          });
      }

      fetchNotes () {
        return this.db.list ("/notes");
      }

      editNote (note){
        this.db.object ("/notes/" + note.$key).update({
          title: note.title,
          content: note.content,
          date: note.date
        });
      }
}