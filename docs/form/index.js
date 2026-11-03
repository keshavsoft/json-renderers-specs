import render from "../dist/v2/min.js";
import { buildSpecElement } from "https://keshavsoft.github.io/json-to-tag/dist/v9/min.js";

// Single common source of truth
import data from "../common/data.json" with { type: "json" };
import columns from "../common/columns.json" with { type: "json" };

const container = document.getElementById("dom-render-container");
const specOutput = document.getElementById("spec-output");

const start = () => {
    try {
        // Only type is defined here
        const spec = render({
            type: "form",
            data,
            columns,
            options: {
                title: "Edit Product Record",
                submitLabel: "Save Item"
            }
        });

        // Display generated headless JSON spec
        if (specOutput) {
            specOutput.textContent = JSON.stringify(spec, null, 2);
        }

        const buildFunc = buildSpecElement || window.ks?.jsonToTag?.buildSpecElement;
        if (buildFunc) {
            const formEl = buildFunc(spec);
            container.replaceChildren(formEl);

            const realForm = formEl.querySelector("form") || formEl;
            realForm.addEventListener("submit", (e) => {
                e.preventDefault();
                const formData = Object.fromEntries(new FormData(realForm));
                alert("Form submitted! Inspect console for values.");
                console.log("Submitted form data:", formData);
            });
        }

    } catch (err) {
        console.error("Render error:", err);
        container.innerHTML = `<div class="alert alert-danger font-monospace small">${err.message}</div>`;
    }
};

start();
