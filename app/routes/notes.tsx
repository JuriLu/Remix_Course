import NewNote, { links as newNoteLinks } from "~/components/NewNote";

export default function NotesPage() {
  return (
    <main>
      <NewNote />
    </main>
  );
}


//! action -> Reserved keyword [Everything on this action function will run on the backend]
//! action function will be executed when {a non GET request will be called}, otherwise the other function 
//!  will be called , in our care the NotesPage()
export function action() {
  
}
  

//! links -> Reserved keyword
export function links() {
  return [...newNoteLinks()];
}
