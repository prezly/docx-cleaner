import { isText } from './isText';
import { traverse } from './traverse';

type Callback = (node: Text) => boolean;

export function traverseTexts(rootNode: Node, callback: Callback): void {
    traverse(rootNode, (node) => {
        if (!isText(node)) {
            return true;
        }

        return callback(node);
    });
}
