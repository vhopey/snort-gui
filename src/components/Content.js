import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Rules from './rules';
import Logs from './Logs';
import Config from './Config';
import Settings from './settings';
import Documentation from './Documentation';


function Content(props) {
  const { activePage } = props;
  switch(activePage){
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
    default:
        return <Rules />
    }
}

Content.propTypes = {
  menuTypes: PropTypes.string.isRequired,
};

export default connect(
  state => ({activePage: state.control.activePage}),
  {},
)(Content);