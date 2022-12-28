import NewNote, { links as newNoteLinks } from "~/components/NewNote";
import NoteList, { links as noteListLinks } from "~/components/NoteList";
import { getStoredNotes, storeNotes } from "~/data/notes";
import {json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export default function NotesPage() {
 const notes =  useLoaderData()
  return (
    <main>
      <NewNote />
      <NoteList notes={notes} />
    </main>
  );
}

//*GET Logic Backend
export async function loader() {
  const notes = await getStoredNotes()
  return notes   //* Method 1
  // return new Response(JSON.stringify(notes),{headers:{'Content-type':'application/json'}}); //*Method 2
  // return json(notes) //* Method 3 Remix Version
  
}

//*POST Logic Backend
export async function action(data: any) {
  const formData = await data.request.formData();
  console.log("formData:", formData);

  const noteData = {
    title: formData.get("title"),
    content: formData.get("content"),
    id: "",
  };
  console.log("noteData:", noteData);

  //* Add Validation

  const existingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();

  const updatedNotes = existingNotes.concat(noteData);

  await storeNotes(updatedNotes);

  return redirect("/notes");
}

//* IMPORTING Styles for Components
export function links() {
  return [...newNoteLinks(), ...noteListLinks()];
}


/*   //!Notes
 
  ! {Line 18} loader -> Reserved keyword , it will be called by remix whenever a GET Request reaches this route
  ! [so when this component will be rendered (NotesPage())]

  * {Line 22} json function takes the RAW Data and converts it to a JSON Response behind the scenes
  * also seting the header Content-Type behind the scenes
  
  * {Line 27} action -> Reserved keyword [Everything on this action function will run on the backend]
  * action function will be executed when {a non GET request will be called}, otherwise the other function
  *  will be called , in our care the NotesPage()

  ! {Line 51} links -> Reserved keyword

  * {Line 8} useLoaderData() is a special Remix hook that gives us access to the data Returned By 
  * Loader,  just plain data
  * REMIX WILL ASLO TAKE CARE FOR AUTOMATICALLY UPDATING THE DATA WHEN FETCHING

*/