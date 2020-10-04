import React, { useState, useEffect } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function App(){
    
    const [rowData, setRowData] = useState([]);     

    useEffect(() => {
     fetch('https://rmimgblob.blob.core.windows.net/interviewdata/SampleRockData.json')
     .then(result => result.json())
     .then(rowData => setRowData(rowData))
   }, []);

    return (
        <div className="ag-theme-alpine" style={ { height: 600, width: 600 } }>
            <AgGridReact defaultColDef= {{floatingFilter:true}}
                rowData={rowData}>
                <AgGridColumn field="city" ></AgGridColumn>
                <AgGridColumn field="date" ></AgGridColumn>
                <AgGridColumn field="value" ></AgGridColumn>
            </AgGridReact>
        </div>
    );
}

export default App;