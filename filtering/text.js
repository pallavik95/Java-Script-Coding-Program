let booksinfo = [{Author_Name : 'Jack john',Pub_year : 2005},
{Author_Name : 'chetan Bhagat',Pub_year : 2010},
{Author_Name : 'abdul Kalam',Pub_year : 2000},
{Author_Name : 'richard ',Pub_year : 2018}];
console.log(booksinfo);
// console.log(booksinfo.Author_Name);

let updates = []

  booksinfo.forEach((el)=>{
    if(el.Pub_year<=2010)
    updates.push(el.Author_Name.charAt(0).toUpperCase() + el.Author_Name.slice(1));
})

console.log(updates);




