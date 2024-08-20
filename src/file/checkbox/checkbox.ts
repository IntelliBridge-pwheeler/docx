import { SymbolRun } from "@file/paragraph/run/symbol-run.js";
import { StructuredDocumentTagProperties } from "@file/table-of-contents/sdt-properties.js";
import { StructuredDocumentTagContent } from "@file/table-of-contents/sdt-content.js";
import { XmlComponent } from "@file/xml-components/index.js";
import { CheckBoxUtil, ICheckboxSymbolOptions } from "./checkbox-util.js";

export class CheckBox extends XmlComponent {
    // default values per Microsoft
    private readonly DEFAULT_UNCHECKED_SYMBOL: string = "2610";
    private readonly DEFAULT_CHECKED_SYMBOL: string = "2612";
    private readonly DEFAULT_FONT: string = "MS Gothic";
    public constructor(options?: ICheckboxSymbolOptions) {
        super("w:sdt");

        const properties = new StructuredDocumentTagProperties(options?.alias);
        properties.addChildElement(new CheckBoxUtil(options));
        this.root.push(properties);

        const content = new StructuredDocumentTagContent();
        const checkedFont: string | undefined = options?.checkedState?.font;
        const checkedText: string | undefined = options?.checkedState?.value;
        const uncheckedFont: string | undefined = options?.uncheckedState?.font;
        const uncheckedText: string | undefined = options?.uncheckedState?.value;
        let symbolFont: string;
        let char: string;

        if (options?.checked) {
            symbolFont = checkedFont ? checkedFont : this.DEFAULT_FONT;
            char = checkedText ? checkedText : this.DEFAULT_CHECKED_SYMBOL;
        } else {
            symbolFont = uncheckedFont ? uncheckedFont : this.DEFAULT_FONT;
            char = uncheckedText ? uncheckedText : this.DEFAULT_UNCHECKED_SYMBOL;
        }

        const initialRenderedChar = new SymbolRun({
            char: char,
            symbolfont: symbolFont,
        });

        content.addChildElement(initialRenderedChar);
        this.root.push(content);
    }
}
