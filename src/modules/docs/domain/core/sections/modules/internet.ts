import { DocSection } from "../../base"
import { ModuleDocSubSection, ModuleSubSectionTitle } from "./module-section"

export const BROWSER_TITLE: ModuleSubSectionTitle = { id: "browser", title: "browser" }

export const DOMAIN_NAME_TITLE: ModuleSubSectionTitle = { id: "domain_name", title: "domainName" }

export const DOMAIN_SUFFIX: ModuleSubSectionTitle = { id: "domain_suffix", title: "domainSuffix" }

export const EMAIL_PROVIDER: ModuleSubSectionTitle = {
  id: "email_provider",
  title: "emailProvider",
}

export const EMAIL: ModuleSubSectionTitle = { id: "email", title: "email" }

export const EMOJI: ModuleSubSectionTitle = { id: "emoji", title: "emoji" }

export const HTTP_METHOD: ModuleSubSectionTitle = { id: "http_method", title: "httpMethod" }

export const HTTP_STATUS_CODE: ModuleSubSectionTitle = {
  id: "http_status_code",
  title: "httpStatusCode",
}

export const IPV4: ModuleSubSectionTitle = { id: "ipv4", title: "ipv4" }

export const IPV6: ModuleSubSectionTitle = { id: "ipv6", title: "ipv6" }

export const LOCALE: ModuleSubSectionTitle = { id: "locale", title: "locale" }

export const MAC: ModuleSubSectionTitle = { id: "mac", title: "mac" }

export const OAUTH_PROVIDER: ModuleSubSectionTitle = {
  id: "oauth_provider",
  title: "oauthProvider",
}

export const PASSWORD: ModuleSubSectionTitle = { id: "password", title: "password" }

export const PORT: ModuleSubSectionTitle = { id: "port", title: "port" }

export const PROTOCOL: ModuleSubSectionTitle = { id: "protocol", title: "title" }

export const URL: ModuleSubSectionTitle = { id: "url", title: "url" }

export const USER_AGENT: ModuleSubSectionTitle = { id: "user_agent", title: "user_agent" }

export const USERNAME: ModuleSubSectionTitle = { id: "username", title: "username" }

export const IP: ModuleSubSectionTitle = { id: "ip", title: "ip" }

export class Internet extends ModuleDocSubSection {
  constructor(parent: DocSection) {
    super({
      parent: parent,
      title: { en: "Internet", es: "Internet" },
      url: "internet",
      apiId: "internet",
      titles: [
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
        IP,
      ],
    })
  }
}
