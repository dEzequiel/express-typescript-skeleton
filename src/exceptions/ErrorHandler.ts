import { HttpCode } from "./HttpCode";
import { Response } from "express";
import { AppError } from "./AppError";

/**
 * A trusted error doesn’t take much work, you just have to send an error
 * response to the client. On the other hand, an error you can’t trust requires
 * extra steps.
 */

// AppError hierarchy from class Error
export class ErrorHandler {
  public static isTrustedError(error: unknown): boolean {
    if (error instanceof AppError) {
      return error.isOperational;
    }

    return false;
  }

  /**
   * Los unicos errores que deberian de preocuparte son aquellos de la misma
   * aplicacion, no de fuera. Por esta funcion entran aquellos errores
   * conocidos.
   */
  static handleTrustedError(error: unknown, response: Response): void {
    if (error instanceof AppError)
      response?.status(error.httpCode).json({ error });
  }

  /**
   *    
   * On the other hand, untrustworthy errors are dangerous, because they can make 
    your application behave unexpectedly. 
    Based on Node.js best practices on error handling, you should crash your application when 
    you catch such error.
   */
  static handleUntrustedError(
    error: Error | unknown,
    response?: Response
  ): void {
    if (response) { 
      response
        .status(HttpCode.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal server error" });
    }

    // console.log("Application encountered a critical error. Exiting");
    // process.exit(1);
  }
}

export const errorHandler = new ErrorHandler();
