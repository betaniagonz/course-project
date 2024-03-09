import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/users/model/users.schema';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { generateHash } from './utils/handleBcrypt';

@Injectable()
export class AuthService {

    constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

    public async register(createUserDto: RegisterAuthDto) {
        const {password, ...user} = createUserDto;
        const userParse = {...user, password: await generateHash(password)};
        return this.userModel.create(userParse);
      }
}
