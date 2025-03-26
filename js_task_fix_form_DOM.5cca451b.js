"use strict";var inputs=document.querySelectorAll(".field-text");inputs.forEach(function(e){var t=document.createElement("label");t.className="field-label",t.htmlFor=e.id;var l=e.name.split(/(?=[A-Z])/).join(" ").toLowerCase();t.textContent=l=l.charAt(0).toUpperCase()+l.slice(1),e.placeholder=l,e.after(t)});
//# sourceMappingURL=js_task_fix_form_DOM.5cca451b.js.map
