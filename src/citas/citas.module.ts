import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Cita } from './entities/citas.entity';
import { Disponibilidad } from '../disponibilidad/entity/disponibilidad.entity';

import { CitasController } from './citas.controller';
import { CitasService } from './citas.service';
import { PsicologosModule } from '../psicologos/psicologos.module';
import { PacientesModule } from '../pacientes/pacientes.module';
import { DisponibilidadModule } from '../disponibilidad/disponibilidad.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cita, Disponibilidad]),
    forwardRef(() => PsicologosModule),
    forwardRef(() => PacientesModule),
    DisponibilidadModule,
  ],
  controllers: [CitasController],
  providers: [CitasService],
  exports: [CitasService],
})
export class CitasModule {}
