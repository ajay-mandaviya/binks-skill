import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { Container } from "../../components";
import { setCurrentUser } from "./userSlice";
import { getFullName } from "./utils";

export const UserProfile = () => {
  const { username } = useParams();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.userSlice);

  const location = useLocation();
  useEffect(() => {
    dispatch(setCurrentUser(location?.state));
  }, [username, dispatch, location?.state]);
  const gender =
    currentUser?.gender?.charAt(0)?.toUpperCase() +
      currentUser?.gender?.slice(1) ?? "Not Found";
  const userImg =
    currentUser.picture?.medium ??
    "https://randomuser.me/api/portraits/med/men/75.jpg";
  const address =
    currentUser?.location?.street?.name +
    " " +
    currentUser?.location?.city +
    " " +
    currentUser?.location?.postcode +
    " " +
    currentUser?.location?.country;
  return (
    <Container btnText={"Details"}>
      {currentUser && (
        <div className="user-detail">
          <div>
            <img src={`${userImg}`} alt="user-imag" />
          </div>
          <UserDetails
            infoTitle={"Name"}
            info={getFullName(
              currentUser?.name?.title,
              currentUser?.name?.first,
              currentUser?.name?.last
            )}
          />
          <UserDetails infoTitle={"Email"} info={currentUser?.email} />
          <UserDetails infoTitle={"Gender"} info={gender} />
          <UserDetails infoTitle={"Address"} info={address} />
          <UserDetails infoTitle={"DOB"} info={"01-03"} />
        </div>
      )}
    </Container>
  );
};

function UserDetails({ infoTitle, info }) {
  return (
    <div className="text-info">
      <p>{infoTitle}</p>
      <p> {info}</p>
    </div>
  );
}
