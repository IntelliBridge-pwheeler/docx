// http://www.datypic.com/sc/ooxml/e-m_func-1.html
import { XmlComponent } from "@file/xml-components/index.js";

import { MathComponent } from "../math-component.js";
import { MathBase } from "../n-ary/index.js";
import { MathFunctionName } from "./math-function-name.js";
import { MathFunctionProperties } from "./math-function-properties.js";

export interface IMathFunctionOptions {
    readonly children: readonly MathComponent[];
    readonly name: readonly MathComponent[];
}

export class MathFunction extends XmlComponent {
    public constructor(options: IMathFunctionOptions) {
        super("m:func");

        this.root.push(new MathFunctionProperties());
        this.root.push(new MathFunctionName(options.name));
        this.root.push(new MathBase(options.children));
    }
}
