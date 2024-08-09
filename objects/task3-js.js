function handleObject(obj,key,action = get) {
    if(action == 'get'){
        return obj[key]
    }
    else if(action === 'add') {
        return obj[key] = ''
    }
    else if(action === 'delete') {
        delete obj[key]
        return obj
    }
    else {
        return obj
    }
}
const student = {
    name: 'Maxim',
    programmingLanguage: 'JavaScript',
 }
  
 const result = handleObject(student, 'programmingLanguage', 'delete')
 console.log('result', result) // { name: 'Maxim' }