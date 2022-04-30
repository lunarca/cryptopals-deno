import { Err, Ok, Result } from "https://deno.land/x/monads@v0.5.10/result/result.ts";

export enum XorError {
    INEQUAL_LENGTHS,
}

export function xorBytes(byteA: number, byteB: number): number {
    return byteA ^ byteB
}

export function xorByteArrays(byteArrayA: Uint8Array, byteArrayB: Uint8Array): Result<Uint8Array, XorError> {

    if (byteArrayA.length !== byteArrayB.length) {
        return Err(XorError.INEQUAL_LENGTHS)
    }

    const xorArray = byteArrayA.map((value, index) => xorBytes(value, byteArrayB[index]))

    return Ok(xorArray)

}