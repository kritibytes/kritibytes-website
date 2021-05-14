import { useTable } from 'react-table'
import { useTheme, createUseStyles } from 'react-jss';
import { lightTheme } from '../styles/theme';
import Button, { TButton } from './Button';

export interface TableProps {
  columns: any,
  data: any,
  viewMessageHandler: any,
}

const useStyles = createUseStyles({
  table: {
    "& td": {
      verticalAlign:"middle"
    }
  }
})

const Table: React.FC<TableProps> = ({ columns, data, viewMessageHandler }) => {
  const theme = useTheme()
  const classes = useStyles()
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })
  console.log(data)
  return (
    <table {...getTableProps()} className={"table table-bordered " + classes.table}>
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
              <td><TButton theme={theme} text="View" onClick={() => { viewMessageHandler(row.values.id) }} /></td>
            </tr>
          )
        })}
      </tbody>
    </table >
  );
}

export default Table;