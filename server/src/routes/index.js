import { Router } from 'express';
import PollingUnitController from '../controllers/PollingUnit';

const { getSpecific, renderLGA, renderWard } = PollingUnitController

const routes = new Router();

routes.get('/', renderLGA);
routes.get('/lga/ward', renderWard);
routes.get('/polling-unit/:polling_unit_id', getSpecific);

export default routes;
