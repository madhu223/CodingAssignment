import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './LoginPage';
export default function App() {
  return (
    <div>
      {/* <h1>Assingment</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to='/'>Login</Link> | <Link to='/gridView'>GridView</Link> |{' '}
        <Link to='/tilesView'>TilesView</Link>
      </nav> */}
      <LoginPage />
    </div>
  );
}
