import GridDemo from './gridDemo';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

export default function GridView() {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/');
  }
  return (
    <div>
      <Link to='/tilesView'>TilesView</Link>
      <main style={{ padding: '1rem 0' }}>
        <h2>Grid View</h2>
        <GridDemo></GridDemo>
      </main>
      <div>
        <button onClick={handleClick}>LogOut</button>
      </div>
    </div>
  );
}
