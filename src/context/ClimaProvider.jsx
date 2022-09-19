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

      const urlClime = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;
      // Can't use "const {data} = await axios(urlClime)" because data has been already declared
      // We require lat and lon from previous query, so we use await again so we ensure previous query is done
      const { data: clime } = await axios(urlClime);
      console.log(clime);
      setResult(clime);
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
