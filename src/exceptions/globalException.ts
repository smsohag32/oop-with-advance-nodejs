// src/exceptions/handlers/errorHandler.ts

import { Request, Response, NextFunction } from "express";
import { ApiError } from "./handelers/apiError";

export function errorHandler(
   err: Error | ApiError,
   req: Request,
   res: Response,
   _next: NextFunction
) {
   const statusCode = err instanceof ApiError ? err.statusCode : 500;
   const message = err.message || "Internal Server Error";

   console.error("💥 Error:", {
      message,
      stack: err.stack,
   });

   res.status(statusCode).json({
      success: false,
      message,
   });
}
