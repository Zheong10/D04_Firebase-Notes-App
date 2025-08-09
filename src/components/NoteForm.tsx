import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { db } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";

// NoteForm component for creating and saving notes
// It includes an input field for the note and a button to save it
const NoteForm = () => {
  const [note, setNote] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle saving the note
  const handleSaveNote = async () => {
    // Validate the note input
    if (!note.trim()) {
      toast.error("Note cannot be empty");
    } else {
      // Set loading state and save the note to Firestore
      setIsLoading(true);
      await addDoc(collection(db, "notes"), {
        content: note,
        createdAt: serverTimestamp(),
      });
      toast.success("Note saved successfully");
      // Reset the note input and loading state
      setNote("");
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-2">
      <Input
        value={note}
        onChange={(e) => setNote(e.target.value)}
        type="text note"
        maxLength={50}
        placeholder="Type your note"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <p className=" text-sm text-gray-500">{note.length}/50 characters</p>

      <Button className="w-full" onClick={handleSaveNote}>
        {isLoading ? "Saving..." : "Save Note"}
      </Button>
    </div>
  );
};

export default NoteForm;
