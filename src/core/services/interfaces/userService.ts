import RequestUserDTO from "../../dto/request/requestUserDTO";

interface UserService {
   addUser(dto: RequestUserDTO): any;
}

export default UserService;
