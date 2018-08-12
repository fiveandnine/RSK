export default {
  getArrayIndex: (val,array) => {
    for (let i = 0; i < this.length; i++) {
      if (array[i] == val) return i;
    }
    return -1;
  },
  remove: (val,array)=>{
    let index = this.getArrayIndex(val,array);
    if (index > -1) {
     return  array.splice(index, 1);
    }
    return array;
}
