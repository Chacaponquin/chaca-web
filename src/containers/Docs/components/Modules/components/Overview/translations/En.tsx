import { SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import {
  H2,
  Info,
  Link,
  MiniCode,
  P,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import { Comparation, SectionsList, Usage, UsageSchema } from "../components"
import { API_ID, USAGE } from "@modules/docs/domain/core/sections/modules/overview"
import { CUSTOM } from "@modules/docs/domain/core/sections/field-types"
import { OVERVIEW } from "@modules/docs/domain/core/sections/api"
import { PERSON } from "@modules/docs/domain/core/sections/modules"

export default function En() {
  return (
    <>
      <P>
        To generate the data for each field inside a <Link to={SCHEMA.redirect}>schema</Link> there
        are general algorithms that help generate values for specific domains. For example: emails,
        usernames, numeric values, passwords, images, and others, which are difficult to reimplement
        or search for every time you want to use them.
      </P>

      <P>
        To solve this problem, Chaca provides module functions that generate values belonging to
        different domains. These modules are separated into the following sections:
      </P>

      <SectionsList />

      <H2 title={USAGE} />

      <P>
        To use Chaca modules you just need to import <MiniCode>modules</MiniCode> into any file and
        call the module you want to use.
      </P>

      <Usage />

      <P>
        These modules can be used to define a field inside a{" "}
        <Link to={SCHEMA.redirect}>schema</Link> by being called through a{" "}
        <Link to={CUSTOM.redirect}>custom field</Link>.
      </P>

      <UsageSchema />

      <Info>
        <P>
          Many of these sections contain a <MiniCode>constants</MiniCode> property that contains the
          constants used to generate the values.
        </P>
      </Info>

      <H2 title={API_ID} />

      <P>
        To use the modules within the library, you just need to import the variable{" "}
        <MiniCode>modules</MiniCode> into the necessary file. But when you are using the Chaca{" "}
        <Link to={OVERVIEW.redirect}>REST API</Link> to generate a value through a module, the way
        it works is different for obvious reasons.
      </P>

      <P>
        Modules and sections on any call to the <Link to={OVERVIEW.redirect}>REST API</Link> are
        identified by a name that may be different from the name of their method in the library.
      </P>

      <P>
        Below we will show the difference between generate a value from the module{" "}
        <Link to={PERSON.firstNameUrl}>person.firstName</Link> using the library and using the{" "}
        <Link to={OVERVIEW.redirect}>REST API</Link>.
      </P>

      <Comparation />

      <P>
        Note that the <MiniCode>api id</MiniCode> of this module is <MiniCode>first_name</MiniCode>,
        which is different from the name of its library method (
        <MiniCode>person.firstName</MiniCode>).
      </P>

      <Info>
        <P>
          In the documentation for each of the modules you can find its <MiniCode>api id</MiniCode>{" "}
          with which it is identified inside the <Link to={OVERVIEW.redirect}>REST API</Link>.
        </P>
      </Info>
    </>
  )
}
