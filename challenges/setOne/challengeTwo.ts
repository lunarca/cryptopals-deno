import { xorByteArrays, XorError } from "../../lib/bitwise/xor.ts";
import { hexStringToBytes, bytesToHexString } from "../../lib/conversion/bytes.ts";
import { byteArrayEq } from "../../lib/util/array.ts";

export function challengeTwo() {
    console.log("Cryptopals challenge 1-2")

    const hexStringA = "1c0111001f010100061a024b53535009181c"
    const hexStringB = "686974207468652062756c6c277320657965"
    const xoredString = "746865206b696420646f6e277420706c6179"

    console.log("Challenge: XOR equal length arrays")
    console.log(`XOR(${hexStringA}, ${hexStringB}) === ${xoredString}`)
    console.log("Executing...")

    // These should only fail if I copypasted wrong
    const byteArrayA = hexStringToBytes(hexStringA).unwrap()
    const byteArrayB = hexStringToBytes(hexStringB).unwrap()
    const xored = hexStringToBytes(xoredString).unwrap()

    xorByteArrays(byteArrayA, byteArrayB).match({
        ok: value => {

            console.log(`Xored value: ${bytesToHexString(value)}`)
            console.log(`Passed: ${byteArrayEq(value, xored)}`)
        },
        err: error => {
            switch (error) {
                case XorError.INEQUAL_LENGTHS:
                    console.log("Error: Byte strings are not of equal lengths")
            }
        }
    })

}
