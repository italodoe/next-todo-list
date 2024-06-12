import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col flex-nowrap items-center pt-11">
      <h1>   TODO LIST </h1>
      <form className="p-3 ">
        <input type="text" name="What!" className="border border-black p-1 mr-2 rounded"></input>
        <button>Add</button>
      </form>
    </main>
  );
}
