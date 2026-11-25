import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "It's not you, it's the crumbs — actually, it IS you: I gave you golden brown every morning and you thanked me by jamming a fork in my slots. I'm done. Don't toast about me.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY);
