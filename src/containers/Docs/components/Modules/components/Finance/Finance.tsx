import { MethodSection } from "../../shared/components"
import { ACCOUNT_TYPE_CODE } from "./domain/account-type"
import { AMOUNT_CODE, AMOUNT_PARAMS } from "./domain/amount"
import { BIC_CODE } from "./domain/bic"
import { BITCOIN_CODE } from "./domain/bitcoin"
import { CREDIT_CARD_CODE } from "./domain/credit-card"
import { CREDIT_CARD_CVV_CODE } from "./domain/credit-card-cvv"
import { CURRENCY_MONEY_NAME_CODE } from "./domain/currency-money-name"
import { ETHEREUM_CODE } from "./domain/ethereum"
import { MONEY_CODE_CODE } from "./domain/money-code"
import { MONEY_SYMBOL_CODE } from "./domain/money-symbol"
import { PIN_CODE, PIN_PARAMS } from "./domain/pin"
import { ROUTING_NUMBER_CODE } from "./domain/routing-number"
import { SUBSCRIPTION_PLAN_CODE } from "./domain/subscription-plan"
import { TRANSACTION_CODE } from "./domain/transaction"

export default function Finance() {
  return (
    <>
      <MethodSection
        apiId="transaction"
        code={TRANSACTION_CODE}
        method="transaction"
        params={[]}
        title="Transaction"
      />

      <MethodSection
        apiId="subscription_plan"
        method="subscriptionPlan"
        code={SUBSCRIPTION_PLAN_CODE}
        params={[]}
        title="Subscription plan"
      />

      <MethodSection params={PIN_PARAMS} apiId="pin" code={PIN_CODE} method="pin" title="Pin" />

      <MethodSection
        method="bitcoinAddress"
        apiId="bitcoin_address"
        code={BITCOIN_CODE}
        params={[]}
        title="Bitcoin address"
      />

      <MethodSection
        method="creditCard"
        apiId="credit_card"
        code={CREDIT_CARD_CODE}
        params={[]}
        title="Credit card"
      />

      <MethodSection
        apiId="ethereum_address"
        method="ethereumAddress"
        title="Ethereum address"
        code={ETHEREUM_CODE}
        params={[]}
      />

      <MethodSection
        method="accountType"
        apiId="account_type"
        code={ACCOUNT_TYPE_CODE}
        params={[]}
        title="Account type"
      />

      <MethodSection method="bic" apiId="bic" code={BIC_CODE} params={[]} title="Bic" />

      <MethodSection
        apiId="routing_number"
        code={ROUTING_NUMBER_CODE}
        method="routingNumber"
        params={[]}
        title="Routing number"
      />

      <MethodSection
        apiId="credit_card_cvv"
        method="creditCardCVV"
        code={CREDIT_CARD_CVV_CODE}
        params={[]}
        title="Credit card CVV"
      />

      <MethodSection
        method="moneySymbol"
        apiId="money_symbol"
        code={MONEY_SYMBOL_CODE}
        params={[]}
        title="Money symbol"
      />

      <MethodSection
        apiId="amount"
        code={AMOUNT_CODE}
        method="amount"
        params={AMOUNT_PARAMS}
        title="Amount"
      />

      <MethodSection
        method="currencyMoneyName"
        apiId="currency_money_name"
        code={CURRENCY_MONEY_NAME_CODE}
        params={[]}
        title="Currency money name"
      />

      <MethodSection
        apiId="money_code"
        code={MONEY_CODE_CODE}
        method="moneyCode"
        params={[]}
        title="Money code"
      />
    </>
  )
}
