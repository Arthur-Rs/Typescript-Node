import { startOfHour, parseISO } from 'date-fns';

// ==> Models
import AppointmentModel from '../model/appointment.model';

// ==> Repositories
import AppointmentRepositories from '../repositories/appointment.repo';

// ==> Interfaces
interface RequestDTO {
  name: string;
  date: string;
}

class CreateAppointmentService {
  private AppointmentRepository: AppointmentRepositories;

  constructor(AppointmentRepositories: AppointmentRepositories) {
    this.AppointmentRepository = AppointmentRepositories;
  }

  public execute({ name, date }: RequestDTO): AppointmentModel {
    const parseDate = parseISO(date);
    const appointmentDate = startOfHour(parseDate);

    const findAppointInSameDate = this.AppointmentRepository.findByDate(
      appointmentDate,
    );

    if (findAppointInSameDate) {
      throw Error('This appointment is alredy booked');
    }

    const Appointment = this.AppointmentRepository.create({
      name,
      date: appointmentDate,
    });

    return Appointment;
  }
}

export default CreateAppointmentService;
