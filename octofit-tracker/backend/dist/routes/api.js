import { Router } from 'express';
export const apiRouter = Router();
apiRouter.get('/users', (_request, response) => response.json([]));
apiRouter.get('/teams', (_request, response) => response.json([]));
apiRouter.get('/activities', (_request, response) => response.json([]));
apiRouter.get('/leaderboard', (_request, response) => response.json([]));
apiRouter.get('/workouts', (_request, response) => response.json([]));
