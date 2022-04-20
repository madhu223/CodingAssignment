import TilesDemo from './tilesDemo';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

export default function TilesView() {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/');
  }
  return (
    <div>
      <Link to='/gridView'>GridView</Link>
      <main style={{ padding: '1rem 0' }}>
        <h2>Tiles View</h2>
        <TilesDemo></TilesDemo>
      </main>
      <div>
        <button onClick={handleClick}>LogOut</button>
      </div>
    </div>
  );
}
