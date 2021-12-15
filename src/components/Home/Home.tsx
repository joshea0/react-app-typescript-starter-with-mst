import { Link } from 'react-router-dom';

import { Container } from './Home.styles';

export default (): JSX.Element => {
  return (
    <Container>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </Container>
  );
};
