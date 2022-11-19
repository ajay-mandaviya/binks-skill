import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components";
import { getFullName } from "./utils";

export const UserProfilesList = () => {
  const { allUsers } = useSelector((state) => state.userSlice);
  const navigate = useNavigate();

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
