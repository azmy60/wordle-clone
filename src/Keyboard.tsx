import React from "react";

function Tile({
  className,
  onClick,
  children,
}: {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`grow basis-0 grid place-content-center h-full rounded dark:bg-zinc-500 ${className}`}
    >
      {children}
    </button>
  );
}

function Row({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`grow flex gap-1.5 px-2 w-full ${className}`}>
      {children}
    </div>
  );
}

type KeyboardProps = {
  onInput: (value: string) => void;
  onEnter: () => void;
  onBackspace: () => void;
};

class Keyboard extends React.Component<KeyboardProps> {
  componentDidMount() {
    // TODO register window keyboard event
  }

  componentWillUnmount() {
    // TODO unregister window keyboard event
  }

  render() {
    return (
      <div className="flex flex-col h-48 gap-2 pb-2 text-sm font-bold">
        <Row>
          <Tile onClick={() => this.props.onInput("Q")}>Q</Tile>
          <Tile onClick={() => this.props.onInput("W")}>W</Tile>
          <Tile onClick={() => this.props.onInput("E")}>E</Tile>
          <Tile onClick={() => this.props.onInput("R")}>R</Tile>
          <Tile onClick={() => this.props.onInput("T")}>T</Tile>
          <Tile onClick={() => this.props.onInput("Y")}>Y</Tile>
          <Tile onClick={() => this.props.onInput("U")}>U</Tile>
          <Tile onClick={() => this.props.onInput("I")}>I</Tile>
          <Tile onClick={() => this.props.onInput("O")}>O</Tile>
          <Tile onClick={() => this.props.onInput("P")}>P</Tile>
        </Row>
        <Row className="w-11/12 mx-auto">
          <Tile onClick={() => this.props.onInput("A")}>A</Tile>
          <Tile onClick={() => this.props.onInput("S")}>S</Tile>
          <Tile onClick={() => this.props.onInput("D")}>D</Tile>
          <Tile onClick={() => this.props.onInput("F")}>F</Tile>
          <Tile onClick={() => this.props.onInput("G")}>G</Tile>
          <Tile onClick={() => this.props.onInput("H")}>H</Tile>
          <Tile onClick={() => this.props.onInput("J")}>J</Tile>
          <Tile onClick={() => this.props.onInput("K")}>K</Tile>
          <Tile onClick={() => this.props.onInput("L")}>L</Tile>
          <Tile onClick={() => this.props.onInput("F")}>F</Tile>
        </Row>
        <Row>
          <Tile onClick={this.props.onEnter} className="basis-4">
            <span className="text-xs">ENTER</span>
          </Tile>
          <Tile onClick={() => this.props.onInput("Z")}>Z</Tile>
          <Tile onClick={() => this.props.onInput("X")}>X</Tile>
          <Tile onClick={() => this.props.onInput("C")}>C</Tile>
          <Tile onClick={() => this.props.onInput("V")}>V</Tile>
          <Tile onClick={() => this.props.onInput("B")}>B</Tile>
          <Tile onClick={() => this.props.onInput("N")}>N</Tile>
          <Tile onClick={() => this.props.onInput("M")}>M</Tile>
          <Tile onClick={this.props.onBackspace} className="basis-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
              />
            </svg>
          </Tile>
        </Row>
      </div>
    );
  }
}

export default Keyboard;
