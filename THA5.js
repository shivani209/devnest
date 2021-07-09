//1. 
    let obj = { name:"satya prakash",rollno:5,address:"India" }
    console.log("Q1.\n",Object.keys(obj))

// 2. 
    console.log("Q2.\nObject before deletion:- ",obj)
    delete obj.rollno
    console.log("Object after deletion:- ",obj)
    // Add a property in object 
    obj.color = "Blue" //or
    obj["number"] = 88888888
    console.log("Object after property addition:- ",obj)

// 3. 
    console.log("Q3.\nNo of properties in object :- ",Object.keys(obj).length);

// 4. 
    console.log("Q4.\n")
    let library4 = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
        { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
        { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]
    library4.forEach((t)=> console.log(t))

// 5. 
    let cylinder = {r:5,h:8,volume:0}
    console.log("Q5.\nInitially volume of cylinder = ",cylinder.volume)
    cylinder.volume = function (){ return (3.14*this.r*this.h).toFixed(4)}

    console.log("Now volume of cylinder = ",cylinder.volume())

// 6. 
    let library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
        { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
        { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]
    console.log("Q6.\n",library)
    // library.sort()
    console.log(library)
    