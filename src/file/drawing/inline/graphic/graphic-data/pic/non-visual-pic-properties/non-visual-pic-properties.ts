import { XmlComponent } from "@file/xml-components/index.js";
import { ChildNonVisualProperties } from "./child-non-visual-pic-properties/child-non-visual-pic-properties.js";
import { NonVisualProperties } from "./non-visual-properties/non-visual-properties.js";

export class NonVisualPicProperties extends XmlComponent {
    public constructor() {
        super("pic:nvPicPr");

        this.root.push(new NonVisualProperties());
        this.root.push(new ChildNonVisualProperties());
    }
}
