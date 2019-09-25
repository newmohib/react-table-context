import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

function TableCmponent() {
  let button="button";
    const data = [{
        name: 'Roy Agasthyan',
        age: 26,
      },{
        name: 'Sam Thomason',
        age: 22
      },{
        name: 'Michael Jackson',
        age: 36
      },{
        name: 'Samuel Roy',
        age: 56
      },{
        name: 'Rima Soy',
        age: 28
      },{
        name: 'Suzi Eliamma',
        age: 28
      }];

    const columns = [{
        Header: 'Name',
        accessor: 'name'
      },{
        Header: 'Age',
        accessor: 'age'
      },{
        Header: 'More Option',
        Expander: _ => <a style={{textDecoration:"none"}} className='btn btn btn-primary btn-sm btn--angle' href='javascript:void(0)'>More
            Option</a>,
        headerClassName: "table__th",
        className: "table__td text-center",
        expander: true,
        width: 200
    }]

  return (
            <div style={{width: "60%",marginRight:"auto",marginLeft:"auto",}}>
              <ReactTable
                data={data}
                columns={columns}
                defaultPageSize = {3}
                pageSizeOptions = {[2,3, 6]}
                showPagination= {true}
                className='table table-bordered table-striped'
              />
          </div>   
  );
}

export default TableCmponent;
