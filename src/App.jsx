import WeatherApp from "./components/WeatherApp";
import { ClimaProvider } from "./context/ClimaProvider";
function App() {
  return (
    <ClimaProvider>
      <header>
        <h1>Weather App 🌞</h1>
      </header>
      <WeatherApp />
    </ClimaProvider>
  );
}

export default App;
