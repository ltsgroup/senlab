/* eslint-disable @typescript-eslint/no-empty-object-type */
import common from "../messages/en/common.json";
import banner from "../messages/en/banner.json";

// declare more lang here
type Messages = typeof common & typeof banner;

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
}
