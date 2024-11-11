import {
  BITCOIN,
  SUBSCRIPTION_PLAN,
  TRANSACTION,
  ACCOUNT_TYPE,
  AMOUNT,
  CREDIT_CARD,
  CREDIT_CARD_CVV,
  CURRENCY_MONEY_NAME,
  ETHEREUM,
  MONEY_CODE,
  MONEY_SYMBOL,
  PIN,
  ROUTING_NUMBER,
  BIC,
  LITECOIN,
} from "@modules/docs/domain/core/sections/modules/finance"
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
import { SectionProvider } from "../../shared/context"
import { FINANCE } from "@modules/docs/domain/core/sections/modules"
import { LITECOIN_CODE } from "./domain/litecoin"

export default function Finance() {
  return (
    <SectionProvider section={FINANCE} result="json">
      <MethodSection code={TRANSACTION_CODE} params={[]} title={TRANSACTION} />

      <MethodSection title={SUBSCRIPTION_PLAN} code={SUBSCRIPTION_PLAN_CODE} params={[]} />

      <MethodSection params={PIN_PARAMS} title={PIN} code={PIN_CODE} />

      <MethodSection code={BITCOIN_CODE} params={[]} title={BITCOIN} />

      <MethodSection code={CREDIT_CARD_CODE} params={[]} title={CREDIT_CARD} />

      <MethodSection title={ETHEREUM} code={ETHEREUM_CODE} params={[]} />

      <MethodSection code={ACCOUNT_TYPE_CODE} params={[]} title={ACCOUNT_TYPE} />

      <MethodSection title={BIC} code={BIC_CODE} params={[]} />

      <MethodSection code={ROUTING_NUMBER_CODE} params={[]} title={ROUTING_NUMBER} />

      <MethodSection code={CREDIT_CARD_CVV_CODE} params={[]} title={CREDIT_CARD_CVV} />

      <MethodSection title={MONEY_SYMBOL} code={MONEY_SYMBOL_CODE} params={[]} />

      <MethodSection title={AMOUNT} code={AMOUNT_CODE} params={AMOUNT_PARAMS} />

      <MethodSection title={CURRENCY_MONEY_NAME} code={CURRENCY_MONEY_NAME_CODE} params={[]} />

      <MethodSection title={MONEY_CODE} code={MONEY_CODE_CODE} params={[]} />

      <MethodSection title={LITECOIN} code={LITECOIN_CODE} params={[]} />
    </SectionProvider>
  )
}
