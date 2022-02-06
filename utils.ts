import { deepMerge } from './deps.ts';

export async function updateJsonFile(path: string, update: Record<string, unknown>) {
    const json = JSON.parse(await Deno.readTextFile(path));
    await Deno.writeTextFile(path, JSON.stringify(deepMerge(json, update), null, 2));
}

export async function run(command: string, cwd?: string) {
    // todo allow change the stdout using env
    // todo set std out err to "null"
    const process = Deno.run({cmd: command.split(' '), cwd});
    await process.status();
}

export async function rm(path: string, pattern: RegExp) {
    for await (const {name} of Deno.readDir(path)) {
        if (null !== name.match(pattern)) {
            await Deno.remove(`${path}/${name}`);
        }
    }
}
