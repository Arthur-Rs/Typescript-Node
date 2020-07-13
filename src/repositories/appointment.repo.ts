// ==> Models

import AppointmentModel from '../model/appointment.model';
import { isEqual } from 'date-fns';

interface AppointmetCreateDTO {
  name: string;
  date: Date;
}

class AppointmentRepository {
  private appointments: AppointmentModel[];

  constructor() {
    this.appointments = [];
  }

  public findByDate(date: Date): AppointmentModel | null {
    const ExistAppointment = this.appointments.find(appoint => {
      return isEqual(appoint.date, date);
    });

    return ExistAppointment || null;
  }

  public get(): AppointmentModel[] {
    return this.appointments;
  }

  public create({ name, date }: AppointmetCreateDTO): AppointmentModel {
    const appointment = new AppointmentModel({ name, date });

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentRepository;
