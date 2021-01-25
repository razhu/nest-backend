import { IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    private username: string;

    @IsString()
    private password: string;

    @IsString({each: true})
    private tasks: string[];
}
