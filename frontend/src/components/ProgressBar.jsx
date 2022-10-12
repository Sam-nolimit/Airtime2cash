const ProgressBar = (props) => {
    const { bgcolor, completed } = props;
  
    const containerStyles = {
      height: 10,
      width: '100%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      marginTop: 10
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      transition: 'width 1s ease-in-out',
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right',
      fontSize: 1
    }
  
    const labelStyles = {
      padding: 5,
      color: '#DE3D6D',
      fontWeight: 'bold'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;