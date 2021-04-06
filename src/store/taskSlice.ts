import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

interface TaskSliceState {
  taskGroups: any;
  tasks: any;
  selectedTaskGroup: string;
  selectedTaskItemToEdit: any;
  selectedTaskGroupItemToEdit: null | string;
}
const initialState:TaskSliceState = {
  taskGroups: {},
  tasks: {},
  selectedTaskGroup: '',
  selectedTaskItemToEdit: null,
  selectedTaskGroupItemToEdit: null
}
export const taskSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addTaskGroup: (state, action) => {
      if(action.payload.taskGrpId) {
        state.taskGroups = {
          ...state.taskGroups,
          [action.payload.taskGrpId]: action.payload.name
        }
      } else {
        const taskGrpId = uuidv4()
        state.taskGroups = {
          ...state.taskGroups,
          [taskGrpId]: action.payload.name
        }
        state.tasks = {
          ...state.tasks,
          [taskGrpId]: {}
        }
        state.selectedTaskGroup = taskGrpId
      }

    },
    addTask: (state, action) => {
      if(action.payload.taskId) {
        state.tasks = {
          ...state.tasks,
          [state.selectedTaskGroup]: {
            ...state.tasks[state.selectedTaskGroup],
            [action.payload.taskId]: action.payload
          }
        }
      } else {
        const taskId = uuidv4()
        state.tasks = {
          ...state.tasks,
          [state.selectedTaskGroup]: {
            ...state.tasks[state.selectedTaskGroup],
            [taskId]: {
              ...action.payload,
              taskId
            }
          }
        }
      }
    },
    deleteTask: (state, action) => {
      let currTasks = state.tasks[state.selectedTaskGroup]
      delete currTasks[action.payload]
      state.tasks = {
        ...state.tasks,
        [state.selectedTaskGroup]: currTasks
      }
    },
    taskItemToEdit: (state, action) => {
      state.selectedTaskItemToEdit = action.payload
    },
    setEditTaskGroup: (state, action) => {
      state.selectedTaskGroupItemToEdit = action.payload
    },
    deleteTaskGroup: (state, action) => {
      delete state.taskGroups[action.payload]
      delete state.tasks[action.payload]
      state.selectedTaskGroupItemToEdit = null
      if(Object.keys(state.taskGroups).length > 0) {
        state.selectedTaskGroup = Object.keys(state.taskGroups)[0]
      } else {
        state.selectedTaskGroup = ''
      }
    },
    updateTaskStatus: (state, action) => {
      const currTask = state.tasks[state.selectedTaskGroup][action.payload.taskId]
      state.tasks = {
        ...state.tasks,
        [state.selectedTaskGroup]: {
          ...state.tasks[state.selectedTaskGroup],
          [action.payload.taskId]: {
            ...currTask,
            status: action.payload.status
          }
        }
      }
    },
    updateSelectedTaskGroup: (state, action) => {
      if(state.selectedTaskGroup !== action.payload) {
        state.selectedTaskGroup = action.payload
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTaskGroup, updateSelectedTaskGroup, addTask, deleteTask, updateTaskStatus, taskItemToEdit, setEditTaskGroup, deleteTaskGroup } = taskSlice.actions

export default taskSlice.reducer
