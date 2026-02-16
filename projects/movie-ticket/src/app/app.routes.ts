import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: 'movies',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'movie-list',
        exposedModule: './routes'
      }).then(m => m.routes)
  },
  {
    path: 'admin',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'movie-admin',
        exposedModule: './routes'
      }).then(m => m.routes)
  }
];
