import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { saveSettings } from '../../actions';

const useStyles = makeStyles(theme => ({
  container: {
    width: 400,
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400,
  },
  margin: {
    margin: theme.spacing(1),
  },
  titleSettings: {
    marginRight: 40,
  }
}));

function SettingsForm(props) {
  const classes = useStyles();

  const [values, setValues] = React.useState(props.settings);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const admins = [
    {
      value: 'admin',
      label: 'admin',
    },
    {
      value: 'Chack',
      label: 'Chack',
    },
    {
      value: 'Andrew',
      label: 'Андрей',
    },
    {
      value: 'All',
      label: 'Все',
    },
  ];

  const period = [
    {
      value: 'day',
      label: 'день',
    },
    {
      value: 'week',
      label: 'неделя',
    },
    {
      value: 'two_weeks',
      label: '2 недели',
    },
    {
      value: 'month',
      label: 'месяц',
    },
  ];

  const logs_period = [
    {
      value: 'week',
      label: 'неделя',
    },
    {
      value: 'two_weeks',
      label: '2 недели',
    },
    {
      value: 'month',
      label: 'месяц',
    },
    {
      value: 'two_month',
      label: '2 месяца',
    },
    {
      value: 'five_month',
      label: '3 месяца',
    },
    {
      value: 'year',
      label: 'год',
    },
  ];


  return (
    <form className={classes.container} noValidate autoComplete="off">
      <h3 className={classes.titleSettings}>Общие настройки </h3>
      <span>Частота проверки обновлений</span>
      <TextField
        id="period"
        select
        required
        className={classes.textField}
        value={values.checkUpdate}
        onChange={handleChange('checkUpdate')}
        margin="normal"
      >
      {period.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
      </TextField>
      <span>Хранение данных в журнале</span>
      <TextField
        id="logs_period"
        required
        select
        className={classes.textField}
        value={values.keepLogs}
        onChange={handleChange('keepLogs')}
        margin="normal"
      >
      {logs_period.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
      </TextField>
      <h3 className={classes.titleSettings}>Разграничение доступа</h3>
      <span>Управление правилами</span>
      <TextField
        id="rules"
        select
        className={classes.textField}
        value={values.rules}
        onChange={handleChange('rules')}
        margin="normal"
      >
      {admins.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
      </TextField>
      <span>Управление журналом</span>
      <TextField
        id="logs"
        required
        select
        className={classes.textField}
        value={values.logs}
        onChange={handleChange('logs')}
        margin="normal"
      >
      {admins.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
      </TextField>
      <span>Управление конфигурацией</span>
      <TextField
        id="config"
        required
        select
        className={classes.textField}
        value={values.config}
        onChange={handleChange('config')}
        margin="normal"
      >
      {admins.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
      </TextField>
      <span>Управление настройками Snort GUI</span>
      <TextField
        id="guiSettings"
        required
        select
        className={classes.textField}
        value={values.guiSettings}
        onChange={handleChange('guiSettings')}
        margin="normal"
      >
      {admins.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
      </TextField>
      <Button onClick={() => props.saveSettings(values)} variant="contained" size="medium" color="primary" className={classes.margin}>
          Сохранить
      </Button>
    </form>
  );
}

SettingsForm.propTypes = {
  editValues: PropTypes.object,
};

export default connect(
  (state) => ({settings: state.settings.settings}),
  {
    saveSettings,
  })((SettingsForm));