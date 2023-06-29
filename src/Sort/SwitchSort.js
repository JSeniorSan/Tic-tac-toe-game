import { useState } from "react";
import Sort from "./Sort";
//Проверка состояния нажатия
function SwitchSort(props) {
  const [isClicked, setIsClicked] = useState(false);
  // Функция запуска кода после нажатия на кнопку истории
  function whatToDo(index) {
    if (index === 0) {
      props.setter(0);
    } else {
      props.setter(index);
      setIsClicked(true);
    }
  }
  // Создание массива кнопок из массива с историей
  const moves = props.history.map((square, index) => {
    let description;
    // Условие отображения надписи на кнопке
    if (index > 0) {
      description = `⚓Let's move to #` + index;
    } else {
      description = `New Game🪃`;
    }
    return (
      <li key={index}>
        <button className="btn" onClick={() => whatToDo(index)}>
          {description}
        </button>
      </li>
    );
  });
  // Функция выполнения кода после нажатия на кнопку из истории
  function whatReturn(index) {
    const newMoves = [...moves].map((move, i) => {
      if (i === index && index !== 0) {
        return (
          <button className="btn" key={i}>
            🍁You are here!
          </button>
        );
      } else {
        return move;
      }
    });

    return newMoves;
  }
  // Сохранение значения массива в зависимости от нажатия или не нажатия
  const currentArr = isClicked ? whatReturn(props.currentMove) : moves;
  // Сохранение элемента в зависимости от того, сортировано или нет
  const sortValue = props.isSort ? (
    <Sort currentArr={currentArr} ascent={ascent} />
  ) : (
    currentArr
  );
  // Функция установки ничьи
  function ascent(trueFlase) {
    props.sortState(trueFlase);
  }

  return <div>{sortValue}</div>;
}

export default SwitchSort;
