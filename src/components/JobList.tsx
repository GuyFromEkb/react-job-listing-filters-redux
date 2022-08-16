import { useTypeSelector } from '../hook/useTypeSelector'
import { filterPositions } from '../store/position/positionSelector'
import { JobPosition } from './JobPosition'

const JobList = () => {
  const activeFilters = useTypeSelector(state => state.filter)
  const positions = useTypeSelector((state) => filterPositions(state, activeFilters))

  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition key={item.id} {...item} />
      ))}
    </div>
  )
}

export { JobList };
