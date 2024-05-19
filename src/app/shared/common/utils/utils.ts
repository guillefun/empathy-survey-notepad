import { v4 as uuid } from 'uuid';

export class CommonUtils {
  static generateUUID() {
    return uuid();
  }
}
