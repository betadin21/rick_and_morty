import { Route, Routes } from "react-router-dom";
import Homepage from "../../pages/Homepage";
import Characters from "../../pages/Characters";
import Episodes from "../../pages/Episodes";
import Locations from "../../pages/Locations";
import NotFound from "../../pages/NotFound";
import {Layout} from "../Layout";
import { useState,useEffect } from "react";
import {req} from "../../methods"
import { CharactersNext } from "../../pages/CharactersNext";


const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    req("https://rickandmortyapi.com/api").then((info) => {
      setData(info);
    });
  }, []);
  if(data===null){
    return
  }
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage  url={data.characters}/>} />
          <Route path="characters" element={<Characters url={data.characters} />} />
          <Route path="characters/:id" element={<CharactersNext url={data.characters} />} />
          <Route path="locations" element={<Locations url={data.locations}/>} />
          <Route path="episodes" element={<Episodes  url ={data.episodes}/>} />
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
    </>
  );
};

export { App };
