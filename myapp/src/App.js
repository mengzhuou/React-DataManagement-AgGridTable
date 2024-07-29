import './App.css';

import {AgGridReact} from 'ag-grid-react';

import {v4 as uuid} from 'uuid';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import {useState, useRef, useCallback} from 'react';

function App() {

  const gridRef = useRef();

  const [rowData] = useState([
    {id: uuid(), name: 'Nina', age: 22, degree: 'bachelor'},
    {id: uuid(), name: 'Jack', age: 28, degree: 'bachelor'},
    {id: uuid(), name: 'Jan', age: 42, degree: 'high school'}
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
    console.log('cellClicked', 'Row ID:', event.data.id);
    const rowNode = gridRef.current.api.getRowNode(event.data.id);
    console.log('Row Node:', rowNode);

  }, []);

  const buttonListener = useCallback( e => {
    gridRef.current.api.deselectAll();
  }, []);

  const getRowId = useCallback((params) => params.data.id, []);

  return (
    <div>
      <button onClick={buttonListener}>Push Me</button>
      <div 
        className="ag-theme-alpine" 
        style={{width: 800, height: 500}}
      >
        <AgGridReact 
          ref={gridRef}
          rowData={rowData} 
          columnDefs={columnDefs}
          animateRows={true} rowSelection='multiple'
          onCellClicked={cellClickedListener}
          defaultColDef={defaultColDef}
          getRowId={getRowId}
        />
      </div>
    </div>
  );
}

export default App;