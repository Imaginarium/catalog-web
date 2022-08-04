import { call, put, takeLatest } from 'redux-saga/effects'
import { request } from 'utils/request'
import { breedsAction as actions } from '.'
import { sagaActions } from './types'

function* fetchData() {
  const requestURL = `https://api.thecatapi.com/v1/breeds`

  try {
    const breeds = yield call(request, requestURL, {
      headers: {
        'x-api-key': 'fd4044dd-e5af-46b6-b1f9-72de6eefad30',
      },
    })
    yield put(actions.getBreeds(breeds))
  } catch (err: any) {
    console.log(err)
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* getBreedsSaga() {
  // Watches for loadRepos actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(sagaActions.FETCH_BREEDS_DATA_SAGA, fetchData)
}
