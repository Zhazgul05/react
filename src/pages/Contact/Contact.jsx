import React from "react";
import { useForm } from "react-hook-form";
import "./Contact.scss";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import marker from "../../images/marker.png";

const Contact = () => {
  const position = [42.879336947089247, 74.61598294113415];

  const icon = L.icon({
    iconUrl: marker,
    iconAnchor: position,
    iconSize: [55, 55],
  });

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <section className="contact">
      <h1>Our Contacts</h1>
      <div className="container contact__container">
        <div className="contact__col">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              Your Name
              <input
                type="text"
                placeholder="John Doe"
                {...register("name", {
                  required: "Имя должн быть заполнено!",
                  minLength: {
                    value: 3,
                    message: "Минимум 3 символа",
                  },
                })}
              />
            </label>

            <div className="contact__error">
              {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
            </div>

            <label>
              Your Email
              <input
                placeholder="john@company.com"
                {...register("email", {
                  required: "Email должно быть заполено!",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                    message: "Введите корректную почту!",
                  },
                })}
              />
            </label>

            <div className="contact__error">
              {errors?.email && <p>{errors?.email.message || "Error!"}</p>}
            </div>

            <label>
              Your Message
              <textarea
                {...register("msg", {
                  maxLength: 10,
                  message: "Максимум 10 символов",
                })}
              ></textarea>
            </label>

            <div className="contact__error">
              {errors?.msg && <p>{errors?.msg?.message || "Error!"}</p>}
            </div>

            <input type="submit" value="send" disabled={!isValid} />
          </form>
        </div>

        <div className="conact__col">
          MAP
          <MapContainer center={position} zoom={25}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position} icon={icon}>
              <Popup>Площадь победы</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default Contact;
