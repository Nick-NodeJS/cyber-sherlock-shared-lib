import { TJobStatus, TJobType } from '../types';
import { TLanguage } from '../types/language';
import { IPosition } from './position';
import { IPrice } from './price';

export interface IJob {
  id: string;
  type: TJobType;
  status: TJobStatus;
  metadata: {
    description: string;
    language: TLanguage;
  };
  price: IPrice;
  position: IPosition;
  ownerId: string;
  executorId: string;
  createdAt: Date;
  updatedAt: Date;
  expiredAt: Date;
}
