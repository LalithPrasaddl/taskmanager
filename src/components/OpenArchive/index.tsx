import { connect } from "react-redux";

import { RootState } from "../../store";
import {setModal} from '../../store/modalSlice'
import Task from "../Task"
import "./index.scss"

const mapStateToProps = (state:RootState) => ({
  archiveTasks: state.task.archiveTasks,
  selectedTaskGroup: state.task.selectedTaskGroup
});
const mapDispatch = {
  setModal,
};
const connector = connect(mapStateToProps, mapDispatch);

type OpenArchiveProps = {
  archiveTasks: any,
  selectedTaskGroup: string;
  setModal: Function;
}

function OpenArchive({
  archiveTasks,
  selectedTaskGroup,
  setModal
}:OpenArchiveProps) {
  const tasks  = archiveTasks[selectedTaskGroup]
  return (
    <div className="bg-white open-archive-wrapper">
      <div className="close-btn-wrapper">
      <button onClick={() => setModal({
        showModal: false,
        modalScreen: null
      })} className="bg-black color-white border-black">Close</button>
      </div>
      <div className="archive-task-wrapper">
        {
            tasks && Object.keys(tasks).length > 0 &&
            Object.keys(tasks).map((taskId:string) => {
            const task:any = tasks[taskId]
            return (
              <Task
                key={taskId}
                task={task}
                taskId={taskId}
                nextTask={null}
                nextTaskName={'Not Started'}
                page="open_archive"
               />
             )
          })
        }
      </div>
      {
        (!tasks || Object.keys(tasks).length === 0) &&
        <div className="text-center">
          <h1>No tasks in archive for the selected Task Group</h1>
          <button onClick={() => setModal({
            showModal: false,
            modalScreen: null
          })} className="bg-black color-white border-black">Close</button>
        </div>
      }
    </div>
  )
}

export default connector(OpenArchive);
