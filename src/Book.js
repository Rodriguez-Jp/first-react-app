export const Book = ({ img, title, author, price }) => {
  const clickHandler = (price) => {
    alert("$" + price);
  };

  return (
    <article className="book">
      <img src={img} alt="Book Cover" />
      <h1>{title}</h1>
      <h6>{author}</h6>
      <button
        type="button"
        onClick={() => clickHandler(price)}
        className="price-btn"
      >
        Price
      </button>
    </article>
  );
};
