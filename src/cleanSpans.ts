import cleanSpacerun from './cleanSpacerun';
import cleanTabCount from './cleanTabCount';
import traverseElements from './traverseElements';

const cleanSpans = (rootNode: Node): void => {
    traverseElements(rootNode, (element) => {
        if (element.nodeName !== 'SPAN') {
            return true;
        }

        cleanSpacerun(element);
        cleanTabCount(element);

        return true;
    });
};

export default cleanSpans;
