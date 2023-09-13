import NavBar from "../components/NavBar/NavBar";
import { getUser } from '../utilities/users-service';
import React, { useState } from "react";


export default function Home() {

  const [user, setUser] = useState(getUser());


  return (
    <>
      <NavBar user={user} setUser={setUser} />

    </>
  );

}

