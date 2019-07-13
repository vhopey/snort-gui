import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RulesIcon from '@material-ui/icons/Notes';
import LogsIcon from '@material-ui/icons/FindInPage';
import LogoutIcon from '@material-ui/icons/Close';
import DocumentIcon from '@material-ui/icons/LibraryBooks';
import SettingsIcon from '@material-ui/icons/Settings';
import ConfigurationIcon from '@material-ui/icons/SettingsApplications';
import { toggleMenu, logout } from '../actions';


const categories = [
  {
    children: [
      { id: 'Правила', icon: <RulesIcon /> },
      { id: 'Журнал', icon: <LogsIcon />  },
      { id: 'Конфигурация', icon: <ConfigurationIcon /> },
    ],
  },
  {
    children: [
      { id: 'Настройки', icon: <SettingsIcon /> },
      { id: 'Документация', icon: <DocumentIcon /> },
    ],
  },
  {
    children: [
      { id: 'Выйти', icon: <LogoutIcon /> },
    ],
  },
];

const styles = theme => ({
  item: {
    paddingTop: 4,
    paddingBottom: 4,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  itemCategory: {
    backgroundColor: '#232f3e',
    boxShadow: '0 -1px 0 #404854 inset',
    paddingTop: 7,
    paddingBottom: 7,
  },
  firebase: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.common.white,
  },
  itemActionable: {
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
  },
  itemPrimary: {
    color: 'inherit',
    fontSize: theme.typography.fontSize,
    '&$textDense': {
      fontSize: theme.typography.fontSize,
    },
  },
  textDense: {},
  divider: {
    marginTop: theme.spacing(2),
  },
});

function Navigator(props) {
  const { classes, ...other } = props;
  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>
          Snort GUI
        </ListItem>
        {categories.map(({ id, children }) => (
          <Fragment key={id}>
            <ListItem />
            {children.map(({ id: childId, icon }) => (
              <ListItem
                onClick={() => childId === 'Выйти' ? props.logout() : props.toggleMenu(childId)}
                button
                dense
                key={childId}
                className={clsx(
                  classes.item,
                  classes.itemActionable,
                )}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                    textDense: classes.textDense,
                  }}
                >
                  {childId}
                </ListItemText>
              </ListItem>
            ))}
            <Divider className={classes.divider} />
          </Fragment>
        ))}
      </List>
    </Drawer>
  );
}

export default connect(
  null,
  {
    toggleMenu,
    logout,
  },
)(withStyles(styles)(Navigator));