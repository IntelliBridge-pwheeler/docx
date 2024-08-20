import { IMediaData } from "@file/media/index.js";
import { XmlComponent } from "@file/xml-components/index.js";

import { createBlip } from "./blip.js";
import { SourceRectangle } from "./source-rectangle.js";
import { Stretch } from "./stretch.js";

export class BlipFill extends XmlComponent {
    public constructor(mediaData: IMediaData) {
        super("pic:blipFill");

        this.root.push(createBlip(mediaData));
        this.root.push(new SourceRectangle());
        this.root.push(new Stretch());
    }
}
