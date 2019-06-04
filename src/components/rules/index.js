import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import TablePagination from '@material-ui/core/TablePagination';
import Form from './form';
import { rules } from '../../testData';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    float: "right",
  },
}));

function Rules(props) {
  const classes = useStyles();
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const [viewForm, toggleForm] = React.useState(false);

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(+event.target.value);
  }

  const actionsButton = (
    <>
      <IconButton aria-label="Edit">
        <EditIcon fontSize="inherit" />
      </IconButton>
      <IconButton aria-label="Delete" >
        <DeleteIcon fontSize="inherit" />
      </IconButton>
    </>
  )
  return (
    <Paper>
      <Button onClick={() => toggleForm(!viewForm)} variant="contained" size="medium" color="primary" className={classes.margin}>
        <AddIcon />
          Добавить правило
      </Button>
      {
        viewForm &&
          <Form />
      }
      <Table>
      <TableHead>
          <TableRow>
            <TableCell align="center">Действие</TableCell>
            <TableCell align="center">Протокол</TableCell>
            <TableCell align="center">Источник(IP адрес и порт)</TableCell>
            <TableCell align="center">Направление</TableCell>
            <TableCell align="center">Получатель</TableCell>
            <TableCell align="center">Дополнительно</TableCell>
            <TableCell align="center">Описание</TableCell>
            <TableCell align="center">Операции</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rules
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map(rule => (
            <TableRow key={rule.id}>
              <TableCell component="th" scope="row">
                {rule.action}
              </TableCell>
              <TableCell align="center">{rule.proto}</TableCell>
              <TableCell align="center">{rule.source}</TableCell>
              <TableCell align="center">{rule.dir}</TableCell>
              <TableCell align="center">{rule.dest}</TableCell>
              <TableCell align="center">{rule.body}</TableCell>
              <TableCell align="center">{rule.description}</TableCell>
              <TableCell align="center">{actionsButton}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 30, 50, 100]}
        component="div"
        count={rules.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'Previous Page',
        }}
        nextIconButtonProps={{
          'aria-label': 'Next Page',
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default Rules;