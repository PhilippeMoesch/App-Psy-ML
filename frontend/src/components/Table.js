import React, { useState, Fragment } from "react";
import { useTable, useFilters, useExpanded, usePagination, useSortBy } from "react-table";
import "survey-core/defaultV2.css";
import "survey-core/survey.css";
import { Table, Row, Col, Button, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/main.css';


export default function TableContainer({ columns, data, renderRowSubComponent }) {
  const [filterInput, setFilterInput] = useState("");
  const handleFilterChange = e => {
    const value = e.target.value || undefined;
    setFilter("pid", value); 
    setFilterInput(value);
  };

  const {
    getTableProps, 
    getTableBodyProps, 
    headerGroups,
    page,
    prepareRow, 
    visibleColumns,
    setFilter,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable({
    columns,
    data,
    initialState: { pageIndex: 0, pageSize: 10 },
  },
    useFilters,
    useSortBy,
    useExpanded,
    usePagination);

  const generateSortingIndicator = column => {
    return column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""
  }

  const onChangeInSelect = event => {
    setPageSize(Number(event.target.value))
  }

  const onChangeInInput = event => {
    const page = event.target.value ? Number(event.target.value) - 1 : 0
    gotoPage(page)
  }

  /* 
    Render the UI for table
  */
  return (
    <div class="table-responsive" style={{ textAlign: "center"}} >
      <input
        className="sd-input"
        value={filterInput}
        onChange={handleFilterChange}
        placeholder={"Search PID"} />
      <Fragment>
        <Table  bordered hover bg="light" overflow="scroll" border="1px" {...getTableProps()}>
          <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  //<th {...column.getHeaderProps()}>{column.render("Header")}</th>
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    {generateSortingIndicator(column)}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <Fragment key={row.getRowProps().key}>
                  <tr class=" text-gray-700 text-basic bg-gray-50 dark:bg-gray-700 dark:text-gray-400" {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return <td  {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                    })}
                  </tr>
                  {row.isExpanded && (
                    <tr class="text-sm text-center">
                      <td colSpan={visibleColumns.length}>
                        {renderRowSubComponent(row)}
                      </td>
                    </tr>
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </Table>

        <Row style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
          <Col md={3}>
            <Button
              color='primary'
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              {'<<'}
            </Button>
            <Button
              color='primary'
              onClick={previousPage}
              disabled={!canPreviousPage}
            >
              {'<'}
            </Button>
          </Col>
          <Col md={2} style={{ marginTop: 7 }}>
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </Col>
          <Col md={2}>
            <Input
              type='number'
              min={1}
              style={{ width: 70 }}
              max={pageOptions.length}
              defaultValue={pageIndex + 1}
              onChange={onChangeInInput}
            />
          </Col>
          <Col md={2}>
            <Input
              type='select'
              value={pageSize}
              onChange={onChangeInSelect}
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </Input>
          </Col>
          <Col md={3}>
            <Button color='primary' onClick={nextPage} disabled={!canNextPage}>
              {'>'}
            </Button>
            <Button
              color='primary'
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {'>>'}
            </Button>
          </Col>
        </Row>
      </Fragment>
    </div>
  );
}