import { XmlComponent } from "@file/xml-components/index.js";

import { MathComponent } from "../math-component.js";
import { MathDenominator } from "./math-denominator.js";
import { MathNumerator } from "./math-numerator.js";

export interface IMathFractionOptions {
    readonly numerator: readonly MathComponent[];
    readonly denominator: readonly MathComponent[];
}

export class MathFraction extends XmlComponent {
    public constructor(options: IMathFractionOptions) {
        super("m:f");

        this.root.push(new MathNumerator(options.numerator));
        this.root.push(new MathDenominator(options.denominator));
    }
}
