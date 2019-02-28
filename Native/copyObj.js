function copyObj(obj) {
    const isArray = Array.isArray(obj)
    if (isArray) {
   	let result = []
	obj.map((v, i, a) => {
	    result[i] = v	
	})
	return result    
    } else {
	let result = {}	
	for (let i in obj) {
	    result[i] = obj[i]	
	}    
	return result    
    }

}
