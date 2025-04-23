import Cita from './Cita';
import './ListadoCitas.css';

function ListadoCitas({ citas }) {
  return (
    <div className="one-half column">
      <h2>Administra tus citas</h2>
      {citas.map((cita, index) => (
        <Cita key={index} {...cita} />
      ))}
    </div>
  );
}

export default ListadoCitas;
