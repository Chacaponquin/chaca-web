import { Content, FormatsList } from "@containers/Docs/shared/components"
import { DATASET_STORE, SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import {
  Danger,
  H2,
  H3,
  Img,
  Info,
  Link,
  List,
  ListItem,
  MiniCode,
  P,
  Strong,
  Tip,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import {
  DatasetDefinition,
  DatasetParams,
  EcommerceDatasetDefinition,
  EcommerceExample,
  EcommerceGenerate,
  ExportDefinition,
  ExportParams,
  GenerateDefinition,
  LikeSchemaDefinition,
  NewEcommerceDataset,
  ProductSchemaDefinition,
  UserSchemaDefinition,
} from "./components"
import { REF } from "@modules/docs/domain/core/sections/field-types"
import { DOCS_IMAGE } from "@modules/docs/domain/constants/image"

export default function Dataset() {
  return (
    <Content>
      <P>
        Los <MiniCode>Dataset</MiniCode> contituyen un conjunto de n cantidad de{" "}
        <Link to={SCHEMA.redirect}>schemas</Link> que pueden o no estar relacionados entre sí. Estos
        son similares al modelado de una base de datos de cualquier software en desarrollo.
      </P>

      <H2>Definir un Dataset</H2>

      <P>
        Para definir un <MiniCode>Dataset</MiniCode> se deben definir en primera instancia los{" "}
        <Link to={SCHEMA.redirect}>schemas</Link> que lo componen. Para esto se utiliza el método{" "}
        <MiniCode>dataset</MiniCode>, el cual recibe un arreglo con la configuración de los{" "}
        <Link to={SCHEMA.redirect}>schemas</Link> que lo componen.
      </P>

      <DatasetDefinition />

      <DatasetParams />

      <P>
        Por ejemplo, para el contexto de un E-commerce existen dos entidades comunes en el dominio:
        la entidad <MiniCode>User</MiniCode> y la entidad <MiniCode>Product</MiniCode>. Para simular
        el modelado de un <MiniCode>Dataset</MiniCode> con estas entidades primero empezaremos
        definiendo los <Link to={SCHEMA.redirect}>schemas</Link> de ambas entidades.
      </P>

      <UserSchemaDefinition />

      <ProductSchemaDefinition />

      <Tip title="Relación entre schemas">
        <P>
          Nótese que la relación entre ambos <Link to={SCHEMA.redirect}>schemas</Link> está definida
          a través del <Link to={REF.redirect}>campo referencia</Link> <MiniCode>userId</MiniCode>{" "}
          en el schema <MiniCode>Product</MiniCode>.
        </P>
      </Tip>

      <P>
        Una vez definidos los <Link to={SCHEMA.redirect}>schemas</Link> solo resta definir el{" "}
        <MiniCode>Dataset</MiniCode>.
      </P>

      <EcommerceDatasetDefinition />

      <H2>Generar datos</H2>

      <P>
        Para generar los datos de un <MiniCode>Dataset</MiniCode> definido se debe utilizar el
        método <MiniCode>generate</MiniCode>. Este devuelve un objeto en el cual cada propiedad es
        el nombre del <Link to={SCHEMA.redirect}>schema</Link> junto con sus datos.
      </P>

      <GenerateDefinition />

      <P>
        Al generar el <MiniCode>Dataset</MiniCode> definido en la sección anterior se obtendría el
        siguiente resultado.
      </P>

      <EcommerceGenerate />

      <H2>Exportar datos generados</H2>

      <P>
        Para generar y exportar los datos de un <MiniCode>Dataset</MiniCode> se utiliza el método{" "}
        <MiniCode>export</MiniCode>. Esto genera los archivos necesarios para guardar los datos y
        retorna la ubicación de los archivos. Se puede exportar archivos en cualquiera de los
        siguientes formatos:
      </P>

      <FormatsList />

      <ExportDefinition />

      <ExportParams />

      <Info>
        <P>
          Cada formato de exportación tiene diferentes parámetros de configuración. Revisa la
          documentación de cada uno para verlos.
        </P>
      </Info>

      <P>
        Continuando con el ejemplo anterior el siguiente código genera y exporta los datos en un
        archivo <MiniCode>ecommerce.json</MiniCode> dentro de la carpeta <MiniCode>data</MiniCode>.
      </P>

      <EcommerceExample />

      <H2>¿Cómo se generan los datos?</H2>

      <P>
        En ciertas ocasiones la generación de datos puede provocar errores debido de la jerarquía a
        la hora de crear los datos en un <MiniCode>Dataset</MiniCode>. Por tanto, analizaremos a
        continuación la secuencia de pasos para generar estos datos.
      </P>

      <H3>Secuencia de ejecución</H3>

      <P>
        Cuando se generan los datos de un <MiniCode>Dataset</MiniCode> se comienzan a crear los{" "}
        <Link to={SCHEMA.redirect}>schemas</Link> en orden en el cual aparecen dentro del arreglo.
        La generación de un <Link to={SCHEMA.redirect}>schema</Link> (si alguno de los campos tiene
        tiene relación con otro dentro del mismo <MiniCode>Dataset</MiniCode> a través de un{" "}
        <Link to={REF.redirect}>campo ref</Link> o usando la{" "}
        <Link to={DATASET_STORE.redirect}>store</Link>) puede ser interrumpida para crear los datos
        del <Link to={SCHEMA.redirect}>schema</Link> relacionado hasta que se tengan los datos
        necesarios para el campo.
      </P>

      <Info>
        <P>
          Este proceso es recursivo, por lo que si el <Link to={SCHEMA.redirect}>schema</Link>{" "}
          referenciado contiene algún campo que dependa de otro{" "}
          <Link to={SCHEMA.redirect}>schema</Link>, su generación se verá interrumpida hasta que se
          tengan todos los datos necesarios.{" "}
          <Strong>Debido a esto se debe tener cuidado con las dependencias cíclicas.</Strong>
        </P>
      </Info>

      <P>
        Para que quedé más claro se puede ver la generación de un <MiniCode>Dataset</MiniCode> como
        un proceso en el que intervienen tres pilas de ejecución:
      </P>

      <List>
        <ListItem>
          <P>Completados</P>
        </ListItem>
        <ListItem>
          <P>En espera</P>
        </ListItem>
        <ListItem>
          <P>En proceso</P>
        </ListItem>
      </List>

      <Img src={DOCS_IMAGE.STACKS} full />

      <P>
        Todos los <Link to={SCHEMA.redirect}>schemas</Link> comienzan en la pila de{" "}
        <Strong>En espera</Strong>, pasando de uno en uno a la pila <Strong>En proceso</Strong>. En
        la pila <Strong>En proceso</Strong> solo puede haber un{" "}
        <Link to={SCHEMA.redirect}>schema</Link>, el cual está generando el arreglo con sus datos,
        al terminar su generación pasa a la pila <Strong>Completados</Strong>. Este proceso a cada{" "}
        <Link to={SCHEMA.redirect}>schema</Link> hasta que todos queden completados
      </P>

      <P>
        En caso de que en el <Link to={SCHEMA.redirect}>schema</Link> que se encuentra en la la pila{" "}
        <Strong>En proceso</Strong> se halle un campo que depende de los datos otro{" "}
        <Link to={SCHEMA.redirect}>schema</Link> este pasa directamente al inicio de a la pila{" "}
        <Strong>En espera</Strong> hasta que el <Link to={SCHEMA.redirect}>schema</Link>{" "}
        referenciado termine de generar sus datos.
      </P>

      <Img src={DOCS_IMAGE.STACKS_DEPENS} full />

      <Tip title="Dependencias completadas">
        <P>
          En caso de que las dependencias del <Link to={SCHEMA.redirect}>schema</Link> que se
          encuentra en la pila <Strong>En proceso</Strong> se encuentran en la pila{" "}
          <Strong>Completados</Strong> que se tienen todos los datos requeridos para generarse. Por
          tanto no es necesario hacer cambios en la secuencia de generación.
        </P>
      </Tip>

      <H3>Ejemplo práctico</H3>

      <P>
        Utilizaremos para representar la secuencia de ejecución el caso de{" "}
        <MiniCode>Ecommerce</MiniCode> definido anteriormente, pero se le añadirá un nuevo{" "}
        <Link to={SCHEMA.redirect}>schema</Link>: <MiniCode>Like</MiniCode>, el cual guarda la
        información de los likes de cada usuario a los productos. Este{" "}
        <Link to={SCHEMA.redirect}>schema</Link> queda definido de la siguiente forma.
      </P>

      <LikeSchemaDefinition />

      <P>
        El <MiniCode>Dataset</MiniCode> con la incorporación de este{" "}
        <Link to={SCHEMA.redirect}>schema</Link> será definido de la siguiente forma.
      </P>

      <NewEcommerceDataset />

      <P>
        Al generar el <MiniCode>Dataset</MiniCode> todos los{" "}
        <Link to={SCHEMA.redirect}>schemas</Link> comienzan en la pila <Strong>En espera.</Strong>{" "}
        en el orden en el que fueron definidos.
      </P>

      <Img src={DOCS_IMAGE.ECOMMERCE_STACKS} full />

      <P>
        Se comienza con la generación de los <MiniCode>30</MiniCode> documentos del{" "}
        <Link to={SCHEMA.redirect}>schema</Link> <MiniCode>Likes</MiniCode>, por lo que este pasa a
        la pila <Strong>En proceso</Strong>.
      </P>

      <Img src={DOCS_IMAGE.ECOMMERCE_STEP_1} full />

      <P>
        Al generar el primer documento llega el momento de crear un valor para el campo{" "}
        <MiniCode>userId</MiniCode>, el cual consituye un campo referencia hacia{" "}
        <MiniCode>User</MiniCode>. Al buscar un valor para este campo se comprueba de que{" "}
        <MiniCode>User</MiniCode> no se encuentra generado, debido a esto <MiniCode>User</MiniCode>{" "}
        pasa a la pila <Strong>En proceso</Strong> y <MiniCode>Likes</MiniCode> pasa al tope de la
        pila <Strong>En espera</Strong>.
      </P>

      <Img src={DOCS_IMAGE.ECOMMERCE_STEP_2} full />

      <P>
        En el <Link to={SCHEMA.redirect}>schema</Link> <MiniCode>User</MiniCode> ningún campo tiene
        dependencia de valores de otro <Link to={SCHEMA.redirect}>schema</Link> por lo que sus datos
        pueden ser generados sin interrupción. Al terminar el proceso <MiniCode>User</MiniCode> pasa
        a la pila <Strong>Completados</Strong> y se continua con el siguiente{" "}
        <Link to={SCHEMA.redirect}>schema</Link> en la pila <Strong>En espera</Strong>.
      </P>

      <Img src={DOCS_IMAGE.ECOMMERCE_STEP_3} full />

      <P>
        Al reanudarse la generación de <MiniCode>Likes</MiniCode> ya se tienen los datos necesarios
        de <MiniCode>User</MiniCode> para el campo <MiniCode>userId</MiniCode>. Pero, al llegar al
        campo <MiniCode>productId</MiniCode> vuelve a ocurrir una dependencia, en esta ocasión con
        el <Link to={SCHEMA.redirect}>schema</Link> <MiniCode>Product</MiniCode> por lo que se
        interrumpe nuevamente la genearición de <MiniCode>Likes</MiniCode> y se comienza el proceso
        con <MiniCode>Product</MiniCode> hasta que se tengan los datos necesarios.
      </P>

      <Img src={DOCS_IMAGE.ECOMMERCE_STEP_4} full />

      <P>
        Al generarse <MiniCode>Product</MiniCode> ocurre el caso contrario a lo sucedido con{" "}
        <MiniCode>Likes</MiniCode>, en este caso el único campo con depencia de otro{" "}
        <Link to={SCHEMA.redirect}>schema</Link> es <MiniCode>userId</MiniCode>, pero la dependencia
        de este campo al ser con <MiniCode>User</MiniCode> que se encuentra ya completado permite a{" "}
        <MiniCode>Product</MiniCode> generar sus datos sin interrupción. Una vez culminada la
        generación de <MiniCode>Product</MiniCode> este pasa a la pila <Strong>Completados</Strong>.
      </P>

      <P>
        Se sigue el proceso con <MiniCode>Likes</MiniCode> (el único{" "}
        <Link to={SCHEMA.redirect}>schema</Link> restante). En esta ocasión todos los campos con
        dependencias que existen dentro de <MiniCode>Likes</MiniCode> tienen los datos necesarios
        para generarse por lo que los documentos pueden ser creados sin interrupcion dando por
        finalizada la creación del <MiniCode>Dataset</MiniCode>.
      </P>

      <Img src={DOCS_IMAGE.ECOMMERCE_STEP_5} full />

      <H3>Dependencia cíclica</H3>

      <P>
        Como se comentaba anteriormente en la generación de un <MiniCode>Dataset</MiniCode> puede
        existir errores debido a la mala definición de los <Link to={SCHEMA.redirect}>schemas</Link>{" "}
        o por una dependencia cíclica. La <Link to={DATASET_STORE.redirect}>Dataset store</Link> o
        los <Link to={REF.redirect}>campos ref</Link> permiten relacionar schemas de forma sencilla,
        pero se debe tener cuidado a la hora de como manejar estas relaciones.
      </P>

      <P>
        Como se vio en la sección anterior cuando un campo de un{" "}
        <Link to={SCHEMA.redirect}>schema</Link> el cual se está generando necesita datos de otro{" "}
        <Link to={SCHEMA.redirect}>schema</Link> dentro del mismo <MiniCode>Dataset</MiniCode>, el
        proceso de generación se detiene y se pasa a generar el{" "}
        <Link to={SCHEMA.redirect}>schema</Link> solicitado. ¿Pero qué ocurre cuando un{" "}
        <Link to={SCHEMA.redirect}>schema</Link> que se encuentra detenido es solicitado por otro?
        Pues provoca un ciclo infinito donde nunca se terminan de generar los datos.
      </P>

      <Img src={DOCS_IMAGE.CIRCULAR_DEPENDENCY} full />

      <Danger title="Dependencia cíclica">
        <P>
          En caso de que se detecte una dependencia cíclica se lanzará la excepción{" "}
          <MiniCode>CyclicAccessDataError</MiniCode>
        </P>
      </Danger>

      <P>
        Para esto es recomendable que los <Link to={SCHEMA.redirect}>schemas</Link> tengan
        dependencias unidireccionales evitando que el ciclo de dependencias vuelva a un{" "}
        <Link to={SCHEMA.redirect}>schema</Link> detenido.
      </P>

      <Img src={DOCS_IMAGE.NEW_CIRCULAR_DEPENDENCY} full />
    </Content>
  )
}
