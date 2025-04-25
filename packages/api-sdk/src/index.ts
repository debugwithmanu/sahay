import { Fetcher } from './sdk/fetcher';
import { SampleSDK } from './sdk/sample';

const fetcher = new Fetcher();
const sampleSDK = new SampleSDK(fetcher);

export {
  fetcher,
  sampleSDK,
};
