import React from "react";
import { Link } from "react-router-dom";
import { appRoutes } from "../../../../../../shared/routes/app/appRoutes";

const Autorization = () => {
  return (
    <div className="doc-content">
      <h1>Autorización</h1>
      <p>
        Para acceder a más funcionalidades a la API debes
        <Link to={appRoutes.AUTH_ROUTES.LOGIN}>
          crear un usuario y solicitar to una clave de API
        </Link>
      </p>
      <p>
        Todas las solicitudes que hagas a la API para acceder a algunas de estas
        funcionalidades deben incluir esta clave en el encabezado
        <code>authorization</code>
      </p>

      <div></div>
    </div>
  );
};

export default Autorization;
