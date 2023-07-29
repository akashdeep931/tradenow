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

export type { UserBody, LoginData };
