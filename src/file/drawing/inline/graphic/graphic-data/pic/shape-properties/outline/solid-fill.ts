import { BuilderElement, XmlComponent } from "@file/xml-components/index.js";

import { createSchemeColor, SchemeColor } from "./scheme-color.js";
import { createSolidRgbColor } from "./rgb-color.js";

export type RgbColorOptions = {
    readonly type: "rgb";
    readonly value: string;
};

export type SchemeColorOptions = {
    readonly type: "scheme";
    readonly value: (typeof SchemeColor)[keyof typeof SchemeColor];
};

export type SolidFillOptions = RgbColorOptions | SchemeColorOptions;

export const createSolidFill = (options: SolidFillOptions): XmlComponent =>
    new BuilderElement({
        name: "a:solidFill",
        children: [options.type === "rgb" ? createSolidRgbColor(options) : createSchemeColor(options)],
    });
