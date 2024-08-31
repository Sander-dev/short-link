"use client";

import UserGit from "../components/UserGit";

export default function QuemSomos() {
  return (
    <main className="flex lg:flex-row justify-center mt-16 space-x-10 max-sm:flex-col">
      <UserGit url="https://api.github.com/users/KarMiguel"></UserGit>
      <UserGit url="https://api.github.com/users/Sander-dev"></UserGit>
      <UserGit url="https://api.github.com/users/HericGarmatz"></UserGit>
      <UserGit url="https://api.github.com/users/ggriffinxd"></UserGit>
    </main>
  );
}
