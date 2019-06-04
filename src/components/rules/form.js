import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function Form(props) {
  const classes = useStyles();
  const [initialValues, setValues] = React.useState({
    action: '',
    proto: '',
    source: [],
    dir: '',
    dest: [],
    body: '',
    description: '',
  });

  const handleChange = name => event => {
    setValues({ ...initialValues, [name]: event.target.value });
  };

  const actions = [
    {
      value: 'alert',
      label: 'alert',
    },
  ];
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="action"
        select
        SelectProps={{
          alert: 'alert',
          alertss: 'alertss',
        }}
        label="Действие"
        className={classes.textField}
        value={initialValues.action}
        onChange={handleChange('action')}
        margin="normal"
      >
      {actions.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
      </TextField>
      <TextField
        id="protocol"
        label="Протокол"
        className={classes.textField}
        value={initialValues.proto}
        onChange={handleChange('proto')}
        margin="normal"
      />
      <TextField
        id="source"
        label="Источник"
        className={classes.textField}
        value={initialValues.source}
        onChange={handleChange('source')}
        margin="normal"
      />
      <TextField
        id="dir"
        select
        label="Направление"
        className={classes.textField}
        value={initialValues.dir}
        onChange={handleChange('dir')}
        margin="normal"
      />
      <TextField
        id="dest"
        label="Получатель"
        className={classes.textField}
        value={initialValues.dest}
        onChange={handleChange('dest')}
        margin="normal"
      />
      <TextField
        id="body"
        label="Дополнительно"
        className={classes.textField}
        value={initialValues.body}
        onChange={handleChange('body')}
        margin="normal"
      />
      <TextField
        id="description"
        label="Описание"
        className={classes.textField}
        value={initialValues.description}
        onChange={handleChange('description')}
        margin="normal"
      />
    </form>
  );
}

Form.propTypes = {
};

export default Form;