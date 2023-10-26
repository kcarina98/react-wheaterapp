import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../API";

const Wheater = () => {
  const [wheater, setWheater] = useState();

  const cityName = useParams();

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName.city}&appid=${API}&units=metric&lang=de`
    )
      .then((res) => res.json())
      .then((data) => setWheater(data))
      .catch((err) => console.log("Fetch funktioniert nicht"));
  }, [cityName]);

  return (
    <section>
      {wheater ? (
        <div className="wheater-details">
          <h1>{wheater.name}</h1>
          <img
            src={`https://openweathermap.org/img/wn/${wheater.weather[0].icon}@2x.png`}
            alt="Wetter Icon"
          />
          <p>{wheater.weather[0].description}</p>
          <p>
            Aktuell beträgt die Temperatur {wheater.main.temp.toFixed(0)} °C
          </p>
          <p>Windgeschwindigkeit: {wheater.wind.speed} m/h</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default Wheater;
