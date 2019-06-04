import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';


function Config(props) {
  const { classes } = props;

  return (
    <Paper>
      conf
    </Paper>
  );
}

Config.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Config;