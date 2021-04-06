import { useEffect, useState } from "react";
import { connect } from "react-redux";

import { RootState } from "../../store";
import {addTaskGroup, deleteTaskGroup} from "../../store/taskSlice"
import {setModal} from "../../store/modalSlice"

const mapStateToProps = (state:RootState) => ({
  selectedTaskGroupItemToEdit: state.task.selectedTaskGroupItemToEdit,
  taskGroups: state.task.taskGroups
});
const mapDispatch = {
  addTaskGroup,
  setModal,
  deleteTaskGroup
}
const connector = connect(mapStateToProps, mapDispatch);

type AddTaskGroupProps = {
  addTaskGroup: Function;
  setModal: Function;
  selectedTaskGroupItemToEdit: null | string;
  taskGroups: any;
  deleteTaskGroup: Function;
}

function AddTaskGroup({
  addTaskGroup,
  setModal,
  selectedTaskGroupItemToEdit,
  taskGroups,
  deleteTaskGroup
}:AddTaskGroupProps) {
  const [taskGroup, setTaskGroup] = useState('')

  useEffect(() => {
    if(selectedTaskGroupItemToEdit) {
      setTaskGroup(taskGroups[selectedTaskGroupItemToEdit])
    }
  }, [selectedTaskGroupItemToEdit, taskGroups])

  function onChange(e:any) {
    setTaskGroup(e.currentTarget.value)
  }
  function onKeyUp(e:any) {
    if(e.which === 13) {
      addGroup()
    }
  }
  function addGroup() {
    if(taskGroup.length > 0) {
      addTaskGroup({
        name: taskGroup,
        taskGrpId: selectedTaskGroupItemToEdit
      })
      setModal({
        showModal: false
      })
    }
  }

  function deleteGroup() {
    deleteTaskGroup(selectedTaskGroupItemToEdit)
    setModal({
      showModal: false
    })
  }

  return (
    <div className="add-task-group-wrapper">
      <div className="form-item">
        <h4>Task Group name</h4>
        <input type="text" value={taskGroup} onKeyUp={onKeyUp} onChange={onChange} className="border-black" placeholder="Task Group Name" autoFocus />
      </div>
      <div className="save-btn-wrapper">
        {
          selectedTaskGroupItemToEdit &&
          <button onClick={deleteGroup} className="saveBtn bg-primary color-white border-primary">Delete</button>
        }
        <button onClick={addGroup} className="saveBtn bg-primary color-white border-primary" disabled={!taskGroup}>Save</button>
      </div>
    </div>
  )
}

export default connector(AddTaskGroup);
