
import {useEffect, useRef, useState} from "react";

import './App.css'
import {Data} from "./interfaces/interfaces";
import {List} from "./components/List";
import {Form} from "./components/Form";

const INITIAL_STATE: Partial<Data>[] = []

 interface AppState {
     subs: Partial<Data>[];
     newSubsNumber: number;
 }
function App() {

    const [subs, setSubs] = useState<AppState['subs']>([]);
    //const [newSubsNumber, setNewSubsNumber] = useState<AppState['newSubsNumber']>(3);

    const refDiv = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setSubs(INITIAL_STATE);
    }, []);

    const handleNewSub = (newSub: Data): void => {
        setSubs( subs => [...subs, newSub]);
    }


    return (
      <div className="card" ref={refDiv}>
          <h1>Subs midu</h1>
          <List subs={subs} />
          <Form onNewSub={handleNewSub}/>

      </div>
  )
}

export default App
