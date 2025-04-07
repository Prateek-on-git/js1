const code =["a","b","c","d","e"]

// const values = code.forEach((item)=>{
//     console.log(item)
//     return item
// })

// console.log(values)

const codea = [1,2,3,4,5,6,7,8,9,10]
// const test1 = codea.filter((num)=>
// num>4
// ) 


// const test1 = []
// codea.forEach((num)=>{
//     if (num>4) {
//         test1.push(num)
//     }
    
// })

// console.log(test1);

const books = [
    {
      title: "The Alchemist",
      genre: "Fiction",
      publishDate: "1988-04-15",
      edition: "1st"
    },
    {
      title: "Clean Code",
      genre: "Programming",
      publishDate: "2008-08-11",
      edition: "1st"
    },
    {
      title: "Atomic Habits",
      genre: "Self-help",
      publishDate: "2018-10-16",
      edition: "2nd"
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      genre: "Fantasy",
      publishDate: "1997-06-26",
      edition: "1st"
    },
    {
      title: "Sapiens",
      genre: "Non-fiction",
      publishDate: "2011-01-01",
      edition: "3rd"
    },
    {
      title: "Deep Work",
      genre: "Productivity",
      publishDate: "2016-01-05",
      edition: "1st"
    },
    {
      title: "The Pragmatic Programmer",
      genre: "Programming",
      publishDate: "1999-10-20",
      edition: "2nd"
    },
    {
      title: "To Kill a Mockingbird",
      genre: "Fiction",
      publishDate: "1960-07-11",
      edition: "1st"
    },
    {
      title: "1984",
      genre: "Dystopian",
      publishDate: "1949-06-08",
      edition: "1st"
    },
    {
      title: "The Subtle Art of Not Giving a F*ck",
      genre: "Self-help",
      publishDate: "2016-09-13",
      edition: "1st"
    }
  ];

  
  let userBooks = books.filter((bk)=> bk.genre=== "Fiction")

  books.forEach(book => {
    book.publishDate = new Date(book.publishDate).getFullYear(); // just the year
  });
  
  userBooks = books.filter((bk)=>{return bk.publishDate>=1970 && bk.genre=== "Fiction" })

  console.log(userBooks)
