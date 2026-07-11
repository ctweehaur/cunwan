/**
 * 互动古文教学平台 - 《村晚》原文核心词解数据包
 */

const poemData = [
    // 第一句：草满池塘水满陂，
    { text: "草", py: "cǎo", zh: "青草、水草。", en: "grass" },
    { text: "满", py: "mǎn", zh: "长满、充满。", en: "full / covered with" },
    { text: "池塘", py: "chí táng", zh: "蓄水的池塘。", en: "pond" },
    { text: "水", py: "shuǐ", zh: "池水、雨水。", en: "water" },
    { text: "满", py: "mǎn", zh: "涨满、充盈。", en: "full / overflowing" },
    { text: "陂", py: "bēi", zh: "水岸、池塘的堤岸。", en: "pond bank / embankment", exam: true },
    { text: "，", punc: true },

    // 第二句：山衔落日浸寒漪。
    { text: "山", py: "shān", zh: "青山、远山。", en: "mountain" },
    { text: "衔", py: "xián", zh: "用嘴含着。这里形容落日挂在山边，仿佛被山含住。", en: "to hold in the mouth / to carry", exam: true },
    { text: "落日", py: "luò rì", zh: "夕阳、下山的太阳。", en: "setting sun" },
    { text: "浸", py: "jìn", zh: "浸泡、倒映在水中。", en: "to immerse / to reflect", exam: true },
    { text: "寒漪", py: "hán yī", zh: "清凉的水波。漪：水波。", en: "cold ripples", exam: true },
    { text: "。", punc: true },

    // 第三句：牧童归去横牛背，
    { text: "牧童", py: "mù tóng", zh: "放牛的孩子。", en: "shepherd boy" },
    { text: "归去", py: "guī qù", zh: "回去、回家去。", en: "return home" },
    { text: "横", py: "héng", zh: "横着、侧着。形容牧童不是正骑，而是侧身横坐在牛背上。", en: "crosswise / sideways", exam: true },
    { text: "牛背", py: "niú bèi", zh: "牛的背部、牛背上。", en: "ox's back" },
    { text: "，", punc: true },

    // 第四句：短笛无腔信口吹。
    { text: "短笛", py: "duǎn dí", zh: "短小的竹笛，牧童常吹的乐器。", en: "short flute" },
    { text: "无腔", py: "wú qiāng", zh: "没有固定的腔调、曲调。", en: "without fixed tune", exam: true },
    { text: "信口", py: "xìn kǒu", zh: "随口、随意地。", en: "casually / freely", exam: true },
    { text: "吹", py: "chuī", zh: "吹奏、吹笛子。", en: "to play (flute)" },
    { text: "。", punc: true }
];

console.log("成功加载：text 原文数据包");
