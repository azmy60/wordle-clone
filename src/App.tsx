import { Component } from "react";
import Board from "./Board";
import { cloneMatrix, createEmptyMatrix } from "./helper";
import Keyboard from "./Keyboard";

const ROW_COUNT = 6;
const COLUMN_COUNT = 5;

class App extends Component<
  {},
  { matrix: string[][]; currentRow: number; currentColumn: number }
> {
  constructor(props: {}) {
    super(props);

    this.state = {
      matrix: createEmptyMatrix(ROW_COUNT, COLUMN_COUNT),
      currentRow: 0,
      currentColumn: 0,
    };

    this.onInput = this.onInput.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.onBackspace = this.onBackspace.bind(this);
  }

  onInput(value: string) {
    if (this.state.currentColumn === COLUMN_COUNT) return;

    this.setState((state) => {
      const matrix = cloneMatrix(state.matrix);
      matrix[state.currentRow][state.currentColumn] = value;

      return { matrix, currentColumn: state.currentColumn + 1 };
    });
  }

  onEnter() {
    this.setState((state) => ({
      currentRow: state.currentRow + 1,
      currentColumn: 0,
    }));
  }

  onBackspace() {
    this.setState((state) => {
      const currentColumn = state.currentColumn - 1;

      const matrix = cloneMatrix(state.matrix);
      matrix[state.currentRow][currentColumn] = "";

      return { matrix, currentColumn };
    });
  }

  render() {
    return (
      <div className="relative w-screen h-screen dark:bg-zinc-900 dark:text-white">
        <div className="flex flex-col justify-between h-full">
          <div className="flex w-min mx-auto my-auto">
            <Board matrix={this.state.matrix} />
          </div>
          <div>
            <div className="max-w-lg mx-auto">
              <Keyboard
                onInput={this.onInput}
                onEnter={this.onEnter}
                onBackspace={this.onBackspace}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
