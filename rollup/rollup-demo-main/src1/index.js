import { util1 } from './utils.js'
import a from './a.js'
import Mixer1 from './mixer.js'

let get = () => {
  util1()
  let a = 1
  console.log(a)
  function util3 () {
    return 'util3'
  }

  const getName = new Mixer1()

  console.log(getName.show())

  return a
}

get()