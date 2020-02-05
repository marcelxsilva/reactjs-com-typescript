import { Reducer } from 'redux';
import { RepositoryState, RepositoryTypes } from './types';

const InitialState: RepositoryState = {
  data: [{
    id: 1,
    name: 'Teste',
  }],
  error: false,
  loading: false,
};

const reducer: Reducer<RepositoryState> = (state = InitialState, action) => {
  switch (action.type) {
    case RepositoryTypes.LOAD_REQUEST:
      return { ...state, loading: true };

    case RepositoryTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };

    case RepositoryTypes.LOAD_FAILURE:
      return {
        ...state, loading: false, error: true, data: [],
      };

    default:
      return state;
  }
};

export default reducer;
