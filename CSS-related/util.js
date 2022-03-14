
export default function $$(selector, context) {
    context = context || document;
    let elements = context.querySelectorAll(selector);
    return Array.prototype.slice.call(elements);
}