interface CardProps {
  children: React.ReactNode,
  isFeatured?: boolean,
  className?: string
}

const Card: React.FC<CardProps> = (props) => {
  const { children, isFeatured, className } = props
  
  return (
    <div
      className={
        `card${isFeatured ? ' card--featured' : ''}${className ? ' ' + className : ''}`
      }
    >
      {children}
    </div>
  )
}

export { Card };
