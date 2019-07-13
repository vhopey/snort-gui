import React, { useEffect } from 'react';
import { connect } from 'react-redux';
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
import { fetchRules, deleteRule } from '../../actions';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    float: 'right'
  }
}));

function Rules(props) {
  const { rules } = props;
  useEffect(() => {
    props.fetchRules();
  });
  const classes = useStyles();
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const [viewForm, toggleForm] = React.useState(false);
  const [viewEditForm, toggleEditForm] = React.useState(null);
  const [setDelete, toggleDelete] = React.useState(null);

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(+event.target.value);
  }

  const actionsButton = id => (
    <>
      <IconButton aria-label="Edit" onClick={() => toggleEditForm(id)}>
        <EditIcon fontSize="inherit" />
      </IconButton>
      <IconButton
        aria-label="Delete"
        onClick={() => {
          props.deleteRule(id);
          toggleDelete(!setDelete);
        }}
      >
        <DeleteIcon fontSize="inherit" />
      </IconButton>
    </>
  );

  return (
    <Paper>
      <Button
        onClick={() => toggleForm(!viewForm)}
        variant="contained"
        size="medium"
        color="primary"
        className={classes.margin}
      >
        <AddIcon />
        Добавить правило
      </Button>
      {viewForm && <Form closeForm={toggleForm} />}
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
            .map((rule, index) => (
              <>
                {viewEditForm === index ? (
                  <TableRow key={index}>
                    <TableCell colSpan={8}>
                      <Form
                        editValues={{ rule, index }}
                        toggleEdit={toggleEditForm}
                      />
                    </TableCell>
                  </TableRow>
                ) : (
                  <TableRow key={index}>
                    <TableCell>{rule.action}</TableCell>
                    <TableCell>{rule.proto}</TableCell>
                    <TableCell>{rule.source}</TableCell>
                    <TableCell>{rule.dir}</TableCell>
                    <TableCell>{rule.dest}</TableCell>
                    <TableCell>{rule.body}</TableCell>
                    <TableCell>{rule.description}</TableCell>
                    <TableCell>{actionsButton(index)}</TableCell>
                  </TableRow>
                )}
              </>
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
          'aria-label': 'Previous Page'
        }}
        nextIconButtonProps={{
          'aria-label': 'Next Page'
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default connect(
  state => ({ rules: state.rules.rules }),
  {
    deleteRule,
    fetchRules
  }
)(Rules);
