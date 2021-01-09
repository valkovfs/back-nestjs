import {Body, Controller, Delete, Get, Param, Post, Put, Redirect} from '@nestjs/common';
import {CreateProjectDto} from "./dto/create-project.dto";
import {UpdateProjectDto} from "./dto/update-project.dto";

@Controller('projects')
export class ProjectsController {

    @Get()
    @Redirect('https://valkov.dev', 301)
    getAllProjects() {
        return 'Get Projects'
    }

    @Get(':id')
    getProject(@Param('id') id: string): string {
        return 'getOne'+ id
    }

    @Post()
    createProject(@Body() createProjectDto: CreateProjectDto): string {
        return `Name: ${createProjectDto.name}, Description ${createProjectDto.description}`
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
