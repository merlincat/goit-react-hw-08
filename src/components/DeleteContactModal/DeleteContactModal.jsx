import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { FaTimesCircle } from 'react-icons/fa';
import css from './DeleteContactModal.module.css';
import toast from 'react-hot-toast';

const DeleteContactModal = ({ data, onClose }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(data.id))
      .unwrap()
      .then(value => {
        toast.success(
          `Contact ${
            value.name ? value.name : 'deleted contact'
          } deleted from your list!`
        );
        onClose();
      })
      .catch(() => {
        toast.error('Oops, something went wrong, please try again');
        onClose();
      });
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className={css.modalOverlay}>
      <div className={css.modal}>
        <button className={css.closeButton} onClick={handleClose}>
          <FaTimesCircle />
        </button>
        <p>Are you sure you want to delete this contact?</p>
        <div className={css.buttonContainer}>
          <button onClick={handleDelete} className={css.deleteButton}>
            Confirm
          </button>
          <button onClick={handleClose} className={css.cancelButton}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteContactModal;
