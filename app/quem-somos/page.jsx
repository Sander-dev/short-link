'use client'

import UserGit from "../components/UserGit"

export default function QuemSomos() {

  return (
    <main className="flex justify-center mt-10 space-x-10">
        <UserGit url="https://api.github.com/users/KarMiguel"></UserGit>
        <UserGit url="https://api.github.com/users/Sander-dev" ></UserGit>
        <UserGit url="https://api.github.com/users/Aristeu13" ></UserGit>
    </main>
  );
}
