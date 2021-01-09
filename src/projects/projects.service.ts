import { Injectable } from '@nestjs/common';
import {CreateProjectDto} from "./dto/create-project.dto";
import {InjectModel} from "@nestjs/mongoose";
import {Project, ProjectDocument} from "./schemas/projects.schema";
import {Model, Query} from "mongoose";

@Injectable()
export class ProjectsService {
    constructor(@InjectModel(Project.name) private projectModel: Model<ProjectDocument>) {
    }

    async getAll() {
        return this.projectModel.find().exec()
    }

    async getById(id: string) {
        return this.projectModel.findById(id)
    }

    create(projectDto: CreateProjectDto) {
       const newProject = new this.projectModel(projectDto)
        return newProject.save()
    }
}
