
const styleContainer = {
  alignItems: "center";
  backgroundColor: 'lightgrey';
  border: '1px';
  display: "flex";
  flexDirection: "column";
  justifyContent: "center";
  margin: "1em";
  padding: "1em";
}

const titleStyle = {

textAlign: 'center',
}

export default ({children}) => {
  let content = <div>{children}</div>
  }

  return (
    <Container>
      {title ? <Title>{title}</Title> : ''}
      {content}
    </Container>
  )
}
