// http://www.datypic.com/sc/ooxml/e-m_limLow-1.html
import { XmlComponent } from "@file/xml-components/index.js";
import { MathComponent } from "../math-component.js";
import { MathBase } from "./math-base.js";
import { MathLimit } from "./math-limit.js";

export interface IMathLimitLowerOptions {
    readonly children: readonly MathComponent[];
    readonly limit: readonly MathComponent[];
}

export class MathLimitLower extends XmlComponent {
    public constructor(options: IMathLimitLowerOptions) {
        super("m:limLow");

        this.root.push(new MathBase(options.children));
        this.root.push(new MathLimit(options.limit));
    }
}
