/* eslint-disable no-param-reassign */

import { NO_BREAK_SPACE } from '../constants';

import { traverseElements } from './traverseElements';

function isEmptyOp(element: Element): boolean {
    return element.nodeName === 'O:P' && element.textContent === NO_BREAK_SPACE;
}

function isEmpty(element: Element): boolean {
    return (
        element.children.length === 1 &&
        element.firstElementChild !== null &&
        (isEmptyOp(element.firstElementChild) || isEmpty(element.firstElementChild))
    );
}

export function cleanEmptyParagraphs(rootNode: Node): void {
    return traverseElements(rootNode, (element) => {
        if (element.tagName === 'P' && isEmpty(element)) {
            element.innerHTML = '';
        }

        return true;
    });
}
