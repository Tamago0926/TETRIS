"use strict";

let tiles;
let sub_tile;
let Directions = 0;
let zKeyPressed = false;
let xKeyPressed = false; // 正しく初期化
let isDropping = false;
let lotate_x = 3;
let lotate_y = 0;
let mino_type = [];
let mino_type_num = 0;
const allMinoTypes = [0, 1, 2, 3, 4, 5, 6];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let minoBag = [];
let currentMino;

function getNextMino() {
  if (minoBag.length === 0) {
    minoBag = shuffle(allMinoTypes.slice());
  }

  currentMino = minoBag.shift();
  return currentMino;
}

for (let i = 0; i < 1000; i++) {
  mino_type[i] = getNextMino();
}

function new_tiles() {
  tiles = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
}

function sub_tiles() {
  sub_tile = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
}

//ミノの形

//Tミノ
const T_Up = [
  [0, "T", 0, 0],
  ["T", "T", "T", 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const T_Left = [
  [0, "T", 0, 0],
  ["T", "T", 0, 0],
  [0, "T", 0, 0],
  [0, 0, 0, 0],
];

const T_Right = [
  [0, "T", 0, 0],
  [0, "T", "T", 0],
  [0, "T", 0, 0],
  [0, 0, 0, 0],
];

const T_Down = [
  [0, 0, 0, 0],
  ["T", "T", "T", 0],
  [0, "T", 0, 0],
  [0, 0, 0, 0],
];

//Iミノ
const I_Up = [
  [0, 0, 0, 0],
  ["T", "T", "T", "T"],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const I_Left = [
  [0, "T", 0, 0],
  [0, "T", 0, 0],
  [0, "T", 0, 0],
  [0, "T", 0, 0],
];

const I_Right = [
  [0, 0, "T", 0],
  [0, 0, "T", 0],
  [0, 0, "T", 0],
  [0, 0, "T", 0],
];

const I_Down = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  ["T", "T", "T", "T"],
  [0, 0, 0, 0],
];

//Sミノ
const S_Up = [
  [0, "T", "T", 0],
  ["T", "T", 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const S_Left = [
  ["T", 0, 0, 0],
  ["T", "T", 0, 0],
  [0, "T", 0, 0],
  [0, 0, 0, 0],
];

const S_Right = [
  [0, "T", 0, 0],
  [0, "T", "T", 0],
  [0, 0, "T", 0],
  [0, 0, 0, 0],
];

const S_Down = [
  [0, 0, 0, 0],
  [0, "T", "T", 0],
  ["T", "T", 0, 0],
  [0, 0, 0, 0],
];

//Zミノ
const Z_Up = [
  ["T", "T", 0, 0],
  [0, "T", "T", 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const Z_Left = [
  [0, "T", 0, 0],
  ["T", "T", 0, 0],
  ["T", 0, 0, 0],
  [0, 0, 0, 0],
];

const Z_Right = [
  [0, 0, "T", 0],
  [0, "T", "T", 0],
  [0, "T", 0, 0],
  [0, 0, 0, 0],
];

const Z_Down = [
  [0, 0, 0, 0],
  ["T", "T", 0, 0],
  [0, "T", "T", 0],
  [0, 0, 0, 0],
];

//Lミノ
const L_Up = [
  [0, 0, "T", 0],
  ["T", "T", "T", 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const L_Left = [
  ["T", "T", 0, 0],
  [0, "T", 0, 0],
  [0, "T", 0, 0],
  [0, 0, 0, 0],
];

const L_Right = [
  [0, "T", 0, 0],
  [0, "T", 0, 0],
  [0, "T", "T", 0],
  [0, 0, 0, 0],
];

const L_Down = [
  [0, 0, 0, 0],
  ["T", "T", "T", 0],
  ["T", 0, 0, 0],
  [0, 0, 0, 0],
];

//Jミノ
const J_Up = [
  ["T", 0, 0, 0],
  ["T", "T", "T", 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const J_Left = [
  [0, "T", 0, 0],
  [0, "T", 0, 0],
  ["T", "T", 0, 0],
  [0, 0, 0, 0],
];

const J_Right = [
  [0, "T", "T", 0],
  [0, "T", 0, 0],
  [0, "T", 0, 0],
  [0, 0, 0, 0],
];

const J_Down = [
  [0, 0, 0, 0],
  ["T", "T", "T", 0],
  [0, 0, "T", 0],
  [0, 0, 0, 0],
];

//Oミノ
const O_Up = [
  [0, "T", "T", 0],
  [0, "T", "T", 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const O_Left = [
  [0, "T", "T", 0],
  [0, "T", "T", 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const O_Right = [
  [0, "T", "T", 0],
  [0, "T", "T", 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const O_Down = [
  [0, "T", "T", 0],
  [0, "T", "T", 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

function change_tile(data) {
  clearT();
  let save_num = 0;
  let save_block = [];
  let save_lotate_y = [];
  let save_lotate_x = [];

  //ミノの種類を変える

  for (let y = 0; y <= 3; y++) {
    for (let x = 0; x <= 3; x++) {
      if (tiles[y + lotate_y][x + lotate_x] == "t") {
        save_lotate_y[save_num] = y + lotate_y;
        save_lotate_x[save_num] = x + lotate_x;
        save_block[save_num] = tiles[y + lotate_y][x + lotate_x];

        save_num++;
      }

      switch (mino_type[mino_type_num]) {
        case 0:
          switch (data) {
            case 0:
              tiles[y + lotate_y][x + lotate_x] = T_Up[y][x];
              break;
            case 1:
              tiles[y + lotate_y][x + lotate_x] = T_Left[y][x];
              break;
            case 2:
              tiles[y + lotate_y][x + lotate_x] = T_Down[y][x];
              break;
            case 3:
              tiles[y + lotate_y][x + lotate_x] = T_Right[y][x];
              break;
          }
          break;
        case 1:
          switch (data) {
            case 0:
              tiles[y + lotate_y][x + lotate_x] = I_Up[y][x];
              break;
            case 1:
              tiles[y + lotate_y][x + lotate_x] = I_Left[y][x];
              break;
            case 2:
              tiles[y + lotate_y][x + lotate_x] = I_Down[y][x];
              break;
            case 3:
              tiles[y + lotate_y][x + lotate_x] = I_Right[y][x];
              break;
          }
          break;
        case 2:
          switch (data) {
            case 0:
              tiles[y + lotate_y][x + lotate_x] = S_Up[y][x];
              break;
            case 1:
              tiles[y + lotate_y][x + lotate_x] = S_Left[y][x];
              break;
            case 2:
              tiles[y + lotate_y][x + lotate_x] = S_Down[y][x];
              break;
            case 3:
              tiles[y + lotate_y][x + lotate_x] = S_Right[y][x];
              break;
          }
          break;
        case 3:
          switch (data) {
            case 0:
              tiles[y + lotate_y][x + lotate_x] = Z_Up[y][x];
              break;
            case 1:
              tiles[y + lotate_y][x + lotate_x] = Z_Left[y][x];
              break;
            case 2:
              tiles[y + lotate_y][x + lotate_x] = Z_Down[y][x];
              break;
            case 3:
              tiles[y + lotate_y][x + lotate_x] = Z_Right[y][x];
              break;
          }
          break;
        case 4:
          switch (data) {
            case 0:
              tiles[y + lotate_y][x + lotate_x] = L_Up[y][x];
              break;
            case 1:
              tiles[y + lotate_y][x + lotate_x] = L_Left[y][x];
              break;
            case 2:
              tiles[y + lotate_y][x + lotate_x] = L_Down[y][x];
              break;
            case 3:
              tiles[y + lotate_y][x + lotate_x] = L_Right[y][x];
              break;
          }
          break;
        case 5:
          switch (data) {
            case 0:
              tiles[y + lotate_y][x + lotate_x] = J_Up[y][x];
              break;
            case 1:
              tiles[y + lotate_y][x + lotate_x] = J_Left[y][x];
              break;
            case 2:
              tiles[y + lotate_y][x + lotate_x] = J_Down[y][x];
              break;
            case 3:
              tiles[y + lotate_y][x + lotate_x] = J_Right[y][x];
              break;
          }
          break;
        case 6:
          switch (data) {
            case 0:
              tiles[y + lotate_y][x + lotate_x] = O_Up[y][x];
              break;
            case 1:
              tiles[y + lotate_y][x + lotate_x] = O_Left[y][x];
              break;
            case 2:
              tiles[y + lotate_y][x + lotate_x] = O_Down[y][x];
              break;
            case 3:
              tiles[y + lotate_y][x + lotate_x] = O_Right[y][x];
              break;
          }
          break;
      }
    }
  }

  for (let i = 0; i < save_lotate_x.length; i++) {
    tiles[save_lotate_y[i]][save_lotate_x[i]] = save_block[i];
  }
}

let save_blocks_x = [];
let save_blocks_y = [];

function next_mino_display(x, y, next_mino_ctx, next_mino_num) {
  next_mino_ctx.fillStyle = "rgb(220, 38, 38)";
  next_mino_ctx.fillRect(
    x * 30 + 10,
    y * 30 + 10 + (next_mino_num - 1) * 120,
    30,
    30
  );
  next_mino_ctx.strokeStyle = "black";
  next_mino_ctx.lineWidth = 1;
  next_mino_ctx.strokeRect(
    x * 30 + 10,
    y * 30 + 10 + (next_mino_num - 1) * 120,
    30,
    30
  );
}

//画面描画(tiles)
function display() {
  const myCanvas = document.getElementById("tetris_canvas");
  const ctx = myCanvas.getContext("2d");
  const next_mino_Canvas = document.getElementById("next_canvas");
  const next_mino_ctx = next_mino_Canvas.getContext("2d");

  next_mino_ctx.clearRect(
    0,
    0,
    next_mino_Canvas.width,
    next_mino_Canvas.height
  );
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

  for (let i = 1; i < 6; i++) {
    switch (mino_type[mino_type_num + i]) {
      case 0:
        for (let y = 0; y < 4; y++) {
          for (let x = 0; x < 4; x++) {
            if (T_Up[y][x] == "T") {
              next_mino_display(x, y, next_mino_ctx, i);
            }
          }
        }
        break;

      case 1:
        for (let y = 0; y < 4; y++) {
          for (let x = 0; x < 4; x++) {
            if (I_Up[y][x] == "T") {
              next_mino_display(x, y, next_mino_ctx, i);
            }
          }
        }
        break;

      case 2:
        for (let y = 0; y < 4; y++) {
          for (let x = 0; x < 4; x++) {
            if (S_Up[y][x] == "T") {
              next_mino_display(x, y, next_mino_ctx, i);
            }
          }
        }
        break;

      case 3:
        for (let y = 0; y < 4; y++) {
          for (let x = 0; x < 4; x++) {
            if (Z_Up[y][x] == "T") {
              next_mino_display(x, y, next_mino_ctx, i);
            }
          }
        }
        break;

      case 4:
        for (let y = 0; y < 4; y++) {
          for (let x = 0; x < 4; x++) {
            if (L_Up[y][x] == "T") {
              next_mino_display(x, y, next_mino_ctx, i);
            }
          }
        }
        break;

      case 5:
        for (let y = 0; y < 4; y++) {
          for (let x = 0; x < 4; x++) {
            if (J_Up[y][x] == "T") {
              next_mino_display(x, y, next_mino_ctx, i);
            }
          }
        }
        break;

      case 6:
        for (let y = 0; y < 4; y++) {
          for (let x = 0; x < 4; x++) {
            if (O_Up[y][x] == "T") {
              next_mino_display(x, y, next_mino_ctx, i);
            }
          }
        }
        break;
    }
  }

  let YY;
  let XX;
  for (let y = 0; y <= 19; y++) {
    YY = y * 40;
    for (let x = 0; x <= 9; x++) {
      XX = x * 40;
      if (tiles[y][x] == "T" || tiles[y][x] == "t") {
        ctx.fillStyle = "rgb(220, 38, 38)";
        ctx.fillRect(XX, YY, 40, 40);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.strokeRect(XX, YY, 40, 40);
      }
    }
  }

  // 複数行消去対応
  let linesToDelete = [];

  // 消すべき行を探す
  for (let y = 0; y < 20; y++) {
    if (tiles[y].every((cell) => cell === "t")) {
      linesToDelete.push(y);
    }
  }

  if (linesToDelete.length > 0) {
    console.log(`消えたライン数: ${linesToDelete.length}`);

    for (const y of linesToDelete) {
      for (let x = 0; x < 10; x++) {
        tiles[y][x] = 0;
      }
    }

    sub_tiles();
    for (let y = 0; y < 20; y++) {
      for (let x = 0; x < 10; x++) {
        sub_tile[y][x] = tiles[y][x];
      }
    }
    new_tiles();

    let targetRow = 19;

    for (let y = 19; y >= 0; y--) {
      if (!linesToDelete.includes(y)) {
        for (let x = 0; x < 10; x++) {
          tiles[targetRow][x] = sub_tile[y][x];
        }
        targetRow--;
      }
    }
  }
}

function next_mino(x, y) {
  let save_t_x = [];
  let save_t_y = [];
  let t_num = 0;
  mino_type_num++;

  for (let yy = 0; yy <= 19; yy++) {
    for (let xx = 0; xx <= 9; xx++) {
      if (tiles[yy][xx] == "t") {
        save_t_x[t_num] = xx;
        save_t_y[t_num] = yy;
        t_num++;
      }
    }
  }

  // 次のミノ初期化と描画
  Directions = 0;
  new_tiles();
  change_tile(Directions);

  for (let i = 0; i < x.length; i++) {
    tiles[y[i]][x[i]] = "t";
  }
  for (let i = 0; i < save_t_x.length; i++) {
    tiles[save_t_y[i]][save_t_x[i]] = "t";
  }
}

function clearT() {
  for (let y = 0; y <= 19; y++) {
    for (let x = 0; x <= 9; x++) {
      if (tiles[y][x] === "T") {
        tiles[y][x] = 0;
      }
    }
  }
}

//クリック時の反応
function handleKeyDown(event) {
  //下に移動
  if (event.key === "ArrowDown") {
    let num = 0;
    let D_rock;

    for (let y = 0; y <= 19; y++) {
      for (let x = 0; x <= 9; x++) {
        if (tiles[y][x] === "T") {
          save_blocks_x[num] = x;
          save_blocks_y[num] = y;
          num++;
          if (y >= 19 || tiles[y + 1][x] == "t") {
            D_rock = "y";
          }
        }
      }
    }
    //ブロック置き換え
    if (D_rock !== "y") {
      for (let i = 0; i < num; i++) {
        tiles[save_blocks_y[i]][save_blocks_x[i]] = 0;
      }

      for (let i = 0; i < num; i++) {
        tiles[save_blocks_y[i] + 1][save_blocks_x[i]] = "T";
      }

      lotate_y++;
      display();
    } else {
      clearT();
      lotate_x = 3;
      lotate_y = 0;
      next_mino(save_blocks_x, save_blocks_y);
      display();
    }
  }

  //左に移動
  if (event.key === "ArrowLeft") {
    let num = 0;
    let L_rock;

    for (let y = 0; y <= 19; y++) {
      for (let x = 0; x <= 9; x++) {
        if (tiles[y][x] === "T") {
          save_blocks_x[num] = x;
          save_blocks_y[num] = y;
          num++;
          if (x <= 0 || tiles[y][x - 1] === "t") {
            L_rock = "y";
          }
        }
      }
    }

    if (L_rock !== "y") {
      for (let i = 0; i < num; i++) {
        tiles[save_blocks_y[i]][save_blocks_x[i]] = 0;
      }
      for (let i = 0; i < num; i++) {
        tiles[save_blocks_y[i]][save_blocks_x[i] - 1] = "T";
      }

      lotate_x--;

      display();
    }
  }

  if (event.key === "ArrowRight") {
    let num = 0;
    let R_rock;

    for (let y = 0; y <= 19; y++) {
      for (let x = 0; x <= 9; x++) {
        if (tiles[y][x] === "T") {
          save_blocks_x[num] = x;
          save_blocks_y[num] = y;
          num++;
          if (x >= 9 || tiles[y][x + 1] === "t") {
            R_rock = "y";
          }
        }
      }
    }

    if (R_rock !== "y") {
      for (let i = 0; i < num; i++) {
        tiles[save_blocks_y[i]][save_blocks_x[i]] = 0;
      }
      for (let i = 0; i < num; i++) {
        tiles[save_blocks_y[i]][save_blocks_x[i] + 1] = "T";
      }

      lotate_x++;
      display();
    }
  }

  if (event.key === "ArrowUp") {
    let D_rock;

    for (let i = 0; i < 20; i++){
      let num = 0;
      if (D_rock === "y") {
        clearT();
      lotate_x = 3;
      lotate_y = 0;
      next_mino(save_blocks_x, save_blocks_y);
      display();
      D_rock = 0;
      break;
      }else {
        for (let y = 0; y <= 19; y++) {
          for (let x = 0; x <= 9; x++) {
            if (tiles[y][x] === "T") {
              save_blocks_x[num] = x;
              save_blocks_y[num] = y;
              num++;
              if (y >= 19 || tiles[y + 1][x] == "t") {
                D_rock = "y";
              }
            }
          }
        }
        //ブロック置き換え
        if (D_rock !== "y") {
          for (let i = 0; i < num; i++) {
            tiles[save_blocks_y[i]][save_blocks_x[i]] = 0;
          }
    
          for (let i = 0; i < num; i++) {
            tiles[save_blocks_y[i] + 1][save_blocks_x[i]] = "T";
          }
    
          lotate_y++;
          //display();
      }
      }
    }
  }

  // z キーで時計回りに回転（修正済み）
  if ((event.key === "z" || event.key === "Z") && !zKeyPressed) {
    zKeyPressed = true;

    if (Directions == 3) {
      Directions = 0;
    } else {
      Directions++;
    }

    change_tile(Directions);
    display();
  }

  // x キーで反時計回りに回転（修正：xKeyPressedの状態管理を追加）
  if ((event.key === "x" || event.key === "X") && !xKeyPressed) {
    xKeyPressed = true; // 重要：xKeyPressedをtrueに設定

    Directions--;
    if (Directions < 0) {
      Directions = 3;
    }
    change_tile(Directions);
    display();
  }
}

function handleKeyUp(event) {
  if (event.key === "z" || event.key === "Z") {
    zKeyPressed = false;
  } else if (event.key === "x" || event.key === "X") {
    xKeyPressed = false;
  }
}

//読み込み時の処理
window.onload = function () {
  new_tiles();
  change_tile(Directions);
  display();

  document.addEventListener("keydown", handleKeyDown);
  document.addEventListener("keyup", handleKeyUp);
};
