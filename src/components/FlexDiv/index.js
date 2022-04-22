import { useParams, Redirect, Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import FlexSquare from "../FlexSquare";
import './flex-div.css'



const FlexDiv = () => {

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let gridWidth = Math.floor(windowWidth / 59);
let gridHeight = Math.floor(windowHeight / 59);

  console.log('Width: ', gridWidth, windowWidth);
  console.log('Height: ', gridHeight, windowHeight);

  const history = useHistory();

  const [numCols, setNumCols] = useState(
    localStorage.getItem("cols") || 1
  );
  const [numRows, setNumRows] = useState(
    localStorage.getItem("rows") || 1
  );
  const [elArray, setElArray] = useState([]);

  useEffect(() => {
    localStorage.setItem("cols", numCols);
    localStorage.setItem("rows", numRows);
  }, [numCols, numRows]);

  useEffect(() => {
    setElArray([]);
    for (let i = 0; i < (gridWidth * gridHeight); i++) {
      setElArray(prevArray => [...prevArray, i]);
    }
  }, [numCols, numRows]);


  return (
    <>
      {/* <div>
        <form>
          <div>
            <label htmlFor='rows'>Rows:</label>
            <input id='rows' type='number' onChange={e => setNumRows(e.target.value)} value={numRows} />
            <label htmlFor='cols'>Cols:</label>
            <input id='cols' type='number' onChange={e => setNumCols(e.target.value)} value={numCols} />
            <button onClick={() => history.push('/')}>Home</button>
            <button onClick={() => history.push('/squares')}>Submit</button>
          </div>
        </form>
      </div> */}
        <Route path='/squares'>
          <div className='mainDiv'>
            {elArray.map((el, index) =>
              <FlexSquare key={el} ident={el} width={gridWidth} height={gridHeight}/>
            )}
          </div>
        </Route>
    </>
  );
};

export default FlexDiv;
