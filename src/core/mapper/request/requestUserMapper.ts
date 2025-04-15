import User from "../../../data/model/user";
import RequestUserDTO from "../../dto/request/requestUserDTO";

class RequestUserMapper {
   public static userDtoToEntity(dto: RequestUserDTO): User {
      return new User(dto.name, dto.email);
   }
}

export default RequestUserMapper;
