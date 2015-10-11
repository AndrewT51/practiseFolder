function checkArrays(arr1,arr2){
	var orderedArr1 = arr1.map(function(innerArr){
		innerArr.sort(function(a,b){
			return a - b;
		})
	})
		return orderedArr1
}

console.log(checkArrays([5,2],[9,3]))
