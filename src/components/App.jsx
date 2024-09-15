import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
//import notes from "./notes";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
    

    function addNote(newNote) {
      //console.log(newNote);
      setNotes((prevNotes) => {
        return [...prevNotes, newNote];
      });
    }

    function deleteNote(id){
      // console.log("Delete")
      setNotes(prevNotes => {
        return prevNotes.filter((noteItems, index) => {
          return index !== id;
        });
      });
    }


  return (
    <>
      <Header />
      <CreateArea onAdd={addNote} />
      <div className="notes-container">
        {notes.map((noteItems, index) => {
          return <Note
            key={index}
            id={index}
            title={noteItems.title}
            content={noteItems.content}
            onDelete={deleteNote}
          />
        })}
      </div>
      <Footer />
    </>
  );
}
export default App;
