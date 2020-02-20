import React, { createContext, useEffect, useState } from "react";
// TODO - demo data
import { columns, data } from "../../demo-data/antd-table";

export const UserTableContext = createContext({});

export const UserTableProvider = props => {
  const { children } = props;
  const [activeTab, setActiveTab] = useState("mail");
  const [activeData, setActiveData] = useState([]);
  const [activeColumns, setActiveColumns] = useState([]);
  // const [allData, setAllData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // allData used as a memo

  // get data for defaultTab
  // and then get data for other tabs (maybe not)
  // if swapping between tabs - if query params are the same dont fetch data again
  // as you change tabs, swap data with activeData

  useEffect(() => {
    setActiveData(data);
    setActiveColumns(columns);
    setIsLoading(false);
  }, [activeData]);

  // useEffect(() => {
  // setActiveData(allData[activeTab]);
  // need allData in dependency because maybe we
  // have a refresh table button that updates allData
  // }, [activeTab, allData, isLoading]);

  // TODO - demo data
  const userTableContext = {
    activeTab,
    setActiveTab,
    activeData,
    activeColumns,
    isLoading
  };

  return (
    <UserTableContext.Provider value={userTableContext}>
      {children}
    </UserTableContext.Provider>
  );
};

export const { Consumer } = UserTableContext;
