/*
arr1 = [1, 2, 3, 4]
arr2 = [5, 6, 7, 8]

arr3 = [1, 5, 2, 6, 3, 7, 4, 8]
 0   1  2  3
[1, 2, 3, 4]
         p1

0   1   2  3
[5, 6, 3, 4]
      p2

[1, 5, 2, 6,]
arr3 = [1, 5, 2, 6, 3, 7, 4, 8]

- arr3 = []
- while p1 && p2 < len
 */

 function mergeArrays(array1, array2){

   let array3 = []

   let pointer1 = 0
   let pointer2 = 0

   while(pointer1 < array1.length || pointer2 < array2.length){

     array3.push(array1[pointer1])

     array3.push(array2[pointer2])

     pointer1++
     pointer2++
   }

   return array3
 }
