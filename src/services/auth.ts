import { Auth } from "../interfaces/auth";
import { User } from "../interfaces/user";
import { rewriteJSON } from "../utils/rewriteJSON";
import { readJSON } from "../utils/readJSON";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handler";

let users: User[] = getAllUsers();
function registerNewUser(user: User): boolean {
  let isRegister: User | undefined = users.find((u) => u.email === user.email);
  if (isRegister === undefined) {
    users.push({
      email: user.email,
      password: encrypt(user.password),
      name: user.name,
    });
    rewriteJSON("./users.json", users);
    return true;
  }

  return false;
}

function loggingExistingUser(auth: Auth): boolean {
  let user: User | undefined = users.find((u) => u.email === auth.email);
  if (user != undefined) {
    const isPasswordCorrect: boolean = verified(auth.password, user.password);
    const token = generateToken(auth.email);
    if (isPasswordCorrect) {
      return true;
    }
  }
  return false;
}

function getSpecificUser(email: string): User | undefined {
  return getAllUsers().find((u) => u.email === email);
}

function getAllUsers(): User[] {
  return readJSON<User>("./users.json");
}

export { registerNewUser, loggingExistingUser, getAllUsers, getSpecificUser };
