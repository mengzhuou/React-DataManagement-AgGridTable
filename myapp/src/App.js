import './App.css';

import {AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';



function App() {

  const rowData =[
    {name: 'Nina', age: 22, degree: 'bachelor'},
    {name: 'Jack', age: 28, degree: 'bachelor'},
    {name: 'Jan', age: 42, degree: 'high school'}
  ];

  const columnDefs = [
    {field: 'name'},
    {field: 'age'},
    {field: 'degree'}
  ];


  return (
    <div className="ag-theme-alpine" style={{width: 500, height: 500}}>
      <AgGridReact 
        rowData={rowData} 
        columnDefs={columnDefs}
      />
    </div>
  );
}

export default App;