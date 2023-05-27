export class User {
  private id: number;
  private role: string;
  private name: string;
  private surname: string;
  private password: string;
  private email: string;

  constructor(id: number, roleuser: string, name: string, surname: string, password: string, email: string) {

    this.id = id;
    this.role = roleuser;
    this.name = name;
    this.surname = surname;
    this.password = password;
    this.email = email;
  }
}
