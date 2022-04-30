import { bytesToB64 } from "../../lib/conversion/base64.ts";
import { hexStringToBytes } from "../../lib/conversion/bytes.ts";

export function challengeOne() {
    console.log("Cryptopals challenge 1-1")

    const hexString = "49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d"
    const b64String = "SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t"

    console.log("Challenge: Convert hex string to base 64")
    console.log(`Hex String: ${hexString}`)
    console.log(`Base 64 String: ${b64String}`)
    console.log("Executing")

    const data = hexStringToBytes(hexString).map(bytesToB64).unwrapOr("Error in decoding")

    console.log(`Encoded hex data: ${data}`)

    if (data === b64String) {
        console.log("Matches")
    } else {
        console.log("Did not match")
    }
}
