'use client'

import axios from "axios";
import React, { useEffect, useState } from "react";

export default function QuemSomos() {

  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get("https://api.github.com/users/KarMiguel")
      .then((response) => {
        setUser(response.data)
        setLoading(false)
      })
      .catch((error) => console.log(error))
      .finally()
  }, [])

console.log(user, "user")

  return (
    <main>
      {
        loading ? (
          <h1>Carregando Infos...</h1>
        ) : (
          <>
            <img src={user.avatar_url} /> 
            <div>

              <p>
                {user.name}
              </p>
            </div>
          </>
        )
      }

    </main>
  );
}
