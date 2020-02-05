import { createStore, Store } from 'redux';
import rootReducer from './rootReducer';
import { RepositoryState } from './ducks/repositories/types';

export interface ApplicationState {
  repositories: RepositoryState
}
const store: Store<ApplicationState> = createStore(rootReducer);
export default store;
