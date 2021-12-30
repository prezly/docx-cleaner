import { SPACE } from '../constants';

export function generateSpaces(count: number): string {
    return Array.from({ length: count }, () => SPACE).join('');
}
