import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import { Document} from "mongoose";

export type ProjectDocument = Project & Document

@Schema()
export class Project {
    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    img: string;

    @Prop()
    pageLink: string;

    @Prop()
    sourceLink: string;

    @Prop()
    technologies: string;

    @Prop()
    status: boolean;

    @Prop()
    createdOn: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);