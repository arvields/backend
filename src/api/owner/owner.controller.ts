import {
  Body,
  Controller,
  Get,
  Put,
  Post,
  Param,
  Delete,
} from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerDto, OwnerUpdateDto } from './data/owner.dto';

@Controller('owner')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  @Get()
  async testFunction() {
    return await this.ownerService.getAllOwner();
  }

  @Post()
  async createOwner(@Body() ownerDto: OwnerDto) {
    return await this.ownerService.createOwner(ownerDto);
  }

  @Put(':owner_id')
  async updateOwnerInformation(
    @Param('owner_id') ownerId: string,
    @Body() ownerUpdateDto: OwnerUpdateDto,
  ) {
    return await this.ownerService.updateOwnerInformation(
      ownerUpdateDto,
      ownerId,
    );
  }

  @Delete(':owner_id')
  async deleteOwner(@Param('owner_id') id: string) {
    return await this.ownerService.deleteOwner(id);
  }
}
