class RequestUserDTO {
   constructor(
      public name: string,
      public email: string
   ) {
      this.name = name;
      this.email = email;
   }
}

export default RequestUserDTO;
