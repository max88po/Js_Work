let a = [];

    function SortRandArr()
    {
            for(let i=0; i<7; i++){
                a.push(Math.round(Math.random() * 10));
            } 
    //     console.log(a); 
        
    //     let removeDupl = function(nums){
            
        
    //                                                                     /*for(i = 0; i < nums.length; i++){
    //                                                                         if(nums[i]===nums[i-1]){
    //                                                                             nums.splice(i,1);
    //                                                                             i--;
    //                                                                      }
    //                                                                     }
    //                                                                         */

    //         return nums.length;
    //     }; 
    //    console.log(removeDupl(a));
    //     console.log(a); /*
                                                     // const srav = a.filter((item,index) =>{
                                                                    //     return index === a.indexOf(item);
                                                                    // });
        console.log(a);

        a.sort(function (b,c){                                      //-----------------------let arr = a.sort(); ?
            return b-c;
        }); 
        console.log(a);

    }
    SortRandArr();

   

    



       

