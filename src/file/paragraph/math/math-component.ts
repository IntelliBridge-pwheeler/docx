import { MathAngledBrackets, MathCurlyBrackets, MathRoundBrackets, MathSquareBrackets } from "./brackets/index.js";
import { MathFraction } from "./fraction/index.js";
import { MathFunction } from "./function/index.js";
import { MathRun } from "./math-run.js";
import { MathSum, MathIntegral } from "./n-ary/index.js";
import { MathRadical } from "./radical/index.js";
import { MathSubScript, MathSubSuperScript, MathSuperScript } from "./script/index.js";

export type MathComponent =
    | MathRun
    | MathFraction
    | MathSum
    | MathIntegral
    | MathSuperScript
    | MathSubScript
    | MathSubSuperScript
    | MathRadical
    | MathFunction
    | MathRoundBrackets
    | MathCurlyBrackets
    | MathAngledBrackets
    | MathSquareBrackets;

// Needed because of: https://github.com/s-panferov/awesome-typescript-loader/issues/432
/**
 * @ignore
 */
export const WORKAROUND4 = "";
