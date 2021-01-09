import { Module } from '@nestjs/common';
import {ProjectsService} from "./projects.service";
import {ProjectsController} from "./projects.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {Project, ProjectSchema} from "./schemas/projects.schema";

@Module({
    providers: [ProjectsService],
    controllers: [ProjectsController],
    imports: [MongooseModule.forFeature([
        {name: Project.name, schema: ProjectSchema}
    ])]
})
export class ProjectsModule {}
