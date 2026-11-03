import render from "../dist/v2/min.js";
import { buildSpecElement } from "https://keshavsoft.github.io/json-to-tag/dist/v9/min.js";

// Single common source of truth
import data from "../common/data.json" with { type: "json" };
import columns from "../common/columns.json" with { type: "json" };

const container = document.getElementById("dom-render-container");
const specOutput = document.getElementById("spec-output");

const start = () => {
    try {
        // Only type is defined here - automatically targets category column and options from data
        const spec = render({
            type: "select",
            data,
            columns
        });

        // Display generated headless JSON spec
        if (specOutput) {
            specOutput.textContent = JSON.stringify(spec, null, 2);
        }

        const buildFunc = buildSpecElement || window.ks?.jsonToTag?.buildSpecElement;
        if (buildFunc) {
            const el = buildFunc(spec);
            const elements = Array.isArray(el) ? el : [el];
            elements.forEach(selectEl => {
                if (selectEl.tagName === "SELECT") {
                    selectEl.className = "form-select shadow-sm";
                }
            });
            container.replaceChildren(...elements);
        }

    } catch (err) {
        console.error("Render error:", err);
        container.innerHTML = `<div class="alert alert-danger font-monospace small">${err.message}</div>`;
    }
};

start();

