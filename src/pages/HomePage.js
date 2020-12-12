import "./pages.css";
import React, {useState, useEffect} from "react";

const eventListener = (setSelected) => (event) => {
    console.log(event.key)
    if(event.key === 'ArrowRight') {
        setSelected(selected => selected === 9 ? selected : selected + 1)
    }
    if(event.key === 'ArrowLeft'){
        setSelected(selected => selected === 1 ? selected : selected -1)
    }
    if(event.key === 'ArrowUp'){
        setSelected(selected => selected - 3 < 1 ? selected : selected - 3)
    }
    if(event.key === 'ArrowDown'){
        setSelected(selected => selected + 3 > 9 ? selected : selected + 3)
    }
}

export const HomePage = () => {

    const board = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const [selected, setSelected] = useState(1);

    useEffect(() => {
        window.addEventListener('keydown', eventListener(setSelected));
        return window.removeEventListener('keydown', eventListener(setSelected));
    },[])

    return (
        <div className="page-container">
            <div className="game-container">
                <div className="box">
                    {board.map((row, i) => (
                        <div key={i} className={selected === row ? "element-selected" : "element"}>
                            <span style={{display: 'none'}} key={i}>{row}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomePage;