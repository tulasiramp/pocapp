import chai from 'chai'
const assert = chai.assert

import { objectTest, test } from '../lib/config'

describe('Object test', () => {
  it('Config is an object', done => {
    objectTest((response) => {
      assert.typeOf(response, 'object')
      done()
    })
  })

  it('Config test equals test', done => {
    assert.equal(test(), 'test')
    done()
  })
})
