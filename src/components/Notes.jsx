import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Modal from "bootstrap/js/dist/modal";

import NewNotesModal from "./notes/NewNotesModel";
import MyNotes from "./notes/MyNotes";
import { useState, useRef } from "react";
let modal = null;

export default function Notes() {
  const [myNotes, setMyNotes] = useState([]);
  const editIdRef = useRef(null);

  const showDetails = (id) => {
    let note = null;
    for (let next of myNotes) {
      console.log(next.id, id);
      if (next.id === id) {
        note = next;
        break;
      }
    }

    document.getElementById("modal_title").value = note.title;
    // editHeadingRef.current.value = note.title;
    document.getElementById("modal_content").value = note.content;
    // editContentRef.current.value = note.content;
    editIdRef.current.value = note.id;

    modal = new Modal(document.getElementById("infoModal")); // ✅ use imported Modal
    modal.show();
  };

  function justForFun() {
    fetch("http://localhost:8080/dofocus/act.do", {
      method: "POST",
      headers: {
      "Content-Type": "application/x-www-form-urlencoded", // Use URL-encoded
      },
      credentials: "include",
      body: "key1=value1"
    })
      .then((response) => response.json())
      .then((data) => console.log("Backend response:", data))
      .catch((error) => console.error("Error:", error));
  }

  const addNote = (title, content) => {
    justForFun();
    setMyNotes([
      {
        id: Date.now(),
        title: title,
        content: content,
        time: new Date().toLocaleString(),
      },
      ...myNotes,
    ]);
  };

  const deleteNote = () => {
    let id = editIdRef.current.value;
    let nextNotes = [];

    for (let next of myNotes) {
      if (next.id == id) nextNotes.push(next);
    }

    setMyNotes([...nextNotes]);
    modal.hide();
  };

  const editNote = () => {
    let id = editIdRef.current.value;
    let nextNotes = [];
    let currentNote = null;

    for (let next of myNotes) {
      if (next.id == id) {
        currentNote = next;
      } else {
        nextNotes.push(next);
      }
    }

    currentNote.title = document.getElementById("modal_title").value;
    currentNote.content = document.getElementById("modal_content").value;
    editIdRef.current.value = "";
    setMyNotes([currentNote, ...nextNotes]);
    modal.hide();
  };

  const clickNote = (id) => {
    alert("Clicked note with id: " + id);
  };

  return (
    <>
      <div style={{ height: "85vh" }}>
        <div
          className="d-flex justify-content-between align-items-center w-100 px-4 bg-dark-subtle"
          style={{ height: "13%" }}
        >
          <div className="col-auto fs-4 fw-medium">
            <i className="fa-solid fa-note-sticky me-2"></i>
            Your Notes :-
          </div>

          <div className="col-auto">
            <NewNotesModal addNote={addNote} />
          </div>
        </div>

        {/* Notes boxes */}
        <MyNotes
          myNotes={myNotes}
          clickNote={clickNote}
          showDetails={showDetails}
        />
      </div>

      {
        /* Modal */
        // data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true"
      }
      <div
        className="modal fade"
        id="infoModal"
        tabIndex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-between py-2 bg-dark-subtle">
              <h5
                className="modal-title fw-bolder h-100 d-flex align-items-center gap-4"
                id="newNoteModalLabel"
              >
                <button
                  type="button"
                  className="btn-close fs-6"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <span>Edit This Note ....</span>
              </h5>

              <div className="d-flex align-items-center gap-3">
                <button
                  className="btn fs-5 text-danger-emphasis fw-bolder"
                  onClick={() => deleteNote()}
                >
                  <i className="fa-solid fa-trash-can"></i>
                </button>
                <button
                  className="btn fs-5 text-secondary text-success-emphasis fw-bolder"
                  onClick={() => editNote()}
                >
                  <i className="fa-solid fa-check"></i>
                </button>
                {/* <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button> */}
              </div>
            </div>
            <div className="modal-body">
              <input type="number" className="d-none" ref={editIdRef} />
              <div className="text-center">
                <input
                  type="text"
                  className="d-inline-block h4 pb-2 mb-4 border border-0 border-bottom border-1 border-dark w-75 text-center"
                  placeholder="Enter Your Heading Here..."
                  style={{ outline: "none" }}
                  id="modal_title"
                  // ref={editHeadingRef}
                />
              </div>
              <div>
                <textarea
                  rows={10}
                  className="border-0 w-100 px-4 no-scrollbar"
                  style={{ outline: "none" }}
                  placeholder="Type your note here..."
                  id="modal_content"
                  // ref={editContentRef}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
