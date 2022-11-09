/**
 * This file auto-generated by Fern from our API Definition.
 */

import { RapydApi } from "../../..";
import * as core from "../../../core";
import * as serializers from "../..";

export const Account: core.schemas.ObjectSchema<Account.Raw, RapydApi.pointOfSale.Account> = core.schemas.object({
  accountId: core.schemas.property("account_id", core.schemas.string()),
  accountCurrency: core.schemas.property(
    "account_currency",
    core.schemas.lazy(() => serializers.pointOfSale.Currency)
  ),
  accountAlias: core.schemas.property("account_alias", core.schemas.string()),
  accountBalance: core.schemas.property("account_balance", core.schemas.number()),
});

export declare namespace Account {
  interface Raw {
    account_id: string;
    account_currency: serializers.pointOfSale.Currency.Raw;
    account_alias: string;
    account_balance: number;
  }
}
