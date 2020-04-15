import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { DompetService } from './dompet.service';
import { CreateDompetDTO } from './dto/create-dompet.dto';

@Controller('dompet')
export class DompetController {
    constructor(private dompetService: DompetService) {}

    //add a dompet
    @Post('/create')
    async addDompet(@Res() res, @Body() createDompetDTO: CreateDompetDTO) {
        const dompet = await this.dompetService.addDompet(createDompetDTO);
        return res.status(HttpStatus.OK).json({
            message: "Dompet has been created successfully",
            dompet
        })
    }

    // Retrieve dompet list
    @Get('dompets')
    async getAllDompet(@Res() res) {
        const dompets = await this.dompetService.getAllDompet();
        return res.status(HttpStatus.OK).json(dompets);
    }

    // Fetch a particular dompet using ID
    @Get('dompet/:dompetID')
    async getDompet(@Res() res, @Param('dompetID') dompetID) {
        const dompet = await this.dompetService.getDompet(dompetID);
        if (!dompet) throw new NotFoundException('Dompet does not exist!');
        return res.status(HttpStatus.OK).json(dompet);
    }

    // Update a dompet details
    @Put('/update')
    async updateDompet(@Res() res, @Query('dompetID') dompetID, @Body() createDompetDTO: CreateDompetDTO) {
        const dompet = await this.dompetService.updateDompet(dompetID, createDompetDTO);
        if (!dompet) throw new NotFoundException('Dompet does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Dompet has been successfully updated',
            dompet
        });
    }

    // Delete a dompet
    @Delete('/delete')
    async deleteDompet(@Res() res, @Query('dompetID') dompetID) {
        const dompet = await this.dompetService.deleteDompet(dompetID);
        if (!dompet) throw new NotFoundException('Dompet does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Dompet has been deleted',
            dompet
        })
    }
}
