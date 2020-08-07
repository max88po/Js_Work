let a = [];

    function SortRandArr()
    {
            for(let i=0; i<10; i++){
                a.push(Math.round(Math.random() * 100));
            }
            console.log(a);
            const res = a.replace(/[0]/, 'zero');
            console.log(res);
        } 
SortRandArr();