import './app-info.css';

const AppInfo = ({ countAllEmployees, countIncreaseEmployees }) => {
  return (
    <div className="app-info">
      <h1>Учёт сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {countAllEmployees}</h2>
      <h3>Премию получат: {countIncreaseEmployees}</h3>
    </div>
  );
};

export default AppInfo;