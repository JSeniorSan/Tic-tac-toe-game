function Sort(props) {
  const sortingArr = props.currentArr.slice(1).reverse();
  const firstElement = props.currentArr[0];
  const sortedArray = [firstElement, ...sortingArr];

  return <>{sortedArray}</>;
}

export default Sort;
