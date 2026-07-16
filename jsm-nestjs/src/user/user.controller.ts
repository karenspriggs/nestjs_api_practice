import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
import { ParseIntPipe } from '@nestjs/common';
import { RoleGuard } from '@/guards/role.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // GET /user
  @Get()
  getUsers(@Query('name') name: string): unknown {
    return this.userService.findAllUsers(name);
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number): unknown {
    return this.userService.getUserById(id);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto): unknown {
    return this.userService.createUser(createUserDto);
  }

  @Put(':id')
  updateUser(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): unknown {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  @UseGuards(RoleGuard)
  deleteUser(@Param('id') id: number): unknown {
    return this.userService.deleteUser(id);
  }
}
