import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "./notes";
import CreateArea from "./CreateArea";


function App() {

    return <>
        <Header />
        <CreateArea />
        <div className="notes-container">
            {notes.map((noteItems) => (
                <Note
                    key={noteItems.key}
                    title={noteItems.title}
                    content={noteItems.content}
                />
            ))}
        </div>
        <Footer />
    </>
}
export default App;