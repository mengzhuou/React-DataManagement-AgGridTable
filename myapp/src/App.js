import './App.css';

import {AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';


import {useState, useRef, useCallback} from 'react';

function App() {

  const gridRef = useRef();

  const [rowData] = useState([
    {name: 'Nina', age: 22, degree: 'bachelor'},
    {name: 'Jack', age: 28, degree: 'bachelor'},
    {name: 'Jan', age: 42, degree: 'high school'}
  ]);

  const [columnDefs] = useState([
    {field: 'name'},
    {field: 'age'},
    {field: 'degree'}
  ]);

  const defaultColDef = ()=> (
    {
      sortable: true, 
      filter: true
    }
  );

  const cellClickedListener = useCallback( event => {
    console.log('cellClicked', event);
  }, []);

  const buttonListener = useCallback( e => {
    gridRef.current.api.deselectAll();
  }, []);

  return (
    <div>
      <button onClick={buttonListener}>Push Me</button>
      <div className="ag-theme-alpine" style={{width: 500, height: 500}}>
        <AgGridReact 
          ref={gridRef}
          rowData={rowData} 
          columnDefs={columnDefs}
          animateRows={true} rowSelection='multiple'
          onCellClicked={cellClickedListener}
          defaultColDef={defaultColDef}
        />
      </div>
    </div>
  );
}

export default App;