import React from "react";
import Botones from "./Botones";

const studentName = "Agustin Camuzzi";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá
  return(
    <div>
      <h1>Hola! Este es mi primer proyecto con react.</h1>
      <h3>{studentName}</h3>
      {techSkills.map(student =>
        <ul>
          <li>{student}</li>
        </ul>
        )}
      <Botones alerts={alerts}/>
    </div>
  );
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
