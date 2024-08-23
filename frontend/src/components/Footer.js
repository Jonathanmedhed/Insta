import { Container, Row, Col } from 'react-bootstrap';

const Footer = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${className ? className : ''}`}>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <p>Insta &copy; {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
