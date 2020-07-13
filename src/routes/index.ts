import { Router } from 'express';

// ==> Routes
import AppointmentRoutes from './appointments.routes';

const routes = Router();

routes.use('/appointments', AppointmentRoutes);

export default routes;
