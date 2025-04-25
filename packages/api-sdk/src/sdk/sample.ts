import { Fetcher } from './fetcher';

export class SampleSDK {
  private readonly fetcher: Fetcher;

  constructor(fetcher: Fetcher) {
    this.fetcher = fetcher;
  }

  async getSample() {
    const response = await this.fetcher.request({
      method: 'GET',
      url: '/sample',
    });
    return response.data;
  }
}
