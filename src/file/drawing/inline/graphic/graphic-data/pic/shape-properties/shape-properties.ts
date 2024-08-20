// http://officeopenxml.com/drwSp-SpPr.php
import { IMediaDataTransformation } from "@file/media/index.js";
import { XmlComponent } from "@file/xml-components/index.js";
import { Form } from "./form/index.js";
import { OutlineOptions, createOutline } from "./outline/outline.js";
import { PresetGeometry } from "./preset-geometry/preset-geometry.js";
import { ShapePropertiesAttributes } from "./shape-properties-attributes.js";
import { createNoFill } from "./outline/no-fill.js";

export class ShapeProperties extends XmlComponent {
    private readonly form: Form;

    public constructor({ outline, transform }: { readonly outline?: OutlineOptions; readonly transform: IMediaDataTransformation }) {
        super("pic:spPr");

        this.root.push(
            new ShapePropertiesAttributes({
                bwMode: "auto",
            }),
        );

        this.form = new Form(transform);

        this.root.push(this.form);
        this.root.push(new PresetGeometry());

        if (outline) {
            this.root.push(createNoFill());
            this.root.push(createOutline(outline));
        }
    }
}
