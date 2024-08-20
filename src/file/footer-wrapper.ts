import { XmlComponent } from "@file/xml-components/index.js";

import { HeaderFooterReferenceType } from "./document/index.js";
import { IViewWrapper } from "./document-wrapper.js";
import { Footer } from "./footer/footer.js";
import { Media } from "./media/index.js";
import { Paragraph } from "./paragraph/index.js";
import { Relationships } from "./relationships/index.js";
import { Table } from "./table/index.js";

export interface IDocumentFooter {
    readonly footer: FooterWrapper;
    readonly type: (typeof HeaderFooterReferenceType)[keyof typeof HeaderFooterReferenceType];
}

export class FooterWrapper implements IViewWrapper {
    private readonly footer: Footer;
    private readonly relationships: Relationships;

    public constructor(
        private readonly media: Media,
        referenceId: number,
        initContent?: XmlComponent,
    ) {
        this.footer = new Footer(referenceId, initContent);
        this.relationships = new Relationships();
    }

    public add(item: Paragraph | Table): void {
        this.footer.add(item);
    }

    public addChildElement(childElement: XmlComponent): void {
        this.footer.addChildElement(childElement);
    }

    public get View(): Footer {
        return this.footer;
    }

    public get Relationships(): Relationships {
        return this.relationships;
    }

    public get Media(): Media {
        return this.media;
    }
}
