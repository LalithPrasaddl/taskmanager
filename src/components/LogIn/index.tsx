import { useState } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { validate as uuidValidate } from 'uuid';

import {setUserId} from '../../store/userSlice'

const mapDispatch = {
  setUserId,
};
const connector = connect(null, mapDispatch);

type LogInProps = {
  setUserId: Function;
}

function LogIn({
  setUserId
}:LogInProps) {
  const [text, setText] = useState('')
  const [error, setError] = useState('')
  function onChange(e:any) {
    setText(e.currentTarget.value)
    setError('')
  }
  function handleLogIn() {
    if(!uuidValidate(text)) {
      setError('Invalid UUID Entered')
    } else {
      console.log('handleLogIn')
    }
  }
  function generateUUIDAndLogIn() {
    setUserId(uuidv4())
  }
  return (
    <div className="login-wrapper bg-secondary">
      <button onClick={generateUUIDAndLogIn} className="bg-black color-white border-black generate-btn">Click here to generate a UUID and Log In</button>
      <div className="or">OR</div>
      <div className="have-uuid">If you already have a UUID, then Enter below to Log In</div>
      <div>
        <input type="text" value={text} onChange={onChange} className="border-black" placeholder="Enter your UUID" />
        <button onClick={handleLogIn} className="bg-black color-white border-black">Log In</button>
      </div>
      {
        error &&
        <div className="error-message color-red">{error}</div>
      }
    </div>
  );
}

export default connector(LogIn);
