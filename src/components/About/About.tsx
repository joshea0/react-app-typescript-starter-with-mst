import { Link } from 'react-router-dom';

import { Container } from './About.styles';

export default (): JSX.Element => {
  return (
    <Container>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </Container>
  );
};
