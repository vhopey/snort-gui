import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';


function Feedback(props) {
  const { classes } = props;

  return (
    <Paper>
      Feedback
    </Paper>
  );
}

Feedback.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Feedback;