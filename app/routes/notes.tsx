import NewNote, { links as newNoteLinks } from "~/components/NewNote";
import {getStoredNotes, storeNotes} from "~/data/notes";
import {redirect} from "@remix-run/node";

export default function NotesPage() {
  return (
    <main>
      <NewNote />
    </main>
  );
}


//! action -> Reserved keyword [Everything o    n this action function will run on the backend]
//! action function will be executed when {a non GET request will be called}, otherwise the other function 
//!  will be called , in our care the NotesPage()
export async function action(data:any) {
 const formData = await data.request.formData()
    console.log('formData:', formData)

 const noteData = {
     title: formData.get('title'),
     content: formData.get('content'),
     id: ''
 }
    console.log('noteData:', noteData)

    //* Add Validation

    const existingNotes = await getStoredNotes()
    noteData.id = new Date().toISOString()

    const updatedNotes = existingNotes.concat(noteData)

    await storeNotes(updatedNotes)

    return redirect('/notes')
}
  

//! links -> Reserved keyword
export function links() {
  return [...newNoteLinks()];
}
