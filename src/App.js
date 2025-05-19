import "./styles.css";

const ProgressBar = ({ progres }) => {
  return (
    <div className="outer">
      <div
        className="inner"
        style={{ width: `${progres}%`, color: progres > 5 ? "black" : "red" }}
      >
        {progres}%
      </div>
    </div>
  );
};

const App = () => {
  const Bars = [0, 2, 10, 20, 30, 50, 70, 100];
  return (
    <div className="App">
      <h1>Progress Bar</h1>
      {Bars.map((x) => {
        return <ProgressBar key={x} progres={x} />;
      })}
    </div>
  );
};
export default App;
