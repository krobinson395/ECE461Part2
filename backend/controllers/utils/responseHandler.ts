import {Request, Response, NextFunction} from 'express';

// Define a custom error interface
export interface CustomError extends Error {
  status: number;
  message: string;
}

// Handler function for handling errors
export const errorHandler = (
  status: number,
  message: string,
  req: Request,
  res: Response
  //next: NextFunction
): void => {
  // Set default error status and message
  //const status = err.status || 500;
  //const message = err.message || 'Internal Server Error';

  // Log the error
  //console.error(err.stack);

  // Send error response
  res.status(status).json({error: message});
};

function isEmptyObject(obj: any) {
  return JSON.stringify(obj) === '{}';
}
// Handler function for handling successful responses
export const successHandler = (
  status: number,
  data: object,
  req: Request,
  res: Response
): void => {
  if (isEmptyObject(data)) {
    res.status(200).json();
  } else {
    // Send success response
    res.status(200).json(data);
  }
};
