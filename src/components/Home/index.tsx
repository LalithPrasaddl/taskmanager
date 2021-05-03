import LeftNav from '../LeftNav'
import Dashboard from '../Dashboard'

import './index.scss';

function Home() {

  return (
    <div className="home-wrapper">
      <LeftNav />
      <Dashboard />
    </div>
  )
}

export default Home;
