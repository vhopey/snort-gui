import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { createAccount, deleteAccount, editAccount } from '../../actions';

const useStyles = makeStyles(theme => ({
  container: {
    width: 300,
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

function SettingsForm(props) {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    name: '',
    password: '',
  });

  const [viewForm, setViewForm] = React.useState(null);
  const [viewEditForm, setViewEditForm] = React.useState(null);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const form = (show, editing = null) => {
    if(!show){
      return null;
    };

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <span>Имя</span>
        <TextField
          id="name"
          required
          className={classes.textField}
          value={editing ? editing.values.name : values.name}
          onChange={handleChange('name')}
          margin="normal"
        />
        <span>Пароль</span>
        <TextField
          id="password"
          required
          className={classes.textField}
          value={editing ? editing.values.password : values.password}
          onChange={handleChange('password')}
          margin="normal"
        />
        <Button onClick={() => {editing ? props.editAccount(editing.id, values) : props.createAccount(values); setViewForm(null);}} variant="contained" size="medium" color="primary" className={classes.margin}>
            Сохранить
        </Button>
        <Button onClick={() => editing ? setViewEditForm(null) : setViewForm(null)} variant="contained" size="medium" color="primary" className={classes.margin}>
            Отмена
        </Button>
      </form>
    );
  }

  return (
    <div>
    <h3>Список аккаунтов</h3>
    {
      props.admins.map((item, index) =>
        <>
          <span> {item.name} </span>
          <IconButton aria-label="Edit" onClick={() => setViewEditForm(index)}>
            <EditIcon fontSize="inherit" />
          </IconButton>
          <IconButton aria-label="Delete" onClick={() => props.deleteAccount(index)}>
            <DeleteIcon fontSize="inherit" />
          </IconButton>
          {viewEditForm === index && form(viewEditForm, {index, values: item })}
          <p />
        </>
      )
    }
    <p />
    <Button size="medium" color="primary" onClick={() => setViewForm(true)}>
      Добавить аккаунт
    </Button>
    {form(viewForm)}
    </div>
  );
}

SettingsForm.propTypes = {
  editValues: PropTypes.object,
};

export default connect(
  (state) => ({admins: state.admins}),
  {
    createAccount,
    deleteAccount,
    editAccount,
  })((SettingsForm));