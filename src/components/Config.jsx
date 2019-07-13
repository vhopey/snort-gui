import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: 500,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 500,
  },
  margin: {
    margin: theme.spacing(1),
  },
  title: {
    margin: 10,
  },
}));

function Config() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    conf: '',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <Paper>
      <div className={classes.root}>
      <span className={classes.title}> Здесь можно добавить необходимые параметры в файл конфигурации</span>
      <TextField
        id="conf"
        multiline
        placeholder={` var RULES_PATH rules/portvar \n MY_PORTS [22,80,1024:1050]ipvar \n MY_NET [192.168.1.0/24,10.1.1.0/24]`}
        className={classes.textField}
        value={values.conf}
        onChange={handleChange('conf')}
        margin="normal"
      />
      <Button variant="contained" size="medium" color="primary" onClick={() => {}} className={classes.margin}>
        Добавить
      </Button>
      <Button variant="contained" size="medium" color="primary" onClick={() => {}} className={classes.margin}>
        Загрузить файл конфигурации
      </Button>
      </div>
    </Paper>
  );
}

export default Config;