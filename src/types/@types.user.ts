export interface IUser {
  banner: string;
  pseudo: string;
  email : string;
  PPURL : string;
  name  : string;
}

export interface UserContextType {
  user: IUser|null;
  logout: () => void;
  login: ({email, password}: {email: string, password: string}) => Promise<void>;
  signup: ({email, password, name}: {email: string, password: string, name: string}) => Promise<void>;
  UpdateMyCredentialUser : ({newPassword, oldPassword}: {newPassword: string, oldPassword: string}) => Promise<unknown>;
  UpdateMyEmailUser : ({email, password}: {email: string, password: string}) => Promise<unknown>;
  UpdateMyProfilUser : ({name, pseudo}: {name?: string, pseudo?: string}) => Promise<unknown>;
  DeleteMyAccountUser: () => Promise<unknown>;
  token: string|null;
};