import getComments from './getComments';

const parser = new DOMParser();

const getVShapes = (document: Document): Record<string, string> => {
    const comments = getComments(document);

    return comments.reduce<Record<string, string>>((vShapesMap, comment) => {
        try {
            const xmlDocument = parser.parseFromString(comment, 'text/html');
            const vShapes = Array.from(xmlDocument.getElementsByTagName('V:SHAPE'));

            vShapes.forEach((vShape) => {
                const { id } = vShape;
                const spid = vShape.getAttribute('o:spid');

                if (typeof id === 'string' && typeof spid === 'string') {
                    // eslint-disable-next-line no-param-reassign
                    vShapesMap[id] = spid;
                }
            });
        } catch (error) {
            // Cannot parse as XML, we're not interested in this comment
        }

        return vShapesMap;
    }, {});
};

export default getVShapes;
