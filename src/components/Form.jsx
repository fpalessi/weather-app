import { useState } from "react";
import useClima from "../hooks/useClima";
import "animate.css";

const Form = () => {
  const [alert, setAlert] = useState("");
  const { search, searchData, getWeather } = useClima();
  const { city, country } = search;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(search).includes("")) {
      setAlert("Todos los campos son obligatorios");
      return;
    }
    setAlert("");
    getWeather(search);
  };
  return (
    <div className="container animate__animated animate__bounceInLeft">
      {alert && (
        <p className="alert animate__animated animate__fadeIn">{alert}</p>
      )}

      <form onSubmit={handleSubmit}>
        <div className="field">
          <p style={{ fontWeight: "600" }}>Elige tu ciudad</p>
          <label htmlFor="city" style={{ fontWeight: "600" }}>
            Ciudad
          </label>
          <input
            type="text"
            id="city"
            name="city"
            onChange={searchData}
            value={city}
          />
        </div>
        <div className="field">
          <label htmlFor="country" style={{ fontWeight: "600" }}>
            País
          </label>
          <select
            id="country"
            name="country"
            onChange={searchData}
            value={country}
          >
            <option value="">Selecciona un país</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="PE">Perú</option>
          </select>
        </div>

        <input type="submit" value="Consultar" />
      </form>
    </div>
  );
};

export default Form;
