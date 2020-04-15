import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { ArisandetailService } from './arisandetail.service';
import { CreateArisandetailDTO } from './dto/create-arisandetail.dto'; 

@Controller('arisandetail')
export class ArisandetailController {
    constructor(private arisandetailService: ArisandetailService) {}

    //add an arisan detail
    @Post('/create')
    async addArisandetail(@Res() res, @Body() createArisandetailDTO: CreateArisandetailDTO) {
        const arisandetail = await this.arisandetailService.addArisandetail(createArisandetailDTO);
        return res.status(HttpStatus.OK).json({
            message: "Arisan detail has been created successfully",
            arisandetail
        })
    }

    // Retrieve arisan detail list
    @Get('arisandetails')
    async getAllArisandetail(@Res() res) {
        const arisandetails = await this.arisandetailService.getAllArisandetail();
        return res.status(HttpStatus.OK).json(arisandetails);
    }

    // Fetch a particular arisan detail using ID
    @Get('arisandetail/:arisandetailID')
    async getArisandetail(@Res() res, @Param('arisandetailID') arisandetailID) {
        const arisandetail = await this.arisandetailService.getArisandetail(arisandetailID);
        if (!arisandetail) throw new NotFoundException('Arisan detail does not exist!');
        return res.status(HttpStatus.OK).json(arisandetail);
    }

    //Get arisan id by email
    @Get('arisandetailbyemail/:email')
    async getArisanByEmail(@Res() res, @Param('email') email) {
        const arisandetails = await this.arisandetailService.getArisanByEmail(email);
        if (!arisandetails) throw new NotFoundException('Arisan detail does not exist!');
        return res.status(HttpStatus.OK).json(arisandetails);
    }

    //Get arisan id by email limit 10
    @Get('arisannotconfirmed/:email')
    async getArisanNotConfirmed(@Res() res, @Param('email') email) {
        const arisandetails = await this.arisandetailService.getArisanNotConfirmed(email);
        if (!arisandetails) throw new NotFoundException('Arisan detail does not exist!');
        return res.status(HttpStatus.OK).json(arisandetails);
    }

    //Get all arisan id by email
    @Get('allarisannotconfirmed/:email')
    async getAllArisanNotConfirmed(@Res() res, @Param('email') email) {
        const arisandetails = await this.arisandetailService.getAllArisanNotConfirmed(email);
        if (!arisandetails) throw new NotFoundException('Arisan detail does not exist!');
        return res.status(HttpStatus.OK).json(arisandetails);
    }

    // Update a arisan details
    @Put('/update')
    async updateArisandetail(@Res() res, @Query('arisandetailID') arisandetailID, @Body() createArisandetailDTO: CreateArisandetailDTO) {
        const arisandetail = await this.arisandetailService.updateArisandetail(arisandetailID, createArisandetailDTO);
        if (!arisandetail) throw new NotFoundException('Arisan detail does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Arisan detail has been successfully updated',
            arisandetail
        });
    }

    // Delete an arisan detail
    @Delete('/delete')
    async deleteArisandetail(@Res() res, @Query('arisandetailID') arisandetailID) {
        const arisandetail = await this.arisandetailService.deleteArisandetail(arisandetailID);
        if (!arisandetail) throw new NotFoundException('Arisan detail does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Arisan detail has been deleted',
            arisandetail
        })
    }
}
