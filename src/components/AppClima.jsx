import React from "react";
import Formulario from "./Formulario";
import Resultado from "./Resultado";
import Loading from "./Loading";
import useClima from "../hooks/useClima";
const AppClima = () => {
  const { result, loading, noResult } = useClima();

  // Si hay algo en resultado (que es un objeto)
  // entonces muestra el componente Resultado
  // {resultado && <Resultado />} -> Si condicion es true, ejecuta resultado/>
  // Pero resultado es un objeto entonces siempre va a mostrar algo
  // aunque este vacio mostrará "Resultado", usaremos pues resultado.name
  // con un optional chaining que lo que hará es prevenir que se muestre
  // el componente hasta que exista la propiedad de name
  return (
    <>
      <main className="two-cols">
        <Formulario />
        {loading ? <Loading /> : result?.name ? <Resultado /> : noResult}
      </main>
    </>
  );
};

export default AppClima;
