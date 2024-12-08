import { DocSection } from "../../base"
import { ModuleDocSubSection, ModuleSubSectionTitle } from "./module-section"

export const ACCOUNT_TYPE: ModuleSubSectionTitle = { id: "account_type", title: "accountType" }

export const TRANSACTION: ModuleSubSectionTitle = { id: "transaction", title: "transaction" }

export const SUBSCRIPTION_PLAN: ModuleSubSectionTitle = {
  id: "subscription_plan",
  title: "subscriptionPlan",
}

export const PIN: ModuleSubSectionTitle = { id: "pin", title: "pin" }

export const BITCOIN: ModuleSubSectionTitle = { id: "bitcoin_address", title: "bitcoinAddress" }

export const CREDIT_CARD: ModuleSubSectionTitle = { id: "credit_card", title: "creditCard" }

export const ETHEREUM: ModuleSubSectionTitle = { id: "ethereum_address", title: "ethereumAddress" }

export const ROUTING_NUMBER: ModuleSubSectionTitle = {
  id: "routing_number",
  title: "routingNumber",
}

export const CREDIT_CARD_CVV: ModuleSubSectionTitle = {
  id: "credit_card_cvv",
  title: "creditCardCvv",
}

export const MONEY_SYMBOL: ModuleSubSectionTitle = { id: "money_symbol", title: "moneySymbol" }

export const AMOUNT: ModuleSubSectionTitle = { id: "amount", title: "amount" }

export const CURRENCY_MONEY_NAME: ModuleSubSectionTitle = {
  id: "currency_money_name",
  title: "currency_money_name",
}

export const BIC: ModuleSubSectionTitle = { id: "bic", title: "bic" }

export const MONEY_CODE: ModuleSubSectionTitle = { id: "money_code", title: "moneyCode" }

export const LITECOIN: ModuleSubSectionTitle = { id: "litecoin", title: "litecoinAddress" }

export class Finance extends ModuleDocSubSection {
  constructor(parent: DocSection) {
    super({
      parent: parent,
      title: { en: "Finance", es: "Finance" },
      url: "finance",
      apiId: "finance",
      titles: [
        ACCOUNT_TYPE,
        SUBSCRIPTION_PLAN,
        PIN,
        TRANSACTION,
        BITCOIN,
        CREDIT_CARD,
        CREDIT_CARD_CVV,
        ROUTING_NUMBER,
        ETHEREUM,
        MONEY_SYMBOL,
        AMOUNT,
        CURRENCY_MONEY_NAME,
        MONEY_CODE,
        BIC,
        LITECOIN,
      ],
    })
  }
}
