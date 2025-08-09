import { db } from "@/lib/firebase";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ToastContainer, toast } from "react-toastify";

interface Note {
  id: string;
  content: string;
}

const NoteList = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    // Subscribe to the Firestore collection to get real-time updates
    const unsubscribe = onSnapshot(collection(db, "notes"), (snapshot) => {
      const notesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Note[];
      // Update the state with the fetched notes
      setNotes(notesData);
    });
    return () => {
      // Clean up the subscription on component unmount
      unsubscribe();
    };
  }, []);
  if (notes.length === 0) {
    return (
      <p className="text-center text-gray-400 mt-4">
        No notes yet. Start typing
      </p>
    );
  }
  return (
    <div
      className={`grid gap-4 mt-4 ${
        notes.length > 1 ? "grid-cols-2" : "grid-cols-1"
      }`}
    >
      {notes.map((note) => (
        <div
          className="p-5 border border-gray-200 rounded-xl shadow-md
           bg-blue-200 hover:bg-blue-300 transition-colors duration-200 justify-between flex items-center"
          key={note.id}
        >
          <p className="text-base text-gray-900">{note.content}</p>
          <div>
            <Button
              variant="destructive"
              onClick={async () => {
                // Delete the note from Firestore
                await deleteDoc(doc(db, "notes", note.id));
                toast.success("Note deleted successfully");
              }}
            >
              Delete Note
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
