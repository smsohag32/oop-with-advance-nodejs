import UserDao from "../../../data/dao/userDao";
import RequestUserDTO from "../../dto/request/requestUserDTO";
import RequestUserMapper from "../../mapper/request/requestUserMapper";
import UserService from "../interfaces/userService";

const userDao = new UserDao();
class UserServiceImpl implements UserService {
   public addUser(dto: RequestUserDTO) {
      console.log(`User added: ${dto.name}, ${dto.email}`);
      const user = RequestUserMapper.userDtoToEntity(dto);
      userDao.addUser(user);
      return { message: "User added", user: user };
   }
}

export default UserServiceImpl;
