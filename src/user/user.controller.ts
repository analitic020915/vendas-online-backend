import { Body, Controller, Post } from '@nestjs/common';
import { get } from 'http';
import type {CreateUserDto} from './dtos/createUser.dto.js';
import { UndefinedForwardRefException } from '@nestjs/core/internal';

@Controller('user')
export class UserController {
@Post()
async createUser(
    @Body() createUser: CreateUserDto){
   return{ ...createUser,
    password:undefined,
   };
}


}
