interface UserBody {
  username: string;
  name: string;
  surname: string;
  password: string;
}

type LoginData = {
  username: string;
  password: string;
};

type LoggedUser = {
  user_id: string;
  username: string;
  name: string;
  surname: string;
};

export type { UserBody, LoginData, LoggedUser };
