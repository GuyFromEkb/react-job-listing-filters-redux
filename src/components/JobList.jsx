
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import data from '../mock/data.json';
import { JobPosition } from './JobPosition';

const JobList = () => {

  const filters = useSelector(state => state.filter)

  return (
    <div className='job-list'>
      {data.map(item => {
        const badges = [].concat(item.role, item.level, ...item.languages, ...item.tools)
        const printItem = filters.every(item => badges.includes(item))

        if (filters.length === 0)
          return <JobPosition key={item.id} {...item} />
        else if (printItem) {
          return <JobPosition key={item.id} {...item} />
        }
      })}
    </div>
  )
}

export { JobList };