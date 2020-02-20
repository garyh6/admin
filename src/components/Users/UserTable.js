import { Table } from "antd";
import React, { useContext } from "react";
import TopNav from "../TopNav";
import { UserTableContext } from "./UserTableContext";

const UserTable = () => {
  const {
    activeTab,
    setActiveTab,
    activeData: data,
    activeColumns: columns,
    isLoading
  } = useContext(UserTableContext);

  return (
    <>
      {isLoading ? (
        <div>is loading</div>
      ) : (
        <>
          <TopNav activeTab={activeTab} setActiveTab={setActiveTab}></TopNav>
          <Table columns={columns} dataSource={data}></Table>
          <p>
            Last Updated: <span>XXXX-XX-XX XX:XX:XX</span>
          </p>
        </>
      )}
    </>
  );
};

export default UserTable;
