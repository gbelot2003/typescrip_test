import { Request } from "express"
export interface IRequest extends Request {
  body: Object // or any other type
}