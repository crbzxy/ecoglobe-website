import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const p = path.join(__dirname, '../src/views/Aviso.jsx');
let s = fs.readFileSync(p, 'utf8');
s = s.replace(/\s*color:\s*["']#004AAD;["'],?/g, '');
s = s.replace(/,\s*,/g, ',');
s = s.replace(/\{\s*,/g, '{');
s = s.replace(/,\s*\}/g, '}');
fs.writeFileSync(p, s);
