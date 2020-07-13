import { Router } from 'express';

const routes = Router();

interface AppointmentData {
  name: string;
  date: Date;
}

const appointments: AppointmentData[] = [];

routes.get('/', (req, res) => {
  res.json({ appointments });
});

routes.post('/', (req, res) => {
  const { name, date } = req.body;

  const data = {
    name,
    date,
  };

  appointments.push(data);

  return res.json({ message: 'Appointment created with success' });
});

export default routes;
