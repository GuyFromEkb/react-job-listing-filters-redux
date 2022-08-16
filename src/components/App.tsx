import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPositions } from '../store/position/positionAction';

import data from '../mock/data.json'
import { TheHeader } from './TheHeader';
import { FilterPanel } from './FilterPanel'
import { JobList } from "./JobList"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addPositions(data))
  }, [])

  return (
    <>
      <TheHeader />
      <div className="container">
        <FilterPanel />
        <JobList />
      </div>
    </>
  )
}

export default App;
