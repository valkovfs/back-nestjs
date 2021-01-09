import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ProjectsModule} from './projects/projects.module';

@Module({
    imports: [
        ProjectsModule,
        MongooseModule.forRoot(`mongodb+srv://valkov:bz0ivdDd8nphSeUb@cluster0.3aghh.mongodb.net/test?retryWrites=true&w=majority`)],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
