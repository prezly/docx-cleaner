import { ZERO_WIDTH_SPACE } from '../constants';

export function postCleanHtml(html: string): string {
    const cleanHtml = html.trim().replace(new RegExp(ZERO_WIDTH_SPACE, 'g'), '');

    return `<body>${cleanHtml}</body>`;
}
