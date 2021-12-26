function isMonotonic(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let j = i + 1;
    if (array[j] <= array[i]) {
			while (array[j] <= array[i]) {
					j++;
					i++;
				  if (!(array[j] <= array[i])) {
						return false;
					}
					
			}
    } else {
      while (array[j] >= array[i]) {
        j++;
        i++;
        if (!(array[j] >= array[i])) {
          return false;
        }
        
      }
    }
  }
  return true;
}

///////////////////////////////////////
function isMonotonic(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let j = i + 1;
    if (array[j] <= array[i]) {
			while (array[j] <= array[i]) {
					j++;
					i++;
				  if (!(array[j] <= array[i])) {
						return false;
					}
					
			}
    } else {
      while (array[j] >= array[i]) {
        j++;
        i++;
        if (!(array[j] >= array[i])) {
          return false;
        }
        
      }
    }
  }
  return true;
}


// Do not edit the line below.
exports.isMonotonic = isMonotonic;
