import { Router } from 'express';

// ==> Repositories
import AppointmentRepositories from '../repositories/appointment.repo';

// ==> Services
import CreateAppointmentService from '../services/createAppointment.service';

const routes = Router();
const AppointmentRepository = new AppointmentRepositories();

routes.get('/', (req, res) => {
  res.json({ appointments: AppointmentRepository.get() });
});

routes.post('/', (req, res) => {
  try {
    const CreateAppointment = new CreateAppointmentService(
      AppointmentRepository,
    );

    CreateAppointment.execute(req.body);

    return res.json({ message: 'Appointment created with success' });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default routes;
