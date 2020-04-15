import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { DompetdetailService } from './dompetdetail.service';
import { CreateDompetdetailDTO } from './dto/create-dompetdetail.dto';

@Controller('dompetdetail')
export class DompetdetailController {
    constructor(private dompetdetailService: DompetdetailService) {}

    //add a dompet detail
    @Post('/create')
    async addDompetdetail(@Res() res, @Body() createDompetdetailDTO: CreateDompetdetailDTO) {
        const dompetdetail = await this.dompetdetailService.addDompetdetail(createDompetdetailDTO);
        return res.status(HttpStatus.OK).json({
            message: "Dompet detail has been created successfully",
            dompetdetail
        })
    }

    // Retrieve dompet detail list
    @Get('dompetdetails')
    async getAllDompetdetail(@Res() res) {
        const dompetdetails = await this.dompetdetailService.getAllDompetdetail();
        return res.status(HttpStatus.OK).json(dompetdetails);
    }

    // Fetch a particular dompet detail using ID
    @Get('dompetdetail/:dompetdetailID')
    async getDompetdetail(@Res() res, @Param('dompetdetailID') dompetdetailID) {
        const dompetdetail = await this.dompetdetailService.getDompetdetail(dompetdetailID);
        if (!dompetdetail) throw new NotFoundException('Dompet detail does not exist!');
        return res.status(HttpStatus.OK).json(dompetdetail);
    }

    //Get dompet id by email
    @Get('dompetdetailbyemail/:email')
    async getDompetByEmail(@Res() res, @Param('email') email) {
        const dompetdetails = await this.dompetdetailService.getDompetByEmail(email);
        if (!dompetdetails) throw new NotFoundException('Dompet detail does not exist!');
        return res.status(HttpStatus.OK).json(dompetdetails);
    }

    //Get dompet id not paid by email limit 10
    @Get('dompetnotpaid/:email')
    async getDompetNotpaid(@Res() res, @Param('email') email) {
        const dompetdetails = await this.dompetdetailService.getDompetNotPaid(email);
        if (!dompetdetails) throw new NotFoundException('Dompet detail does not exist!');
        return res.status(HttpStatus.OK).json(dompetdetails);
    }

    //Get all dompet id not paid by email
    @Get('alldompetnotpaid/:email')
    async getAllDompetNotpaid(@Res() res, @Param('email') email) {
        const dompetdetails = await this.dompetdetailService.getAllDompetNotPaid(email);
        if (!dompetdetails) throw new NotFoundException('Dompet detail does not exist!');
        return res.status(HttpStatus.OK).json(dompetdetails);
    }

    //Get 10 dompet history
    @Get('getdompethistories/:email')
    async getDompetHistories(@Res() res, @Param('email') email){
        const dompetdetails = await this.dompetdetailService.getDompetHistory(email);
        if(!dompetdetails) throw new NotFoundException('Dompet detail does not exist!');
        return res.status(HttpStatus.OK).json(dompetdetails);
    }

    // Update a dompet details
    @Put('/update')
    async updateDompetdetail(@Res() res, @Query('dompetdetailID') dompetdetailID, @Body() createDompetdetailDTO: CreateDompetdetailDTO) {
        const dompetdetail = await this.dompetdetailService.updateDompetdetail(dompetdetailID, createDompetdetailDTO);
        if (!dompetdetail) throw new NotFoundException('Dompet detail does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Dompet detail has been successfully updated',
            dompetdetail
        });
    }

    // Delete a dompet detail
    @Delete('/delete')
    async deleteDompetdetail(@Res() res, @Query('dompetdetailID') dompetdetailID) {
        const dompetdetail = await this.dompetdetailService.deleteDompetdetail(dompetdetailID);
        if (!dompetdetail) throw new NotFoundException('Dompet detail does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Dompet detail has been deleted',
            dompetdetail
        })
    }

}
