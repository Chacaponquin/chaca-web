import { DocSection, SectionTitle } from "../../base"
import { ModuleDocSubSection } from "./module-section"

export const ACCOUNT_TYPE: SectionTitle = { id: "account_type", title: "accountType" }

export const TRANSACTION: SectionTitle = { id: "transaction", title: "transaction" }

export const SUBSCRIPTION_PLAN: SectionTitle = {
  id: "subscription_plan",
  title: "subscriptionPlan",
}

export const PIN: SectionTitle = { id: "pin", title: "pin" }

export const BITCOIN: SectionTitle = { id: "bitcoin_address", title: "bitcoinAddress" }

export const CREDIT_CARD: SectionTitle = { id: "credit_card", title: "creditCard" }

export const ETHEREUM: SectionTitle = { id: "ethereum_address", title: "ethereumAddress" }

export const ROUTING_NUMBER: SectionTitle = { id: "routing_number", title: "routingNumber" }

export const CREDIT_CARD_CVV: SectionTitle = { id: "credit_card_cvv", title: "creditCardCvv" }

export const MONEY_SYMBOL: SectionTitle = { id: "money_symbol", title: "moneySymbol" }

export const AMOUNT: SectionTitle = { id: "amount", title: "amount" }

export const CURRENCY_MONEY_NAME: SectionTitle = {
  id: "currency_money_name",
  title: "currency_money_name",
}

export const BIC: SectionTitle = { id: "bic", title: "bic" }

export const MONEY_CODE: SectionTitle = { id: "money_code", title: "moneyCode" }

export class Finance extends ModuleDocSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: "Finance", url: "finance", apiId: "finance" })

    this.titles = [
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
    ]
  }
}
