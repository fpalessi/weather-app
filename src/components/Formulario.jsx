import React from "react";
import { useState } from "react";
import useClima from "../hooks/useClima";
const Formulario = () => {
  const [alert, setAlert] = useState("");
  const { search, searchData, getWeather } = useClima();
  const { city, country } = search;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(search).includes("")) {
      //Si el valor de busqueda (Object.values(--->X<---) incluye string vacio)
      setAlert("Todos los campos son obligatorios");
      return;
    }
    setAlert("");
    getWeather(search);
  };
  return (
    <div className="container">
      {alert && <p className="alert">{alert}</p>}

      <form onSubmit={handleSubmit}>
        <div className="field">
          <p>Elige tu ciudad</p>
          <label htmlFor="city">Ciudad</label>
          <input
            type="text"
            id="city"
            name="city"
            onChange={searchData}
            value={city}
          />
        </div>
        <div className="field">
          <label htmlFor="country">Pais</label>
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

export default Formulario;
