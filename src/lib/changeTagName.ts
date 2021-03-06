export function changeTagName(element: Element, tagName: string): Element {
    const newElement = document.createElement(tagName);

    newElement.innerHTML = element.innerHTML;

    for (const { name } of element.attributes) {
        const value = element.getAttribute(name);

        if (value) {
            newElement.setAttribute(name, value);
        }
    }

    if (element.parentNode) {
        element.parentNode.replaceChild(newElement, element);
    }

    return newElement;
}
