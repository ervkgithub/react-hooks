import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import UseState from "./UseState";
import UseEffect from "./UseEffect";
import UseContext from "./UseContext";
import UseReducer from "./UseReducer";
import UseCallback from "./UseCallback";
import UseMemo from "./UseMemo";
import UseRef from "./UseRef";
import UseImperHandle from "./UseImperHandle";
import UseLayEffect from "./UseLayEffect";

import NotFound from "./NotFound";
import LibraryHooks from "./LibraryHooks";
import UseSyncExternalStore from "./UseSyncExternalStore";
import UseInsertionEffect from "./UseInsertionEffect";
import UseDebugValue from "./UseDebugValue";
import UseDefrredValue from "./UseDeferredValue";
import UseTransition from "./UseTransition";
import UseId from "./UseId";
import CustomHooks from "./CustomHooks";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container">
          <main>
            <div className="container">
              <div className="row">
                <Routes>
                  {/*Default route*/}
                  <Route path="/" element={<Home />} />
                  {/*Default route*/}
                  <Route path="/home" element={<Home />} />
                  <Route path="/useState" element={<UseState />} />

                  <Route path="/useEffect" element={<UseEffect />} />
                  <Route path="/useContext" element={<UseContext />} />
                  <Route path="/useReducer" element={<UseReducer />} />
                  <Route path="/useCallback" element={<UseCallback />} />
                  <Route path="/useDebugValue" element={<UseDebugValue />} />
                  <Route
                    path="/useDeferredValue"
                    element={<UseDefrredValue />}
                  />
                  <Route path="/useTransition" element={<UseTransition />} />
                  <Route path="/useId" element={<UseId />} />
                  <Route path="/useMemo" element={<UseMemo />} />
                  <Route path="/useRef" element={<UseRef />} />
                  <Route path="/useImperHandle" element={<UseImperHandle />} />
                  <Route path="/useLayEffect" element={<UseLayEffect />} />

                  <Route path="library" element={<LibraryHooks />}>
                    <Route
                      path="useSyncExternalStore"
                      element={<UseSyncExternalStore />}
                    />
                    <Route
                      path="useInsertionEffect"
                      element={<UseInsertionEffect />}
                    />
                  </Route>
                  <Route path="/customhooks" element={<CustomHooks />} />
                  {/* 404/Page Not Found route*/}
                  <Route path="*" element={<NotFound />} />
                  {/*404/Page Not Found route*/}
                </Routes>
              </div>
            </div>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
