import { useSelector } from 'react-redux';
import { positionsWithFilters } from 'store/position/positionSelector';
import { JobPosition } from './JobPosition';

const JobList = () => {
  const filters = useSelector(state => state.filter)
  const positions = useSelector(state => positionsWithFilters(state, filters))

  return (
    <div className='job-list'>
      {positions.map(item => <JobPosition key={item.id} {...item} />)}
    </div>
  )
}

export { JobList };
