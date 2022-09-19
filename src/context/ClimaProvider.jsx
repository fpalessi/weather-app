import { useState, createContext } from "react";
import axios from "axios";
const ClimaContext = createContext();

const ClimaProvider = ({ children }) => {
  const [search, setSearch] = useState({
    city: "",
    country: "",
  });
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);
  const [noResult, setNoResult] = useState("");
  const searchData = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };
  const getWeather = async (datos) => {
    setLoading(true);
    setNoResult(false);
    try {
      const { city, country } = datos;
      const appId = import.meta.env.VITE_API_KEY;
      const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${appId}`;
      const { data } = await axios(url);
      const { lat, lon } = data[0];

      const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;
      // La siguiente linea nos va a dar error porque data ya existe
      // Lo que podemos hacer es aplicar destructuring y renombrar una variable
      // Vamos a extraer data pero la renombramos como clima para evitar colision de nombres
      // const { data} = await axios(urlClima);
      // Como requerimos el dato de la consulta previa (la latitud y la altitud)
      // antes de hacer esta otra, No podremos hacer las consultas de manera sincrona,
      // por lo que tenemos que bloquear la siguiente linea hasta que no termine la primea
      const { data: clima } = await axios(urlClima);
      console.log(clima);
      setResult(clima);
    } catch (error) {
      setNoResult("No hemos encontrado nada");
    } finally {
      setLoading(false);
    }
  };
  return (
    <ClimaContext.Provider
      value={{
        search,
        searchData,
        getWeather,
        result,
        loading,
        noResult,
      }}
    >
      {children}
    </ClimaContext.Provider>
  );
};
export { ClimaProvider };
export default ClimaContext;
