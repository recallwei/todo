import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { shallowEqual } from "react-redux";

import { userAction } from "@store";
import { User } from "@interfaces";
import { useAppSelector, useAppDispatch } from "@hooks";

export default function UserAvatar(): JSX.Element | null {
  const navigate = useNavigate();
  const userDispatch = useAppDispatch();

  const user = useAppSelector<User | null>(
    (state) => state.user.user,
    shallowEqual
  );

  function logout() {
    localStorage.clear();
    userDispatch(userAction.updateUserInfo(null));
    navigate("/", { replace: true });
  }

  if (user) {
    return (
      <div
        className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-500 flex justify-center items-center cursor-pointer transition-colors"
        onClick={logout}
      >
        {user.avatarUrl && (
          <img
            src={user.avatarUrl}
            width="32"
            height="32"
            loading="eager"
            className="rounded-full pointer-events-none"
          />
        )}
      </div>
    );
  } else {
    return null;
  }
}
