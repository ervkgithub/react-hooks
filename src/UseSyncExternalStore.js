import { useSyncExternalStore } from "react";

const UseSyncExternalStore = () => {

 // useSyncExternalStore(subscribe, getSnapshot, [getServerSnapshot])

 const width = useSyncExternalStore((listner) =>{
    window.addEventListener('resize', listner)
    return () =>{
      window.removeEventListener('resize', listner)
    }
 }, () => window.innerWidth)

  return (
    <div>
      <h3>UseSyncExternalStore Hooks Demo</h3>
      <p>Size: {width}</p>
    </div>
  )
}

export default UseSyncExternalStore