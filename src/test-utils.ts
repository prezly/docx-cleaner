import fs from 'fs';
import path from 'path';

export function readTestFile(filepath: string): string {
    const absoluteFilepath = path.resolve(__dirname, '__tests__', filepath);
    return fs.readFileSync(absoluteFilepath, 'utf-8');
}
