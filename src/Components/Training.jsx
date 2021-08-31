import React, {useEffect} from "react";
import screen from "./../img/screen.png";
import Mode from "./Mode";

const Training = () => {
    const modeClassName = ['easy-mode', 'hard-mode']
    const modeTitle = ['Check words mode', 'Write words mode']
    const modeImage = [screen, screen]
    const modeDescription = ['Easy mode', 'Hard mode']
    const path = ['check-mode', 'write-mode']
    useEffect(() => {
        return () => {
            // document.removeEventListener()
        }
    })
   return (
       <div className='mode-page'>
           <Mode modeClassName={modeClassName[0]}
                 modeTitle={modeTitle[0]}
                 modeImage={modeImage[0]}
                 modeDescription={modeDescription[0]}
                 path={path[0]}
           />
           <Mode modeClassName={modeClassName[1]}
                 modeTitle={modeTitle[1]}
                 modeImage={modeImage[1]}
                 modeDescription={modeDescription[1]}
                 path={path[1]}
           />
       </div>
   )
}

export default Training;