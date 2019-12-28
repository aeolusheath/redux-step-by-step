const defaultState = {
  info: 'global module state data'
}

export default (state = defaultState, action)=>{
  switch (action.type) {
    case 'GLOBAL_ACTION':
      console.log('global 模块的reducer');
      break;
    default:
      return defaultState
  }
}