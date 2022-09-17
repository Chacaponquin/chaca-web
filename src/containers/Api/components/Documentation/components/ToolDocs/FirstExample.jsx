import React from "react";
import tweet from "../../../../assets/tweet.png";

const FirstExample = () => {
  return (
    <div className="doc-content">
      <h1>Primer Ejemplo</h1>
      <div>
        Para dejar más claro como se puede utilizar esta herramienta te
        presentamos un ejemplo sencillo: imagina que se esta creando un clon de
        la aplicación Twitter, este tipo de aplicaciones están compuestas por
        varios modelos que interactúan entre ellos
        <h3>(usuarios, mensajes, tweets, etc).</h3> Tomaremos como ejemplo el
        modelo de tweets, este está compuesto por varios documentos que
        contienen todos los campos especificados en el modelo. Como norma común
        estos suelen tener un
        <h3>
          identificador, imagen de usuario, nombre de usuario, mensaje, fecha de
          publicacion , cantidad de likes.
        </h3>
      </div>
      <img src={tweet} alt="" />
      <div>
        Teniendo en cuenta esto y siguiendo con el ejemplo si un desarrollador
        de software quisiera crear una REST API o crear datos de cierta cantidad
        de tweets que cumplan con el modelo descrito anteriormente tendría que
        crearlos manualmente o crear un algoritmo que lograse este objetivo,
        todo esto costando tiempo y recursos que son innecesarios, usando
        nuestra herramienta este proceso se puede realizar de forma sencilla
        como describimos a continuación.
      </div>

      <h4 className="mt-2">Pasos:</h4>
      <ul>
        <li>
          <span></span>
          <div>
            <p>
              Definimos el nombre de nuestro modelo cambiando el nombre por
              defecto a Tweets
            </p>
            <img src="" alt="" />
          </div>
        </li>

        <li>
          <span></span>
          <div>
            <p>
              Empezamos a definir cada uno de nuestros campos y que tipo de dato
              que van a ser.
            </p>
            <p>
              Empezando por el nombre de usuario tenemos varias opciones para
              este <h3>Name/FullName, Name/FirstName, Internet/UserName</h3>{" "}
              <h2>
                (para saber mas sobre estos tipos de datos y sus argumentos
                miralos en la sección de Fields).
              </h2>
            </p>
            <p>
              Asignamos el nombre que deseamos que tenga el campo, y
              seleccionamos el tipo de dato que se desea (puede ser uno de los
              sugeridos anteriormente o el que se desee).
            </p>
            <p>
              Siguiendo con la imagen del usuario al igual que en el caso
              anterior se escribe el nombre del campo y se selecciona el tipo de
              dato, tenemos en la sección Image varias opciones de tematicas de
              imágenes que podemos tener en ese campo, ejemplo{" "}
              <h3>Image/AvaterPhoto, Image/AvatarIcon.</h3>
            </p>
            <p>
              Para el caso del mensaje del tweet es conocido que este no debe
              superar los 140 caracteres, por tanto generar un texto con
              cantidad de palabras aleatorias puede en algunos casos no cumplir
              con esta regla; por eso puedes utilizar los argumentos de
              configuración, ejemplo para obtener un texto con menos de 140
              caracteres puedes seleccionar el tipo Lorem/Text y añadir como{" "}
              <h3>charMax</h3>{" "}
              <h2>
                (argumento que determina la cantidad máxima de caracteres que
                puede tener el texto)
              </h2>{" "}
              140 para obtener un texto que cumpla con esta regla.
            </p>
            <img src="" alt="" />

            <p>
              Para los likes de el tweet aparece un problema curioso que puede
              ser resuelto de varias formas, estos likes pueden ser un simple
              número que puedes generar seleccionando el tipo{" "}
              <h3>DataType/Number</h3> o puedes optimizar este proceso para
              obtener más información sobre los usuarios que han dado like a
              este tweet.{" "}
              <h2>
                Si quieres ver más sobre este y otras mejoras que puedes hacer a
                este ejemplo que te hemos modelado visita el otro ejemplo.
              </h2>
            </p>
          </div>
        </li>

        <li>
          <span></span>
          <div>
            <p>
              Al finalizar la declaración de los campos que tendrán todos los
              documentos del dataset es hora de exportarlos para tenerlos a mano
              para el proyecto que se vaya a utilizar. Se presiona el botón
              Export y se abren las opciones de configuración del archivo.
            </p>
            <img src="" alt="" />
            <p>
              <h2>
                Para este ejemplo se exportará el archivo en formato JSON con
                sus configuraciones iniciales. Si quiere saber sobre las
                opciones de configuración de cada formato vaya a la sección de
                Formats.
              </h2>
            </p>
            <p>
              Al terminar la exportación y el proceso de carga tendrá en su
              computador un archivo .json con un contenido similar al siguiente:
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FirstExample;
