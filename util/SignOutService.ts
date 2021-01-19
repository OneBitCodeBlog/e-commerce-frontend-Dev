import Cookie from 'js-cookie';

const SignOutService = {
  execute(): void {
    Cookie.remove('@api-data');
  }
}

export default SignOutService;