type Revision =
  | number
  | { Key: number; UpdateStrategy: "Override" | "KeepUserDefined" };
export const CONFIG_REVISION: Revision = 0;

export const SYSTEM_WIDE_REVISION_NUMBERS = {
  Dashboard: 0,
  Layout: 0,
};
