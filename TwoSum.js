//find the two sum in an array resulting the target value

const arr = [1,2,4,6,4];
const goal =10;

function twoSum(){
    const map = new Map();
    for(let i=0;i<arr.length;i++){
        const remaining = goal - arr[i];
        if(map.has(remaining)){
            const idx1 = map.get(remaining);
            const idx2 = i;
            return [idx1, idx2];
        }
        map.set(arr[i],i);
    }
    return -1;
}
console.log(twoSum())