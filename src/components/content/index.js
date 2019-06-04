import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Rules from './rules';
import Logs from './logs';
import Config from './config';
import Settings from './settings';
import Documentation from './documentation';
import Feedback from './feedback';


const styles = theme => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
});

function Content(props) {
  const { classes, activePage } = props;
  const menuType = 'Журнал';// use props
  switch(menuType){
    case "Правила":
      return <Rules />
    case "Журнал":
      return <Logs />
    case "Конфигурация":
      return <Config />
    case "Настройки":
      return <Settings />
    case "Документация":
      return <Documentation />
    case "Обратная связь":
      return <Feedback />
    default:
        return <Rules />
    }
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
  menuTypes: PropTypes.string.isRequired,
};

export default withStyles(styles)(Content);