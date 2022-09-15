import { hash, compare, hashSync, compareSync } from "bcryptjs"

// Receive password in plaint text and hash it.
function encrypt(plainPassword: string) {
    return hashSync(plainPassword, 8)
}

function verified(plainPassword: string, passwordHash: string): boolean {
    return compareSync(plainPassword, passwordHash)
}

export { encrypt, verified }