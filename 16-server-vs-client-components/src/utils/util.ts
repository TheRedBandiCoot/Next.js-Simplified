export class ErrorHandler extends Error {
  constructor(
    message: string = 'Something Went Very Wrong',
    public statusCode: number = 404
  ) {
    super(message);
    this.statusCode = statusCode;
  }
}
