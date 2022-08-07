export interface Order{
  id: number,
  user: number,
  timeOfOrdering: Date,
  completionTime: Date,
  price: number,
  status: string
}
