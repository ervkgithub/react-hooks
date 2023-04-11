import { Link, Outlet } from "react-router-dom";

const LibraryHooks = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <Link
            to="useSyncExternalStore"
            className="btn btn-outline-success mx-1 mb-3"
          >
            useSyncExternalStore
          </Link>
          <Link
            to="useInsertionEffect"
            className="btn btn-outline-success mx-1 mb-3"
          >
            useInsertionEffect
          </Link>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default LibraryHooks;
