import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { logs } from '../testData'


function Logs(props) {
  const { classes } = props;

  return (
    <Paper>
      logs
    </Paper>
  );
}

Logs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Logs;