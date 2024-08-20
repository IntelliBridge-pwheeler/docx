// http://www.datypic.com/sc/ooxml/e-m_sSub-1.html
import { XmlComponent } from "@file/xml-components/index.js";

import { MathComponent } from "../../math-component.js";
import { MathBase, MathSubScriptElement } from "../../n-ary/index.js";
import { MathSubScriptProperties } from "./math-sub-script-function-properties.js";

export interface IMathSubScriptOptions {
    readonly children: readonly MathComponent[];
    readonly subScript: readonly MathComponent[];
}

export class MathSubScript extends XmlComponent {
    public constructor(options: IMathSubScriptOptions) {
        super("m:sSub");

        this.root.push(new MathSubScriptProperties());
        this.root.push(new MathBase(options.children));
        this.root.push(new MathSubScriptElement(options.subScript));
    }
}
