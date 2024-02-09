function selectionSort(array){
    var swaps=0;
    for(let i=0;i<array.length-1;i++){
        let min=Math.min(...(array.slice(i+1,array.length)));
        let minIndex=array.indexOf(min,i+1);
        // console.log(min+" "+minIndex+" "+array.slice(i+1,array.length));
        if(array[i]>min){
            array[i]=array[i]+min;
            array[minIndex]=array[i]-min;
            array[i]=array[i]-array[minIndex];
            swaps++;
        }
    }
    console.log(array);
    console.log(swaps);
}

function quickSort(array){
    if(array.length===1){
        return array;
    }
    var arr=[];
    let pivot=array[0];
    let low=[],high=[];
    for(let i=1;i<array.length;i++){
        if(array[i]<pivot)
            low.push(array[i]);
        else
            high.push(array[i]);
    }
    if(low.length>0)
        arr=arr.concat(quickSort(low));
    arr.push(array[0]);
    if(high.length>0)
        arr=arr.concat(quickSort(high));
    return arr;
}

function mergeSort(array){
    let x=array.length;

    if(x<=1)
        return array;

    let left = array.slice(0,x/2);
    let right = array.slice(x/2,x);
    // console.log(left,right);
    let l=mergeSort(left);
    let r=mergeSort(right);
    return merge(l,r);

    function merge(left, right) {
        let res=[];
        let i=0,j=0;
    
        while(i<left.length && j<right.length) {
            if (left[i] < right[j]) {
                res.push(left[i]);
                i++;
            } else {
                res.push(right[j]);
                j++;
            }
        }
        while(i<left.length) {
            res.push(left[i]);
            i++;
        }
    
        while(j<right.length) {
            res.push(right[j]);
            j++;
        }
    
        return res;
    }
}

function heapSort( arr){
    var n=arr.length;

    for (var i=Math.floor(n/2)-1;i>=0;i--)
        sort(arr, n, i);

    for (var i =n-1;i>0;i--) {
        var temp = arr[0];
        arr[0]=arr[i];
        arr[i]=temp;

        sort(arr, i, 0);
    }
    function sort(arr,n,i)
    {
        var largest = i; 
        var l =2*i+1; 
        var r =2*i+2;
 
        if (l<n && arr[l] > arr[largest])
            largest = l;
 
        if (r<n && arr[r]>arr[largest])
            largest = r;
 
        if (largest!=i) {
            var swap=arr[i];
            arr[i]=arr[largest];
            arr[largest]=swap;
 
            sort(arr,n,largest);
        }
    }
    return arr;
}


let arr=[30,40,4,3,2,1,7,10,20];

// selectionSort(arr);
// console.log(quickSort(arr));
// console.log(mergeSort(arr));
console.log(heapSort(arr));