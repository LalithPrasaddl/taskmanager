import { useEffect } from "react";
import { connect } from "react-redux";

import { RootState } from "../../store";
import {setModal} from '../../store/modalSlice'

import AddTask from '../AddTask'
import AddTaskGroup from '../AddTaskGroup'
import OpenSettings from '../OpenSettings'

const mapStateToProps = (state:RootState) => ({
  modalScreen: state.modal.modalScreen,
  selectedTaskItemToEdit: state.task.selectedTaskItemToEdit
});
const mapDispatch = {
  setModal,
};
const connector = connect(mapStateToProps, mapDispatch);

type ModalProps = {
  modalScreen: string | null;
  selectedTaskItemToEdit: string | null;
  setModal: Function;
}

function Modal({
  modalScreen,
  selectedTaskItemToEdit,
  setModal
}:ModalProps) {

  useEffect(() => {
    function downHandler(e:any) {
      if(e.which === 27) {
        setModal({
          showModal: false
        })
      }
    }
    window.addEventListener('keydown', downHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  }, [setModal]);

  function renderModalContent() {
    switch (modalScreen) {
      case 'ADD_TASK_GROUP':
        return <AddTaskGroup />
      case 'ADD_TASK':
        return <AddTask />
      case 'OPEN_SETTINGS':
        return <OpenSettings />
      default:
        return null
    }
  }

  function renderTitle() {
    switch (modalScreen) {
      case 'ADD_TASK_GROUP':
        return 'Add Task Group'
      case 'ADD_TASK':
        return selectedTaskItemToEdit ? 'View/Edit Task' : 'Add Task'
      case 'OPEN_SETTINGS':
        return 'Settings'
      default:
        return null
    }
  }

  return (
    <div className="modal-wrapper bg-black">
      <div className="modal-section border-black bg-white" onClick={(e) => e.stopPropagation()}>
        <h2 className="title">{renderTitle()}</h2>
        {renderModalContent()}
      </div>
    </div>
  )
}

export default connector(Modal);
