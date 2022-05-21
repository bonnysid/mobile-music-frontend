import React from 'react';
import { PlayerPage, ProfilePage, MainPage, Login } from '../pages';

export enum Routes {
    MAIN = 'MAIN',
    LOGIN = 'LOGIN',
    PLAYER = 'PLAYER',
    PROFILE = 'PROFILE',
}

export interface IRoute {
    name: Routes;
    component: React.ReactElement
}

export const PublicRoutes: IRoute[] = [
    { name: Routes.LOGIN, component: <Login /> },
    { name: Routes.MAIN, component: <MainPage /> },
    { name: Routes.PLAYER, component: <PlayerPage /> },
    { name: Routes.PROFILE, component: <ProfilePage /> },
];
