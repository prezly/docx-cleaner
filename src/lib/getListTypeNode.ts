export function getListTypeNode(element: Element): Node | null {
    return (
        element.querySelector('[style="mso-list:Ignore"]') || element.querySelector('span[lang]')
    );
}
