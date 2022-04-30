import yargs from 'https://deno.land/x/yargs/deno.ts'
import { Arguments } from 'https://deno.land/x/yargs/deno-types.ts'
import { challengeOne } from "./challenges/setOne/challengeOne.ts";
import { challengeTwo } from "./challenges/setOne/challengeTwo.ts"

function main() {

    parseArgs();

}

function parseArgs(): Arguments {
    return yargs(Deno.args)
        // Yargs says to use an Any type for this, so yikes I guess
        // deno-lint-ignore no-explicit-any
        .command("one", "Cryptopals Set One", (yargs: any) => 
            yargs
            .command("one", "Cryptopals Challenge 1-1", {}, challengeOne)
            .command("two", "Cryptopals Challenge 1-2", {}, challengeTwo)
            .demandCommand(1)
        )
        .help()
        .strictCommands()
        .demandCommand(2)
        .parse()
}

main()