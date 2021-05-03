import { useState } from "react";
import { connect } from "react-redux";

import { RootState } from "../../store";
import {setModal} from "../../store/modalSlice";
import {deleteTask, updateTaskStatus, taskItemToEdit} from "../../store/taskSlice";
import { taskOptions, ARCHIVE} from "../../utils/helper";
import Task from "../Task"
import "./index.scss"

const mapStateToProps = (state:RootState) => ({
  selectedTaskGroup: state.task.selectedTaskGroup,
  taskGroups: state.task.taskGroups,
  tasks: state.task.tasks,
  people: state.user.people,
  nickname: state.user.nickname
});
const mapDispatch = {
  setModal,
  deleteTask,
  updateTaskStatus,
  taskItemToEdit,
}
const connector = connect(mapStateToProps, mapDispatch);

type DashboardProps = {
  selectedTaskGroup: string;
  taskGroups: any | {};
  tasks: any;
  setModal: Function;
  deleteTask: Function;
  updateTaskStatus: Function;
  taskItemToEdit: Function;
  people: Array<string>;
  nickname: string;
}

function Dashboard({
  selectedTaskGroup = '',
  taskGroups = {},
  tasks = {},
  setModal,
  taskItemToEdit,
  people,
  nickname
}:DashboardProps) {
  const [selFilter, setSelFilter] = useState('')
  const [selFilterItem, setSelFilterItem] = useState('')
  const currTasks = tasks[selectedTaskGroup]

  function addTask() {
    setModal({
      showModal: true,
      modalScreen: 'ADD_TASK'
    })
    taskItemToEdit(null)
  }

  function checkStatus(task:any) {
    let isAdd = true
    if(selFilter && selFilterItem) {
      isAdd = false
      if(task[selFilter] === selFilterItem) {
        isAdd = true
      }
    }
    return isAdd
  }

  function renderTasks(statusKey:string, key:number) {
    return (
      <div>
        {
          Object.keys(currTasks).map((taskId:string) => {
            const task = currTasks[taskId]
            const nextTask = taskOptions.status[key + 1]
            const nextTaskName = nextTask ? nextTask.name : ARCHIVE
            const isAdd = checkStatus(task)
            if(statusKey === task.status && isAdd) {
              return (
                <Task
                  key={taskId}
                  task={task}
                  taskId={taskId}
                  nextTask={nextTask}
                  nextTaskName={nextTaskName}
                  page="dashboard"
                 />
              )
            }
            return null
          })
        }
      </div>
    )
  }

  function updateFilter(key:string) {
    if(key === selFilter) {
      setSelFilter('')
    } else {
      setSelFilter(key)
    }
    setSelFilterItem('')
  }

  function renderFilters() {
    const filterTypes = [{
      key: 'priority',
      name: 'Priority'
    }, {
      key: 'curr_assignee',
      name: 'Assignee',
    }]
    return (
      <div className="filters-wrapper">
        <div className="filters-header">
          <h4>Filters</h4>
          {
            filterTypes.map((filType) => {
              const className = filType.key === selFilter ? "bg-white color-black border-black" : "bg-black color-white border-black"
              return (
                <button className={className} onClick={() => updateFilter(filType.key)} key={'filter' + filType.key}>{filType.name}</button>
              )
            })
          }
        </div>
        {
          selFilter &&
          <div className="filters-header border-black">
            {
              selFilter === 'priority' &&
              taskOptions[selFilter].map((item:any) => {
                const className = item.key === selFilterItem ? "bg-white color-black border-black" : "bg-black color-white border-black"
                return (
                  <button className={className} onClick={() => setSelFilterItem(item.key)} key={'filterType' + item.key} >{item.name}</button>
                )
              })
            }
            {
              selFilter === 'curr_assignee' &&
              [nickname, ...people].map((name) => {
                const className = name === selFilterItem ? "bg-white color-black border-black" : "bg-black color-white border-black"
                return (
                  <button className={className} onClick={() => setSelFilterItem(name)} key={'filterType' + name} >{name}</button>
                )
              })
            }
          </div>
        }
      </div>
    )
  }

  if(selectedTaskGroup && currTasks) {
    return (
      <div className="dashboard-wrapper">
        <div className="header bg-black color-white">
          <button
            className="bg-white color-black border-primary add-task"
            onClick={addTask}>
            Add Task
          </button>
          <h3 className="title">{taskGroups[selectedTaskGroup]}</h3>
          <div />
        </div>
        {renderFilters()}
        <div className="status-wrapper">
          {
            taskOptions.status.map((st:any, index:number) => {
              return (
                <div key={st.key}>
                  <h4 className="task-title bg-primary color-white border-white">{st.name}</h4>
                  {renderTasks(st.key, index)}
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
  return (
    <div className="dashboard-wrapper text-center">No Task Groups Available. Create a Task Group to start creating tasks.</div>
  )
}

export default connector(Dashboard);
