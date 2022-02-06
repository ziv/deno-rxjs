import { updateJsonFile, run, rm, log } from './utils.ts';
import { green } from './deps.ts';

const VER = Deno.args.length ? Deno.args[0] : '7.5.2';

const PATH = await Deno.makeTempDir({prefix: 'rxjs'});
const DST_PATH = `${PATH}/deno_dist`;
const PKJ_PATH = `${PATH}/package.json`;
const TSC_PATH = `${PATH}/tsconfig.json`;
const LIB_PATH = 'lib';

const CLONE_CMD = `git clone -b ${VER} --single-branch git@github.com:ReactiveX/rxjs.git ${PATH}`;
const INSTALL_CMD = 'npm install';
const DENOIFY_CMD = 'npx denoify';

console.log(`working directory: ${green(PATH)}`);
console.log(`rxjs version: ${green(VER)}`);

await log('cloning rxjs', run(CLONE_CMD));
await log('updates package.json', updateJsonFile(PKJ_PATH, {deno: {index: 'src/index.ts', out: 'deno'}}))
await log('updates tsconfig.json', updateJsonFile(TSC_PATH, {compilerOptions: {outDir: 'dist'}}));
await log('install dependencies', run(INSTALL_CMD, PATH));
await log('run denoify', run(DENOIFY_CMD, PATH));
await log('remove tsconfig files', rm(DST_PATH, /\.json$/));
await log('moving library', Deno.rename(DST_PATH, LIB_PATH));
