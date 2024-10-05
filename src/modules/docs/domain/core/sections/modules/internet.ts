import { DocSection, SectionTitle } from "../../base"
import { ModuleDocSubSection } from "./module-section"

export const BROWSER_TITLE: SectionTitle = { id: "browser", title: "browser" }

export const DOMAIN_NAME_TITLE: SectionTitle = { id: "domain_name", title: "domainName" }

export const DOMAIN_SUFFIX: SectionTitle = { id: "domain_suffix", title: "domainSuffix" }

export const EMAIL_PROVIDER: SectionTitle = { id: "email_provider", title: "emailProvider" }

export const EMAIL: SectionTitle = { id: "email", title: "email" }

export const EMOJI: SectionTitle = { id: "emoji", title: "emoji" }

export const HTTP_METHOD: SectionTitle = { id: "http_method", title: "httpMethod" }

export const HTTP_STATUS_CODE: SectionTitle = { id: "http_status_code", title: "httpStatusCode" }

export const IPV4: SectionTitle = { id: "ipv4", title: "ipv4" }

export const IPV6: SectionTitle = { id: "ipv6", title: "ipv6" }

export const LOCALE: SectionTitle = { id: "locale", title: "locale" }

export const MAC: SectionTitle = { id: "mac", title: "mac" }

export const OAUTH_PROVIDER: SectionTitle = { id: "oauth_provider", title: "oauthProvider" }

export const PASSWORD: SectionTitle = { id: "password", title: "password" }

export const PORT: SectionTitle = { id: "port", title: "port" }

export const PROTOCOL: SectionTitle = { id: "protocol", title: "title" }

export const URL: SectionTitle = { id: "url", title: "url" }

export const USER_AGENT: SectionTitle = { id: "user_agent", title: "user_agent" }

export const USERNAME: SectionTitle = { id: "username", title: "username" }

export class Internet extends ModuleDocSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: "Internet", url: "internet", apiId: "email" })

    this.titles = [
      BROWSER_TITLE,
      DOMAIN_NAME_TITLE,
      DOMAIN_SUFFIX,
      EMAIL_PROVIDER,
      EMAIL,
      EMOJI,
      HTTP_METHOD,
      HTTP_STATUS_CODE,
      LOCALE,
      MAC,
      OAUTH_PROVIDER,
      PASSWORD,
      PORT,
      PROTOCOL,
      URL,
      USER_AGENT,
      USERNAME,
      IPV4,
      IPV6,
    ]
  }
}
