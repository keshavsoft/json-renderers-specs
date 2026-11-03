import render from "../dist/min.js";
import "https://keshavsoft.github.io/json-to-dom/dist/v42/min.js";

// Single common source of truth
import data from "../common/data.json" with { type: "json" };
import columns from "../common/columns.json" with { type: "json" };

const container = document.getElementById("dom-render-container");
const specOutput = document.getElementById("spec-output");

const start = () => {
    try {
        const spec = render({
            type: "table.simple",
            data,
            columns,
            options: {
                showSerial: true,
                showSearch: true,
                showOptions: true
            }
        });

        // Display generated headless JSON spec
        if (specOutput) {
            specOutput.textContent = JSON.stringify(spec, null, 2);
        }

        window.ks.jsonToDom.appendToDom({
            jsonSpec: spec,
            targetHtmlId: "dom-render-container",
            options: {},
            classToApply: "",
            appendPosition: "replace",
        });

    } catch (err) {
        console.error("Render error:", err);
        container.innerHTML = `<div class="alert alert-danger font-monospace small">${err.message}</div>`;
    }
};

start();

