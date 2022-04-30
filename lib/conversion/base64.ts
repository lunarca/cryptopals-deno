import { encode } from "https://deno.land/std/encoding/base64.ts"

export function bytesToB64(data: Uint8Array): string {
    return encode(data)
}