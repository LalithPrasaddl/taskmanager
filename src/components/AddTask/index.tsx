import { useEffect, useState } from "react";
import { connect } from "react-redux";

import { RootState } from "../../store";
import {addTask} from "../../store/taskSlice"
import {setModal} from "../../store/modalSlice"
import {getDate, taskOptions} from "../../utils/helper"

const mapStateToProps = (state:RootState) => ({
  nickname: state.user.nickname,
  selectedTaskItemToEdit: state.task.selectedTaskItemToEdit,
  people: state.user.people
});
const mapDispatch = {
  addTask,
  setModal
}
const connector = connect(mapStateToProps, mapDispatch);

type AddTaskProps = {
  nickname: string;
  selectedTaskItemToEdit: string;
  addTask: Function;
  setModal: Function;
  people: Array<string>;
}

function AddTask({
  nickname,
  people,
  selectedTaskItemToEdit,
  addTask,
  setModal
}:AddTaskProps) {
  const [currTask, setCurrTask] = useState<any>({
    title: '',
    desc: '',
    type: 'task',
    priority: 'p1',
    status: 'not_started',
    comments: [],
    created_date: getDate(new Date()),
    updated_date: getDate(new Date()),
    finish_date: getDate(new Date()),
    created_by: nickname,
    curr_assignee: nickname
  })
  const [comment, setComment] = useState('')
  const [assignee, setAssignee] = useState<Array<string>>([])

  useEffect(() => {
    if(selectedTaskItemToEdit) {
      setCurrTask(selectedTaskItemToEdit)
    }
  }, [selectedTaskItemToEdit])
  useEffect(() => {
    setAssignee([nickname, ...people])
  }, [people, nickname])
  const taskItems = [{
    title: 'Title',
    key: 'title',
    type: 'input',
    required: true,
    placeholder: 'Task Title'
  }, {
    title: 'Description',
    key: 'desc',
    type: 'input',
    required: false,
    placeholder: 'Task Description'
  }, {
    title: 'Type',
    key: 'type',
    type: 'select',
    required: true,
    placeholder: 'Task Type'
  }, {
    title: 'Status',
    key: 'status',
    type: 'select',
    required: true,
    placeholder: 'Task Status'
  }, {
    title: 'Priority',
    key: 'priority',
    type: 'select',
    required: true,
    placeholder: 'Task Priority'
  }, {
    title: 'Created Date',
    key: 'created_date',
    type: 'input',
    disabled: true,
    required: true,
    format: 'date',
    placeholder: 'Task Created Date'
  }, {
    title: 'Complete By',
    key: 'finish_date',
    type: 'input',
    required: true,
    format: 'date',
    placeholder: 'Task Completion Date'
  }, {
    title: 'Updated Date',
    key: 'updated_date',
    type: 'input',
    required: true,
    format: 'date',
    placeholder: 'Task Modified Date'
  }, {
    title: 'Created By',
    key: 'created_by',
    type: 'input',
    required: true,
    disabled: true,
    placeholder: 'Task Created By'
  }, {
    title: 'Current Assignee',
    key: 'curr_assignee',
    type: 'select',
    required: true,
    placeholder: 'Task Assignee'
  }]

  function addItemTask() {
    const task = {
      ...currTask
    }
    if(comment.length > 0) {
      task.comments = [...task.comments, comment]
    }
    addTask(task)
    setModal({
      showModal: false
    })
  }

  function onChange(e:any) {
    const name = e.currentTarget.name
    const value = e.currentTarget.value
    setCurrTask({
      ...currTask,
      [name]: value
    })
  }

  return (
    <div className="add-task-wrapper">
      <div className="add-task-content">
        <div className="add-task-section">
          {
            taskItems.map((tk) => {
              const key = tk.key
              const value:any = currTask[key]
              return (
                <div key={key} className="add-task-item">
                  <h5>{tk.title} { tk.required && <span>*</span>}</h5>
                  {
                    tk.type === 'input' &&
                    <input
                      className="border-black"
                      type="text" value={value}
                      onChange={onChange}
                      name={key}
                      disabled={tk.disabled}
                      placeholder={tk.placeholder} />
                  }
                  {
                    tk.type === 'select' &&
                    <select value={value} onChange={onChange} name={key} className="border-black">
                      {
                        key !== 'curr_assignee' &&
                        taskOptions[key].map((tkOpt:any) => {
                          return (
                            <option key={'opt_' + tkOpt.key} value={tkOpt.key}>{tkOpt.name}</option>
                          )
                        })
                      }
                      {
                        key === 'curr_assignee' &&
                        assignee.map((name) => {
                          return (
                            <option key={'opt_' + name} value={name}>{name}</option>
                          )
                        })
                      }
                    </select>
                  }

                </div>
              )
            })
          }
          <div className="add-task-item">
            <h5>Comment</h5>
            <input
              className="border-black"
              type="text" value={comment}
              onChange={(e:any) => setComment(e.currentTarget.value)}
              name="comment"
              placeholder="Comment" />
          </div>
        </div>
        {
          currTask.comments.length > 0 &&
          <div className="comments-wrapper">
            <h5>Comments</h5>
            {
              currTask.comments.map((item:string) => {
                return (
                  <div key={'comment' + item} className="bg-black color-white border-white">{item}</div>
                )
              })
            }
          </div>
        }

      </div>
      <div className="save-btn-wrapper">
        <button onClick={addItemTask} className="saveBtn bg-primary color-white border-primary">
          {selectedTaskItemToEdit ? 'Update' : 'Save'}
        </button>
      </div>
    </div>
  )
}

export default connector(AddTask);
