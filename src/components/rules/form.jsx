import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { addRule, editRule } from '../../actions';

const useStyles = makeStyles(theme => ({
  container: {
    width: 700,
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
  },
  selectField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 195,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

function Form(props) {
  const { editValues, closeForm, toggleEdit } = props;
  const classes = useStyles();

  const [values, setValues] = React.useState(editValues ? editValues.rule : {
    action: '',
    body: '',
    description: '',
    dest: '',
    dir: '',
    proto: '',
    source: '',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = () => {
    if(editValues) {
      toggleEdit(null);
      props.editRule(values, editValues.index);
    } else {
      closeForm(null);
      props.addRule(values);
    };
  }

  const handleClose = () => {
    if(editValues) {
      toggleEdit(null);
    } else {
      closeForm(null);
    };
  }

  const actions = [
    {
      value: 'alert',
      label: 'alert',
    },
    {
      value: 'log',
      label: 'log',
    },
    {
      value: 'pass',
      label: 'pass',
    },
    {
      value: 'drop',
      label: 'drop',
    },
    {
      value: 'reject',
      label: 'reject',
    },
    {
      value: 'sdrop',
      label: 'sdrop',
    },
  ];

  const protocols = [
    {
      value: 'TCP',
      label: 'TCP'
    },
    {
      value: 'UDP',
      label: 'UDP'
    },
    {
      value: 'ICMP',
      label: 'ICMP'
    },
    {
      value: 'IP',
      label: 'IP'
    }
  ];

  const directions = [
    {
      value: '->',
      label: '->',
    },
    {
      value: '<>',
      label: '<>',
    },
  ];

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="action"
        select
        required
        label="Действие"
        className={classes.selectField}
        value={values.action}
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
        placeholder="tcp"
        required
        select
        className={classes.selectField}
        value={values.proto}
        onChange={handleChange('proto')}
        margin="normal"
      >
      {protocols.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
      </TextField>
      <TextField
        id="dir"
        select
        required
        label="Направление"
        className={classes.selectField}
        value={values.dir}
        onChange={handleChange('dir')}
        margin="normal"
      >
      {directions.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
      </TextField>
      <TextField
        id="source"
        label="Источник"
        placeholder="10.80.1.1/24 80"
        helperText="IP-адрес с маской и порт или any"
        required
        className={classes.textField}
        value={values.source}
        onChange={handleChange('source')}
        margin="normal"
      />
      <TextField
        id="dest"
        required
        label="Получатель"
        placeholder="10.80.1.1 80"
        helperText="IP-адрес с маской и порт или any"
        className={classes.textField}
        value={values.dest}
        onChange={handleChange('dest')}
        margin="normal"
      />
      <TextField
        id="body"
        label="Дополнительно"
        multiline
        placeholder="msg: сообщение;"
        className={classes.textField}
        value={values.body}
        onChange={handleChange('body')}
        margin="normal"
      />
      <TextField
        id="description"
        label="Описание"
        multiline
        className={classes.textField}
        value={values.description}
        onChange={handleChange('description')}
        margin="normal"
      />
      <Button onClick={() => handleSubmit()} variant="contained" size="medium" color="primary" className={classes.margin}>
          Сохранить
      </Button>
      <Button onClick={() => handleClose()} variant="contained" size="medium" color="primary" className={classes.margin}>
          Отмена
      </Button>
    </form>
  );
}

Form.propTypes = {
  editValues: PropTypes.objectOf,
};

Form.defaultProps = {
  editValues: null,
}

export default connect(
  null,
  {
    addRule,
    editRule,
  })((Form));