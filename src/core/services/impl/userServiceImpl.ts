import UserDao from "../../../data/dao/userDao";
import RequestUserDTO from "../../dto/request/requestUserDTO";
import RequestUserMapper from "../../mapper/request/requestUserMapper";
import UserService from "../interfaces/userService";

const userDao = new UserDao();

class UserServiceImpl implements UserService {
   public async addUser(dto: RequestUserDTO): Promise<any> {
      console.log(`User added: ${dto.name}, ${dto.email}`);

      const user = RequestUserMapper.userDtoToEntity(dto);

      const userId = await userDao.addUser(user);

      return {
         message: "User added",
         userId,
      };
   }
}

export default UserServiceImpl;
