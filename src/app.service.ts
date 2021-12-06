import { Injectable } from '@nestjs/common';

export interface RootResponse {
  isProduction: boolean;
  timestamp: number;
}

@Injectable()
export class AppService {
  getRoot(): RootResponse {
    return {
      isProduction: false,
      timestamp: new Date().getTime(),
    };
  }
}
