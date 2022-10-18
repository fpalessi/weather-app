import WeatherApp from "./components/WeatherApp";
import { ClimaProvider } from "./context/ClimaProvider";
function App() {
  return (
    <ClimaProvider>
      <div className="box">
        <div className="wave -one'"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
      </div>
      <div>
        <header>
          <h1>Weather App 🌞</h1>
        </header>
        <WeatherApp />
      </div>
    </ClimaProvider>
  );
}

export default App;
