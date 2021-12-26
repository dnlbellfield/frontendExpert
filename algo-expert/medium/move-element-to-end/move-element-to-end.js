function moveElementToEnd(array, toMove) {
    // main idea: does the current element need to move? current === toMove?
    // if so, how can we move 'current' to the 'end'?

  	// create 2 pointers i,j
	  // repeatedly check if j === toMove before attempting to swap array[i] and array[j]
	  // if array[i] === toMove, swap
    // update i;
    
  let i = 0;
  let j = array.length - 1;
  while (i < j) {

    while (i < j && array[j] === toMove) {
      j--;
    }
    if (array[i] === toMove) {
      let temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    }
		i++;

  }
  return array;
}