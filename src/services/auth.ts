import { Auth } from "../interfaces/auth";
import { User } from "../interfaces/user";
import { rewriteJSON } from "../utils/rewriteJSON";
import { readJSON } from "../utils/readJSON";
import { encrypt, verified } from "../utils/bcrypt.handle";

let users: User[] = getAllUsers();
function registerNewUser({email, password, name}: User): void {
    let userIndex: number = users.findIndex((u) => u.email === email);
    if(userIndex != -1) {
        users.push({
          email,
          password: encrypt(password),
          name
        })
        rewriteJSON("./users.json", users)
    }

}

function loggingExistingUser({ email, password }: Auth) {
  let userIndex: number = users.findIndex((u) => u.email === email);
  if(userIndex != -1) {
    const isPasswordCorrect: boolean = verified(password, encrypt(password))
    if(!isPasswordCorrect) {
      return "PASSWORD_INCORRECT" 
    }

    return users.find(u => u.email === email)
  }
}

function getSpecificUser({ email }: User): User {
  return getAllUsers()[users.findIndex((u) => u.email === email)];
}

function getAllUsers(): User[] {
  return readJSON<User>("./users.json");
}

export { registerNewUser, loggingExistingUser, getAllUsers, getSpecificUser }