import App from "./App/App";
import SwitchSort from "./Sort/SwitchSort";

import React, { useState } from "react";
function Game() {
  // Sorting
  const [isSorted, setIsSorted] = useState(false);

  // Добавим историю всех действий
  const [history, setHistory] = useState([Array(9).fill(null)]);

  // Переменная для сохранения индекса нажатой кнопки при возврате к старому ходу
  const [currentMove, setCurrentMove] = useState(0);
  console.log(currentMove);

  // Сохраняем что отображать

  const currentSquares = history[currentMove];

  // Функция связи App с Game
  function handlePlay(nextSquares) {
    // Укорачивание массива основного для отображения хода после возврата

    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];

    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  // Функция установки нового значения для хода
  function setter(currentMove) {
    setCurrentMove(currentMove);
  }
  // Функция переключения сортировки
  function handleClickSort() {
    setIsSorted(!isSorted);
  }

  return (
    <div className="game-wrapper">
      <div className="blur">
        <div className="game-board">
          <App
            currentSquares={currentSquares}
            onPlay={handlePlay}
            currentMove={currentMove}
          />
          <button className="btn sort--btn" onClick={handleClickSort}>
            Sort
          </button>

          <SwitchSort
            isSort={isSorted}
            currentMove={currentMove}
            setter={setter}
            history={history}
          />
        </div>
      </div>
      <div className="area-bottom">
        <div className="one">Связь со мной →</div>
        <div className="two">
          <div className="info vk"> VK: https://vk.com/moonw21</div>
          <div className="info tg"> Telegram: https://t.me/Vl_YakovlevYK</div>
          <div className="info git">GitHub: https://github.com/JSeniorSan</div>
        </div>
      </div>
    </div>
  );
}
export default Game;
