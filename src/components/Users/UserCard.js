import { Col, Row } from "antd";
import React from "react";
import UserTable from "./UserTable";
const UserCard = () => {
  const verified = true;
  return (
    <div className="card-wrapper">
      <Row type="flex" justify="center" align="middle">
        <Col span={6} className="border-right">
          <div className="flex-vertical center">
            <img
              className="user-avatar"
              src={require("../../img/showcase.jpg")}
              alt="User Avatar"
            ></img>
            <label>Gary Hsiao</label>
          </div>
        </Col>
        <Col span={18}>
          <div className="flex-vertical center">
            <div className="align-left">
              <p>
                <span className="bold">Email</span> {verified ? "check" : "x"}{" "}
                gary@gary.com
              </p>
              <p>
                <span className="bold">User Id</span>{" "}
                dkfadjsfjkasdhfjkadhfkajsdhf
              </p>
            </div>
            <div className="user-info border-top">
              <table>
                <tbody>
                  <tr>
                    <td className="bold">Mobile Phone</td>
                    <td className="bold">Birthday</td>
                    <td className="bold">Username</td>
                  </tr>
                  <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td className="bold">Preferred language</td>
                    <td className="bold">Created</td>
                    <td className="bold">Last Login</td>
                  </tr>
                  <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <UserTable></UserTable>
        </Col>
      </Row>
    </div>
  );
};

export default UserCard;
