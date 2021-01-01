interface UrlServiceRequest {
  page: string | string[];
  search?: string;
}

const UrlService = {
  execute({ page, search }: UrlServiceRequest): string {
    return `${!!search ? `?search[name]=${search}` : ''}` +
      `${!!search ? '&' : '?'}page=${page}`;
  }
}

export default UrlService;