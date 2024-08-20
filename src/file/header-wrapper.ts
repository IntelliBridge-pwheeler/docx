import { XmlComponent } from "@file/xml-components/index.js";

import { HeaderFooterReferenceType } from "./document/index.js";
import { IViewWrapper } from "./document-wrapper.js";
import { Header } from "./header/header.js";
import { Media } from "./media/index.js";
import { Paragraph } from "./paragraph/index.js";
import { Relationships } from "./relationships/index.js";
import { Table } from "./table/index.js";

export interface IDocumentHeader {
    readonly header: HeaderWrapper;
    readonly type: (typeof HeaderFooterReferenceType)[keyof typeof HeaderFooterReferenceType];
}

export class HeaderWrapper implements IViewWrapper {
    private readonly header: Header;
    private readonly relationships: Relationships;

    public constructor(
        private readonly media: Media,
        referenceId: number,
        initContent?: XmlComponent,
    ) {
        this.header = new Header(referenceId, initContent);
        this.relationships = new Relationships();
    }

    public add(item: Paragraph | Table): HeaderWrapper {
        this.header.add(item);

        return this;
    }

    public addChildElement(childElement: XmlComponent | string): void {
        this.header.addChildElement(childElement);
    }

    public get View(): Header {
        return this.header;
    }

    public get Relationships(): Relationships {
        return this.relationships;
    }

    public get Media(): Media {
        return this.media;
    }
}
