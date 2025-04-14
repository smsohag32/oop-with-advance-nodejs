import RequestUserDTO from "../../mapper/request/requestUserDTO";

class UserService {
   constructor() {}

   public addUser(dto: RequestUserDTO) {
      console.log(`User added: ${dto.name}, ${dto.email}`);

      return { message: "User added", user: dto };
   }
}

export default UserService;
