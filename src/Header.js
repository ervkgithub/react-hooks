import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-info p-3 mb-3">

        <Link to="/home" className="btn btn-outline-success mx-2 mb-3">
          Home
        </Link>

        <Link to="/useState" className="btn btn-outline-success mx-2 mb-3">
          useState
        </Link>

        <Link to="/useReducer" className="btn btn-outline-success mx-2 mb-3">
          useReducer
        </Link>

        <Link to="/useEffect" className="btn btn-outline-success mx-2 mb-3">
          useEffect
        </Link>

        <Link to="/useRef" className="btn btn-outline-success mx-2 mb-3">
          useRef
        </Link>

        <Link to="/useLayEffect" className="btn btn-outline-success mx-2 mb-3">
          useLayoutEffect
        </Link>

        <Link to="/useImperHandle" className="btn btn-outline-success mx-2 mb-3">
          useImperativeHandle
        </Link>

        <Link to="/useContext" className="btn btn-outline-success mx-2 mb-3">
          useContext
        </Link>

        <Link to="/useMemo" className="btn btn-outline-success mx-2 mb-3">
          useMemo
        </Link>

        <Link to="/useCallback" className="btn btn-outline-success mx-2 mb-3">
          useCallback
        </Link>

        <Link to="/useDebugValue" className="btn btn-outline-success mx-2 mb-3">
          useDebugValue
        </Link>

        <Link to="/useDeferredValue" className="btn btn-outline-success mx-2 mb-3">
          useDeferredValue
        </Link>

        <Link to="/useTransition" className="btn btn-outline-success mx-2 mb-3">
          useTransition
        </Link>

        <Link to="/useId" className="btn btn-outline-success mx-2 mb-3">
          useId
        </Link>

        <Link to="/library" className="btn btn-outline-success mx-2 mb-3">
          Library Hooks
        </Link>

        <Link to="/customhooks" className="btn btn-outline-success mx-2 mb-3">
          Custom Hooks
        </Link>

      </div>
    </>
  );
};

export default Header;
