import { useState } from "react";
import { connect } from "react-redux";

import { RootState } from "../../store";
import {setModal} from '../../store/modalSlice'
import {updateUserInfo} from '../../store/userSlice'

const mapStateToProps = (state:RootState) => ({
  nickname: state.user.nickname,
  people: state.user.people
});
const mapDispatch = {
  setModal,
  updateUserInfo
};
const connector = connect(mapStateToProps, mapDispatch);

type OpenSettingsProps = {
  setModal: Function;
  updateUserInfo: Function;
  nickname: string;
  people: Array<string>;
}

function OpenSettings({
  setModal,
  updateUserInfo,
  nickname = '',
  people = []
}:OpenSettingsProps) {
  const [name, setName] = useState(nickname)
  const [assignee, setAssignee] = useState<Array<string>>([...people])
  const [newAssignee, setNewAssignee] = useState('')

  function handleName(e:any) {
    const value = e.currentTarget.value
    setName(value)
  }

  function addNewAssignee() {
    let currAssignee = [...assignee]
    if(currAssignee.indexOf(newAssignee) === -1 && newAssignee !== nickname && newAssignee !== name) {
      currAssignee.push(newAssignee)
    }
    setNewAssignee('')
    setAssignee(currAssignee)
  }

  function removeAssignee(name:string) {
    const index = assignee.indexOf(name)
    let currAssignee = [...assignee]
    currAssignee.splice(index, 1)
    setAssignee(currAssignee)
  }

  function save() {
    updateUserInfo({
      nickname: name,
      people: assignee,
    })
    setModal({
      showModal: false
    })
  }
  return (
    <div className="settings-wrapper">
      <div>
        <div className="form-item">
          <h5>User Nickname</h5>
          <input type="text" value={name} onChange={handleName} placeholder="User Nickname" maxLength={20} />
        </div>
        <div className="form-item">
          <h5>New Assignee</h5>
          <div>
            <input type="text" value={newAssignee} onChange={(e) => setNewAssignee(e.currentTarget.value)} placeholder="User Nickname" maxLength={20} />
            <button className="bg-primary color-white border-primary" onClick={addNewAssignee} disabled={!newAssignee}>Add Assignee</button>
          </div>
        </div>
        <div className="form-item">
          <h5>Current Assignees</h5>
          <div>
            {
              assignee.map((name) => {
                return (
                  <div key={'name' + name} className="name-item bg-primary color-white">
                    <span>{name}</span>
                    <button className="bg-white color-black border-white" onClick={() => removeAssignee(name)}>X</button>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="save-btn-wrapper">
        <button className="bg-primary color-white border-primary saveBtn" onClick={save} disabled={!name}>Update</button>
      </div>
    </div>
  )
}

export default connector(OpenSettings);
