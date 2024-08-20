// http://www.datypic.com/sc/ooxml/e-m_naryPr-1.html
import { XmlComponent } from "@file/xml-components/index.js";

import { MathAccentCharacter } from "./math-accent-character.js";
import { MathLimitLocation } from "./math-limit-location.js";
import { MathSubScriptHide } from "./math-sub-script-hide.js";
import { MathSuperScriptHide } from "./math-super-script-hide.js";

export class MathNAryProperties extends XmlComponent {
    public constructor(accent: string, hasSuperScript: boolean, hasSubScript: boolean, limitLocationVal?: string) {
        super("m:naryPr");

        if (!!accent) {
            this.root.push(new MathAccentCharacter(accent));
        }
        this.root.push(new MathLimitLocation(limitLocationVal));

        if (!hasSuperScript) {
            this.root.push(new MathSuperScriptHide());
        }

        if (!hasSubScript) {
            this.root.push(new MathSubScriptHide());
        }
    }
}
