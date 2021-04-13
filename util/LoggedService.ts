import Cookie from 'js-cookie';

const LoggedService = {
  execute(): boolean {
    const apiData = Cookie.get('@api-data');
    return !!apiData;
  }
}

export default LoggedService;