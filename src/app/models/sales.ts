import { Client } from "./client"
import { Product } from "./product"

export class Sales {
  id? : any
  sales_products : any
  product_id? : Product
  client_id? : Client
}
