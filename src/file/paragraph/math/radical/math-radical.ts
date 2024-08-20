// http://www.datypic.com/sc/ooxml/e-m_rad-1.html
import { XmlComponent } from "@file/xml-components/index.js";

import { MathComponent } from "../math-component.js";
import { MathBase } from "../n-ary/index.js";
import { MathDegree } from "./math-degree.js";
import { MathRadicalProperties } from "./math-radical-properties.js";

export interface IMathRadicalOptions {
    readonly children: readonly MathComponent[];
    readonly degree?: readonly MathComponent[];
}

export class MathRadical extends XmlComponent {
    public constructor(options: IMathRadicalOptions) {
        super("m:rad");

        this.root.push(new MathRadicalProperties(!!options.degree));
        this.root.push(new MathDegree(options.degree));
        this.root.push(new MathBase(options.children));
    }
}
