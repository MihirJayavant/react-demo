import { put } from 'redux-saga/effects'
import { PostsActionTypes, SuccessPostsAction, ErrorPostsAction } from '../actions'
import { List } from 'immutable'
import { Post } from '../../models'
import { PostHttp } from '../../http'

export function* loadPostsEffect() {
  try {
    const data: Post[] = yield new PostHttp().get()
    yield put<SuccessPostsAction>({
      type: PostsActionTypes.SUCCESS,
      payload: {
        posts: List(data)
      }
    })
  } catch (error) {
    yield put<ErrorPostsAction>({
      type: PostsActionTypes.ERROR,
      payload: {
        error: error
      }
    })
  }
}
