

export function byteArrayEq(arrayA: Uint8Array, arrayB: Uint8Array): boolean {
    return arrayA.length === arrayB.length && arrayA.every((value, index) => value === arrayB[index])
}