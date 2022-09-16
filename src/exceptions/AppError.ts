import { HttpCode } from "./HttpCode";

export type AppErrorArgs = {
  name?: string
  httpCode: HttpCode;
  description: string;
  isOperational?: boolean;
}

// You use your AppError class whenever you want to fail the client’s request.
export class AppError extends Error {
  public readonly httpCode: HttpCode;
  public readonly isOperational: boolean = true;
  public readonly description: string

  constructor(args: AppErrorArgs) {
    super(args.description)

    this.description = args.description
    this.name = args.name || 'Error'
    this.httpCode = args.httpCode;
    
    if (args.isOperational !== undefined) {
      this.isOperational = args.isOperational;
    }

    Object.setPrototypeOf(this, new.target.prototype);

    Error.captureStackTrace(this);
  }
}
