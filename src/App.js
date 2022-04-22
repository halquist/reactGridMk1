import FlexDiv from './components/FlexDiv';
import { Switch, Route } from 'react-router-dom';
import './index.css'

function App() {
  return (
    <div className='page-wrapper'>
    <Switch>
      <Route path='/'>
        <div>
          <FlexDiv />
        </div>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
