import React from 'react'
import Modal from './Modal';
import { useRecogidasContext } from '@context/recogidasContext';

const ModalDespachos = () => {
    const {openModalDespachos, setOpenModalDespachos} = useRecogidasContext();
  return (
    <Modal
    open={openModalDespachos}
    setOpen={setOpenModalDespachos}
    modalTitle='Crear nuevo Despacho'
    >
        <div>Este es el modal de despachos</div>
    </Modal>
  )
}

export {ModalDespachos};