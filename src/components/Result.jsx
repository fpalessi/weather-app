import useClima from "../hooks/useClima";
const Result = () => {
  const { result } = useClima();
  // Destructuring result
  const { name, main, wind, sys } = result;

  const kelvin = 273.15;
  return (
    <div className="container weather">
      <h2>
        {name}, {sys.country}
      </h2>
      <p>
        Temperatura actual: {parseInt(main.temp - kelvin)}
        <span>&#x2103;</span>{" "}
      </p>
      <p>
        Sensación térmica: {parseInt(main.feels_like - kelvin)}
        <span>&#x2103;</span>
      </p>
      <p>Viento: {wind.speed}m/seg </p>
      <p>Humedad: {main.humidity}% </p>

      <div className="temp_min_max">
        <p>T. Mínima: {parseInt(main.temp_min - kelvin)}&#x2103;</p>
        <p>T. Máxima: {parseInt(main.temp_max - kelvin)}&#x2103;</p>
      </div>
    </div>
  );
};

export default Result;
