// http://officeopenxml.com/drwPicFloating-position.php
import { HorizontalPositionAlign, VerticalPositionAlign } from "@file/shared/alignment.js";
import { XmlComponent } from "@file/xml-components/index.js";

export class Align extends XmlComponent {
    public constructor(
        value:
            | (typeof HorizontalPositionAlign)[keyof typeof HorizontalPositionAlign]
            | (typeof VerticalPositionAlign)[keyof typeof VerticalPositionAlign],
    ) {
        super("wp:align");
        this.root.push(value);
    }
}
