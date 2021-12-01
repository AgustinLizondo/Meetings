import React, { createContext, useState } from 'react';
export const MeetingContext = createContext();

const DataProvider = ({ children }) => {

  const [meetings, setMeetings] = useState([])

  return (
      <MeetingContext.Provider value={{ meetings, setMeetings }}>
              {children}
      </MeetingContext.Provider>
  )
}

export default DataProvider;