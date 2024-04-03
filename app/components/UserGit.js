'use client'

import axios from "axios";
import React, { useEffect, useState } from "react";

export default function QuemSomos({ url }) {

  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setUser(response.data)
        setLoading(false)
      })
      .catch((error) => console.log(error))
      .finally()
  }, [])

  console.log(user, "user")

  return (
    <main className="mt-5">
      {
        loading ? (
          <h1>Carregando Infos...</h1>
        ) : (
          <>
            <div className="flex flex-col items-center justify-center">
              <img className="rounded-full" width={400} src={user.avatar_url} />
              <p className="mt-2">
                {user.name}
              </p>
            </div>
          </>
        )
      }

    </main>
  );
}
