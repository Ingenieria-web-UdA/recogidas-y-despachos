import { useRecogidasContext } from '@context/recogidasContext';

// el componente de botones de accion, no debería ser responsable de tener por dentro los modales
// los botones solo deben de tener la responsabilidad de abrir los modales, no de contonerlos por dentro
const ActionButtons = () => {
  const { setOpenModalRecogidas, setOpenModalDespachos } =
    useRecogidasContext();

  return (
    <div className='flex items-center gap-2'>
      <button type='button' onClick={() => setOpenModalRecogidas(true)}>
        Nueva recogida
      </button>
      <button type='button' onClick={() => setOpenModalDespachos(true)}>
        Nuevo despacho
      </button>
    </div>
  );
};

export default ActionButtons;