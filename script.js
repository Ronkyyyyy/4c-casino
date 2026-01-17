// --- 問題プール (ここからランダムに10問選出) ---
const PROBLEM_POOL = [
    {
        id: 1,
        text: "唯一無二",
        hiragana: ["ゆ", "い", "い", "つ", "む", "に"],
        solutions: [
            { range: [0, 1], kanji: "唯", strokes: 11 },
            { range: [2, 3], kanji: "一", strokes: 1 },
            { range: [4], kanji: "無", strokes: 12 },
            { range: [5], kanji: "二", strokes: 2 }
        ]
    },
    {
        id: 2,
        text: "荒唐無稽",
        hiragana: ["こ", "う", "と", "う", "む", "け", "い"],
        solutions: [
            { range: [0, 1], kanji: "荒", strokes: 9 },
            { range: [2, 3], kanji: "唐", strokes: 10 },
            { range: [4], kanji: "無", strokes: 12 },
            { range: [5, 6], kanji: "稽", strokes: 15 }
        ]
    },
    {
        id: 3,
        text: "西狩獲麟",
        hiragana: ["せ", "い", "し", "ゅ", "か", "く", "り", "ん"],
        solutions: [
            { range: [0, 1], kanji: "西", strokes: 6 },
            { range: [2, 3], kanji: "狩", strokes: 9 },
            { range: [4, 5], kanji: "獲", strokes: 16 },
            { range: [6, 7], kanji: "麟", strokes: 24 }
        ]
    },
    {
        id: 4,
        text: "東父西母",
        hiragana: ["と", "う", "ふ", "せ", "い", "ぼ"],
        solutions: [
            { range: [0, 1], kanji: "東", strokes: 8 },
            { range: [2], kanji: "父", strokes: 4 },
            { range: [3, 4], kanji: "西", strokes: 6 },
            { range: [5], kanji: "母", strokes: 5 }
        ]
    },
    {
        id: 5,
        text: "高祖父母",
        hiragana: ["こ", "う", "そ", "ふ", "ぼ"],
        solutions: [
            { range: [0, 1], kanji: "高", strokes: 10 },
            { range: [2], kanji: "祖", strokes: 9 },
            { range: [3], kanji: "父", strokes: 4 },
            { range: [4], kanji: "母", strokes: 5 }
        ]
    },
    {
        id: 6,
        text: "飲酒高会",
        hiragana: ["い", "ん", "し", "ゅ", "こ", "う", "か", "い"],
        solutions: [
            { range: [0, 1], kanji: "飲", strokes: 12 },
            { range: [2, 3], kanji: "酒", strokes: 10 },
            { range: [4, 5], kanji: "高", strokes: 10 },
            { range: [6, 7], kanji: "会", strokes: 6 }
        ]
    },
    {
        id: 7,
        text: "金亀換酒",
        hiragana: ["き", "ん", "き", "か", "ん", "し", "ゅ"],
        solutions: [
            { range: [0, 1], kanji: "金", strokes: 8 },
            { range: [2], kanji: "亀", strokes: 11 },
            { range: [3, 4], kanji: "換", strokes: 12 },
            { range: [5, 6], kanji: "酒", strokes: 10 }
        ]
    },
    {
        id: 8,
        text: "亀甲獣骨",
        hiragana: ["き", "っ", "こ", "う", "じ", "ゅ", "う", "こ", "つ"],
        solutions: [
            { range: [0, 1], kanji: "亀", strokes: 11 },
            { range: [2, 3], kanji: "甲", strokes: 5 },
            { range: [4, 5, 6], kanji: "獣", strokes: 16 },
            { range: [7, 8], kanji: "骨", strokes: 10 }
        ]
    },
    {
        id: 9,
        text: "人面獣心",
        hiragana: ["じ", "ん", "め", "ん", "じ", "ゅ", "う", "し", "ん"],
        solutions: [
            { range: [0, 1], kanji: "人", strokes: 2 },
            { range: [2, 3], kanji: "面", strokes: 9 },
            { range: [4, 5, 6], kanji: "獣", strokes: 16 },
            { range: [7, 8], kanji: "心", strokes: 4 }
        ]
    },
    {
        id: 10,
        text: "鬼面仏心",
        hiragana: ["き", "め", "ん", "ぶ", "っ", "し", "ん"],
        solutions: [
            { range: [0], kanji: "鬼", strokes: 10 },
            { range: [1, 2], kanji: "面", strokes: 9 },
            { range: [3, 4], kanji: "仏", strokes: 4 },
            { range: [5, 6], kanji: "心", strokes: 4 }
        ]
    },
    {
        id: 11,
        text: "悪鬼羅刹",
        hiragana: ["あ", "っ", "き", "ら", "せ", "つ"],
        solutions: [
            { range: [0, 1], kanji: "悪", strokes: 11 },
            { range: [2], kanji: "鬼", strokes: 10 },
            { range: [3], kanji: "羅", strokes: 19 },
            { range: [4, 5], kanji: "刹", strokes: 8 }
        ]
    },
    {
        id: 12,
        text: "魑魅魍魎",
        hiragana: ["ち", "み", "も", "う", "り", "ょ", "う"],
        solutions: [
            { range: [0], kanji: "魑", strokes: 21 },
            { range: [1], kanji: "魅", strokes: 15 },
            { range: [2, 3], kanji: "魍", strokes: 18 },
            { range: [4, 5, 6], kanji: "魎", strokes: 18 }
        ]
    },
    {
        id: 13,
        text: "悪因悪果",
        hiragana: ["あ", "く", "い", "ん", "あ", "っ", "か"],
        solutions: [
            { range: [0, 1], kanji: "悪", strokes: 11 },
            { range: [2, 3], kanji: "因", strokes: 6 },
            { range: [4, 5], kanji: "悪", strokes: 11 },
            { range: [6], kanji: "果", strokes: 8 }
        ]
    },
    {
        id: 14,
        text: "一日三秋",
        hiragana: ["い", "ち", "じ", "つ", "さ", "ん", "し", "ゅ", "う"],
        solutions: [
            { range: [0, 1], kanji: "一", strokes: 1 },
            { range: [2, 3], kanji: "日", strokes: 4 },
            { range: [4, 5], kanji: "三", strokes: 3 },
            { range: [6, 7, 8], kanji: "秋", strokes: 9 }
        ]
    },
    {
        id: 15,
        text: "生日足日",
        hiragana: ["い", "く", "ひ", "た", "る", "ひ"],
        solutions: [
            { range: [0, 1], kanji: "生", strokes: 5 },
            { range: [2], kanji: "日", strokes: 4 },
            { range: [3, 4], kanji: "足", strokes: 7 },
            { range: [5], kanji: "日", strokes: 4 }
        ]
    },
    {
        id: 16,
        text: "一筆啓上",
        hiragana: ["い", "っ", "ぴ", "つ", "け", "い", "じ", "ょ", "う"],
        solutions: [
            { range: [0, 1], kanji: "一", strokes: 1 },
            { range: [2, 3], kanji: "筆", strokes: 12 },
            { range: [4, 5], kanji: "啓", strokes: 11 },
            { range: [6, 7, 8], kanji: "上", strokes: 3 }
        ]
    },
    {
        id: 17,
        text: "和洋折衷",
        hiragana: ["わ", "よ", "う", "せ", "っ", "ち", "ゅ", "う"],
        solutions: [
            { range: [0], kanji: "和", strokes: 8 },
            { range: [1, 2], kanji: "洋", strokes: 9 },
            { range: [3, 4], kanji: "折", strokes: 7 },
            { range: [5, 6, 7], kanji: "衷", strokes: 9 }
        ]
    },
    {
        id: 18,
        text: "温慈恵和",
        hiragana: ["お", "ん", "じ", "け", "い", "か"],
        solutions: [
            { range: [0, 1], kanji: "温", strokes: 12 },
            { range: [2], kanji: "慈", strokes: 13 },
            { range: [3, 4], kanji: "恵", strokes: 10 },
            { range: [5], kanji: "和", strokes: 8 }
        ]
    },
    {
        id: 19,
        text: "加持祈祷",
        hiragana: ["か", "じ", "き", "と", "う"],
        solutions: [
            { range: [0], kanji: "加", strokes: 5 },
            { range: [1], kanji: "持", strokes: 9 },
            { range: [2], kanji: "祈", strokes: 8 },
            { range: [3, 4], kanji: "祷", strokes: 11 }
        ]
    },
    {
        id: 20,
        text: "火上加油",
        hiragana: ["か", "じ", "ょ", "う", "か", "ゆ"],
        solutions: [
            { range: [0], kanji: "火", strokes: 4 },
            { range: [1, 2, 3], kanji: "上", strokes: 3 },
            { range: [4], kanji: "加", strokes: 5 },
            { range: [5], kanji: "油", strokes: 8 }
        ]
    },
    {
        id: 21,
        text: "火牛之計",
        hiragana: ["か", "ぎ", "ゅ", "う", "の", "け", "い"],
        solutions: [
            { range: [0], kanji: "火", strokes: 4 },
            { range: [1, 2, 3], kanji: "牛", strokes: 4 },
            { range: [4], kanji: "之", strokes: 3 },
            { range: [5, 6], kanji: "計", strokes: 9 }
        ]
    },
    {
        id: 22,
        text: "火宅之境",
        hiragana: ["か", "た", "く", "の", "さ", "か", "い"],
        solutions: [
            { range: [0], kanji: "火", strokes: 4 },
            { range: [1, 2], kanji: "宅", strokes: 6 },
            { range: [3], kanji: "之", strokes: 3 },
            { range: [4, 5, 6], kanji: "境", strokes: 14 }
        ]
    },
    {
        id: 23,
        text: "阿衡之佐",
        hiragana: ["あ", "こ", "う", "の", "さ"],
        solutions: [
            { range: [0], kanji: "阿", strokes: 8 },
            { range: [1, 2], kanji: "衡", strokes: 16 },
            { range: [3], kanji: "之", strokes: 3 },
            { range: [4], kanji: "佐", strokes: 7 }
        ]
    },
    {
        id: 24,
        text: "阿吽二字",
        hiragana: ["あ", "う", "ん", "に", "じ"],
        solutions: [
            { range: [0], kanji: "阿", strokes: 8 },
            { range: [1, 2], kanji: "吽", strokes: 7 },
            { range: [3], kanji: "二", strokes: 2 },
            { range: [4], kanji: "字", strokes: 6 }
        ]
    },
    {
        id: 25,
        text: "遮二無二",
        hiragana: ["し", "ゃ", "に", "む", "に"],
        solutions: [
            { range: [0, 1], kanji: "遮", strokes: 14 },
            { range: [2], kanji: "二", strokes: 2 },
            { range: [3], kanji: "無", strokes: 12 },
            { range: [4], kanji: "二", strokes: 2 }
        ]
    },
    {
        id: 26,
        text: "一心不乱",
        hiragana: ["い", "っ", "し", "ん", "ふ", "ら", "ん"],
        solutions: [
            { range: [0, 1], kanji: "一", strokes: 1 },
            { range: [2, 3], kanji: "心", strokes: 4 },
            { range: [4], kanji: "不", strokes: 4 },
            { range: [5, 6], kanji: "乱", strokes: 7 }
        ]
    },
    {
        id: 27,
        text: "一心一意",
        hiragana: ["い", "っ", "し", "ん", "い", "ち", "い"],
        solutions: [
            { range: [0, 1], kanji: "一", strokes: 1 },
            { range: [2, 3], kanji: "心", strokes: 4 },
            { range: [4, 5], kanji: "一", strokes: 1 },
            { range: [6], kanji: "意", strokes: 13 }
        ]
    },
    {
        id: 28,
        text: "安心決定",
        hiragana: ["あ", "ん", "し", "ん", "け", "つ", "じ", "ょ", "う"],
        solutions: [
            { range: [0, 1], kanji: "安", strokes: 6 },
            { range: [2, 3], kanji: "心", strokes: 4 },
            { range: [4, 5], kanji: "決", strokes: 7 },
            { range: [6, 7, 8], kanji: "定", strokes: 8 }
        ]
    },
    {
        id: 29,
        text: "衆議一決",
        hiragana: ["し", "ゅ", "う", "ぎ", "い", "っ", "け", "つ"],
        solutions: [
            { range: [0, 1, 2], kanji: "衆", strokes: 12 },
            { range: [3], kanji: "議", strokes: 20 },
            { range: [4, 5], kanji: "一", strokes: 1 },
            { range: [6, 7], kanji: "決", strokes: 7 }
        ]
    },
    {
        id: 30,
        text: "鳩首協議",
        hiragana: ["き", "ゅ", "う", "し", "ゅ", "き", "ょ", "う", "ぎ"],
        solutions: [
            { range: [0, 1, 2], kanji: "鳩", strokes: 13 },
            { range: [3, 4], kanji: "首", strokes: 9 },
            { range: [5, 6, 7], kanji: "協", strokes: 8 },
            { range: [8], kanji: "議", strokes: 20 }
        ]
    },
    {
        id: 31,
        text: "狐仮虎威",
        hiragana: ["こ", "か", "こ", "い"],
        solutions: [
            { range: [0], kanji: "狐", strokes: 9 },
            { range: [1], kanji: "仮", strokes: 6 },
            { range: [2], kanji: "虎", strokes: 8 },
            { range: [3], kanji: "威", strokes: 9 }
        ]
    },
    {
        id: 32,
        text: "国威発揚",
        hiragana: ["こ", "く", "い", "は", "つ", "よ", "う"],
        solutions: [
            { range: [0, 1], kanji: "国", strokes: 8 },
            { range: [2], kanji: "威", strokes: 9 },
            { range: [3, 4], kanji: "発", strokes: 9 },
            { range: [5, 6], kanji: "揚", strokes: 12 }
        ]
    },
    {
        id: 33,
        text: "驚天動地",
        hiragana: ["き", "ょ", "う", "て", "ん", "ど", "う", "ち"],
        solutions: [
            { range: [0, 1, 2], kanji: "驚", strokes: 22 },
            { range: [3, 4], kanji: "天", strokes: 4 },
            { range: [5, 6], kanji: "動", strokes: 11 },
            { range: [7], kanji: "地", strokes: 6 }
        ]
    },
    {
        id: 34,
        text: "以心伝心",
        hiragana: ["い", "し", "ん", "で", "ん", "し", "ん"],
        solutions: [
            { range: [0], kanji: "以", strokes: 5 },
            { range: [1, 2], kanji: "心", strokes: 4 },
            { range: [3, 4], kanji: "伝", strokes: 6 },
            { range: [5, 6], kanji: "心", strokes: 4 }
        ]
    },
    {
        id: 35,
        text: "異国情緒",
        hiragana: ["い", "こ", "く", "じ", "ょ", "う", "ち", "ょ"],
        solutions: [
            { range: [0], kanji: "異", strokes: 11 },
            { range: [1, 2], kanji: "国", strokes: 8 },
            { range: [3, 4, 5], kanji: "情", strokes: 11 },
            { range: [6, 7], kanji: "緒", strokes: 14 }
        ]
    },
    {
        id: 36,
        text: "異国情調",
        hiragana: ["い", "こ", "く", "じ", "ょ", "う", "ち", "ょ", "う"],
        solutions: [
            { range: [0], kanji: "異", strokes: 11 },
            { range: [1, 2], kanji: "国", strokes: 8 },
            { range: [3, 4, 5], kanji: "情", strokes: 11 },
            { range: [6, 7, 8], kanji: "調", strokes: 15 }
        ]
    },
    {
        id: 37,
        text: "異域之鬼",
        hiragana: ["い", "い", "き", "の", "き"],
        solutions: [
            { range: [0], kanji: "異", strokes: 11 },
            { range: [1, 2], kanji: "域", strokes: 11 },
            { range: [3], kanji: "之", strokes: 3 },
            { range: [4], kanji: "鬼", strokes: 10 }
        ]
    },
    {
        id: 38,
        text: "再三再四",
        hiragana: ["さ", "い", "さ", "ん", "さ", "い", "し"],
        solutions: [
            { range: [0, 1], kanji: "再", strokes: 6 },
            { range: [2, 3], kanji: "三", strokes: 3 },
            { range: [4, 5], kanji: "再", strokes: 6 },
            { range: [6], kanji: "四", strokes: 5 }
        ]
    },
    {
        id: 39,
        text: "一期一会",
        hiragana: ["い", "ち", "ご", "い", "ち", "え"],
        solutions: [
            { range: [0, 1], kanji: "一", strokes: 1 },
            { range: [2], kanji: "期", strokes: 12 },
            { range: [3, 4], kanji: "一", strokes: 1 },
            { range: [5], kanji: "会", strokes: 6 }
        ]
    },
    {
        id: 40,
        text: "花鳥風月",
        hiragana: ["か", "ち", "ょ", "う", "ふ", "う", "げ", "つ"],
        solutions: [
            { range: [0], kanji: "花", strokes: 7 },
            { range: [1, 2, 3], kanji: "鳥", strokes: 11 },
            { range: [4, 5], kanji: "風", strokes: 9 },
            { range: [6, 7], kanji: "月", strokes: 4 }
        ]
    },
    {
        id: 41,
        text: "新鬼故鬼",
        hiragana: ["し", "ん", "き", "こ", "き"],
        solutions: [
            { range: [0, 1], kanji: "新", strokes: 13 },
            { range: [2], kanji: "鬼", strokes: 10 },
            { range: [3], kanji: "故", strokes: 9 },
            { range: [4], kanji: "鬼", strokes: 10 }
        ]
    },
    {
        id: 42,
        text: "夏炉冬扇",
        hiragana: ["か", "ろ", "と", "う", "せ", "ん"],
        solutions: [
            { range: [0], kanji: "夏", strokes: 10 },
            { range: [1], kanji: "炉", strokes: 8 },
            { range: [2, 3], kanji: "冬", strokes: 5 },
            { range: [4, 5], kanji: "扇", strokes: 10 }
        ]
    },
    {
        id: 43,
        text: "唯我独尊",
        hiragana: ["ゆ", "い", "が", "ど", "く", "そ", "ん"],
        solutions: [
            { range: [0, 1], kanji: "唯", strokes: 11 },
            { range: [2], kanji: "我", strokes: 7 },
            { range: [3, 4], kanji: "独", strokes: 9 },
            { range: [5, 6], kanji: "尊", strokes: 12 }
        ]
    },
    {
        id: 44,
        text: "大器晩成",
        hiragana: ["た", "い", "き", "ば", "ん", "せ", "い"],
        solutions: [
            { range: [0, 1], kanji: "大", strokes: 3 },
            { range: [2], kanji: "器", strokes: 15 },
            { range: [3, 4], kanji: "晩", strokes: 12 },
            { range: [5, 6], kanji: "成", strokes: 6 }
        ]
    },
    {
        id: 45,
        text: "呉越同舟",
        hiragana: ["ご", "え", "つ", "ど", "う", "し", "ゅ", "う"],
        solutions: [
            { range: [0], kanji: "呉", strokes: 7 },
            { range: [1, 2], kanji: "越", strokes: 12 },
            { range: [3, 4], kanji: "同", strokes: 6 },
            { range: [5, 6, 7], kanji: "舟", strokes: 6 }
        ]
    },
    {
        id: 46,
        text: "七転八倒",
        hiragana: ["し", "ち", "て", "ん", "ば", "っ", "と", "う"],
        solutions: [
            { range: [0, 1], kanji: "七", strokes: 2 },
            { range: [2, 3], kanji: "転", strokes: 11 },
            { range: [4, 5], kanji: "八", strokes: 2 },
            { range: [6, 7], kanji: "倒", strokes: 10 }
        ]
    },
    {
        id: 47,
        text: "自己嫌厭",
        hiragana: ["じ", "こ", "け", "ん", "え", "ん"],
        solutions: [
            { range: [0], kanji: "自", strokes: 6 },
            { range: [1], kanji: "己", strokes: 3 },
            { range: [2, 3], kanji: "嫌", strokes: 13 },
            { range: [4, 5], kanji: "厭", strokes: 14 }
        ]
    },
    {
        id: 48,
        text: "活殺自在",
        hiragana: ["か", "っ", "さ", "つ", "じ", "ざ", "い"],
        solutions: [
            { range: [0, 1], kanji: "活", strokes: 9 },
            { range: [2, 3], kanji: "殺", strokes: 10 },
            { range: [4], kanji: "自", strokes: 6 },
            { range: [5, 6], kanji: "在", strokes: 6 }
        ]
    },
    {
        id: 49,
        text: "満身創痍",
        hiragana: ["ま", "ん", "し", "ん", "そ", "う", "い"],
        solutions: [
            { range: [0, 1], kanji: "満", strokes: 12 },
            { range: [2, 3], kanji: "身", strokes: 7 },
            { range: [4, 5], kanji: "創", strokes: 12 },
            { range: [6], kanji: "痍", strokes: 11 }
        ]
    },
    {
        id: 50,
        text: "躊躇逡巡",
        hiragana: ["ち", "ゅ", "う", "ち", "ょ", "し", "ゅ", "ん", "じ", "ゅ", "ん"],
        solutions: [
            { range: [0, 1, 2], kanji: "躊", strokes: 21 },
            { range: [3, 4], kanji: "躇", strokes: 19 },
            { range: [5, 6, 7], kanji: "逡", strokes: 11 },
            { range: [8, 9, 10], kanji: "巡", strokes: 6 }
        ]
    },
    {
        id: 51,
        text: "百花繚乱",
        hiragana: ["ひ", "ゃ", "っ", "か", "り", "ょ", "う", "ら", "ん"],
        solutions: [
            { range: [0, 1, 2], kanji: "百", strokes: 6 },
            { range: [3], kanji: "花", strokes: 7 },
            { range: [4, 5, 6], kanji: "繚", strokes: 18 },
            { range: [7, 8], kanji: "乱", strokes: 7 }
        ]
    },
    {
        id: 52,
        text: "誠心誠意",
        hiragana: ["せ", "い", "し", "ん", "せ", "い", "い"],
        solutions: [
            { range: [0, 1], kanji: "誠", strokes: 13 },
            { range: [2, 3], kanji: "心", strokes: 4 },
            { range: [4, 5], kanji: "誠", strokes: 13 },
            { range: [6], kanji: "意", strokes: 13 }
        ]
    },
    {
        id: 53,
        text: "無為無策",
        hiragana: ["む", "い", "む", "さ", "く"],
        solutions: [
            { range: [0], kanji: "無", strokes: 12 },
            { range: [1], kanji: "為", strokes: 9 },
            { range: [2], kanji: "無", strokes: 12 },
            { range: [3, 4], kanji: "策", strokes: 12 }
        ]
    },
    {
        id: 54,
        text: "十人十色",
        hiragana: ["じ", "ゅ", "う", "に", "ん", "と", "い", "ろ"],
        solutions: [
            { range: [0, 1, 2], kanji: "十", strokes: 2 },
            { range: [3, 4], kanji: "人", strokes: 2 },
            { range: [5], kanji: "十", strokes: 2 },
            { range: [6, 7], kanji: "色", strokes: 6 }
        ]
    },
    {
        id: 55,
        text: "自由自在",
        hiragana: ["じ", "ゆ", "う", "じ", "ざ", "い"],
        solutions: [
            { range: [0], kanji: "自", strokes: 6 },
            { range: [1, 2], kanji: "由", strokes: 5 },
            { range: [3], kanji: "自", strokes: 6 },
            { range: [4, 5], kanji: "在", strokes: 6 }
        ]
    },
    {
        id: 56,
        text: "有象無象",
        hiragana: ["う", "ぞ", "う", "む", "ぞ", "う"],
        solutions: [
            { range: [0], kanji: "有", strokes: 6 },
            { range: [1, 2], kanji: "象", strokes: 12 },
            { range: [3], kanji: "無", strokes: 12 },
            { range: [4, 5], kanji: "象", strokes: 12 }
// --- 20260117_最新版 ---
        ]
    }
];

// --- 設定 ---
const COUNT_SPEED = 1000; 
const ABSORB_DURATION = 600; 
const TOTAL_ROUNDS = 10;

// --- 状態管理 ---
let gameQueue = []; // ランダムに選ばれた10問
let currentScore = 0;
let currentRound = 0;
let hasWonBefore = false;
let selectedIndices = [];
let timerInterval = null;
let timeLeft = 10.0;
let isGameActive = false;

// DOM
const reelContainer = document.getElementById("reel-container");
const cardArea = document.getElementById("card-area");
const doorOverlay = document.getElementById("door-overlay");
const doorMessage = document.getElementById("door-message");
const roundDisplay = document.getElementById("round-display");
const timerBar = document.getElementById("timer-bar");
const betBtn = document.getElementById("bet-btn");
const scoreDisplay = document.getElementById("current-score");
const resultOverlay = document.getElementById("result-overlay");
const homeScreen = document.getElementById("home-screen");

// --- ユーティリティ ---
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// 配列シャッフル
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// --- ゲームフロー ---
function startGameFromHome() {
    homeScreen.classList.add("hidden");
    initGame();
}

function initGame() {
    currentScore = 0;
    currentRound = 0;
    hasWonBefore = false;
    
    // プールからランダムに10問選出
    const shuffled = shuffleArray(PROBLEM_POOL);
    gameQueue = shuffled.slice(0, TOTAL_ROUNDS);
    
    // 問題数が足りない場合の補充（念の為）
    if (gameQueue.length < TOTAL_ROUNDS) {
        while(gameQueue.length < TOTAL_ROUNDS) {
            gameQueue.push(PROBLEM_POOL[Math.floor(Math.random()*PROBLEM_POOL.length)]);
        }
    }

    updateHUD();
    startRound();
}

function startRound() {
    if (currentRound >= TOTAL_ROUNDS) {
        alert("GAME CLEAR! FINAL SCORE: " + currentScore);
        location.reload();
        return;
    }

    // リセット
    selectedIndices = [];
    isGameActive = false;
    betBtn.disabled = true;
    timerBar.style.width = "100%";
    timerBar.style.backgroundColor = "#555";
    resultOverlay.classList.add("hidden");
    
    // 扉を閉じる
    doorOverlay.classList.remove("open");
    doorMessage.textContent = "DEALING...";
    roundDisplay.textContent = `ROUND ${String(currentRound + 1).padStart(2, '0')}/${TOTAL_ROUNDS}`;
    
    updateHUD();
    
    // ステージ構築
    setupStage();
}

async function setupStage() {
    const problem = gameQueue[currentRound];
    
    // リール作成
    reelContainer.innerHTML = "";
    problem.solutions.forEach(sol => {
        const reel = document.createElement("div");
        reel.className = "reel"; 
        reel.innerHTML = `<div class="reel-value">0</div><div class="reel-kanji">?</div>`;
        reelContainer.appendChild(reel);
    });

    // カード作成
    cardArea.innerHTML = "";
    const cardElements = [];
    problem.hiragana.forEach((char, index) => {
        const wrapper = document.createElement("div");
        wrapper.className = "card-wrapper";
        wrapper.dataset.index = index;
        wrapper.id = `card-${index}`;
        wrapper.onclick = () => handleCardClick(index, wrapper);

        const back = document.createElement("div");
        back.className = "card-face card-back"; // 裏面 (0deg)
        const front = document.createElement("div");
        front.className = "card-face card-front"; // 表面 (180deg)
        front.textContent = char;

        wrapper.appendChild(back);
        wrapper.appendChild(front);
        cardArea.appendChild(wrapper);
        cardElements.push(wrapper);
    });

    // 配るアニメーション
    for (let i = 0; i < cardElements.length; i++) {
        await wait(100);
        cardElements[i].classList.add("dealt");
    }

    await wait(500);
    
    // オープン (Flippedクラス付与で180度回転して表面へ)
    doorMessage.textContent = "BET TIME!!";
    cardElements.forEach(card => card.classList.add("flipped"));

    // ゲーム開始
    isGameActive = true;
    betBtn.disabled = false;
    timerBar.style.backgroundColor = "#00ff00";
    startTimer();
}

// --- タイマー & 選択ロジック ---
function startTimer() {
    timeLeft = 10.0;
    if (timerInterval) clearInterval(timerInterval);
    
    timerInterval = setInterval(() => {
        timeLeft -= 0.1;
        const percent = (timeLeft / 10.0) * 100;
        timerBar.style.width = percent + "%";
        
        if (timeLeft <= 3.0) timerBar.style.backgroundColor = "#ff0000";

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeOver();
        }
    }, 100);
}

function handleTimeOver() {
    isGameActive = false;
    doorMessage.textContent = "TIME OVER";
    if (selectedIndices.length > 0) execBet(true);
    else forceLose();
}

function handleCardClick(index, element) {
    if (!isGameActive) return;
    if (selectedIndices.length === 0) {
        selectedIndices.push(index);
    } else {
        const min = Math.min(...selectedIndices);
        const max = Math.max(...selectedIndices);
        if (index >= min - 1 && index <= max + 1) {
            const newMin = Math.min(min, index);
            const newMax = Math.max(max, index);
            selectedIndices = [];
            for (let i = newMin; i <= newMax; i++) {
                selectedIndices.push(i);
            }
        } else {
            selectedIndices = [index];
        }
    }
    updateCardSelection();
}

function updateCardSelection() {
    const wrappers = document.querySelectorAll(".card-wrapper");
    wrappers.forEach(w => {
        const idx = parseInt(w.dataset.index);
        w.classList.toggle("selected", selectedIndices.includes(idx));
    });
}

function forceLose() {
    const penalty = hasWonBefore ? Math.floor(currentScore / 2) : 0;
    currentScore -= penalty;
    showResultModal("TIME OVER", -penalty, "時間切れ (没収)");
}

// --- ベット実行・演出フロー ---
async function execBet(isForced = false) {
    if (!isGameActive && !isForced) return;
    if (selectedIndices.length === 0) return;

    isGameActive = false;
    clearInterval(timerInterval);
    betBtn.disabled = true;
    doorMessage.textContent = "JUDGEMENT...";

    await wait(500);
    doorOverlay.classList.add("open");
    await wait(800);
    await absorbCards();
}

async function absorbCards() {
    const problem = gameQueue[currentRound];
    const reels = document.querySelectorAll(".reel");
    const activeReelData = [];

    for (let i = 0; i < problem.solutions.length; i++) {
        const sol = problem.solutions[i];
        const targetReel = reels[i];
        
        const cardElements = [];
        sol.range.forEach(idx => {
            const el = document.getElementById(`card-${idx}`);
            if(el) cardElements.push(el);
        });

        await animateAbsorb(cardElements, targetReel);

        targetReel.classList.add("power-on");
        activeReelData.push({ element: targetReel, data: sol });
    }

    await wait(500);
    runAllReels(activeReelData);
}

function animateAbsorb(cards, targetReel) {
    return new Promise(resolve => {
        if (cards.length === 0) { resolve(); return; }
        const reelRect = targetReel.getBoundingClientRect();

        cards.forEach((card, idx) => {
            const cardRect = card.getBoundingClientRect();
            const deltaX = (reelRect.left + reelRect.width/2) - (cardRect.left + cardRect.width/2);
            const deltaY = (reelRect.top + reelRect.height/2) - (cardRect.top + cardRect.height/2);

            card.style.transition = `transform ${ABSORB_DURATION}ms ease-in, opacity ${ABSORB_DURATION}ms ease-in`;
            card.style.zIndex = 100;
            
            requestAnimationFrame(() => {
                // 吸収時は裏返るのではなく、そのまま小さくなって消える
                // 現在のflipped状態(180deg)を維持しつつ移動・縮小
                card.style.transform = `translate(${deltaX}px, ${deltaY}px) rotateY(180deg) scale(0.2)`;
                card.style.opacity = "0";
            });
        });
        setTimeout(resolve, ABSORB_DURATION);
    });
}

function runAllReels(reelDataList) {
    const allStrokes = reelDataList.map(r => r.data.strokes);
    const maxStroke = Math.max(...allStrokes);
    
    const promises = reelDataList.map(item => {
        return new Promise(resolve => {
            let count = 0;
            const target = item.data.strokes;
            const valueEl = item.element.querySelector(".reel-value");
            const kanjiEl = item.element.querySelector(".reel-kanji");

            const counter = setInterval(() => {
                count++;
                valueEl.textContent = count;
                if (count >= target) {
                    clearInterval(counter);
                    kanjiEl.textContent = item.data.kanji;
                    item.element.classList.add("finished");
                    resolve();
                }
            }, COUNT_SPEED);
        });
    });

    const waitTime = maxStroke * COUNT_SPEED + 1000;
    setTimeout(() => {
        finalizeScore(maxStroke);
    }, waitTime);
}

// 判定ロジック (アップデート版: 重複=0pt)
function finalizeScore(maxStroke) {
    const problem = gameQueue[currentRound];
    const allStrokes = problem.solutions.map(s => s.strokes);

    // 全ての画数の出現回数をカウント
    const strokeCounts = {};
    allStrokes.forEach(s => {
        strokeCounts[s] = (strokeCounts[s] || 0) + 1;
    });

    // ユーザーの選択判定
    const userJson = JSON.stringify(selectedIndices.sort((a,b)=>a-b));
    let hitSolution = null;
    problem.solutions.forEach(sol => {
        if (JSON.stringify(sol.range) === userJson) hitSolution = sol;
    });

    let diff = 0;
    let title = "";
    let detail = "";

    // 演出: 重複しているリール（バッティング）を全て赤くする
    const reels = document.querySelectorAll(".reel");
    problem.solutions.forEach((sol, i) => {
        if (strokeCounts[sol.strokes] > 1) {
            reels[i].style.borderColor = "#ff4444";
            reels[i].style.color = "#ff4444";
        }
    });

    if (hitSolution) {
        const basePt = hitSolution.strokes;
        const isMax = (basePt === maxStroke);
        const isDuplicate = strokeCounts[basePt] > 1; // その画数が重複しているか？

        if (isDuplicate) {
            // 画数が被っていたら、最大・非最大に関わらず没収
            diff = 0;
            title = "BAT OUT!!";
            detail = `画数(${basePt})が重複しているため没収！`;
        } else if (isMax) {
            // 重複なし、かつ最大
            diff = basePt + 3;
            title = "JACKPOT!!";
            detail = `${hitSolution.kanji}(${basePt}) + ボーナス(3)`;
        } else {
            // 重複なし、通常正解
            diff = basePt;
            title = "WIN";
            detail = `漢字：${hitSolution.kanji} (${basePt}pt)`;
        }
        hasWonBefore = true;
    } else {
        // 区切り不正解
        if (hasWonBefore) {
            const penalty = Math.floor(currentScore / 2);
            diff = -penalty;
            title = "LOSE...";
            detail = `区切り不正解 (-${penalty}pt)`;
        } else {
            diff = 0;
            title = "SAFE";
            detail = "区切り不正解 (初回ペナルティなし)";
        }
    }

    currentScore += diff;
    showResultModal(title, diff, detail);
}

function showResultModal(title, diff, detail) {
    const titleEl = document.getElementById("result-title");
    const diffEl = document.getElementById("score-diff");
    const detailEl = document.getElementById("result-detail");
    
    titleEl.textContent = title;
    detailEl.textContent = detail;
    
    if (diff > 0) {
        diffEl.textContent = "+" + diff;
        diffEl.style.color = "#daa520";
        titleEl.style.color = "#daa520";
    } else if (diff < 0) {
        diffEl.textContent = diff;
        diffEl.style.color = "#ff4444";
        titleEl.style.color = "#ff4444";
    } else {
        diffEl.textContent = "±0";
        diffEl.style.color = "#fff";
        titleEl.style.color = "#fff";
    }

    updateHUD();
    resultOverlay.classList.remove("hidden");
}

function updateHUD() {
    scoreDisplay.textContent = Math.floor(currentScore);
}

function nextRound() {
    currentRound++;
    startRound();
}