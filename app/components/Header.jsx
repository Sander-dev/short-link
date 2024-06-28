"use client";

import { useEffect, useState } from "react";
import Button from "./Button";
import Image from "next/image";
import LogoSmallW from "@/public/LogoSmallW.png";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [accessToken, setAccessToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("access_token");
      setAccessToken(token);
    }
  }, []);

  return (
    <div className="flex bg-gradient-to-t from-blak to-brown items-center h-24 w-screen">
      {/* LOGO CAPI CLOUD HEADER */}
      <div className="flex ml-12 mb-3">
        <a onClick={() => router.push("/")} className="cursor-pointer">
          <Image
            width={290}
            height={100}
            alt="Logo da CapiCloud"
            src={LogoSmallW}
          ></Image>
        </a>
      </div>
      <div className="flex justify-end w-screen">
        <div className="flex mr-16 lg:mr-20">
          <div className="max-sm:hidden mr-10">
            <Button route="/quem-somos" text="Quem Somos"></Button>
          </div>
          <div>
            {pathname === "/login" || accessToken ? (
              ""
            ) : (
              <Button route="/login" text="Entrar" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
