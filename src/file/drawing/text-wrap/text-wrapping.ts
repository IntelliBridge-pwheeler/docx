// http://officeopenxml.com/drwPicFloating-textWrap.php
import { IDistance } from "../drawing.js";

/* eslint-disable @typescript-eslint/naming-convention */
export const TextWrappingType = {
    NONE: 0,
    SQUARE: 1,
    TIGHT: 2,
    TOP_AND_BOTTOM: 3,
} as const;

export const TextWrappingSide = {
    BOTH_SIDES: "bothSides",
    LEFT: "left",
    RIGHT: "right",
    LARGEST: "largest",
} as const;

/* eslint-enable */

export interface ITextWrapping {
    readonly type: (typeof TextWrappingType)[keyof typeof TextWrappingType];
    readonly side?: (typeof TextWrappingSide)[keyof typeof TextWrappingSide];
    readonly margins?: IDistance;
}
