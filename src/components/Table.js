import React from 'react';
import MaterialTable from 'material-table';



export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'ProjectName', field: 'ProjectName' },
      { title: 'Description', field: 'Description' },
      { title: 'StartDate', field: 'StartDate', type: 'numeric' },
      { title: 'EndDate', field: 'EndDate', type: 'numeric' },
      {
        title: 'Status',
        field: 'Status',
        lookup: { 34: 'Active', 63: 'Completed' },
      },
    ],
    data: [
      { ProjectName: 'ReactProject', Description: 'REACT WITH NODE', StartDate: 1987,EndDate: 1987, Status: 63 },
      {
        ProjectName: 'PhProject',
        Description: 'PHP ON TOMCAT',
        StartDate: 2017,
        EndDate:2020,
        Status: 34,
      },
    ],
  });

  return (
    <MaterialTable
      title="Projects"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
  );
}
