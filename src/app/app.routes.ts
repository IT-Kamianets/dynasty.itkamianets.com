import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
	},
	{
		path: 'menu',
		loadComponent: () => import('./pages/menu/menu.component').then((m) => m.MenuComponent),
	},
	{
		path: 'feedback',
		loadComponent: () => import('./pages/feedback/feedback.component').then((m) => m.FeedbackComponent),
	},
	{
		path: '**',
		loadComponent: () => import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
	},
];
