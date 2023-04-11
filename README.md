# Demo All Hooks in ReactJS

### `Node js Version v16.18.0`

## useState is used manage simple state of the single data.

## Use Reducer Hooks is similar to redux but The main difference is that Redux creates one global state container which is above your whole application and is called a store and useReducer creates an independent component co-located state container within your component. it is used to manage state of complex or multiple data.

### `JOSN URL: https://jsonplaceholder.typicode.com/comments`

## useEffect Hook is is call once every render of the component, if we call api so we can use [] to call once or we can also use state variable that will be call on every state changes 

## useRef Hook is used to easiest way toaccess or manipulate dom Elemet.

## useLayoutEffect is similar to useEffect but main difference is useLayoutEffect is call before the useEffect, means it will call before the render component

## useForwad allow us to take reference from the parents component into the chils component. wrap all cmponent into the forwardref((props, ref) => {
## return (
##  <>
##     <button className="col-md-3">Button from child</button>
##   </>
##  );
##  })

## useContext is a React Hook that lets you read and subscribe to context from your component.

## useMemo is a React Hook that lets you cache the result of a calculation between re-renders.

### `const getlongestName = useMemo(() => findLongestName(data), [data])`

### useCallback Hooks is a React Hook that lets you cache a function definition between re-renders. Like `const cachedFn = useCallback(fn, dependencies)`

### useDebugValue is a React Hook that lets you add a label to a custom Hook in React DevTools. Like `useDebugValue(value, format?)`

### useDeferredValue is a React Hook that lets you defer updating a part of the UI. Like `const deferredValue = useDeferredValue(value)`

### useTransition is a React Hook that lets you update the state without blocking the UI. Like `const [isPending, startTransition] = useTransition()`

### useId is a React Hook for generating unique IDs that can be passed to accessibility attributes. Like `const id = useId()`

### The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path> 

### useSyncExternalStore is a React Hook that lets you subscribe to an external store.

### useInsertionEffect is a version of useEffect that fires before any DOM mutations. Like `useInsertionEffect(setup, dependencies?)`


