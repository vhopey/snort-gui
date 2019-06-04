import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';


function Rules(props) {
  const { classes } = props;

  return (
    <Paper>
      правила
    </Paper>
  );
}

Rules.propTypes = {
  classes: PropTypes.object,
};

export default Rules;