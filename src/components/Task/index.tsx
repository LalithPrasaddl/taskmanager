import { connect } from "react-redux";

import { RootState } from "../../store";
import {setModal} from "../../store/modalSlice";
import {deleteTask, updateTaskStatus, taskItemToEdit} from "../../store/taskSlice";
import { ARCHIVE, NOT_STARTED} from "../../utils/helper";
import "./index.scss"

const mapStateToProps = (state:RootState) => ({
  selectedTaskGroup: state.task.selectedTaskGroup,
  taskGroups: state.task.taskGroups,
  tasks: state.task.tasks,
  people: state.user.people,
  nickname: state.user.nickname
});
const mapDispatch = {
  deleteTask,
  updateTaskStatus,
  taskItemToEdit,
  setModal
}
const connector = connect(mapStateToProps, mapDispatch);

type TaskProps = {
  task: any;
  taskId: string;
  nextTaskName: string;
  nextTask: any;
  deleteTask: Function;
  updateTaskStatus: Function;
  taskItemToEdit: Function;
  setModal: Function;
  page: string;
}

export function Task({
  task,
  taskId,
  deleteTask,
  updateTaskStatus,
  setModal,
  taskItemToEdit,
  nextTaskName,
  nextTask,
  page = ''
}:TaskProps) {
  function deleteItem(itemId:string) {
    deleteTask({
      itemId,
      page
    })
  }

  function editItem(task:any) {
    taskItemToEdit(task)
    setModal({
      showModal: true,
      modalScreen: 'ADD_TASK'
    })
  }

  function updateStatus(taskId:string, status:any) {
    updateTaskStatus({
      taskId,
      status: status ? status.key : page === 'dashboard' ? ARCHIVE : NOT_STARTED
    })
  }
  let className = 'task-item-wrapper'
  if(page === 'open_archive') {
    className += ' task-item-max'
  }
  return (
    <div key={taskId} className={className}>
      <h5 className="bg-primary color-white title border-primary">
        <span>{task.title}</span>
        <span>{task.curr_assignee}</span>
      </h5>
      <div className="task-item-content">{task.desc}</div>
      <div className="task-item-info bg-primary color-white border-white">
        <div className="border-white">{task.priority}</div>
        <div className="border-white">{task.type}</div>
        <div>{task.finish_date}</div>
      </div>
      <div className="task-item-move">
        <button onClick={() => updateStatus(taskId, nextTask)} className="bg-primary color-white">Move to <b>{nextTaskName}</b></button>
      </div>
      <div className="task-item-actions">
        <button onClick={() => deleteItem(taskId)}>Delete</button>
        <button onClick={() => editItem(task)}>Edit</button>
      </div>
    </div>
  )
}

export default connector(Task)
