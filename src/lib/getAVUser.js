import AV from '../lib/leancloud'

export default function(user){
  var {id,attributes:{username}} = user || AV.User.current() || {attributes:{}}
  return {id,username}
}

/* return {id,username}等价于
 * return {id:id,username:username}
 * es6新语法*/