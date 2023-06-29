import "../App/App.css";
const Square = (props) => {
  const classNameStyle = props.name;
  return (
    <>
      <button className={classNameStyle} onClick={props.handleClickProps}>
        {props.value}
      </button>
    </>
  );
};

export default Square;
