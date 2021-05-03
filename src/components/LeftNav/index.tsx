import { connect } from "react-redux";

import { RootState } from "../../store";
import {setModal} from "../../store/modalSlice"
import {updateSelectedTaskGroup, setEditTaskGroup} from "../../store/taskSlice"

const mapStateToProps = (state:RootState) => ({
  userId: state.user.userId,
  taskGroups: state.task.taskGroups,
  selectedTaskGroup: state.task.selectedTaskGroup
});
const mapDispatch = {
  setModal,
  updateSelectedTaskGroup,
  setEditTaskGroup
}

const connector = connect(mapStateToProps, mapDispatch);

type LeftNavProps = {
  setModal: Function;
  updateSelectedTaskGroup: Function;
  setEditTaskGroup: Function;
  taskGroups: any;
  selectedTaskGroup: string;
}

function LeftNav({
  setModal,
  updateSelectedTaskGroup,
  taskGroups = {},
  selectedTaskGroup = '',
  setEditTaskGroup
}:LeftNavProps) {
  function addTaskGroup() {
    setEditTaskGroup(null)
    setModal({
      showModal: true,
      modalScreen: 'ADD_TASK_GROUP'
    })
  }
  function editTaskGroup(e:any, taskGrpId:string) {
    e.stopPropagation()
    setModal({
      showModal: true,
      modalScreen: 'ADD_TASK_GROUP'
    })
    setEditTaskGroup(taskGrpId)
  }
  function openSettings() {
    setModal({
      showModal: true,
      modalScreen: 'OPEN_SETTINGS'
    })
  }
  function openArchive() {
    setModal({
      showModal: true,
      modalScreen: 'OPEN_ARCHIVE'
    })
  }
  return (
    <div className="left-nav-wrapper border-black">
      <div>
        <button onClick={addTaskGroup} className="add-task-group-btn bg-primary color-white border-primary">Add Task Group</button>
        <div className="task-grp-wrapper">
          {
            Object.keys(taskGroups).map((taskGrp) => {
              const className = ["border-black"]
              if(taskGrp === selectedTaskGroup) {
                className.push("bg-primary")
                className.push("color-white")
              }
              return (
                <button
                  key={taskGrp}
                  className={className.join(' ')}
                  onClick={() => updateSelectedTaskGroup(taskGrp)}>
                  {taskGroups[taskGrp]}
                  <div className="edit" onClick={(e) => editTaskGroup(e, taskGrp)}>Edit</div>
                </button>
              )
            })
          }
        </div>
      </div>
      <div className="left-nav-bottom-section">
        <button className="bg-black color-white border-black settings-btn" onClick={openArchive}>Archive</button>
        <button className="bg-white color-black border-black settings-btn" onClick={openSettings}>Settings</button>
      </div>
    </div>
  )
}

export default connector(LeftNav);
