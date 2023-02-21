import type { Color } from "chalk";

export type SpinnerTypes = "success" | "error";

export type SpinnerModalColors = typeof Color;

export interface SpinnerModal {
  text: string;
  color: SpinnerModalColors;
  spinnerType: SpinnerTypes;
}
