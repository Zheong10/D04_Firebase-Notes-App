import NoteForm from "@/components/NoteForm";
import NoteList from "@/components/NoteList";
const home = () => {
  return (
    <div className=" px-4 py-8 bg-gray-300 max-w-screen-sm  rounded-lg shadow-lg w-full border border-gray-400">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          NoteNest📓
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <NoteForm />
        </div>
        <NoteList />
      </div>
    </div>
  );
};

export default home;
