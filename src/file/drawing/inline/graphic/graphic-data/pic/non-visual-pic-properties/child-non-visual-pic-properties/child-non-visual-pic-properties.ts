import { XmlComponent } from "@file/xml-components/index.js";
import { PicLocks } from "./pic-locks/pic-locks.js";

export class ChildNonVisualProperties extends XmlComponent {
    public constructor() {
        super("pic:cNvPicPr");

        this.root.push(new PicLocks());
    }
}
