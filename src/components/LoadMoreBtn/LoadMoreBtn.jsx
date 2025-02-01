import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ handleClick }) => {
  return (
    <div>
      <button onClick={handleClick}>Load more</button>
    </div>
  );
};

export default LoadMoreBtn;
