// 設定画面
const settings = {
  'theme': 'THEME',
  'light': 'Light',
  'dark': 'Dark',
  'auto': 'Automatic(follows iOS settings)',
  'language': 'LANGUAGE',
  'subtitle': '言語',
}

const navigations = {
  'settings': 'SETTINGS',
  'home': 'HOME',
  'back': 'Back'
}

const placeholder = {
  'Please enter character name': 'Please enter character name'
}

// 通常攻撃
const normal = {
  'jab1': 'Jab1',
  'jab2': 'Jab2',
  'jab3': 'Jab3',
  'rapid': 'Rapid Jab',
  'da': 'Dash Attack',
}

// スマッシュ
const smash = {
  'forward smash': 'Forward Smash',
  'up smash': 'Up Smash',
  'down smash': 'Down Smash',
}

// 強攻撃
const tilt = {
  'forward tilt': 'Forward Tilt',
  'up tilt': 'Up Tilt',
  'down tilt': 'Down Tilt',
}

// 必殺技
const special = {
  'neutral B': 'Neutral B',
  'side B': 'Side B',
  'up B': 'Up B',
  'down B': 'Down B',
}

// 空中攻撃
const aerial = {
  'neutral air': 'Neutral Air',
  'forward air': 'Forward Air',
  'back air': 'Back Air',
  'up air': 'Up Air',
  'down air': 'Down Air',
}

// 掴み
const grabs = {
  'grab': 'Grab',
  'dash grab': 'Dash Grab',
  'pivot grab': 'Pivot Grab',
}

// キャラクター名
// キャラクターのkeyは頭文字が大文字である点に注意
const characters = {

}

const en = {
  ...settings,
  ...navigations,
  ...placeholder,
  ...normal,
  ...smash,
  ...tilt,
  ...special,
  ...aerial,
  ...grabs,
}

export default en;