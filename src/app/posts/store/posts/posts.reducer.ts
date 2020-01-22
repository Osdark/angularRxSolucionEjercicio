import { Action, createReducer, on } from '@ngrx/store';
import * as PostsActions from './posts.actions';

export const postsFeatureKey = 'posts';

export interface State {

}

export const initialState: State = {

};

const postsReducer = createReducer(
  initialState,

  on(PostsActions.loadPostss, state => state),
  on(PostsActions.loadPostssSuccess, (state, action) => state),
  on(PostsActions.loadPostssFailure, (state, action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return postsReducer(state, action);
}
