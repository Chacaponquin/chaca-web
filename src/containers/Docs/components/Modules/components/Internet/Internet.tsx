import {
  BROWSER_TITLE,
  DOMAIN_NAME_TITLE,
  DOMAIN_SUFFIX,
  EMAIL,
  EMAIL_PROVIDER,
  EMOJI,
  HTTP_METHOD,
  HTTP_STATUS_CODE,
  IPV4,
  IPV6,
  LOCALE,
  MAC,
  PASSWORD,
  OAUTH_PROVIDER,
  PORT,
  PROTOCOL,
  URL,
  USERNAME,
  USER_AGENT,
} from "@modules/docs/domain/core/sections/modules/internet"
import { MethodSection } from "../../shared/components"
import { BROWSER_CODE } from "./domain/browser"
import { DOMAIN_NAME_CODE } from "./domain/domain-name"
import { DOMAIN_SUFFIX_CODE } from "./domain/domain-suffix"
import { EMAIL_CODE, EMAIL_PARAMS } from "./domain/email"
import { EMAIL_PROVIDER_CODE } from "./domain/email-provider"
import { PASSWORD_CODE, PASSWORD_PARAMS } from "./domain/password"
import { MAC_CODE } from "./domain/mac"
import { LOCALE_CODE } from "./domain/locale"
import { USERNAME_CODE, USERNAME_PARAMS } from "./domain/username"
import { EMOJI_CODE, EMOJI_PARAMS } from "./domain/emoji"
import { USER_AGENT_CODE } from "./domain/user-agent"
import { PORT_CODE } from "./domain/port"
import { PROTOCOL_CODE } from "./domain/protocol"
import { URL_CODE } from "./domain/url"
import { HTTP_METHOD_CODE } from "./domain/http-method"
import { OAUTH_PROVIDER_CODE } from "./domain/oauth-provider"
import { HTTP_STATUS_CODE_CODE } from "./domain/http-status-code"
import { IPV4_CODE } from "./domain/ipv4"
import { IPV6_CODE } from "./domain/ipv6"
import { SectionProvider } from "../../shared/context"
import { INTERNET } from "@modules/docs/domain/core/sections/modules"

export default function Internet() {
  return (
    <SectionProvider section={INTERNET} result="json">
      <MethodSection params={[]} title={BROWSER_TITLE} code={BROWSER_CODE} />

      <MethodSection title={DOMAIN_NAME_TITLE} params={[]} code={DOMAIN_NAME_CODE} />

      <MethodSection title={DOMAIN_SUFFIX} params={[]} code={DOMAIN_SUFFIX_CODE} />

      <MethodSection title={EMAIL} params={EMAIL_PARAMS} code={EMAIL_CODE} />

      <MethodSection title={LOCALE} params={[]} code={LOCALE_CODE} />

      <MethodSection title={PORT} params={[]} code={PORT_CODE} />

      <MethodSection title={PROTOCOL} params={[]} code={PROTOCOL_CODE} />

      <MethodSection title={EMAIL_PROVIDER} params={[]} code={EMAIL_PROVIDER_CODE} />

      <MethodSection title={PASSWORD} params={PASSWORD_PARAMS} code={PASSWORD_CODE} />

      <MethodSection title={MAC} params={[]} code={MAC_CODE} />

      <MethodSection title={URL} code={URL_CODE} params={[]} />

      <MethodSection title={HTTP_METHOD} code={HTTP_METHOD_CODE} params={[]} />

      <MethodSection title={OAUTH_PROVIDER} code={OAUTH_PROVIDER_CODE} params={[]} />

      <MethodSection title={USER_AGENT} params={[]} code={USER_AGENT_CODE} />

      <MethodSection title={USERNAME} params={USERNAME_PARAMS} code={USERNAME_CODE} />

      <MethodSection title={HTTP_STATUS_CODE} code={HTTP_STATUS_CODE_CODE} params={[]} />

      <MethodSection title={IPV4} code={IPV4_CODE} params={[]} />

      <MethodSection title={IPV6} code={IPV6_CODE} params={[]} />

      <MethodSection title={EMOJI} params={EMOJI_PARAMS} code={EMOJI_CODE} />
    </SectionProvider>
  )
}
