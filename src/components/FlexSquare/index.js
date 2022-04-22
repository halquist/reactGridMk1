const FlexSquare = ({ ident, width, height }) => {

  const divStyle = {
    width,
    height
  }
  return (
      <div className='flexDiv' id={ident} style={divStyle}>{ident}</div>
  )
};

export default FlexSquare;
