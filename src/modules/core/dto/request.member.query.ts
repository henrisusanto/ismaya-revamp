import { ApiProperty } from '@nestjs/swagger';

export class MemberQueryPayload {
  @ApiProperty({
    required: true
  })
  page: number;

  @ApiProperty({
    required: true
  })
  limit: number;

  @ApiProperty({
      required: false
  })
  q: string;
}