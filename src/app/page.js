"use client";
import signOut from "@/firebase/auth/signout";

export default function Home() {
  return (
    <main className="flex flex-col w-full items-center">
      <button
        className="self-end border-4 rounded-full p-2 px-4 m-2 mb-10 text-sm"
        onClick={() => {
          signOut();
        }}
      >
        Sign Out
      </button>
      <div className="text-4xl">Home Page</div>
    </main>
  );
}
