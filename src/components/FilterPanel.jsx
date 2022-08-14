import { useSelector, useDispatch } from 'react-redux';

import { removeFilter, removeAllFilter } from 'store/filter/filterAction';
import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';


const FilterPanel = () => {
  const dispatch = useDispatch()
  const filters = useSelector(state => state.filter)

  if (filters.length === 0) {
    return null
  }
  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {filters.map(item => <Badge onClear={() => dispatch(removeFilter(item))} variant="clearable" key={item}>{item}</Badge>)}
        </Stack>

        <button className='link' onClick={() => dispatch(removeAllFilter)}>Clear</button>
      </div>
    </Card>
  )
}

export { FilterPanel };