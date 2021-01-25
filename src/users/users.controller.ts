import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Response } from '@nestjs/common';
import { PaginationQueryDto } from 'src/common/pagination-query-dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ){}
    @Get() // @Get('admins') // will be localhost/users/admins
    findAll(
        @Query() paginationQueryDto: PaginationQueryDto
    ){
        return this.usersService.findAll();
    }
    // @Get(':id')
    // findOne(@Param() params){
    //     return params; // return typeof +params.id;
        
    // }
    @Get(':id')
    findOne(@Param('id') id: number){
        return this.usersService.findOne(''+id);        
    }
    @Post()
    create(@Body() createUserDto: CreateUserDto){
        return this.usersService.create(createUserDto);
    }
    // with express response object. Yet, youd better use the nest way
    // @Post()
    // create(@Body() body, @Response() res){
        // return res.send({name: body.name});
    // }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update(id, updateUserDto);
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        return `item removed ${id}`
    }    
}