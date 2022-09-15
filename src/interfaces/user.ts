import { Auth } from "./auth"

interface User extends Auth {
    name: string
}

export { User }