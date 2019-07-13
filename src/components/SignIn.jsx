/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { checkSignIn } from '../actions';


const useStyles = makeStyles(() => ({
  title: {
    fontSize: 24,
    backgroundColor: '#232f3e',
    padding: 10,
  },
  form: {
    display: 'flex',
    width: 300,
    flexWrap: 'wrap',
    margin: '50px 0 0 50px',
  },
  textField: {
    width: 300,
  },
  error : {
    color: 'red',
    margin: '5px 0 15px 0',
  },
  img: {
    float: 'right',
    margin: '-173px 100px 0 0',
  }
}));

function SignIn(props) {
  const classes = useStyles();
  const { isAuthorized } = props;
  const [values, setValues] = React.useState({
    name: '',
    password: '',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <>
      <AppBar position="sticky">
        <Typography variant="h6" className={classes.title}>
            Snort GUI
          </Typography>
      </AppBar>
      <form className={classes.form}>
        <Typography variant="h6">
          Имя:
        </Typography>
        <TextField
          id="name"
          required
          className={classes.textField}
          onChange={handleChange('name')}
          margin="normal"
        />
        <Typography variant="h6">
          Пароль:
        </Typography>
        <TextField
          id="password"
          type="password"
          required
          className={classes.textField}
          onChange={handleChange('password')}
          margin="normal"
        />
        {
          isAuthorized === false &&
          <Typography variant="h6" className={classes.error}>
            Неверное имя или пароль
          </Typography>
        }
        <Button onClick={() => props.checkSignIn(values.name, values.password)} variant="contained" size="large">
          Войти
        </Button>
        </form>
        <img src={require('../assets/snort.png')} alt="snort_pic" className={classes.img}/>
    </>
  );
}

SignIn.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
};

export default connect(
  (state) => ({isAuthorized: state.account.isAuthorized}),
  {
    checkSignIn,
  })((SignIn));