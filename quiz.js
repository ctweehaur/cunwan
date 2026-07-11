/**
 * 互动古文教学平台 - 《村晚》客观题数据包
 */

const quizQuestions = [
    {
        id: 1,
        text: "“草满池塘水满陂”中两个“满”字分别描写了什么？",
        py: "cǎo mǎn chí táng shuǐ mǎn bēi zhōng liǎng gè mǎn zì fēn bié miáo xiě le shén me",
        en: "What do the two '满' characters in the first line respectively describe?",
        options: [
            {
                text: "青草长满池塘，池水涨满堤岸",
                py: "qīng cǎo zhǎng mǎn chí táng chí shuǐ zhǎng mǎn dī àn",
                en: "Grass fills the pond, water fills the bank",
                correct: true,
                explanation: "第一个“满”写青草长满池塘，第二个“满”写池水涨满堤岸，两个“满”字描绘了夏季水草丰美的景象。",
                explanationPy: "dì yī gè mǎn xiě qīng cǎo zhǎng mǎn chí táng dì èr gè mǎn xiě chí shuǐ zhǎng mǎn dī àn liǎng gè mǎn zì miáo huì le xià jì shuǐ cǎo fēng měi de jǐng xiàng",
                explanationEn: "The first '满' describes grass filling the pond, the second '满' describes water filling the bank. Both depict a lush summer scene."
            },
            {
                text: "池塘里装满草，堤岸上装满水",
                py: "chí táng lǐ zhuāng mǎn cǎo dī àn shàng zhuāng mǎn shuǐ",
                en: "The pond is filled with grass, the bank is filled with water",
                correct: false,
                explanation: "“草满池塘”是草长在池塘里，“水满陂”是水涨到堤岸，并非池塘里装满草或堤岸上装满水。",
                explanationPy: "cǎo mǎn chí táng shì cǎo zhǎng zài chí táng lǐ shuǐ mǎn bēi shì shuǐ zhǎng dào dī àn bìng fēi chí táng lǐ zhuāng mǎn cǎo huò dī àn shàng zhuāng mǎn shuǐ",
                explanationEn: "'Grass fills the pond' means grass grows in the pond; 'water fills the bank' means water rises to the bank. It doesn't mean the pond is filled with grass or the bank with water."
            },
            {
                text: "青草茂盛，池水清澈",
                py: "qīng cǎo mào shèng chí shuǐ qīng chè",
                en: "Lush grass and clear water",
                correct: false,
                explanation: "“满”强调的是繁盛和充盈，但诗中并未直接描写池水是否清澈。",
                explanationPy: "mǎn qiáng diào de shì fán shèng hé chōng yíng dàn shī zhōng bìng wèi zhí jiē miáo xiě chí shuǐ shì fǒu qīng chè",
                explanationEn: "'满' emphasizes abundance and fullness, but the poem doesn't describe whether the water is clear."
            },
            {
                text: "池塘里的鱼很多，堤岸很长",
                py: "chí táng lǐ de yú hěn duō dī àn hěn cháng",
                en: "Many fish in the pond, a long bank",
                correct: false,
                explanation: "诗中完全没有提到鱼或堤岸的长度，“满”字与鱼无关。",
                explanationPy: "shī zhōng wán quán méi yǒu tí dào yú huò dī àn de cháng dù mǎn zì yǔ yú wú guān",
                explanationEn: "The poem does not mention fish or the length of the bank; '满' has nothing to do with fish."
            }
        ]
    },
    {
        id: 2,
        text: "“山衔落日浸寒漪”中的“衔”字运用了什么修辞手法？",
        py: "shān xián luò rì jìn hán yī zhōng de xián zì yùn yòng le shén me xiū cí shǒu fǎ",
        en: "What rhetorical device is used in '山衔落日'?",
        options: [
            {
                text: "拟人",
                py: "nǐ rén",
                en: "Personification",
                correct: true,
                explanation: "“衔”字赋予山以人的动作（用嘴含着），是拟人手法，写出了落日挂在山边的生动画面。",
                explanationPy: "xián zì fù yǔ shān yǐ rén de dòng zuò yòng zuǐ hán zhe shì nǐ rén shǒu fǎ xiě chū le luò rì guà zài shān biān de shēng dòng huà miàn",
                explanationEn: "'衔' gives the mountain the human action of 'holding in the mouth,' using personification to create a vivid image of the sunset at the mountain's edge."
            },
            {
                text: "比喻",
                py: "bǐ yù",
                en: "Metaphor",
                correct: false,
                explanation: "“衔”是拟人，将山比作能含住落日的人，而非比喻修辞。",
                explanationPy: "xián shì nǐ rén jiāng shān bǐ zuò néng hán zhù luò rì de rén ér fēi bǐ yù xiū cí",
                explanationEn: "'衔' is personification, treating the mountain like a person holding the sun, not a metaphor."
            },
            {
                text: "夸张",
                py: "kuā zhāng",
                en: "Hyperbole",
                correct: false,
                explanation: "“衔”并非夸张落日的大小或山的高度，而是拟人化的描写。",
                explanationPy: "xián bìng fēi kuā zhāng luò rì de dà xiǎo huò shān de gāo dù ér shì nǐ rén huà de miáo xiě",
                explanationEn: "'衔' is not an exaggeration of size or height; it's a personified description."
            },
            {
                text: "对偶",
                py: "duì ǒu",
                en: "Antithesis",
                correct: false,
                explanation: "“山衔落日”与“浸寒漪”并非对仗结构，且“衔”字本身与对偶无关。",
                explanationPy: "shān xián luò rì yǔ jìn hán yī bìng fēi duì zhàng jié gòu qiě xián zì běn shēn yǔ duì ǒu wú guān",
                explanationEn: "'山衔落日' and '浸寒漪' are not parallel; '衔' has nothing to do with antithesis."
            }
        ]
    },
    {
        id: 3,
        text: "“短笛无腔信口吹”中的“无腔”是什么意思？",
        py: "duǎn dí wú qiāng xìn kǒu chuī zhōng de wú qiāng shì shén me yì sī",
        en: "What does '无腔' mean in this line?",
        options: [
            {
                text: "没有固定的腔调，随意吹奏",
                py: "méi yǒu gù dìng de qiāng diào suí yì chuī zòu",
                en: "Without a fixed melody, playing casually",
                correct: true,
                explanation: "“无腔”指没有固定的曲调或腔调，与“信口”（随口）相呼应，表现牧童天真随意、无拘无束的状态。",
                explanationPy: "wú qiāng zhǐ méi yǒu gù dìng de qǔ diào huò qiāng diào yǔ xìn kǒu xiāng hū yìng biǎo xiàn mù tóng tiān zhēn suí yì wú jū wú shù de zhuàng tài",
                explanationEn: "'无腔' means no fixed tune, corresponding with '信口' (casually), showing the shepherd boy's carefree and innocent nature."
            },
            {
                text: "笛子没有腔体，坏了",
                py: "dí zi méi yǒu qiāng tǐ huài le",
                en: "The flute is broken",
                correct: false,
                explanation: "“腔”在此处指曲调、腔调，而非笛子的腔体。",
                explanationPy: "qiāng zài cǐ chù zhǐ qǔ diào qiāng diào ér fēi dí zi de qiāng tǐ",
                explanationEn: "'腔' here refers to musical tune, not the body of the flute."
            },
            {
                text: "没有声音，吹不响",
                py: "méi yǒu shēng yīn chuī bù xiǎng",
                en: "No sound, cannot play",
                correct: false,
                explanation: "诗中明确写牧童在“吹”，说明笛子能吹响，“无腔”指曲调而非声音。",
                explanationPy: "shī zhōng míng què xiě mù tóng zài chuī shuō míng dí zi néng chuī xiǎng wú qiāng zhǐ qǔ diào ér fēi shēng yīn",
                explanationEn: "The poem clearly says the boy is playing the flute, so it makes sound. '无腔' refers to the tune, not the sound."
            },
            {
                text: "笛子很短，没有音腔",
                py: "dí zi hěn duǎn méi yǒu yīn qiāng",
                en: "The flute is short and has no resonance",
                correct: false,
                explanation: "“短笛”已写笛子短小，“无腔”与笛子长短无关，是描写吹奏的特点。",
                explanationPy: "duǎn dí yǐ xiě dí zi duǎn xiǎo wú qiāng yǔ dí zi cháng duǎn wú guān shì miáo xiě chuī zòu de tè diǎn",
                explanationEn: "'短笛' already says the flute is short; '无腔' is not about length but about the style of playing."
            }
        ]
    },
    {
        id: 4,
        text: "这首诗中牧童的形象有什么特点？",
        py: "zhè shǒu shī zhōng mù tóng de xíng xiàng yǒu shén me tè diǎn",
        en: "What are the characteristics of the shepherd boy in this poem?",
        options: [
            {
                text: "天真调皮，悠然自得",
                py: "tiān zhēn tiáo pí yōu rán zì dé",
                en: "Innocent, playful, and carefree",
                correct: true,
                explanation: "牧童“横牛背”是调皮随性的坐姿，“信口吹”是随意自在的吹奏，展现了天真活泼、悠然自得的形象。",
                explanationPy: "mù tóng héng niú bèi shì tiáo pí suí xìng de zuò zī xìn kǒu chuī shì suí yì zì zài de chuī zòu zhǎn xiàn le tiān zhēn huó pō yōu rán zì dé de xíng xiàng",
                explanationEn: "The boy's 'sitting sideways' shows playful spontaneity, and 'casually playing' shows carefree ease, portraying an innocent and joyful image."
            },
            {
                text: "勤奋刻苦，认真练习吹笛",
                py: "qín fèn kè kǔ rèn zhēn liàn xí chuī dí",
                en: "Diligent and serious about practicing the flute",
                correct: false,
                explanation: "诗中牧童是“信口吹”（随口吹），并非认真练习，而是随意自在地吹奏。",
                explanationPy: "shī zhōng mù tóng shì xìn kǒu chuī suí kǒu chuī bìng fēi rèn zhēn liàn xí ér shì suí yì zì zài dì chuī zòu",
                explanationEn: "The boy is 'casually playing,' not seriously practicing."
            },
            {
                text: "孤独寂寞，无人陪伴",
                py: "gū dú jì mò wú rén péi bàn",
                en: "Lonely and isolated",
                correct: false,
                explanation: "诗中牧童骑牛吹笛，画面宁静而自在，没有孤独寂寞的情感。",
                explanationPy: "shī zhōng mù tóng qí niú chuī dí huà miàn níng jìng ér zì zài méi yǒu gū dú jì mò de qíng gǎn",
                explanationEn: "The boy appears carefree and content, not lonely."
            },
            {
                text: "悲伤忧郁，思念家人",
                py: "bēi shāng yōu yù sī niàn jiā rén",
                en: "Sorrowful and missing family",
                correct: false,
                explanation: "诗中没有任何悲伤或思念的情绪，牧童的形象是轻松愉快的。",
                explanationPy: "shī zhōng méi yǒu rèn hé bēi shāng huò sī niàn de qíng xù mù tóng de xíng xiàng shì qīng sōng yú kuài de",
                explanationEn: "There is no hint of sadness or longing; the boy's image is lighthearted and joyful."
            }
        ]
    }
];

console.log("成功加载：quiz 客观题数据包");
