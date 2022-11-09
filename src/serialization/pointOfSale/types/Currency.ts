/**
 * This file auto-generated by Fern from our API Definition.
 */

import { RapydApi } from "../../..";
import * as core from "../../../core";

export const Currency: core.schemas.Schema<Currency.Raw, RapydApi.pointOfSale.Currency> = core.schemas
  .string()
  .transform<RapydApi.pointOfSale.Currency>({
    parse: (value) => RapydApi.pointOfSale.Currency._parse(value),
    json: ({ value }) => value,
  });

export declare namespace Currency {
  type Raw = string;
}
