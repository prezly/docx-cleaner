function acceptNode() {
    return NodeFilter.FILTER_ACCEPT;
}

export function getComments(node: Node): string[] {
    const comments: string[] = [];
    const iterator = document.createNodeIterator(node, NodeFilter.SHOW_COMMENT, { acceptNode });
    let currentNode = iterator.nextNode();

    while (currentNode) {
        if (currentNode.nodeValue) {
            comments.push(currentNode.nodeValue);
        }

        currentNode = iterator.nextNode();
    }

    return comments;
}
