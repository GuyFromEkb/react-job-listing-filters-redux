import data from '../mock/data.json';
import { JobPosition } from './JobPosition';

import { useTypeSelector } from '../hook/useTypeSelector';

const JobList = () => {

  const state = useTypeSelector(state => state.filter)

  console.log("state!", state);


  return (
    <div className='job-list'>
      {data.map(item => (
        <JobPosition key={item.id} {...item} />
      ))}
    </div>
  )
}

export { JobList };