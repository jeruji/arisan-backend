import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { ArisanService } from './arisan.service';
import { CreateArisanDTO } from './dto/create-arisan.dto';

@Controller('arisan')
export class ArisanController {
    constructor(private arisanService: ArisanService) {}

    //add an arisan
    @Post('/create')
    async addArisan(@Res() res, @Body() createArisanDTO: CreateArisanDTO) {
        const arisan = await this.arisanService.addArisan(createArisanDTO);
        return res.status(HttpStatus.OK).json({
            message: "Arisan has been created successfully",
            arisan
        })
    }

    // Retrieve arisan list
    @Get('arisans')
    async getAllArisan(@Res() res) {
        const arisans = await this.arisanService.getAllArisan();
        return res.status(HttpStatus.OK).json(arisans);
    }

    // Fetch a particular arisan using ID
    @Get('arisan/:arisanID')
    async getArisan(@Res() res, @Param('arisanID') arisanID) {
        const arisan = await this.arisanService.getArisan(arisanID);
        if (!arisan) throw new NotFoundException('Arisan does not exist!');
        return res.status(HttpStatus.OK).json(arisan);
    }

    // Update a arisan details
    @Put('/update')
    async updateArisan(@Res() res, @Query('arisanID') arisanID, @Body() createArisanDTO: CreateArisanDTO) {
        const arisan = await this.arisanService.updateArisan(arisanID, createArisanDTO);
        if (!arisan) throw new NotFoundException('Arisan does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Arisan has been successfully updated',
            arisan
        });
    }

    // Delete an arisan
    @Delete('/delete')
    async deleteArisan(@Res() res, @Query('arisanID') arisanID) {
        const arisan = await this.arisanService.deleteArisan(arisanID);
        if (!arisan) throw new NotFoundException('Arisan does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Arisan has been deleted',
            arisan
        })
    }
}
