import { useDispatch } from "react-redux"
import { useTypeSelector } from "../hook/useTypeSelector"
import { removeFilter, removeAllFilter } from "../store/filter/filterAction"
import { Badge } from "../UI/Badge"
import { Card } from "../UI/Card"
import { Stack } from "../UI/Stack"

const FilterPanel = () => {
  const dispatch = useDispatch()
  const filters = useTypeSelector(state => state.filter)

  if (filters.length === 0) {
    return null
  }

  const onRemoveFilter = (filter: string) : void =>{
    dispatch(removeFilter(filter))
  }
  
  const onRemoveAllFilter = () : void => {
    dispatch(removeAllFilter)
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {
            filters.map(item =>
              <Badge
                onClear={() => onRemoveFilter(item)}
                key={item}
                variant="clearable"
              >
                {item}
              </Badge>)
          }
        </Stack>
        <button onClick={onRemoveAllFilter} className='link'>Clear</button>
      </div>
    </Card>
  )
}

export { FilterPanel }