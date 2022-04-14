import { Container, Row } from 'reactstrap';
import ProblemCard from './ProblemCard';

const Problems =
  ({ reports }) => (
    <Container>
      <Row>
        <section className="vh-100 pt-5 d-flex flex-column align-items-center overflow-auto">
          {reports.map((r, i) => <ProblemCard float {...r} key={i} />)}
        </section>
      </Row>
    </Container>
  );

export default Problems;
