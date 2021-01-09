import {
    Body,
    Controller,
    Delete,
    Get,
    Header,
    HttpCode,
    HttpStatus,
    Param,
    Post,
    Put,
    Redirect,
    Req, Res
} from '@nestjs/common';
import {CreateProjectDto} from "./dto/create-project.dto";
import {UpdateProjectDto} from "./dto/update-project.dto";
import { Request, Response} from 'express'
import {ProjectsService} from "./projects.service";

@Controller('projects')
export class ProjectsController {
    constructor(private readonly projectsService: ProjectsService) {
    }
    @Get()
    getAllProjects() {
        return this.projectsService.getAll().then((r) => console.log(r))
    }

    @Get(':id')
    getProject(@Param('id') id: string) {
        return this.projectsService.getById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Cache-Control', 'none')
    createProject(@Body() createProjectDto: CreateProjectDto) {
        this.projectsService.create(createProjectDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return 'remove' + id
    }

    @Put(':id')
    update(@Body() updateProjectDto: UpdateProjectDto, @Param('id') id: string) {
        return 'update' + id
    }


}
