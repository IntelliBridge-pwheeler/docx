// http://www.datypic.com/sc/ooxml/e-m_sPre-1.html
import { XmlComponent } from "@file/xml-components/index.js";

import { MathComponent } from "../../math-component.js";
import { MathBase, MathSubScriptElement, MathSuperScriptElement } from "../../n-ary/index.js";
import { MathPreSubSuperScriptProperties } from "./math-pre-sub-super-script-function-properties.js";

export interface IMathPreSubSuperScriptOptions {
    readonly children: readonly MathComponent[];
    readonly subScript: readonly MathComponent[];
    readonly superScript: readonly MathComponent[];
}

export class MathPreSubSuperScript extends XmlComponent {
    public constructor(options: IMathPreSubSuperScriptOptions) {
        super("m:sPre");

        this.root.push(new MathPreSubSuperScriptProperties());
        this.root.push(new MathBase(options.children));
        this.root.push(new MathSubScriptElement(options.subScript));
        this.root.push(new MathSuperScriptElement(options.superScript));
    }
}
