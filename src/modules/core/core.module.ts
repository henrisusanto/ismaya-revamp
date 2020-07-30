import { Module } from '@nestjs/common'
import { MemberController } from './controllers/member.controller';

@Module({
    controllers: [MemberController]
})
export class CoreModule { }