import { deepMerge, green, printf } from './deps.ts';

export async function updateJsonFile(path: string, update: Record<string, unknown>) {
    const json = JSON.parse(await Deno.readTextFile(path));
    await Deno.writeTextFile(path, JSON.stringify(deepMerge(json, update), null, 2));
}

export async function run(command: string, cwd?: string) {
    const process = Deno.run({cmd: command.split(' '), stderr: "null", stdout: "null", cwd});
    await process.status();
}

export async function rm(path: string, pattern: RegExp) {
    for await (const {name} of Deno.readDir(path)) {
        if (null !== name.match(pattern)) {
            await Deno.remove(`${path}/${name}`);
        }
    }
}

const DONE = green('✓');

export async function log(message: string, promise: Promise<unknown>) {
    printf(message);
    await promise;
    printf(`  ${DONE}\n`);
}
