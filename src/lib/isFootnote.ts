export function isFootnote(element: Element): boolean {
    return element.tagName === 'SPAN' && element.classList.contains('MsoFootnoteReference');
}
