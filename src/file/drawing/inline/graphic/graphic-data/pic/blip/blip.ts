import { IMediaData } from "@file/media/index.js";
import { BuilderElement, XmlComponent } from "@file/xml-components/index.js";
import { createExtentionList } from "./blip-extentions.js";

type BlipAttributes = {
    readonly embed: string;
    readonly cstate: string;
};

export const createBlip = (mediaData: IMediaData): XmlComponent =>
    new BuilderElement<BlipAttributes>({
        name: "a:blip",
        attributes: {
            embed: {
                key: "r:embed",
                value: `rId{${mediaData.type === "svg" ? mediaData.fallback.fileName : mediaData.fileName}}`,
            },
            cstate: {
                key: "cstate",
                value: "none",
            },
        },
        children: mediaData.type === "svg" ? [createExtentionList(mediaData)] : [],
    });
