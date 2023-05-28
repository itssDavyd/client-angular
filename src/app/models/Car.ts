export class Car {
  private id: number;
  private title: string;
  private description: string;
  private price: number;
  private status: boolean;
  private createdAt: any;
  private updatedAt: any;

  constructor(id: number, title: string, description: string, price: number, status: boolean, createdAt: any, updatedAt: any) {

    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
