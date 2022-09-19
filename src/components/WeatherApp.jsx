import Form from "./Form";
import Result from "./Result";
import Loading from "./Loading";
import useClima from "../hooks/useClima";
const WeatherApp = () => {
  const { result, loading, noResult } = useClima();

  // optional chaining prevents component Result to be shown until property name exists
  return (
    <>
      <main className="two-cols">
        <Form />
        {loading ? <Loading /> : result?.name ? <Result /> : noResult}
      </main>
    </>
  );
};

export default WeatherApp;
