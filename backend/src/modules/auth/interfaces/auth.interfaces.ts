export interface IEmail {
  email: string;
}

export interface ILoginValidate {
  sub: string;
  email: string;
  isAdm: boolean;
  seller: boolean;
}
