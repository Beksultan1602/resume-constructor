import {Header, Footer, Avatar, Title, Description} from './components'
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 3rem 2rem;
  background-color: #fff;
  border: 1px solid #ececec;
  box-shadow: 5px 7px 10px 4px #ececec;
  border-radius: 14px;
`
const Row = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: ${(props) => (props.itemsCenter ? 'center' : 'start')};
  margin: 2rem 0;
`
const Content = styled.div`
  flex: 3;
  margin-left: 1rem;
`
const Sidebar = styled.div`
  flex: 1;
  margin-right: 1rem;
`

function App() {
  const handlePrint = () => {

  }
  const handleAvatarClick = () => {

  }
  return (
    <div className="ui-wrapper">
      <Header onClick={handlePrint}/>
      <div className="ui-content-wrapper">
        <Wrapper className="ui-section">
          <div className="ui-container">
            <Row itemsCenter>
              <Avatar onClick={handleAvatarClick}/>
              <div>
                <Title>Hello</Title>
                <Description isPrimary>Hello desc</Description>

              </div>
            </Row>
            <Row>
              <Sidebar>
                sidebar
              </Sidebar>
              <Content>content</Content>
            </Row>
            
          </div>
        </Wrapper>
      </div>
      <Footer />
    </div>
  );
}

export default App;
