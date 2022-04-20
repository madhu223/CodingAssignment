import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import GridDemo from './routes/gridDemo';
import GridView from './routes/gridView';

function Dashboard() {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/');
  }
  return (
    <div>
      <h2>Dashboard </h2>

      <h1>Assingment</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to='/'>Login</Link> |<Link to='/gridView'>GridView</Link> |{' '}
        <Link to='/tilesView'>TilesView</Link>
      </nav>
      <GridView />
      <div>
        <button onClick={handleClick}>LogOut</button>
      </div>
    </div>
  );
}

export default Dashboard;
