import { FaUser } from 'react-icons/fa6';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';
// import { deleteContact } from '../../redux/contacts/operations';
// import { useDispatch } from 'react-redux';
// import toast from 'react-hot-toast';
import EditContactModal from '../ModalWindow/EditContactModal';
import DeleteContactModal from '../DeleteContactModal/DeleteContactModal';

const Contact = ({ data }) => {
  // const dispatch = useDispatch();
  const [showEditModal, setShowEditModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleEditClick = () => {
    setShowEditModal(true);
  };
  // const hadleDelete = () => {
  //   dispatch(deleteContact(data.id))
  //     .unwrap()
  //     .then(value => {
  //       toast.success(
  //         `Contact ${
  //           value.name ? value.name : 'deleted contact'
  //         } deleted from your list!`
  //       );
  //     })
  //     .catch(() => {
  //       toast.error('Oops, something went wrong, please try again');
  //     });
  // };

  return (
    <>
      <div className={css.contactInfo}>
        <div className={css.contactWrap}>
          <p>
            <FaUser className={css.icon} />
            {data.name}
          </p>
          <p>
            <FaPhoneAlt className={css.icon} />
            {data.number}
          </p>
        </div>
        <div className={css.btnWrapper}>
          <button onClick={handleOpenModal} className={css.contactBtn}>
            <FaTrash />
          </button>
          {isModalOpen && (
            <DeleteContactModal data={data} onClose={handleCloseModal} />
          )}
          <button onClick={handleEditClick} className={css.contactBtn}>
            <FaEdit />
            Edit
          </button>
        </div>
      </div>
      {showEditModal && (
        <EditContactModal
          contact={data}
          onClose={() => setShowEditModal(false)}
        />
      )}
    </>
  );
};

export default Contact;
