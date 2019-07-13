import React from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SettingsForm from './settingsForm';
import AccountForm from './accountForm'


function TabContainer({children}) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

function CheckUpdate() {
  const [update, checkUpdate] = React.useState(null);
  return (
    <>
    <Button variant="contained" size="medium" color="primary" onClick={() => checkUpdate(false)}>
        Проверить наличие обновлений
    </Button>
    {
      update === false &&
      <Typography component="h6" style={{ padding: 8 * 3 }}>
        У вас установлена последняя версия Snort
      </Typography>
    }
    </>
  );
}
function Settings() {
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  };
  return (
    <Paper>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Общие настройки"/>
          <Tab label="Управление аккаунтами"/>
          <Tab label="Проверка обновлений"/>
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer><SettingsForm /></TabContainer>}
      {value === 1 && <TabContainer><AccountForm/></TabContainer>}
      {value === 2 && <TabContainer><CheckUpdate/></TabContainer>}
    </Paper>
  );
}

export default Settings;