import { useDeferredValue, useMemo, useEffect } from "react";

const List = ({ input }) => {
  const List_Size = 2000;
  const DeferredInput = useDeferredValue(input);
  const list = useMemo(() => {
    const list_arry = [];
    for (let i = 0; i < List_Size; i++) {
      list_arry.push(<div key={i}>{DeferredInput}</div>);
    }
    return list_arry;
  }, [DeferredInput]);
  useEffect(() => {
    console.log(`Input ${input} \n DeferredInput ${DeferredInput}`);
  }, [input, DeferredInput]);
  return list;
};

export default List;
