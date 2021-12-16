import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useMst } from 'stores/RootStore';

import { Container } from './Home.styles';

const Home = (): JSX.Element => {
  const { counter } = useMst();
  return (
    <Container>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
        <p>The counter has been presssed {counter.count} times</p>
        <button onClick={counter.increment}>increment the counter</button>
        <button onClick={counter.decrement}>decrement the counter</button>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </Container>
  );
};

export default observer(Home);
