/**
 * Actions types
 */

export enum RepositoryTypes {
  LOAD_REQUEST = 'repositories/LOAD_REQUEST',
  LOAD_SUCCESS = 'repositories/LOAD_SUCCESS',
  LOAD_FAILURE = 'repositories/LOAD_FAILURE',
}

/**
* Data types
  Formato da informação que ficará dentro do Redux
*/
export interface Repository {
  id: number,
  name: string,
}

/**
* State type
 Formado do estado do Redux
*/


export interface RepositoryState {
  readonly data: Repository[],
  readonly loading: boolean,
  readonly error: boolean,
}
