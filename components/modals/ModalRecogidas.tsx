import { FormEvent } from 'react';
import Modal from './Modal'
import { useRecogidasContext } from '@context/recogidasContext';

const ModalRecogidas = () => {
    // me traigo los dos estados desde el contexto, y como me traigo los dos estados del contexto, no se lo tengo que pasar como prop
    const {openModalRecogidas, setOpenModalRecogidas} = useRecogidasContext();
    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
  return (
    <Modal
    open={openModalRecogidas}
    setOpen={setOpenModalRecogidas}
    modalTitle='Crear nueva recogida'
    >
        <div>
            <form onSubmit={submitForm} className='flex flex-col gap-3'>
                <label htmlFor="lote">
                    <span>Lote</span>
                    <select name="lote" defaultValue={0}>
                        <option disabled value={0}>Seleccione un lote</option>
                        <option value="1">Lote 1</option>
                        <option value="1">Lote 2</option>
                        <option value="1">Lote 3</option>
                        <option value="1">Lote 4</option>
                        <option value="1">Lote 5</option>
                        <option value="1">Lote 6</option>
                        <option value="1">Lote 7</option>
                        <option value="1">Lote 8</option>
                        <option value="1">Lote 9</option>
                        <option value="1">Lote 10</option>
                    </select>
                </label>
                <label htmlFor="date">
                    <span>Fecha</span>
                    <input type="date" name='date' />
                </label>
                <label htmlFor="racimos">
                    <span>Cantidad de racimos</span>
                    <input type="number" name='racimos' min={0} step={1} placeholder='0'/>
                </label>
                <div className='flex w-full justify-center gap-4'>
                    <button>Crear</button>
                    <button onClick={()=> setOpenModalRecogidas(false)} className='secondary'>Cancelar</button>
                </div>
            </form>
        </div>
    </Modal>
  )
}

export {ModalRecogidas};