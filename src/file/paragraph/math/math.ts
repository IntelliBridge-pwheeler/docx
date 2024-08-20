// http://www.datypic.com/sc/ooxml/e-m_oMath-1.html
import { XmlComponent } from "@file/xml-components/index.js";

import { MathComponent } from "./math-component.js";

export interface IMathOptions {
    readonly children: readonly MathComponent[];
}

export class Math extends XmlComponent {
    public constructor(options: IMathOptions) {
        super("m:oMath");

        for (const child of options.children) {
            this.root.push(child);
        }
    }
}
