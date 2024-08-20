// http://www.datypic.com/sc/ooxml/e-m_nary-1.html
import { XmlComponent } from "@file/xml-components/index.js";

import { MathComponent } from "../math-component.js";
import { MathBase } from "./math-base.js";
import { MathNAryProperties } from "./math-n-ary-properties.js";
import { MathSubScriptElement } from "./math-sub-script.js";
import { MathSuperScriptElement } from "./math-super-script.js";

export interface IMathSumOptions {
    readonly children: readonly MathComponent[];
    readonly subScript?: readonly MathComponent[];
    readonly superScript?: readonly MathComponent[];
}

export class MathSum extends XmlComponent {
    public constructor(options: IMathSumOptions) {
        super("m:nary");

        this.root.push(new MathNAryProperties("∑", !!options.superScript, !!options.subScript));

        if (!!options.subScript) {
            this.root.push(new MathSubScriptElement(options.subScript));
        }

        if (!!options.superScript) {
            this.root.push(new MathSuperScriptElement(options.superScript));
        }

        this.root.push(new MathBase(options.children));
    }
}
