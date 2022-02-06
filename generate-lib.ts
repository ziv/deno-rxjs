#!/usr/bin/env -S deno run --allow-read --allow-run --allow-net --allow-write
import { updateJsonFile, run, rm } from './utils.ts';

const VER = Deno.args.length ? Deno.args[0] : '7.5.2';

const PATH = await Deno.makeTempDir({prefix: 'rxjs'});
const DST_PATH = `${PATH}/deno_dist`;
const PKJ_PATH = `${PATH}/package.json`;
const TSC_PATH = `${PATH}/tsconfig.json`;
const LIB_PATH = 'lib1';

const CLONE_CMD = `git clone -b ${VER} --single-branch git@github.com:ReactiveX/rxjs.git ${PATH}`;
const INSTALL_CMD = 'npm install';
const DENOIFY_CMD = 'npx denoify';

console.log(`working directory: ${PATH}`);
console.log(`rxjs version: ${VER}`);

await run(CLONE_CMD);
console.log('rxjs cloned');

await updateJsonFile(PKJ_PATH, {deno: {index: 'src/index.ts', out: 'deno'}});
console.log('package.json updated');

await updateJsonFile(TSC_PATH, {compilerOptions: {outDir: 'dist'}});
console.log('tsconfig.json updated');

await run(INSTALL_CMD, PATH);
console.log('dependencies installed');

await run(DENOIFY_CMD, PATH);
console.log('denoify completed');

await rm(DST_PATH, /\.json$/);

await Deno.rename(DST_PATH, LIB_PATH);
console.log('lib moved');

// todo merge readme
