let arr = ["s","a","t","y","a",[1,2,3]];
let obj = {name:"satya",age:22}

// 1. 
    console.log("Q1. \n",Array.isArray(arr))
    console.log(Array.isArray(obj))

// 2. Clone a array 
    
        
            let s_clone = arr
            console.log("Q2.\n",s_clone)
        
            s_clone = arr.slice(0)
            console.log(s_clone)
    
            s_clone = JSON.parse(JSON.stringify(arr))
            console.log(s_clone)

// 3. 
    let first_n = function (t,n){ return n<0 ?[] : t.slice(0,n)}
    console.log("Q3.\n",first_n(arr,1))
    console.log(first_n([],8))
    console.log(first_n([9,7,5,6,4],8))
    console.log(first_n([6,3,24,43,5,35]))
    console.log(first_n([6,3,24,43,5,35],-1))

// 4. 
    let join = (arr)=> arr.join() + "\n" + arr.join(",") + "\n" + arr.join("-")
    console.log("Q4.\n",join(["s","a","t","y","a"]))

// 5. s
    const max = (x)=>{
    let y= {}
    let mx=0 , mx_key=""
    x.forEach(t=>{ 
        y[t] = (y[t] ? y[t]+1 : 1)
         mx > y[t] ? mx = mx : (mx = y[t],mx_key = t)
    })
    return mx_key +" ( "+ mx +" times )"
    }
    console.log("Q5.\n",max(['a',1,2,'a',3,4,1,'a',2,1,3,'a',1,4,'a','a',1]));