import { IMediaData } from "@file/media/index.js";
import { XmlComponent } from "@file/xml-components/index.js";

import { Anchor } from "./anchor/index.js";
import { DocPropertiesOptions } from "./doc-properties/doc-properties.js";
import { IFloating } from "./floating/index.js";
import { createInline } from "./inline/index.js";
import { OutlineOptions } from "./inline/graphic/graphic-data/pic/shape-properties/outline/outline.js";

export type IDistance = {
    readonly distT?: number;
    readonly distB?: number;
    readonly distL?: number;
    readonly distR?: number;
};

export interface IDrawingOptions {
    readonly floating?: IFloating;
    readonly docProperties?: DocPropertiesOptions;
    readonly outline?: OutlineOptions;
}

// <xsd:complexType name="CT_Drawing">
// <xsd:choice minOccurs="1" maxOccurs="unbounded">
//   <xsd:element ref="wp:anchor" minOccurs="0"/>
//   <xsd:element ref="wp:inline" minOccurs="0"/>
// </xsd:choice>
// </xsd:complexType>

export class Drawing extends XmlComponent {
    public constructor(imageData: IMediaData, drawingOptions: IDrawingOptions = {}) {
        super("w:drawing");

        if (!drawingOptions.floating) {
            this.root.push(
                createInline({
                    mediaData: imageData,
                    transform: imageData.transformation,
                    docProperties: drawingOptions.docProperties,
                    outline: drawingOptions.outline,
                }),
            );
        } else {
            this.root.push(new Anchor({ mediaData: imageData, transform: imageData.transformation, drawingOptions }));
        }
    }
}
