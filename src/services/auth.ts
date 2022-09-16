import { Auth } from "../interfaces/auth";
import { User } from "../interfaces/user";
import { rewriteJSON } from "../utils/rewriteJSON";
import { readJSON } from "../utils/readJSON";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { AppError } from "../exceptions/AppError";
import { HttpCode } from "../exceptions/HttpCode";

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

  return false
}

function loggingExistingUser({ email, password }: Auth): boolean {
  let user: User | undefined = users.find((u) => u.email === email);
  if (user != undefined) {
    const isPasswordCorrect: boolean = verified(
      user.password,
      encrypt(user.password)
    );
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
