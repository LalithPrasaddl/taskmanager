import { connect } from "react-redux";

import { RootState } from "./store";
import {setUserId} from './store/userSlice'
import './App.css';

import Home from './components/Home'
import LogIn from './components/LogIn'
import Modal from './components/Modal'

const mapStateToProps = (state:RootState) => ({
  userId: state.user.userId,
  showModal: state.modal.showModal
});
const mapDispatch = {
  setUserId,
};
const connector = connect(mapStateToProps, mapDispatch);

type AppProps = {
  userId: string | null;
  showModal: boolean;
}

function App({
  userId = null,
  showModal = false
}:AppProps) {
  return (
    <div>
      <header className="bg-primary color-white">
        <h2>Task Manager</h2>
      </header>
      {
        !userId &&
        <LogIn />
      }
      {
        userId &&
        <Home />
      }
      {
        showModal &&
        <Modal />
      }

    </div>
  )
}

export default connector(App);
