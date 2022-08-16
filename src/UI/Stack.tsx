interface StackProps {
  children: React.ReactNode
  pos?: string
}

const Stack: React.FC<StackProps> = (props) => {
  const { children, pos } = props
  
  return (
    <div className='stack' style={{
      justifyContent: pos === 'center' ? 'center' : `flex-${pos}`
    }}>
      {children}
    </div>
  )
}

export { Stack }
