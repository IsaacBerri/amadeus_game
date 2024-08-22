import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { QuestionsControllerService } from './services/questions-controller.service';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './routes/app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), QuestionsControllerService, HttpClientModule]
};
