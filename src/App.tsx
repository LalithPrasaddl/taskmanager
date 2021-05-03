import { connect } from "react-redux";

import { RootState } from "./store";
import './App.scss';

import Home from './components/Home'
import Modal from './components/Modal'

const mapStateToProps = (state:RootState) => ({
  showModal: state.modal.showModal
});

const connector = connect(mapStateToProps);

type AppProps = {
  showModal: boolean;
}

function App({
  showModal = false
}:AppProps) {
  return (
    <div>
      <header className="bg-primary color-white">
        <h2>Task Manager</h2>
      </header>
      <Home />
      {
        showModal &&
        <Modal />
      }

    </div>
  )
}

export default connector(App);
