// http://officeopenxml.com/drwSp-prstGeom.php
import { XmlComponent } from "@file/xml-components/index.js";
import { AdjustmentValues } from "./adjustment-values/adjustment-values.js";
import { PresetGeometryAttributes } from "./preset-geometry-attributes.js";

export class PresetGeometry extends XmlComponent {
    public constructor() {
        super("a:prstGeom");

        this.root.push(
            new PresetGeometryAttributes({
                prst: "rect",
            }),
        );

        this.root.push(new AdjustmentValues());
    }
}
