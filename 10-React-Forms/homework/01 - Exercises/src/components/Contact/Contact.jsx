import React from 'react'
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(inputs){
  const errors = {};

  if (!inputs.name) errors.name = "Se requiere un nombre";
  if (!regexEmail.test(inputs.email)) errors.email = "Debe ser un correo electrónico";
  if (!inputs.message) errors.message = "Se requiere un mensaje";

  return errors;

}

export default function Contact () {
  
  const [inputs, setInputs] = React.useState({
    name: '',
    email: "",
    message: "",
 });

  const [errors,setErrors] = React.useState({
    name: '',
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setInputs({...inputs, [event.target.name]: event.target.value });

    setErrors(
      validate({...inputs, [event.target.name]: event.target.value})
    );
  }

  const handleSumbit = (event) => {
    event.preventDefault();
     if(Object.values(errors).length === 0){
      alert("Datos completos");
      setErrors(errors);
      setInputs(inputs);
     } else{
      alert("Debe llenar todos los campos");
     }
  };

  return (
  <div>
    <form onSubmit={handleSumbit}>
      <label htmlFor='name'>Nombre:</label>
      <input 
      className={errors.name && 'warning'}
      name="name" 
      placeholder='Escribe tu nombre...' 
      type="text" 
      value={inputs.name}
      onChange={handleChange}
      />
      {errors.name && <p className="danger">{errors.name}</p>}

      <label htmlFor='email'>Correo Electrónico:</label>
      <input 
      className={errors.email && 'warning'}
      name="email" 
      placeholder='Escribe tu email...' 
      type="text" 
      value={inputs.email}
      onChange={handleChange}
      />
      {errors.email && <p className="danger">{errors.email}</p>}


      <label htmlFor='message'>Mensaje:</label>
      <textarea 
      className={errors.message && 'warning'}
      name="message" 
      placeholder='Escribe tu mensaje...' 
      type="text"
      value={inputs.message}
      onChange={handleChange}
      />
      {errors.message && <p className="danger">{errors.message}</p>}


      <button type="submit">Enviar</button>
    </form>
  </div>
  )
}
