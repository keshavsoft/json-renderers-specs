import meta from "./meta.js";

export const registerGlobal = (render) => {
    if (!render) return;

    globalThis.ks ??= {};

    globalThis.ks.jsonRenderersSpecs = {
        meta,
        render
    };
};

export default registerGlobal;