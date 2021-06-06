const WidthWrapper = ({children, width}) => {
  const widthValue = parseFloat(width) * 100;
  return (
    <div style={{ width: `${widthValue}%` }}>
      {children}
    </div>
  )
};

export default WidthWrapper;