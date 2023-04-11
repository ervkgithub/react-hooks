import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h2 className="mt-4 p-0">All Hooks List</h2>
      <ul className="mt-2">
        <li>
          <Link to="/useState">useState</Link>
        </li>
        <li>
          <Link to="/useReducer">useReducer</Link>
        </li>
        <li>
          <Link to="/useEffect">useEffect</Link>
        </li>
        <li>
          <Link to="/useRef">useRef</Link>
        </li>
        <li>
          <Link to="/useLayEffect">useLayoutEffect</Link>
        </li>
        <li>
          <Link to="/useImperHandle">useImperativeHandle</Link>
        </li>
        <li>
          <Link to="/useContext">useContext</Link>
        </li>
        <li>
          <Link to="/useMemo">useMemo</Link>
        </li>
        <li>
          <Link to="/useCallback">useCallback</Link>
        </li>
        <li>
          <Link to="/useDebugValue">useDebugValue</Link>
        </li>
        <li>
          <Link to="/useDeferredValue">useDeferredValue</Link>
        </li>
        <li>
          <Link to="/useTransition">useTransition</Link>
        </li>
        <li>
          <Link to="/useId">useId</Link>
        </li>
        <li>
          <Link to="/library">Library Hooks</Link>
        </li>
        <li>
          <Link to="/customhooks">Custom Hooks</Link>
        </li>
       
        
      </ul>
    </>
  );
};

export default Home;
