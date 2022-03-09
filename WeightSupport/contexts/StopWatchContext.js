import React, {createContext, useContext, useState} from 'react';

const StopWatchContext = createContext(null);

export function StopWatchContextProvider({children}) {
  const [start, setStart] = useState(false);
  const [finishTime, setFinishTime] = useState(0);

  return (
    <StopWatchContext.Provider
      children={children}
      value={{
        start,
        setStart,
        finishTime,
        setFinishTime,
      }}
    />
  );
}

export function useStopWatchContext() {
  const stopWatchContext = useContext(StopWatchContext);

  if (!stopWatchContext) {
    throw new Error('StopWatchContext.Provider is not found');
  }
  return stopWatchContext;
}
