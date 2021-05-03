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
}:OpenArchiveProps) {
  const tasks  = archiveTasks[selectedTaskGroup]
  return (
    <div className="bg-white open-archive-wrapper">
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
      {
        (!tasks || Object.keys(tasks).length === 0) &&
        <p className="text-center">No tasks in archive for the selected Task Group</p>
      }
    </div>
  )
}

export default connector(OpenArchive);
