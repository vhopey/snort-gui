import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
      <Button variant="contained" size="medium" color="primary">Очистить журнал за данный период</Button>
    </Typography>
  );
}

function Logs(props) {
  const { logs } = props;
  const [value, setValue] = React.useState(0);
  const [hour, day, week, all] = logs;

  function handleChange(event, newValue) {
    setValue(newValue);
  };

  function parseLog (data) {
    const parseData = data.split('\n');
    return parseData.map(item => <p>{item}</p>);
  };

  return (
    <Paper>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label={hour.name}/>
          <Tab label={day.name}/>
          <Tab label={week.name}/>
          <Tab label={all.name}/>
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer>{parseLog(hour.data)}</TabContainer>}
      {value === 1 && <TabContainer>{parseLog(day.data)}</TabContainer>}
      {value === 2 && <TabContainer>{parseLog(week.data)}</TabContainer>}
      {value === 3 && <TabContainer>{parseLog(all.data)}</TabContainer>}
    </Paper>
  );
}

Logs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(
  (state) => ({logs: state.logs}),
  {
  },
)(Logs);