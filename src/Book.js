export const Book = ({ img, title, author }) => {
  const clickHandler = (title) => {
    alert("im the best");
    alert(title);
  };

  const mouseOverHandler = (author) => {
    alert("get ya mouse over here bro");
    alert(author);
  };
  return (
    <article className="book">
      <img src={img} alt="Book Cover" />
      <h1>{title}</h1>
      <h6>{author}</h6>
      <button type="button" onClick={() => clickHandler(title)}>
        Button
      </button>
      <button type="button" onMouseOver={() => mouseOverHandler(author)}>
        Button 2
      </button>
    </article>
  );
};
