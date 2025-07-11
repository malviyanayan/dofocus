import { useRef } from "react";

export default function NewNotesModal({ addNote }) {
  const title = useRef(null);
  const content = useRef(null);

  return (
    <>
      {/* Trigger Button (Don't change styling) */}
      <button
        className="btn btn-primary fw-semibold"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#newNoteModal"
      >
        <i className="fa-solid fa-plus me-2"></i>
        Create Note
      </button>

      {/* Bootstrap Modal */}
      <div
        className="modal fade"
        id="newNoteModal"
        tabIndex="-1"
        aria-labelledby="newNoteModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-between py-2 bg-dark-subtle">
              <h5 className="modal-title fw-bolder" id="newNoteModalLabel">
                What's on your mind?
              </h5>

              <div className="d-flex align-items-center gap-3">
                {/* <button className="btn fs-5 text-danger-emphasis fw-bolder">
                  <i className="fa-solid fa-trash-can"></i>
                </button> */}
                <button
                  className="btn fs-5 text-secondary text-success-emphasis fw-bolder"
                  onClick={() => {
                    const noteTitle = title.current.value.trim();
                    const noteContent = content.current.value.trim();

                    if (noteTitle && noteContent) {
                      addNote(noteTitle, noteContent);
                      title.current.value = "";
                      content.current.value = "";

                      // ✅ Simulate close button click to close modal safely
                      document
                        .querySelector("#newNoteModal .btn-close")
                        .click();
                    } else {
                      alert("Please fill in both fields.");
                    }
                  }}
                >
                  <i className="fa-solid fa-check"></i>
                </button>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>

            <div className="modal-body">
              <div className="text-center">
                <input
                  type="text"
                  className="d-inline-block h4 pb-2 mb-4 border border-0 border-bottom border-1 border-dark w-75 text-center"
                  placeholder="Enter Your Heading Here..."
                  style={{ outline: "none" }}
                  ref={title}
                />
              </div>
              <div>
                <textarea
                  rows={10}
                  className="border-0 w-100 px-4 no-scrollbar"
                  style={{ outline: "none" }}
                  placeholder="Type your note here..."
                  ref={content}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
