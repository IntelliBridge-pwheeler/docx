import { XmlComponent } from "@file/xml-components/index.js";
import { GraphicFrameLocks } from "./graphic-frame-locks/graphic-frame-locks.js";

export class GraphicFrameProperties extends XmlComponent {
    public constructor() {
        super("wp:cNvGraphicFramePr");

        this.root.push(new GraphicFrameLocks());
    }
}
