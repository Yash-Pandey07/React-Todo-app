import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "./notes";


function App() {

    return <>
        <Header />
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