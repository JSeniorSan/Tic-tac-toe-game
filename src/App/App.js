import "./App.css";
import Square from "../Square/Square.js";

function Board(props) {
  // Функция обновления данных от каждого поля
  const handleClick = (i) => {
    // Проверка на наличие значения в поле или наличие победителя

    if (props.currentSquares[i] || calculateWinner(props.currentSquares))
      return;
    // Определение кто ходит следующий
    const nextSquares = props.currentSquares.slice();

    props.currentMove % 2 === 0
      ? (nextSquares[i] = "X")
      : (nextSquares[i] = "O");

    // Добавление использования хуков и обновление значений с переключением хода
    props.onPlay(nextSquares);
  };
  // Нахождение победителя
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    // Перебор всех победных комбинаций
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        // Вывод победной комбинации
        return [a, b, c];
      }
    }

    return null;
  }
  // Определение 3-х состояний при отображении
  let statusGame;
  if (Array.isArray(calculateWinner(props.currentSquares))) {
    const winner =
      props.currentSquares[calculateWinner(props.currentSquares)[0]];
    statusGame = `Winner: ${winner}`;
  } else if (props.currentMove !== 9) {
    statusGame = `Next player: ${props.currentMove % 2 === 0 ? "X" : "O"}`;
  } else {
    statusGame = `Draw`;
  }

  return (
    <div className="wrapper">
      {/* поле для игры в крестики нолики */}

      <div className="game">Tic-Tac-Toe Game</div>

      <div className="status">{statusGame}</div>

      <div className="bigSquare">
        {/* Создание поля при помощи двумерного массива */}
        {Array(3)
          .fill(null)
          .map((_, i) => {
            const rowSquare = Array(3)
              .fill(null)
              .map((_, j) => {
                // условие отображения зеленых квадратов на поле в случае выйгрыша
                const currentNumberSquare = 3 * i + j;
                const arrayNumbers = calculateWinner(props.currentSquares);

                return (
                  <Square
                    key={j}
                    value={props.currentSquares[3 * i + j]}
                    handleClickProps={() => handleClick(3 * i + j)}
                    // Пробрасывание класса для стилизации победных квадратов
                    name={
                      arrayNumbers !== null &&
                      arrayNumbers.includes(currentNumberSquare)
                        ? "win-square"
                        : "square"
                    }
                  />
                );
              });
            return (
              <div className="row" key={i}>
                {rowSquare}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Board;
