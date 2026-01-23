// --- 問題プール ---
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
        ]
    },
    {
        id: 57,
        text: "馬耳東風",
        hiragana: ["ば", "じ", "と", "う", "ふ", "う"],
        solutions: [
            { range: [0], kanji: "馬", strokes: 10 },
            { range: [1], kanji: "耳", strokes: 6 },
            { range: [2, 3], kanji: "東", strokes: 8 },
            { range: [4, 5], kanji: "風", strokes: 9 }
        ]
    },
// --- 2026.01.17作成 ---
    {
        id: 58,
        text: "相思相愛",
        hiragana: ["そ", "う", "し", "そ", "う", "あ", "い"],
        solutions: [
            { range: [0, 1], kanji: "相", strokes: 9 },
            { range: [2], kanji: "思", strokes: 9 },
            { range: [3, 4], kanji: "相", strokes: 9 },
            { range: [5, 6], kanji: "愛", strokes: 13 }
        ]
    },
    {
        id: 59,
        text: "雲散霧消",
        hiragana: ["う", "さ", "ん", "む", "し", "ょ", "う"],
        solutions: [
            { range: [0], kanji: "雲", strokes: 12 },
            { range: [1, 2], kanji: "散", strokes: 12 },
            { range: [3], kanji: "霧", strokes: 19 },
            { range: [4, 5, 6], kanji: "消", strokes: 10 }
        ]
    },
    {
        id: 60,
        text: "有名無実",
        hiragana: ["ゆ", "う", "め", "い", "む", "じ", "つ"],
        solutions: [
            { range: [0, 1], kanji: "有", strokes: 6 },
            { range: [2, 3], kanji: "名", strokes: 6 },
            { range: [4], kanji: "無", strokes: 12 },
            { range: [5, 6], kanji: "実", strokes: 8 }
        ]
    },
    {
        id: 61,
        text: "意気投合",
        hiragana: ["い", "き", "と", "う", "ご", "う"],
        solutions: [
            { range: [0], kanji: "意", strokes: 13 },
            { range: [1], kanji: "気", strokes: 6 },
            { range: [2, 3], kanji: "投", strokes: 7 },
            { range: [4, 5], kanji: "合", strokes: 6 }
        ]
    },
    {
        id: 62,
        text: "粉骨砕身",
        hiragana: ["ふ", "ん", "こ", "つ", "さ", "い", "し", "ん"],
        solutions: [
            { range: [0, 1], kanji: "粉", strokes: 10 },
            { range: [2, 3], kanji: "骨", strokes: 10 },
            { range: [4, 5], kanji: "砕", strokes: 9 },
            { range: [6, 7], kanji: "身", strokes: 7 }
        ]
    },
    {
        id: 63,
        text: "切磋琢磨",
        hiragana: ["せ", "っ", "さ", "た", "く", "ま"],
        solutions: [
            { range: [0, 1], kanji: "切", strokes: 4 },
            { range: [2], kanji: "磋", strokes: 15 },
            { range: [3, 4], kanji: "琢", strokes: 11 },
            { range: [5], kanji: "磨", strokes: 16 }
        ]
    },
    {
        id: 64,
        text: "森羅万象",
        hiragana: ["し", "ん", "ら", "ば", "ん", "し", "ょ", "う"],
        solutions: [
            { range: [0, 1], kanji: "森", strokes: 12 },
            { range: [2], kanji: "羅", strokes: 19 },
            { range: [3, 4], kanji: "万", strokes: 3 },
            { range: [5, 6, 7], kanji: "象", strokes: 12 }
        ]
    },
    {
        id: 65,
        text: "跳梁跋扈",
        hiragana: ["ち", "ょ", "う", "り", "ょ", "う", "ば", "っ", "こ"],
        solutions: [
            { range: [0, 1, 2], kanji: "跳", strokes: 13 },
            { range: [3, 4, 5], kanji: "梁", strokes: 11 },
            { range: [6, 7], kanji: "跋", strokes: 12 },
            { range: [8], kanji: "扈", strokes: 11 }
        ]
    },
    {
        id: 66,
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
        id: 67,
        text: "疾風怒濤",
        hiragana: ["し", "っ", "ぷ", "う", "ど", "と", "う"],
        solutions: [
            { range: [0, 1], kanji: "疾", strokes: 10 },
            { range: [2, 3], kanji: "風", strokes: 9 },
            { range: [4], kanji: "怒", strokes: 9 },
            { range: [5, 6], kanji: "濤", strokes: 17 }
        ]
    },
    {
        id: 68,
        text: "創痍未癒",
        hiragana: ["そ", "う", "い", "み", "ゆ"],
        solutions: [
            { range: [0, 1], kanji: "創", strokes: 12 },
            { range: [2], kanji: "痍", strokes: 11 },
            { range: [3], kanji: "未", strokes: 5 },
            { range: [4], kanji: "癒", strokes: 18 }
        ]
    },
    {
        id: 69,
        text: "雌雄未決",
        hiragana: ["し", "ゆ", "う", "み", "け", "つ"],
        solutions: [
            { range: [0], kanji: "雌", strokes: 14 },
            { range: [1, 2], kanji: "雄", strokes: 12 },
            { range: [3], kanji: "未", strokes: 5 },
            { range: [4, 5], kanji: "決", strokes: 7 }
        ]
    },
    {
        id: 70,
        text: "孤雌寡鶴",
        hiragana: ["こ", "し", "か", "か", "く"],
        solutions: [
            { range: [0], kanji: "孤", strokes: 9 },
            { range: [1], kanji: "雌", strokes: 14 },
            { range: [2], kanji: "寡", strokes: 14 },
            { range: [3, 4], kanji: "鶴", strokes: 21 }
        ]
    },
    {
        id: 71,
        text: "苦心孤詣",
        hiragana: ["く", "し", "ん", "こ", "け", "い"],
        solutions: [
            { range: [0], kanji: "苦", strokes: 8 },
            { range: [1, 2], kanji: "心", strokes: 4 },
            { range: [3], kanji: "孤", strokes: 9 },
            { range: [4, 5], kanji: "詣", strokes: 13 }
        ]
    },
    {
        id: 72,
        text: "一韻到底",
        hiragana: ["い", "ち", "い", "ん", "と", "う", "て", "い"],
        solutions: [
            { range: [0, 1], kanji: "一", strokes: 1 },
            { range: [2, 3], kanji: "韻", strokes: 19 },
            { range: [4, 5], kanji: "到", strokes: 8 },
            { range: [6, 7], kanji: "底", strokes: 8 }
        ]
    },
    {
        id: 73,
        text: "海底撈月",
        hiragana: ["か", "い", "て", "い", "ろ", "う", "げ", "つ"],
        solutions: [
            { range: [0, 1], kanji: "海", strokes: 9 },
            { range: [2, 3], kanji: "底", strokes: 8 },
            { range: [4, 5], kanji: "撈", strokes: 15 },
            { range: [6, 7], kanji: "月", strokes: 4 }
        ]
    },
    {
        id: 74,
        text: "海市蜃楼",
        hiragana: ["か", "い", "し", "し", "ん", "ろ", "う"],
        solutions: [
            { range: [0, 1], kanji: "海", strokes: 9 },
            { range: [2], kanji: "市", strokes: 5 },
            { range: [3, 4], kanji: "蜃", strokes: 13 },
            { range: [5, 6], kanji: "楼", strokes: 13 }
        ]
    },
    {
        id: 75,
        text: "空理空論",
        hiragana: ["く", "う", "り", "く", "う", "ろ", "ん"],
        solutions: [
            { range: [0, 1], kanji: "空", strokes: 8 },
            { range: [2], kanji: "理", strokes: 11 },
            { range: [3, 4], kanji: "空", strokes: 8 },
            { range: [5, 6], kanji: "論", strokes: 15 }
        ]
    },
    {
        id: 76,
        text: "紙上談兵",
        hiragana: ["し", "じ", "ょ", "う", "だ", "ん", "ぺ", "い"],
        solutions: [
            { range: [0], kanji: "紙", strokes: 10 },
            { range: [1, 2, 3], kanji: "上", strokes: 3 },
            { range: [4, 5], kanji: "談", strokes: 15 },
            { range: [6, 7], kanji: "兵", strokes: 7 }
        ]
    },
    {
        id: 77,
        text: "夏下冬上",
        hiragana: ["か", "か", "と", "う", "じ", "ょ", "う"],
        solutions: [
            { range: [0], kanji: "夏", strokes: 10 },
            { range: [1], kanji: "下", strokes: 3 },
            { range: [2, 3], kanji: "冬", strokes: 5 },
            { range: [4, 5, 6], kanji: "上", strokes: 3 }
        ]
    },
    {
        id: 78,
        text: "春夏秋冬",
        hiragana: ["し", "ゅ", "ん", "か", "し", "ゅ", "う", "と", "う"],
        solutions: [
            { range: [0, 1, 2], kanji: "春", strokes: 9 },
            { range: [3], kanji: "夏", strokes: 10 },
            { range: [4, 5, 6], kanji: "秋", strokes: 9 },
            { range: [7, 8], kanji: "冬", strokes: 5 }
        ]
    },
    {
        id: 79,
        text: "井底之蛙",
        hiragana: ["せ", "い", "て", "い", "の", "あ"],
        solutions: [
            { range: [0, 1], kanji: "井", strokes: 4 },
            { range: [2, 3], kanji: "底", strokes: 8 },
            { range: [4], kanji: "之", strokes: 3 },
            { range: [5], kanji: "蛙", strokes: 12 }
        ]
    },
    {
        id: 80,
        text: "経国済民",
        hiragana: ["け", "い", "こ", "く", "さ", "い", "み", "ん"],
        solutions: [
            { range: [0, 1], kanji: "経", strokes: 11 },
            { range: [2, 3], kanji: "国", strokes: 8 },
            { range: [4, 5], kanji: "済", strokes: 11 },
            { range: [6, 7], kanji: "民", strokes: 5 }
        ]
    },
    {
        id: 81,
        text: "傀儡政権",
        hiragana: ["か", "い", "ら", "い", "せ", "い", "け", "ん"],
        solutions: [
            { range: [0, 1], kanji: "傀", strokes: 12 },
            { range: [2, 3], kanji: "儡", strokes: 17 },
            { range: [4, 5], kanji: "政", strokes: 9 },
            { range: [6, 7], kanji: "権", strokes: 15 }
        ]
    },
    {
        id: 82,
        text: "逆取順守",
        hiragana: ["ぎ", "ゃ", "く", "し", "ゅ", "じ", "ゅ", "ん", "し", "ゅ"],
        solutions: [
            { range: [0, 1, 2], kanji: "逆", strokes: 9 },
            { range: [3, 4], kanji: "取", strokes: 8 },
            { range: [5, 6, 7], kanji: "順", strokes: 12 },
            { range: [8, 9], kanji: "守", strokes: 6 }
        ]
    },
    {
        id: 83,
        text: "順風満帆",
        hiragana: ["じ", "ゅ", "ん", "ぷ", "う", "ま", "ん", "ぱ", "ん"],
        solutions: [
            { range: [0, 1, 2], kanji: "順", strokes: 12 },
            { range: [3, 4], kanji: "風", strokes: 9 },
            { range: [5, 6], kanji: "満", strokes: 12 },
            { range: [7, 8], kanji: "帆", strokes: 6 }
        ]
    },
    {
        id: 84,
        text: "黒風飛雨",
        hiragana: ["こ", "く", "ふ", "う", "ひ", "う"],
        solutions: [
            { range: [0, 1], kanji: "黒", strokes: 11 },
            { range: [2, 3], kanji: "風", strokes: 9 },
            { range: [4], kanji: "飛", strokes: 9 },
            { range: [5], kanji: "雨", strokes: 8 }
        ]
    },
    {
        id: 85,
        text: "雨後春筍",
        hiragana: ["う", "ご", "し", "ゅ", "ん", "じ", "ゅ", "ん"],
        solutions: [
            { range: [0], kanji: "雨", strokes: 8 },
            { range: [1], kanji: "後", strokes: 9 },
            { range: [2, 3, 4], kanji: "春", strokes: 9 },
            { range: [5, 6, 7], kanji: "筍", strokes: 12 }
        ]
    },
    {
        id: 86,
        text: "鶏口牛後",
        hiragana: ["け", "い", "こ", "う", "ぎ", "ゅ", "う", "ご"],
        solutions: [
            { range: [0, 1], kanji: "鶏", strokes: 19 },
            { range: [2, 3], kanji: "口", strokes: 3 },
            { range: [4, 5, 6], kanji: "牛", strokes: 4 },
            { range: [7], kanji: "後", strokes: 9 }
        ]
    },
    {
        id: 87,
        text: "自今以後",
        hiragana: ["じ", "こ", "ん", "い", "ご"],
        solutions: [
            { range: [0], kanji: "自", strokes: 6 },
            { range: [1, 2], kanji: "今", strokes: 4 },
            { range: [3], kanji: "以", strokes: 5 },
            { range: [4], kanji: "後", strokes: 9 }
        ]
    },
    {
        id: 88,
        text: "三十而立",
        hiragana: ["さ", "ん", "じ", "ゅ", "う", "じ", "り", "つ"],
        solutions: [
            { range: [0, 1], kanji: "三", strokes: 3 },
            { range: [2, 3, 4], kanji: "十", strokes: 2 },
            { range: [5], kanji: "而", strokes: 6 },
            { range: [6, 7], kanji: "立", strokes: 5 }
        ]
    },
    {
        id: 89,
        text: "自立自存",
        hiragana: ["じ", "り", "つ", "じ", "そ", "ん"],
        solutions: [
            { range: [0], kanji: "自", strokes: 6 },
            { range: [1, 2], kanji: "立", strokes: 5 },
            { range: [3], kanji: "自", strokes: 6 },
            { range: [4, 5], kanji: "存", strokes: 6 }
        ]
    },
    {
        id: 90,
        text: "哀毀骨立",
        hiragana: ["あ", "い", "き", "こ", "つ", "り", "つ"],
        solutions: [
            { range: [0, 1], kanji: "哀", strokes: 9 },
            { range: [2], kanji: "毀", strokes: 13 },
            { range: [3, 4], kanji: "骨", strokes: 10 },
            { range: [5, 6], kanji: "立", strokes: 5 }
        ]
    },
    {
        id: 91,
        text: "菟糸燕麦",
        hiragana: ["と", "し", "え", "ん", "ば", "く"],
        solutions: [
            { range: [0], kanji: "菟", strokes: 12 },
            { range: [1], kanji: "糸", strokes: 6 },
            { range: [2, 3], kanji: "燕", strokes: 16 },
            { range: [4, 5], kanji: "麦", strokes: 7 }
        ]
    },
    {
        id: 92,
        text: "燕雀鴻鵠",
        hiragana: ["え", "ん", "じ", "ゃ", "く", "こ", "う", "こ", "く"],
        solutions: [
            { range: [0, 1], kanji: "燕", strokes: 16 },
            { range: [2, 3, 4], kanji: "雀", strokes: 11 },
            { range: [5, 6], kanji: "鴻", strokes: 17 },
            { range: [7, 8], kanji: "鵠", strokes: 18 }
        ]
    },
    {
        id: 93,
        text: "欣喜雀躍",
        hiragana: ["き", "ん", "き", "じ", "ゃ", "く", "や", "く"],
        solutions: [
            { range: [0, 1], kanji: "欣", strokes: 8 },
            { range: [2], kanji: "喜", strokes: 12 },
            { range: [3, 4, 5], kanji: "雀", strokes: 11 },
            { range: [6, 7], kanji: "躍", strokes: 21 }
        ]
    },
    {
        id: 94,
        text: "喜躍抃舞",
        hiragana: ["き", "や", "く", "べ", "ん", "ぶ"],
        solutions: [
            { range: [0], kanji: "喜", strokes: 12 },
            { range: [1, 2], kanji: "躍", strokes: 21 },
            { range: [3, 4], kanji: "抃", strokes: 7 },
            { range: [5], kanji: "舞", strokes: 15 }
        ]
    },
    {
        id: 95,
        text: "面目躍如",
        hiragana: ["め", "ん", "も", "く", "や", "く", "じ", "ょ"],
        solutions: [
            { range: [0, 1], kanji: "面", strokes: 9 },
            { range: [2, 3], kanji: "目", strokes: 5 },
            { range: [4, 5], kanji: "躍", strokes: 21 },
            { range: [6, 7], kanji: "如", strokes: 6 }
        ]
    },
    {
        id: 96,
        text: "名誉挽回",
        hiragana: ["め", "い", "よ", "ば", "ん", "か", "い"],
        solutions: [
            { range: [0, 1], kanji: "名", strokes: 6 },
            { range: [2], kanji: "誉", strokes: 13 },
            { range: [3, 4], kanji: "挽", strokes: 10 },
            { range: [5, 6], kanji: "回", strokes: 6 }
        ]
    },
    {
        id: 97,
        text: "汚名返上",
        hiragana: ["お", "め", "い", "へ", "ん", "じ", "ょ", "う"],
        solutions: [
            { range: [0], kanji: "汚", strokes: 6 },
            { range: [1, 2], kanji: "名", strokes: 6 },
            { range: [3, 4], kanji: "返", strokes: 7 },
            { range: [5, 6, 7], kanji: "上", strokes: 3 }
        ]
    },
    {
        id: 98,
        text: "往返徒労",
        hiragana: ["お", "う", "へ", "ん", "と", "ろ", "う"],
        solutions: [
            { range: [0, 1], kanji: "往", strokes: 8 },
            { range: [2, 3], kanji: "返", strokes: 7 },
            { range: [4], kanji: "徒", strokes: 10 },
            { range: [5, 6], kanji: "労", strokes: 7 }
        ]
    },
    {
        id: 99,
        text: "梅妻鶴子",
        hiragana: ["ば", "い", "さ", "い", "か", "く", "し"],
        solutions: [
            { range: [0, 1], kanji: "梅", strokes: 10 },
            { range: [2, 3], kanji: "妻", strokes: 8 },
            { range: [4, 5], kanji: "鶴", strokes: 21 },
            { range: [6], kanji: "子", strokes: 3 }
        ]
    },
    {
        id: 100,
        text: "妻子離散",
        hiragana: ["さ", "い", "し", "り", "さ", "ん"],
        solutions: [
            { range: [0, 1], kanji: "妻", strokes: 8 },
            { range: [2], kanji: "子", strokes: 3 },
            { range: [3], kanji: "離", strokes: 18 },
            { range: [4, 5], kanji: "散", strokes: 12 }
        ]
    },
    {
        id: 101,
        text: "糶糴斂散",
        hiragana: ["ち", "ょ", "う", "て", "き", "れ", "ん", "さ", "ん"],
        solutions: [
            { range: [0, 1, 2], kanji: "糶", strokes: 25 },
            { range: [3, 4], kanji: "糴", strokes: 22 },
            { range: [5, 6], kanji: "斂", strokes: 17 },
            { range: [7, 8], kanji: "散", strokes: 12 }
        ]
    },
// --- 2026.01.24 追加 ---
];


// --- 設定 ---
const INIT_CHIPS = 500; 
const MAX_BONUS_RATE = 1.2;
const COUNT_SPEED = 800; 
const ABSORB_DURATION = 600; 
const TOTAL_ROUNDS = 10;

// --- 状態管理 ---
let gameQueue = [];
let playedProblems = [];
let currentChips = INIT_CHIPS;
let currentRound = 0;
let currentBetAmount = 0;

let selectedIndices = [];
let timerInterval = null;
let timeLeft = 10.0;
let isGameActive = false;

// スキップ制御用
let reelIntervals = [];
let finalizeTimer = null;
let activeReelData = []; 

// DOM
const reelContainer = document.getElementById("reel-container");
const cardArea = document.getElementById("card-area");
const doorOverlay = document.getElementById("door-overlay");
const doorMessage = document.getElementById("door-message");
const roundDisplay = document.getElementById("round-display");
const timerBar = document.getElementById("timer-bar");
const chipsDisplay = document.getElementById("current-chips");
const resultOverlay = document.getElementById("result-overlay");
const homeScreen = document.getElementById("home-screen");

const betControls = document.getElementById("bet-controls");
const decisionControls = document.getElementById("decision-controls");
const costDisplay = document.getElementById("cost-display");
const decideBtn = document.getElementById("decide-btn");
const skipBtn = document.getElementById("skip-btn"); 

const finalResultOverlay = document.getElementById("final-result-overlay");
const finalScoreDisplay = document.getElementById("final-score-display");
const problemListBox = document.getElementById("problem-list-box");


// --- ユーティリティ ---
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// --- ゲーム開始 ---
function startGameFromHome() {
    homeScreen.classList.add("hidden");
    initGame();
}

function initGame() {
    currentChips = INIT_CHIPS;
    currentRound = 0;
    playedProblems = []; 
    
    finalResultOverlay.classList.remove("open");
    resultOverlay.classList.add("hidden");

    // 問題プール作成
    const shuffled = shuffleArray(PROBLEM_POOL);
    gameQueue = shuffled.slice(0, TOTAL_ROUNDS);
    if (gameQueue.length < TOTAL_ROUNDS) {
        while(gameQueue.length < TOTAL_ROUNDS) {
            gameQueue.push(PROBLEM_POOL[Math.floor(Math.random()*PROBLEM_POOL.length)]);
        }
    }

    updateHUD();
    startRound();
}

function startRound() {
    if (currentRound >= TOTAL_ROUNDS || currentChips <= 0) {
        showFinalResult();
        return;
    }

    if (!gameQueue[currentRound]) {
        showFinalResult();
        return;
    }

    playedProblems.push(gameQueue[currentRound]);

    // リセット
    selectedIndices = [];
    isGameActive = false;
    currentBetAmount = 0;
    
    // スキップ関連リセット
    reelIntervals.forEach(clearInterval);
    reelIntervals = [];
    if (finalizeTimer) clearTimeout(finalizeTimer);
    activeReelData = [];
    
    timerBar.style.width = "100%";
    timerBar.style.backgroundColor = "#555";
    resultOverlay.classList.add("hidden");
    skipBtn.classList.add("hidden"); 
    
    betControls.classList.add("hidden");
    decisionControls.classList.add("hidden");
    
    doorOverlay.classList.remove("open");
    doorMessage.textContent = "DEALING...";
    roundDisplay.textContent = `ROUND ${String(currentRound + 1).padStart(2, '0')}/${TOTAL_ROUNDS}`;
    
    updateHUD();
    setupCards();
}

async function setupCards() {
    const problem = gameQueue[currentRound];
    
    reelContainer.innerHTML = "";
    problem.solutions.forEach(sol => {
        const reel = document.createElement("div");
        reel.className = "reel"; 
        reel.innerHTML = `<div class="reel-value">0</div><div class="reel-kanji">?</div>`;
        reelContainer.appendChild(reel);
    });

    cardArea.innerHTML = "";
    const cardElements = [];
    problem.hiragana.forEach((char, index) => {
        const wrapper = document.createElement("div");
        wrapper.className = "card-wrapper";
        wrapper.dataset.index = index;
        wrapper.id = `card-${index}`;
        wrapper.onclick = () => handleCardClick(index, wrapper);

        const back = document.createElement("div");
        back.className = "card-face card-back"; 
        const front = document.createElement("div");
        front.className = "card-face card-front";
        front.textContent = char;

        wrapper.appendChild(back);
        wrapper.appendChild(front);
        cardArea.appendChild(wrapper);
        cardElements.push(wrapper);
    });

    for (let i = 0; i < cardElements.length; i++) {
        await wait(100);
        cardElements[i].classList.add("dealt");
    }

    await wait(300);
    doorMessage.textContent = "PLACE YOUR BET";
    showBetUI();
}

// --- フェーズ1: ベット額決定 ---
function showBetUI() {
    betControls.classList.remove("hidden");
    
    const btns = document.querySelectorAll(".chip-btn");
    btns.forEach(btn => {
        // "5k"ボタンの特別処理
        if(btn.innerText === "5k") {
             if(currentChips < 5000) btn.disabled = true;
             else btn.disabled = false;
             return;
        }

        const amount = parseInt(btn.textContent);
        if (currentChips < amount) {
            btn.disabled = true;
        } else {
            btn.disabled = false;
        }
    });
    
    // 最小ベット(50)すら払えないなら破産
    if (currentChips < 50) {
        setTimeout(() => {
            showFinalResult();
        }, 500);
    }
}

function confirmBet(amount) {
    if (currentChips < amount) return;
    currentBetAmount = amount;
    
    betControls.classList.add("hidden");
    decisionControls.classList.remove("hidden");
    updateCostDisplay();

    const cards = document.querySelectorAll(".card-wrapper");
    cards.forEach(card => card.classList.add("flipped"));

    doorMessage.textContent = `BET: ${currentBetAmount}`;
    
    isGameActive = true;
    timerBar.style.backgroundColor = "#00ff00";
    startTimer();
}

// --- フェーズ2: カード選択 ---
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
    decideBtn.disabled = true;

    if (selectedIndices.length === 0) {
        const problem = gameQueue[currentRound];
        const penalty = problem.hiragana.length * currentBetAmount;
        currentChips -= penalty;
        showResultModal("TIME OVER", -penalty, `未選択ペナルティ\n(全文字数 × BET)`);
    } else {
        execDecision();
    }
}

function handleCardClick(index, element) {
    if (!isGameActive) return;

    let newSelection = [];
    if (selectedIndices.length === 0) {
        newSelection = [index];
    } else {
        const min = Math.min(...selectedIndices);
        const max = Math.max(...selectedIndices);
        if (index >= min - 1 && index <= max + 1) {
            const newMin = Math.min(min, index);
            const newMax = Math.max(max, index);
            for (let i = newMin; i <= newMax; i++) {
                newSelection.push(i);
            }
        } else {
            newSelection = [index];
        }
    }

    const cost = newSelection.length * currentBetAmount;
    if (cost > currentChips) {
        doorMessage.textContent = "INSUFFICIENT FUNDS!";
        doorMessage.style.color = "#ff4444";
        setTimeout(() => {
            doorMessage.textContent = `BET: ${currentBetAmount}`;
            doorMessage.style.color = "#daa520";
        }, 1000);
        return;
    }

    selectedIndices = newSelection;
    updateCardSelection();
    updateCostDisplay();
}

function updateCardSelection() {
    const wrappers = document.querySelectorAll(".card-wrapper");
    wrappers.forEach(w => {
        const idx = parseInt(w.dataset.index);
        w.classList.toggle("selected", selectedIndices.includes(idx));
    });
    
    decideBtn.disabled = (selectedIndices.length === 0);
}

function updateCostDisplay() {
    const count = selectedIndices.length;
    const cost = count * currentBetAmount;
    costDisplay.textContent = `COST: ${cost}`;
}

// --- フェーズ3: 決済 & 判定 ---
async function execDecision() {
    if (selectedIndices.length === 0) return;

    isGameActive = false;
    clearInterval(timerInterval);
    decideBtn.disabled = true;

    const cost = selectedIndices.length * currentBetAmount;
    currentChips -= cost;
    updateHUD();

    doorMessage.textContent = "JUDGEMENT...";

    await wait(500);
    doorOverlay.classList.add("open");
    await wait(800);
    
    await absorbCards();
}

async function absorbCards() {
    const problem = gameQueue[currentRound];
    const reels = document.querySelectorAll(".reel");
    activeReelData = []; 

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
                card.style.transform = `translate(${deltaX}px, ${deltaY}px) rotateY(180deg) scale(0.2)`;
                card.style.opacity = "0";
            });
        });
        setTimeout(resolve, ABSORB_DURATION);
    });
}

// リール回転アニメーション（スキップ対応）
function runAllReels(reelDataList) {
    const allStrokes = reelDataList.map(r => r.data.strokes);
    const strokeCounts = {};
    allStrokes.forEach(s => { strokeCounts[s] = (strokeCounts[s] || 0) + 1; });

    skipBtn.classList.remove("hidden");

    reelDataList.forEach(item => {
        let count = 0;
        const target = item.data.strokes;
        const valueEl = item.element.querySelector(".reel-value");
        const kanjiEl = item.element.querySelector(".reel-kanji");
        const isBatting = strokeCounts[target] > 1;

        const intervalId = setInterval(() => {
            count++;
            valueEl.textContent = count;
            if (count >= target) {
                clearInterval(intervalId);
                kanjiEl.textContent = item.data.kanji;
                item.element.classList.add("finished");
                if (isBatting) {
                    item.element.classList.add("batting");
                }
            }
        }, COUNT_SPEED);
        
        reelIntervals.push(intervalId);
    });

    const tempMax = Math.max(...reelDataList.map(r=>r.data.strokes));
    const waitTime = tempMax * COUNT_SPEED + 1000;
    
    finalizeTimer = setTimeout(() => {
        skipBtn.classList.add("hidden"); 
        finalizeScore(false); // 通常終了
    }, waitTime);
}

// スキップ機能
function skipAnimation() {
    reelIntervals.forEach(clearInterval);
    reelIntervals = [];
    if (finalizeTimer) clearTimeout(finalizeTimer);
    
    skipBtn.classList.add("hidden");

    const allStrokes = activeReelData.map(r => r.data.strokes);
    const strokeCounts = {};
    allStrokes.forEach(s => { strokeCounts[s] = (strokeCounts[s] || 0) + 1; });

    activeReelData.forEach(item => {
        const target = item.data.strokes;
        const valueEl = item.element.querySelector(".reel-value");
        const kanjiEl = item.element.querySelector(".reel-kanji");
        const isBatting = strokeCounts[target] > 1;

        valueEl.textContent = target;
        kanjiEl.textContent = item.data.kanji;
        item.element.classList.add("finished");
        if (isBatting) {
            item.element.classList.add("batting");
        }
    });

    setTimeout(() => {
        finalizeScore(true); // スキップ経由
    }, 100);
}

// 最終結果計算（スキップ引数追加）
async function finalizeScore(isSkipped) {
    const problem = gameQueue[currentRound];
    const allStrokes = problem.solutions.map(s => s.strokes);

    const strokeCounts = {};
    allStrokes.forEach(s => { strokeCounts[s] = (strokeCounts[s] || 0) + 1; });

    // ボーナス対象
    let bonusTargetStroke = -1;
    const uniqueStrokesDesc = [...new Set(allStrokes)].sort((a, b) => b - a);
    for (const s of uniqueStrokesDesc) {
        if (strokeCounts[s] === 1) {
            bonusTargetStroke = s;
            break; 
        }
    }

    // ユーザー選択
    const userJson = JSON.stringify(selectedIndices.sort((a,b)=>a-b));
    let hitSolution = null;
    problem.solutions.forEach(sol => {
        if (JSON.stringify(sol.range) === userJson) hitSolution = sol;
    });

    // 演出待機時間
    let hasBatting = false;
    allStrokes.forEach(s => {
        if (strokeCounts[s] > 1) hasBatting = true;
    });

    if (!isSkipped) {
        if (hasBatting) await wait(2500);
        else await wait(1000);
    } else {
        await wait(500); 
    }

    // 計算
    let returnAmount = 0;
    let title = "";
    let detail = "";
    const cost = selectedIndices.length * currentBetAmount;

    if (hitSolution) {
        const basePt = hitSolution.strokes;
        const isDuplicate = strokeCounts[basePt] > 1;

        if (isDuplicate) {
            returnAmount = 0;
            title = "BAT OUT";
            detail = `画数(${basePt})重複により没収\nCOST -${cost}`;
        } else {
            let grossReturn = currentBetAmount * basePt;
            let note = "";
            
            if (bonusTargetStroke !== -1 && basePt === bonusTargetStroke) {
                grossReturn = Math.floor(grossReturn * MAX_BONUS_RATE);
                note = "\nMAX BONUS x1.2";
                title = "JACKPOT!!";
            } else {
                title = "WIN";
            }

            returnAmount = grossReturn;
            detail = `画数${basePt} × BET${currentBetAmount}${note}`;
        }
    } else {
        returnAmount = 0;
        title = "INVALID";
        detail = `区切り不正解\nCOST -${cost}`;
    }

    currentChips += returnAmount;
    
    const profit = returnAmount - cost;
    showResultModal(title, profit, detail);
}

function showResultModal(title, profit, detail) {
    const titleEl = document.getElementById("result-title");
    const diffEl = document.getElementById("score-diff");
    const detailEl = document.getElementById("result-detail");
    
    titleEl.textContent = title;
    detailEl.innerText = detail;
    
    if (profit > 0) {
        diffEl.textContent = "+" + profit;
        diffEl.style.color = "#daa520";
        titleEl.style.color = "#daa520";
    } else if (profit < 0) {
        diffEl.textContent = profit;
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

function showFinalResult() {
    finalScoreDisplay.textContent = Math.floor(currentChips);
    
    let listText = "";
    playedProblems.forEach((prob, idx) => {
        listText += `R${idx+1}: ${prob.text} (読み: ${prob.hiragana.join("")})\n`;
    });
    problemListBox.value = listText;

    finalResultOverlay.classList.add("open");
}

function updateHUD() {
    chipsDisplay.textContent = Math.floor(currentChips);
}

function nextRound() {
    currentRound++;
    startRound();
}
