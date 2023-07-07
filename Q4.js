
let books = [
    {
      title: "Book 1",
      author: "author 1",
      year: 2005
    },
    {
      title: "Book 2",
      author: "author 2",
      year: 2015
    },
    {
      title: "Book 3",
      author: "author 3",
      year: 2008
    },
    {
      title: "Book 4",
      author: "author 4",
      year: 2012
    }
  ];
  
  // Function to capitalize author names
  function capitalizeAuthorName(author) {
    return author.toUpperCase();
  }
  
  // Filter and create a new array with the remaining books
  let filteredBooks = books.filter(function(book) {
    return book.year >= 2010;
  }).map(function(book) {
    return {
      title: book.title,
      author: capitalizeAuthorName(book.author)
    };
  });
  
  // Output the filtered and capitalized books
  console.log(filteredBooks);
  