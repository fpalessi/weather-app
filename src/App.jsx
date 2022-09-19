import WeatherApp from "./components/WeatherApp";
import { ClimaProvider } from "./context/ClimaProvider";
function App() {
  return (
    <ClimaProvider>
      <header>
        <h1>What's the Weather like Today? 😎</h1>
      </header>
      <WeatherApp />
    </ClimaProvider>
  );
}

export default App;
