import { logs } from './testData';

export const FETCH_LOGS = 'FETCH_LOGS';

export function fetchLogs() {
  return {
    type: FETCH_LOGS,
    payload: logs,
  }
}