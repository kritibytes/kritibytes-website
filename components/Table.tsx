import { useTable } from 'react-table'
import { useTheme } from 'react-jss';
import { lightTheme } from '../styles/theme';
import Button, { TButton } from './Button';

export interface TableProps {
  columns: any,
  data: any,
  updateBtnHandler: any,
  deleteBtnHandler: any,
}

const Table: React.FC<TableProps> = ({ columns, data, updateBtnHandler, deleteBtnHandler }) => {
  const theme = useTheme()
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <table {...getTableProps()} className={"table"}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th scope="col"
                {...column.getHeaderProps()}
              >
                {column.render('Header')}
              </th>
            ))}
            <th>Controls</th>
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
              <td><TButton theme={theme} text="Update" onClick={() => { updateBtnHandler(row.values.id) }} /> <Button onClick={() => { deleteBtnHandler(row.values.id) }} text="Delete" color="#e12727" textColor="white" /></td>
            </tr>
          )
        })}
      </tbody>
    </table >
  );
}

export default Table;