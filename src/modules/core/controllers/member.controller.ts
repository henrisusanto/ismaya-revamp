import {
  Controller,
  Get,
  Query
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { MemberQueryPayload } from '../dto/request.member.query'

@Controller('member')
@ApiTags('member')
export class MemberController {

  @Get('query')
  @ApiResponse({ status: 200, description: 'Successful Response' })
  @ApiResponse({ status: 201, description: 'Successful Query' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  ClientSearchMember(@Query() param: MemberQueryPayload): { henri: string } {
    return { henri: param.q }
  }
}
