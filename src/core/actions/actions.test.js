import { isFSA } from 'flux-standard-action';
import { requestTodos, requestTodosSuccess, requestTodosFailure } from './actions';

describe('actions', () => {
  describe('requestTodos', () => {
    it('is FSA', () => {
      expect(isFSA(requestTodos())).toEqual(true);
    });

    it('have loading meta setted to true', () => {
      const action = requestTodos();
      expect(action.meta.loading).toEqual(true);
    });
  });

  describe('requestTodosSuccess', () => {
    it('is FSA', () => {
      expect(isFSA(requestTodosSuccess())).toEqual(true);
    });
  });

  describe('requestTodosFailure', () => {
    it('is FSA', () => {
      expect(isFSA(requestTodosFailure())).toEqual(true);
    });
  });
});
