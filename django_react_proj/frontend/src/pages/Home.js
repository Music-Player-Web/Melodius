import NavBar from "../components/NavBar/NavBar";
import { getUser } from '../utilities/users-service';
import React, { useState } from "react";
import ProgressCircle from "../components/ProgressCircle/ProgressCircle";
import PlayerBox from "../components/PlayerBox/PlayerBox";

export default function Home() {

  const [user, setUser] = useState(getUser());
  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <ProgressCircle
        percentage={100}
        isPlaying={true}
        size={300}
        color={"#333333"}
        image={"https://upload.wikimedia.org/wikipedia/en/d/d9/Imagine_Dragons_Mercury_album_cover_2022.webp"}
      />
     
    </>
  );

}

