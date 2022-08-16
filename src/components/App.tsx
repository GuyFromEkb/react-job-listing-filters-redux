import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addPositions } from '../store/position/positionAction'
import { TheHeader } from './TheHeader'
import { FilterPanel } from './FilterPanel'
import { JobList } from "./JobList"
import data from '../mock/data.json'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addPositions(data))    
    //eslint-disable-next-line
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

export default App
