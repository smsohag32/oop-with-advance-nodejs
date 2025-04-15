class User {
   private name: string;
   private email: string;

   constructor(name: string, email: string) {
      this.name = name;
      this.email = email;
   }
   public getName(): string {
      return this.name;
   }
   public getEmail(): string {
      return this.email;
   }
   public setName(name: string): void {
      this.name = name;
   }
   public setEmail(email: string): void {
      this.email = email;
   }
}

export default User;



