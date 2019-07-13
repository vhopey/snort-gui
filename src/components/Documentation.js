import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';



function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
};

function ControlSnort() {
  return (
    <Typography component="div">
      <b> Правила </b>
      <p /> 
      При создании правило добавляется в конец таблицы.
      При редактировании форма отображается на месте строки выбранного для редактирования правила.
      Действия, протоколы и направление взяты из документации к Snort 2.9 и являются актуальными.
      Обязательные поля отмечены звёздочкой.
      <p /> 
      <b> Журнал </b>
      <p /> 
      В журнале отображаются логи за выбранный период.
      Если вы хотите изменить длительность хранения логов, вам необходимо перейти в Настройки.
      Внимание! При нажатии кнопки "Очистить логи за данный период" данные не восстановить.
      <p /> 
      <b> Конфигурация </b>
      <p /> 
      Для добавления параметров в файл конфигурации, напишите в поле данные и нажмите кнопку "Добавить".
      Чтобы удостовериться в правильности введённых данных рекомендуется скачивать файл конфигурации и проверять
      в соответствии с документацией.
    </Typography>
  );
};

function Settings() {
  return (
    <Typography component="div">
      С помощью общих настроек возможно настроить проверку обновлений и длительность хранения логов.
      Рекомендуется изначально настраивать разграничение доступа, чтобы избежать ошибок и потери данных.
      В будущем планируется добавить более расширенное разграничение доступа.
      Проверить обновления вручную можно также из страницы настроек в разделе "Проверка обновлений".
    </Typography>
  );
};


function Documentation(props) {
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  };

  return (
    <Paper>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Управление Snort"/>
          <Tab label="Настройки"/>
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer><ControlSnort/></TabContainer>}
      {value === 1 && <TabContainer><Settings/></TabContainer>}
    </Paper>
  );
}

Documentation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Documentation;
