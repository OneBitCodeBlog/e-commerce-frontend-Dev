export default interface User {
  id: number,
  name: string;
  email: string;
  profile: string;
  password?: string;
  password_confirmation?: string;
}