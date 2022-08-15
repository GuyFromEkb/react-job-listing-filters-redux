import { ReactComponent as Remove } from '../assets/images/icon-remove.svg';

interface BadgeProps {
  variant?: string,
  colorScheme?: string,
  children: React.ReactNode,
  onClear?: () => void
  onClick?: () => void
}

const Badge: React.FC<BadgeProps> = (props) => {
  const { variant = 'basic', colorScheme = 'light', children, onClear, onClick, } = props

  return (
    <div className={`badge badge--${variant} badge--${colorScheme}`} onClick={onClick} >
      <span>
        {children}
      </span>
      {
        variant === 'clearable' && (
          <div className='badge-remover' onClick={onClear}>
            <Remove />
          </div>
        )
      }
    </div>
  )
}

export { Badge }
