import {Result, Ok, Err} from "https://deno.land/x/monads@v0.5.10/mod.ts"

import {mapArray} from 'https://raw.githubusercontent.com/selfrefactor/rambda/master/dist/rambda.esm.js'

export enum InvalidByteStringError {
    INVALID_LENGTH,
    INVALID_CHARACTERS
}

export function hexStringToBytes(hexString: string): Result<Uint8Array, InvalidByteStringError>  {
    if (hexString.length % 2 !== 0) {
        return Err(InvalidByteStringError.INVALID_LENGTH)
    } else {
        const byteStringArrary = hexString.match(/.{2}/g) // Regex should split string into array of two-character chunks
        if (byteStringArrary === null) {
            return Ok(new Uint8Array()) // This should only be possible for length 0, which is technically valid.
        }
        
        const byteIntArray = byteStringArrary.map(byteString => parseInt(byteString, 16))

        // Check for invalid characters -- non-byte values or NaN
        if (byteIntArray.reduce<boolean>((state, current) => {
            if (isNaN(current) || current < 0 || current > 255) {
                return true
            } else {
                return state
            }
        }, false)) {
            return Err(InvalidByteStringError.INVALID_CHARACTERS)
        }

        return Ok(Uint8Array.from(byteIntArray))
    }
}


export function bytesToHexString(bytes: Uint8Array): string {
    return mapArray((byte: number) => byte.toString(16),  bytes)
        .join("")
}