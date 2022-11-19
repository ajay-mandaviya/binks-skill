import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "../../components";
import { getFullName } from "./utils";

export const UserProfilesList = () => {
  const { allUsers } = useSelector((state) => state.userSlice);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.authSlice);

  console.log("user", user);
  return (
    <Container btnText={"User List"}>
      {allUsers &&
        allUsers.map((ele, index) => {
          return (
            <div
              key={index}
              className="user-name"
              onClick={() => {
                navigate(
                  `/user/${getFullName(
                    ele?.name?.title,
                    ele?.name?.first,
                    ele?.name?.last,
                    true
                  )}`,
                  { state: ele }
                );
              }}
            >
              <h3>
                {getFullName(
                  ele?.name?.title,
                  ele?.name?.first,
                  ele?.name?.last
                )}
              </h3>
            </div>
          );
        })}
    </Container>
  );
};
