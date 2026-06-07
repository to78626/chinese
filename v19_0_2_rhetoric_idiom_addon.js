/* 題庫來源轉換版：由使用者上傳的成語加油站、生字延伸成語、修辭分析資料轉成遊戲題庫。
   直接替換原本的 v19_0_2_rhetoric_idiom_addon.js 即可。
   注意：本檔只更換修辭與成語題庫資料；不修改遊戲畫面與玩法。
*/
(function () {
  'use strict';

  const PUNCTUATION_OPTIONS = ["，", "。", "、", "……", "；", "：", "？", "！", "「", "」", "《", "》"];

  const GAME_BANKS = {
    punctuation: { label: "標點符號", title: "標點競技場", mode: "fixed-buttons" },
    rhetoric: { label: "修辭", title: "修辭魔法塔", mode: "multiple-choice" },
    idiom: { label: "成語", title: "成語博物館", mode: "multiple-choice" },
    mixed: { label: "混合挑戰", title: "語文混戰場", mode: "multiple-choice" }
  };

  const RHETORIC_FIXED_OPTIONS = [
    "譬喻", "擬人", "摹寫", "排比", "類疊", "設問", "感嘆", "引用", "誇飾"
  ];

  const RHETORIC_QUESTIONS = [
  {
    "id": "rhe_src_001",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "心是一葉舟",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "譬喻",
    "options": [
      "誇飾",
      "類疊",
      "譬喻",
      "擬人"
    ],
    "explanation": "這句主要使用「譬喻」。",
    "source": "國小國語3上修辭分析.doc"
  },
  {
    "id": "rhe_src_002",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "一點落舟前，一點落舟中，一點落舟後",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "類疊",
    "options": [
      "譬喻",
      "類疊",
      "排比",
      "感嘆"
    ],
    "explanation": "這句主要使用「類疊」。",
    "source": "國小國語3上修辭分析.doc"
  },
  {
    "id": "rhe_src_003",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "心的小船輕輕走",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "類疊",
    "options": [
      "感嘆",
      "引用",
      "類疊",
      "譬喻"
    ],
    "explanation": "這句主要使用「類疊」。",
    "source": "國小國語3上修辭分析.doc"
  },
  {
    "id": "rhe_src_004",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "一下秋風吹，一下秋雨落，秋風秋雨落心上，讓人好發愁！",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "類疊",
    "options": [
      "引用",
      "類疊",
      "擬人",
      "設問"
    ],
    "explanation": "這句主要使用「類疊」。",
    "source": "國小國語3上修辭分析.doc"
  },
  {
    "id": "rhe_src_005",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "一下變成息，愛嘆息。一下變成忌，愛忌妒",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "類疊",
    "options": [
      "類疊",
      "設問",
      "譬喻",
      "感嘆"
    ],
    "explanation": "這句主要使用「類疊」。",
    "source": "國小國語3上修辭分析.doc"
  },
  {
    "id": "rhe_src_006",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "心的小船輕輕走，小船上要載什麼呢？",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "設問",
    "options": [
      "設問",
      "譬喻",
      "擬人",
      "引用"
    ],
    "explanation": "這句主要使用「設問」。",
    "source": "國小國語3上修辭分析.doc"
  },
  {
    "id": "rhe_src_007",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "只載秋天好不好？不好，不好！",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "設問",
    "options": [
      "引用",
      "設問",
      "類疊",
      "摹寫"
    ],
    "explanation": "這句主要使用「設問」。",
    "source": "國小國語3上修辭分析.doc"
  },
  {
    "id": "rhe_src_008",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "王叔叔手忙腳亂，慌慌張張的抓起雨傘，飛也似的下車",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "類疊",
    "options": [
      "感嘆",
      "設問",
      "類疊",
      "誇飾"
    ],
    "explanation": "這句主要使用「類疊」。",
    "source": "國小國語3上修辭分析.doc"
  },
  {
    "id": "rhe_src_009",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "老闆熱情的說：「『抱著灰雞上飛機，飛機起飛，灰雞要飛。』我們用料實在，除 了最好吃的『灰雞』，飯後還有水果。」",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "引用",
    "options": [
      "譬喻",
      "引用",
      "排比",
      "誇飾"
    ],
    "explanation": "這句主要使用「引用」。",
    "source": "國小國語3上修辭分析.doc"
  },
  {
    "id": "rhe_src_010",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "老闆笑咪咪的說：「今天有兩種，你喜歡『吃葡萄不吐葡萄皮，不吃葡萄倒吐葡萄 皮』的葡萄，還是『風吹桃枝落桃子，桃枝落桃撞猴子』的桃子呢？這兩種都是我 們繞口令村有名的水果。」",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "引用",
    "options": [
      "擬人",
      "譬喻",
      "引用",
      "排比"
    ],
    "explanation": "這句主要使用「引用」。",
    "source": "國小國語3上修辭分析.doc"
  },
  {
    "id": "rhe_src_011",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "在神祕的大海中，有一大片漂亮的海葵，有的像紅寶石，有的像綠寶石，有的像一朵 花，有的像一棵樹，形成一個巨大的花園城堡",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "類疊",
    "options": [
      "誇飾",
      "感嘆",
      "類疊",
      "引用"
    ],
    "explanation": "這句主要使用「類疊」。",
    "source": "國小國語3上修辭分析.doc"
  },
  {
    "id": "rhe_src_012",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "心情不好的時候，牠會安安靜靜的走來，用雪亮的大眼睛，不高興的看著我",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "類疊",
    "options": [
      "摹寫",
      "引用",
      "類疊",
      "擬人"
    ],
    "explanation": "這句主要使用「類疊」。",
    "source": "國小國語3上修辭分析.doc"
  },
  {
    "id": "rhe_src_013",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "牠更喜歡把前腳放在我的大腿上，輕輕的喵個不停，像個可愛的小孩，陪伴我和家人 說話",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "譬喻",
    "options": [
      "感嘆",
      "譬喻",
      "引用",
      "排比"
    ],
    "explanation": "這句主要使用「譬喻」。",
    "source": "國小國語3上修辭分析.doc"
  },
  {
    "id": "rhe_src_014",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "長長的老街",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "類疊",
    "options": [
      "引用",
      "摹寫",
      "類疊",
      "譬喻"
    ],
    "explanation": "這句主要使用「類疊」。",
    "source": "國小國語3上修辭分析.doc"
  },
  {
    "id": "rhe_src_015",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "靜靜的看著河口╱靜靜的望著海洋",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "類疊",
    "options": [
      "類疊",
      "擬人",
      "感嘆",
      "誇飾"
    ],
    "explanation": "這句主要使用「類疊」。",
    "source": "國小國語3上修辭分析.doc"
  },
  {
    "id": "rhe_src_016",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "紅紅的夕陽",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "類疊",
    "options": [
      "類疊",
      "擬人",
      "摹寫",
      "引用"
    ],
    "explanation": "這句主要使用「類疊」。",
    "source": "國小國語3上修辭分析.doc"
  },
  {
    "id": "rhe_src_017",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "輕輕的搖盪",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "類疊",
    "options": [
      "類疊",
      "排比",
      "摹寫",
      "設問"
    ],
    "explanation": "這句主要使用「類疊」。",
    "source": "國小國語3上修辭分析.doc"
  },
  {
    "id": "rhe_src_018",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "阿婆的鐵蛋，又硬又圓，又黑又亮。像那古早的故事一樣，愈嚼愈香",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "譬喻",
    "options": [
      "排比",
      "設問",
      "感嘆",
      "譬喻"
    ],
    "explanation": "這句主要使用「譬喻」。",
    "source": "國小國語3上修辭分析.doc"
  },
  {
    "id": "rhe_src_019",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "蒼老的紅毛城，站在山坡上。靜靜的看著河口，靜靜的望著海洋，像在回憶以前的時 光",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "擬人",
    "options": [
      "擬人",
      "排比",
      "類疊",
      "設問"
    ],
    "explanation": "這句把事物寫得像人一樣，屬於擬人。",
    "source": "國小國語3上修辭分析.doc"
  },
  {
    "id": "rhe_src_020",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "那裡有一排古炮，炮口對著遠方，像在想念以前風光的日子，又像在守護著安平古 堡",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "擬人",
    "options": [
      "類疊",
      "擬人",
      "引用",
      "譬喻"
    ],
    "explanation": "這句把事物寫得像人一樣，屬於擬人。",
    "source": "國小國語3上修辭分析.doc"
  },
  {
    "id": "rhe_src_021",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "它們是勇敢的士兵，經過這麼長的日子，始終堅守著這片土地",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "擬人",
    "options": [
      "排比",
      "擬人",
      "類疊",
      "摹寫"
    ],
    "explanation": "這句把事物寫得像人一樣，屬於擬人。",
    "source": "國小國語3上修辭分析.doc"
  },
  {
    "id": "rhe_src_022",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "它安靜的站在公園裡，好像在說著過往的故事",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "擬人",
    "options": [
      "摹寫",
      "擬人",
      "譬喻",
      "引用"
    ],
    "explanation": "這句把事物寫得像人一樣，屬於擬人。",
    "source": "國小國語3上修辭分析.doc"
  },
  {
    "id": "rhe_src_023",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "直到第二年春天，花園裡還是冷冷清清",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "類疊",
    "options": [
      "設問",
      "擬人",
      "排比",
      "類疊"
    ],
    "explanation": "這句主要使用「類疊」。",
    "source": "國小國語3上修辭分析.doc"
  },
  {
    "id": "rhe_src_024",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "他們走過的地方，草綠了！跑過的地方，花開了！跳過的地方，小鳥飛來了！",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "排比",
    "options": [
      "排比",
      "感嘆",
      "擬人",
      "引用"
    ],
    "explanation": "這句主要使用「排比」。",
    "source": "國小國語3上修辭分析.doc"
  },
  {
    "id": "rhe_src_025",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "春天隨著孩子們的笑聲，又回到花園裡來了",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "擬人",
    "options": [
      "擬人",
      "譬喻",
      "類疊",
      "摹寫"
    ],
    "explanation": "這句把事物寫得像人一樣，屬於擬人。",
    "source": "國小國語3上修辭分析.doc"
  },
  {
    "id": "rhe_src_026",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "小樹苗發了芽，低著頭，合起雙手，希望自己快快長大",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "擬人",
    "options": [
      "誇飾",
      "排比",
      "引用",
      "擬人"
    ],
    "explanation": "這句把事物寫得像人一樣，屬於擬人。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_027",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "老樹伸出粗壯的手臂，長出嫩嫩的新葉，要努力開創綠色的新天地",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "擬人",
    "options": [
      "類疊",
      "摹寫",
      "排比",
      "擬人"
    ],
    "explanation": "這句把事物寫得像人一樣，屬於擬人。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_028",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "小鳥築好了巢，在枝頭上合唱，虔誠唱出每一天的希望",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "擬人",
    "options": [
      "擬人",
      "感嘆",
      "譬喻",
      "設問"
    ],
    "explanation": "這句把事物寫得像人一樣，屬於擬人。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_029",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "「快快」長大、「徐徐」的微風、「嫩嫩」的新葉",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "類疊",
    "options": [
      "譬喻",
      "設問",
      "類疊",
      "誇飾"
    ],
    "explanation": "這句主要使用「類疊」。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_030",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "溼答答的馬路上，車子來來往往",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "類疊",
    "options": [
      "誇飾",
      "排比",
      "譬喻",
      "類疊"
    ],
    "explanation": "這句主要使用「類疊」。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_031",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "綠綠的青草被雨洗得亮亮的",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "類疊",
    "options": [
      "類疊",
      "引用",
      "感嘆",
      "排比"
    ],
    "explanation": "這句主要使用「類疊」。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_032",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "風輕輕的吹著，那些「黃蝴蝶」拍動著翅膀，好像送來了淡淡的花香",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "類疊",
    "options": [
      "譬喻",
      "擬人",
      "設問",
      "類疊"
    ],
    "explanation": "這句主要使用「類疊」。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_033",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "雨水把泥巴路變得軟軟的",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "類疊",
    "options": [
      "譬喻",
      "引用",
      "類疊",
      "擬人"
    ],
    "explanation": "這句主要使用「類疊」。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_034",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "下雨的時候，我喜歡站在窗口，欣賞外面的雨景。……下雨的時候，我喜歡在屋簷下 玩水。……下雨的時候，我喜歡撐著雨傘到外面走走",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "類疊",
    "options": [
      "引用",
      "誇飾",
      "擬人",
      "類疊"
    ],
    "explanation": "這句主要使用「類疊」。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_035",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "溼答答的馬路上，車子來來往往，車燈就像天上一閃一閃的星星",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "譬喻",
    "options": [
      "擬人",
      "排比",
      "譬喻",
      "誇飾"
    ],
    "explanation": "這句主要使用「譬喻」。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_036",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "雨變大了，水就像一條銀色的長線，從屋頂垂掛下來",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "譬喻",
    "options": [
      "譬喻",
      "感嘆",
      "類疊",
      "摹寫"
    ],
    "explanation": "這句主要使用「譬喻」。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_037",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "山坡上有一大片的黃色小花，金黃的花朵好像一隻隻黃蝴蝶，風輕輕的吹著，那些 「黃蝴蝶」拍動著翅膀，好像送來了淡淡的花香",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "譬喻",
    "options": [
      "譬喻",
      "誇飾",
      "摹寫",
      "類疊"
    ],
    "explanation": "這句主要使用「譬喻」。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_038",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "雨下得小，水順著屋簷一滴一滴的落下，發出「滴、滴、答、答」的聲音。（視覺 、聽覺摹寫）",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "摹寫",
    "options": [
      "引用",
      "擬人",
      "譬喻",
      "摹寫"
    ],
    "explanation": "這句主要使用「摹寫」。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_039",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "雨變大了，水就像一條銀色的長線，從屋頂垂掛下來。（視覺摹寫）",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "摹寫",
    "options": [
      "設問",
      "排比",
      "擬人",
      "摹寫"
    ],
    "explanation": "這句主要使用「摹寫」。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_040",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "我伸手去接，一股清涼的感覺從手心傳到全身，真是舒服。（觸覺摹寫）",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "摹寫",
    "options": [
      "排比",
      "摹寫",
      "擬人",
      "類疊"
    ],
    "explanation": "這句主要使用「摹寫」。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_041",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "雨下得小，水順著屋簷一滴一滴的落下，發出「滴、滴、答、答」的聲音，好像在說 著長長的故事",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "擬人",
    "options": [
      "誇飾",
      "類疊",
      "譬喻",
      "擬人"
    ],
    "explanation": "這句把事物寫得像人一樣，屬於擬人。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_042",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "「圓圓」的臉蛋、對我們「微微」笑、「小小」的標語",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "類疊",
    "options": [
      "誇飾",
      "感嘆",
      "排比",
      "類疊"
    ],
    "explanation": "這句主要使用「類疊」。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_043",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "有時看著看著，忍不住大聲討論起來，像吵鬧的小麻雀",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "譬喻",
    "options": [
      "類疊",
      "譬喻",
      "摹寫",
      "引用"
    ],
    "explanation": "這句主要使用「譬喻」。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_044",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "除了鋸子之外，還發明了量直角的曲尺，以及讓人們能在雨中行動自如的傘呢！",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "感嘆",
    "options": [
      "擬人",
      "感嘆",
      "引用",
      "譬喻"
    ],
    "explanation": "這句主要使用「感嘆」。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_045",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "如果我們也學田鼠在地下挖一條路，讓鐵路地下化，不就能解決擁擠的交通問題了嗎 ？",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "設問",
    "options": [
      "譬喻",
      "感嘆",
      "引用",
      "設問"
    ],
    "explanation": "這句主要使用「設問」。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_046",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "「小小」的密碼、「輕輕」一掃",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "類疊",
    "options": [
      "類疊",
      "感嘆",
      "設問",
      "引用"
    ],
    "explanation": "這句主要使用「類疊」。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_047",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "人類的想像力無限，我相信透過網路和科技，這個神奇密碼將會帶人類通往更便利的 新世界！",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "擬人",
    "options": [
      "排比",
      "感嘆",
      "擬人",
      "類疊"
    ],
    "explanation": "這句把事物寫得像人一樣，屬於擬人。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_048",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "初夏的時節，天氣越來越溫暖，遠遠的山腰間，卻覆蓋著一片「白雪」。原來那是 開滿白色花朵的油桐樹，遠遠望去，真的很像白雪。（視覺摹寫）",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "摹寫",
    "options": [
      "摹寫",
      "類疊",
      "擬人",
      "譬喻"
    ],
    "explanation": "這句主要使用「摹寫」。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_049",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "淡紅的蕊上，有著黃色的花粉，聞一聞，沒有什麼味道，不過空氣中卻散發著淡淡 的清香。（視覺、嗅覺摹寫）",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "摹寫",
    "options": [
      "摹寫",
      "引用",
      "擬人",
      "譬喻"
    ],
    "explanation": "這句主要使用「摹寫」。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_050",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "夕陽西下，落日把遠方山腰間的油桐花，染成一片金黃，就像是一幅令人心動的美 麗風景畫。（視覺摹寫）",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "摹寫",
    "options": [
      "感嘆",
      "摹寫",
      "設問",
      "擬人"
    ],
    "explanation": "這句主要使用「摹寫」。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_051",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "「遠遠」的山腰間、「遠遠」望去、「一簇簇」的白花開滿樹梢、「點點」的小花 、「一朵朵」油桐花、花雨「紛紛」落下、「淡淡」的清香、「輕輕」的走著",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "類疊",
    "options": [
      "引用",
      "類疊",
      "誇飾",
      "摹寫"
    ],
    "explanation": "這句主要使用「類疊」。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_052",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "一朵朵油桐花，從樹葉間飄落下來，飄在人們的髮上，落在人們的肩頭，一陣輕風 吹來，花雨紛紛落下",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "類疊",
    "options": [
      "排比",
      "譬喻",
      "類疊",
      "感嘆"
    ],
    "explanation": "這句主要使用「類疊」。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_053",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "枝椏間的綠葉在陽光下閃閃舞動，一簇簇的白花開滿樹梢，就像美麗的新娘，穿著 綠得發亮的禮服，點點的小花是她頭上的白紗",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "譬喻",
    "options": [
      "擬人",
      "引用",
      "類疊",
      "譬喻"
    ],
    "explanation": "這句主要使用「譬喻」。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_054",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "仔細看，葉子好像巴掌大的心",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "譬喻",
    "options": [
      "類疊",
      "誇飾",
      "譬喻",
      "引用"
    ],
    "explanation": "這句主要使用「譬喻」。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_055",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "山林間快被油桐花鋪滿的小路，好像是童話故事中公主行走的步道，讓人不得不放 慢腳步，輕輕的走著……",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "譬喻",
    "options": [
      "擬人",
      "誇飾",
      "譬喻",
      "排比"
    ],
    "explanation": "這句主要使用「譬喻」。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_056",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "夕陽西下，落日把遠方山腰間的油桐花，染成一片金黃，就像是一幅令人心動的美 麗風景畫",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "譬喻",
    "options": [
      "譬喻",
      "設問",
      "誇飾",
      "摹寫"
    ],
    "explanation": "這句主要使用「譬喻」。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_057",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "垂掛的枝椏，有如油桐樹伸展的手臂，捧著一簇簇的花朵，讓人欣賞",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "擬人",
    "options": [
      "誇飾",
      "引用",
      "擬人",
      "譬喻"
    ],
    "explanation": "這句把事物寫得像人一樣，屬於擬人。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_058",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "走進野柳地質公園，往前望去，野柳岬就像一隻烏龜，靜靜的趴在海邊",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "譬喻",
    "options": [
      "感嘆",
      "譬喻",
      "引用",
      "設問"
    ],
    "explanation": "這句主要使用「譬喻」。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_059",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "那些水珠散落在石頭四周，再慢慢的滴下來，好像一顆顆圓潤雪白的珍珠，真是美 麗！",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "譬喻",
    "options": [
      "譬喻",
      "感嘆",
      "摹寫",
      "排比"
    ],
    "explanation": "這句主要使用「譬喻」。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_060",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "高貴的女王微微揚著頭，她是在聽著海風的輕唱，或是在看著天邊的飛鳥，還是在等 待著遠方的船隻？",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "擬人",
    "options": [
      "摹寫",
      "擬人",
      "引用",
      "譬喻"
    ],
    "explanation": "這句把事物寫得像人一樣，屬於擬人。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_061",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "你知道在氣候溫暖的臺灣，也有冰河時期的動物嗎？",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "設問",
    "options": [
      "譬喻",
      "設問",
      "類疊",
      "感嘆"
    ],
    "explanation": "這句主要使用「設問」。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_062",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "平平安安的長大，快快樂樂的生活",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "類疊",
    "options": [
      "摹寫",
      "譬喻",
      "擬人",
      "類疊"
    ],
    "explanation": "這句主要使用「類疊」。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_063",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "金魚開口苦苦說：「求求您，把我放，大恩情，必回報！」",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "類疊",
    "options": [
      "類疊",
      "排比",
      "誇飾",
      "摹寫"
    ],
    "explanation": "這句主要使用「類疊」。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_064",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "藍藍海面微風飄，老公公找回金魚慢慢說：「金魚，金魚，您行行好！給我木盆好 不好？」",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "類疊",
    "options": [
      "類疊",
      "摹寫",
      "誇飾",
      "譬喻"
    ],
    "explanation": "這句主要使用「類疊」。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_065",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "藍藍海面起波濤，老公公對著金魚細細說：「金魚大人——您行行好！給我大木屋好 不好？」",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "類疊",
    "options": [
      "設問",
      "譬喻",
      "排比",
      "類疊"
    ],
    "explanation": "這句主要使用「類疊」。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_066",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "老公公回家後一看，寬寬的大門，高高的房屋",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "類疊",
    "options": [
      "類疊",
      "擬人",
      "摹寫",
      "設問"
    ],
    "explanation": "這句主要使用「類疊」。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_067",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "藍藍海面起了大風暴，老公公苦苦求著金魚說：「魚神仙哪——您行行好！給我一座 城堡好不好？」",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "類疊",
    "options": [
      "設問",
      "類疊",
      "排比",
      "譬喻"
    ],
    "explanation": "這句主要使用「類疊」。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_068",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "老公公回家後一看，滿滿的僕人，大大的城堡",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "類疊",
    "options": [
      "排比",
      "類疊",
      "摹寫",
      "誇飾"
    ],
    "explanation": "這句主要使用「類疊」。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_069",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "這時，有個小男孩開開心心的走過來",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "類疊",
    "options": [
      "類疊",
      "引用",
      "誇飾",
      "設問"
    ],
    "explanation": "這句主要使用「類疊」。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_070",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "這時，一位老人拖著沉重的腳步，慢慢的走過來",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "類疊",
    "options": [
      "譬喻",
      "類疊",
      "引用",
      "設問"
    ],
    "explanation": "這句主要使用「類疊」。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_071",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "老虎被槍聲嚇得慌忙逃跑，鼠鹿也立刻跑得遠遠的",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "類疊",
    "options": [
      "設問",
      "擬人",
      "類疊",
      "感嘆"
    ],
    "explanation": "這句主要使用「類疊」。",
    "source": "國小國語3下修辭分析.doc"
  },
  {
    "id": "rhe_src_072",
    "bank": "rhetoric",
    "difficulty": "normal",
    "question": "跌得越多，活得越久",
    "prompt": "這句話使用了哪種修辭？",
    "answer": "類疊",
    "options": [
      "類疊",
      "譬喻",
      "摹寫",
      "排比"
    ],
    "explanation": "這句主要使用「類疊」。",
    "source": "國小國語3下修辭分析.doc"
  }
];

  const IDIOM_QUESTIONS = [
  {
    "id": "idiom_src_001",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n春天來了，天氣暖和了，大地呈現＿＿＿＿的新氣象",
    "answer": "一元復始",
    "options": [
      "一元復始",
      "窗明几淨",
      "歡欣鼓舞",
      "火上加油"
    ],
    "explanation": "一元復始：天地之氣在新的一年又回到起點重新運轉。借指新的一年開始",
    "source": "國小國語1下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_002",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n她把這件事的經過交代得＿＿＿＿，才沒有造成誤會",
    "answer": "一清二楚",
    "options": [
      "呼風喚雨",
      "一清二楚",
      "瞎子摸象",
      "片甲不留"
    ],
    "explanation": "一清二楚：十分清楚、明白",
    "source": "12_國小國語1下成語加油站_第12課_(教).doc"
  },
  {
    "id": "idiom_src_003",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n他們兩人都喜愛電影，才剛認識，便＿＿＿＿的聊個不停",
    "answer": "一見如故",
    "options": [
      "自以為是",
      "良藥苦口",
      "一見如故",
      "功過參半"
    ],
    "explanation": "一見如故：初次見面就相處融洽，如同老朋友一般",
    "source": "國小國語1下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_004",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n故宮博物院裡的珍藏，讓許多藝術愛好者可以＿＿＿＿",
    "answer": "一飽眼福",
    "options": [
      "事半功倍",
      "一飽眼福",
      "多此一舉",
      "自食其力"
    ],
    "explanation": "一飽眼福：形容可以盡情觀賞美好的事物",
    "source": "11_國小國語1下成語加油站_第11課_(教).doc"
  },
  {
    "id": "idiom_src_005",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n天空看起來陰陰的，說不定會下雨，你該帶把傘，以備＿＿＿＿",
    "answer": "不時之需",
    "options": [
      "按部就班",
      "壯士斷腕",
      "栩栩如生",
      "不時之需"
    ],
    "explanation": "不時之需：指隨時的需用",
    "source": "國小國語1下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_006",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n想要達到＿＿＿＿的成效，必須掌握正確的做事方法",
    "answer": "事半功倍",
    "options": [
      "博古通今",
      "良藥苦口",
      "功過參半",
      "事半功倍"
    ],
    "explanation": "事半功倍：花費的精神、勞力少而成效大",
    "source": "12_國小國語1下成語加油站_第12課_(教).doc"
  },
  {
    "id": "idiom_src_007",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n一年一度的國際書展，參觀的人真是＿＿＿＿",
    "answer": "人山人海",
    "options": [
      "名正言順",
      "循規蹈矩",
      "人山人海",
      "借題發揮"
    ],
    "explanation": "人山人海：形容非常多的人聚集在一起",
    "source": "國小國語1上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_008",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n你們不要再爭論了，我想到一個＿＿＿＿的好辦法",
    "answer": "兩全其美",
    "options": [
      "兩全其美",
      "滴水穿石",
      "鳥語花香",
      "古色古香"
    ],
    "explanation": "兩全其美：做事顧全雙方，使兩方面都能圓滿",
    "source": "國小國語1上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_009",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n冬天一到，大雪降下，這裡一片＿＿＿＿，到處都是白茫茫的",
    "answer": "冰天雪地",
    "options": [
      "心安理得",
      "鳥語花香",
      "視同兒戲",
      "冰天雪地"
    ],
    "explanation": "冰天雪地：形容冰雪覆蓋大地的嚴寒景象",
    "source": "國小國語1下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_010",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n他的家境雖然貧苦，但仍＿＿＿＿，努力學習，令人敬佩",
    "answer": "力爭上游",
    "options": [
      "明目張膽",
      "力爭上游",
      "聚沙成塔",
      "十全十美"
    ],
    "explanation": "力爭上游：努力求取上進",
    "source": "國小國語1上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_011",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n你既然做了這個選擇，就該堅持下去，不可以＿＿＿＿",
    "answer": "半途而廢",
    "options": [
      "走馬看花",
      "半途而廢",
      "粗茶淡飯",
      "海底撈針"
    ],
    "explanation": "半途而廢：比喻事情還沒完成就停止",
    "source": "12_國小國語1下成語加油站_第12課_(教).doc、國小國語1下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_012",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n哥哥喜愛閱讀、＿＿＿＿，是我的真人版百科全書",
    "answer": "博古通今",
    "options": [
      "舉足輕重",
      "手舞足蹈",
      "博古通今",
      "不自量力"
    ],
    "explanation": "博古通今：學問淵博，通曉古今",
    "source": "11_國小國語1下成語加油站_第11課_(教).doc"
  },
  {
    "id": "idiom_src_013",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n他的工作態度隨便，經常＿＿＿＿，你別上當了",
    "answer": "口是心非",
    "options": [
      "口是心非",
      "黑白分明",
      "奄奄一息",
      "一元復始"
    ],
    "explanation": "口是心非：嘴上說的和心裡想的不一致",
    "source": "國小國語1上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_014",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n故宮博物院典藏的文物，都是＿＿＿＿的稀世珍寶",
    "answer": "古色古香",
    "options": [
      "知己知彼",
      "志同道合",
      "講古論今",
      "古色古香"
    ],
    "explanation": "古色古香：形容具有古舊典雅色彩和情調的書畫，或造型仿古的器物、建築、藝術品等",
    "source": "國小國語1下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_015",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n她非常認真念書，成績總是＿＿＿＿",
    "answer": "名列前茅",
    "options": [
      "漫不經心",
      "將信將疑",
      "虎視眈眈",
      "名列前茅"
    ],
    "explanation": "名列前茅：比喻名次排在前面",
    "source": "12_國小國語1下成語加油站_第12課_(教).doc、國小國語1下生字延伸成語.doc、國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_016",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n我們先向校方申請場地，才能＿＿＿＿的舉辦活動",
    "answer": "名正言順",
    "options": [
      "志同道合",
      "發憤圖強",
      "名正言順",
      "窗明几淨"
    ],
    "explanation": "名正言順：形容名義正當，言詞順適",
    "source": "國小國語1下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_017",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n她是＿＿＿＿的模範生",
    "answer": "品學兼優",
    "options": [
      "冰天雪地",
      "一清二楚",
      "萬紫千紅",
      "品學兼優"
    ],
    "explanation": "品學兼優：品行和學問都很優秀",
    "source": "11_國小國語1下成語加油站_第11課_(教).doc、國小國語1下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_018",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n看電影時，我最討厭有人＿＿＿＿的聊個不停",
    "answer": "喋喋不休",
    "options": [
      "喋喋不休",
      "車水馬龍",
      "得意忘形",
      "楚楚可憐"
    ],
    "explanation": "喋喋不休：形容話多，沒完沒了",
    "source": "12_國小國語1下成語加油站_第12課_(教).doc"
  },
  {
    "id": "idiom_src_019",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n這裡的地板已經擦乾淨了，你又何必＿＿＿＿再掃一次呢？",
    "answer": "多此一舉",
    "options": [
      "多此一舉",
      "一飽眼福",
      "飽讀詩書",
      "老奸巨猾"
    ],
    "explanation": "多此一舉：做不必要的、多餘的事情",
    "source": "國小國語1上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_020",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n他凡事＿＿＿＿的作風，贏得了眾人的讚賞",
    "answer": "大公無私",
    "options": [
      "事半功倍",
      "走馬看花",
      "大公無私",
      "鳥語花香"
    ],
    "explanation": "大公無私：處事公正，一點兒都不偏袒",
    "source": "國小國語1上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_021",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n謝謝你的＿＿＿＿，我才能順利達成任務",
    "answer": "大力幫忙",
    "options": [
      "不假思索",
      "奄奄一息",
      "一見如故",
      "大力幫忙"
    ],
    "explanation": "大力幫忙：尊稱對方全力盡心的幫助",
    "source": "12_國小國語1下成語加油站_第12課_(教).doc"
  },
  {
    "id": "idiom_src_022",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n這兩本書的故事內容＿＿＿＿，只有圖畫比較不一樣",
    "answer": "大同小異",
    "options": [
      "自相矛盾",
      "大同小異",
      "視同兒戲",
      "熊心豹膽"
    ],
    "explanation": "大同小異：大體相同，但略有差異",
    "source": "國小國語1上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_023",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n車禍傷患送到醫院時已經＿＿＿＿，最後還是無法搶救成功",
    "answer": "奄奄一息",
    "options": [
      "節外生枝",
      "迎刃而解",
      "明目張膽",
      "奄奄一息"
    ],
    "explanation": "奄奄一息：只剩下微弱的一口氣。形容生命已到了最後時刻",
    "source": "12_國小國語1下成語加油站_第12課_(教).doc"
  },
  {
    "id": "idiom_src_024",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n他一向＿＿＿＿，從來沒有做過虧心事",
    "answer": "安分守己",
    "options": [
      "火上加油",
      "安分守己",
      "溫故知新",
      "一朝一夕"
    ],
    "explanation": "安分守己：安於本分，而不越軌",
    "source": "國小國語1下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_025",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n他在親友的關心下走出低潮，不再＿＿＿＿",
    "answer": "度日如年",
    "options": [
      "講古論今",
      "度日如年",
      "百發百中",
      "呼風喚雨"
    ],
    "explanation": "度日如年：過一天就像過一年這麼久，比喻時間漫長而難熬",
    "source": "11_國小國語1下成語加油站_第11課_(教).doc、國小國語1下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_026",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n他們兩個是＿＿＿＿的好朋友，總是參加同一個社團",
    "answer": "志同道合",
    "options": [
      "志同道合",
      "緊追不捨",
      "講古論今",
      "平分秋色"
    ],
    "explanation": "志同道合：彼此的志趣和理想相同",
    "source": "11_國小國語1下成語加油站_第11課_(教).doc、11_國小國語2下成語加油站_第11課_(教).doc、國小國語2下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_027",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n他做事總是＿＿＿＿，有自己的規畫",
    "answer": "慢條斯理",
    "options": [
      "自食其力",
      "志同道合",
      "慢條斯理",
      "舉足輕重"
    ],
    "explanation": "慢條斯理：形容講話、做事慢吞吞而不著急的樣子",
    "source": "12_國小國語1下成語加油站_第12課_(教).doc"
  },
  {
    "id": "idiom_src_028",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n我們一聽說下星期要去動物園，都高興得＿＿＿＿起來",
    "answer": "手舞足蹈",
    "options": [
      "手舞足蹈",
      "黑白分明",
      "捉摸不定",
      "興高采烈"
    ],
    "explanation": "手舞足蹈：形容非常高興喜悅的樣子",
    "source": "國小國語1上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_029",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n這部機器只要照著指示，＿＿＿＿操作就可以順利完成工作",
    "answer": "按部就班",
    "options": [
      "按部就班",
      "心直口快",
      "笑逐顏開",
      "捉摸不定"
    ],
    "explanation": "按部就班：比喻做事依照一定的層次、步驟進行",
    "source": "國小國語1下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_030",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n為了如期完成這份重要的工作，表哥今晚只好＿＿＿＿",
    "answer": "挑燈夜戰",
    "options": [
      "講古論今",
      "七嘴八舌",
      "口是心非",
      "挑燈夜戰"
    ],
    "explanation": "挑燈夜戰：熬夜做事",
    "source": "12_國小國語1下成語加油站_第12課_(教).doc"
  },
  {
    "id": "idiom_src_031",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n這個活動讓所有學生和老師可以互相討論，提供＿＿＿＿的機會",
    "answer": "教學相長",
    "options": [
      "時時刻刻",
      "粗茶淡飯",
      "教學相長",
      "不自量力"
    ],
    "explanation": "教學相長：指通過教授、學習，不但能使學生得到進步，而且教師也會從中獲益",
    "source": "11_國小國語1下成語加油站_第11課_(教).doc"
  },
  {
    "id": "idiom_src_032",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n現代科技＿＿＿＿，讓生活更加便利",
    "answer": "日新月異",
    "options": [
      "疊床架屋",
      "日新月異",
      "冰天雪地",
      "飽讀詩書"
    ],
    "explanation": "日新月異：每天每月都有新的改變。形容發展、進步得很快",
    "source": "11_國小國語1下成語加油站_第11課_(教).doc"
  },
  {
    "id": "idiom_src_033",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n小偷竟然在菜市場裡＿＿＿＿的偷東西",
    "answer": "明目張膽",
    "options": [
      "明目張膽",
      "爭先恐後",
      "回心轉意",
      "火上加油"
    ],
    "explanation": "明目張膽：形容大膽、毫無顧忌的樣子",
    "source": "11_國小國語1下成語加油站_第11課_(教).doc"
  },
  {
    "id": "idiom_src_034",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n姐姐＿＿＿＿都想念著遠在美國的好朋友",
    "answer": "時時刻刻",
    "options": [
      "抱頭鼠竄",
      "心安理得",
      "時時刻刻",
      "力爭上游"
    ],
    "explanation": "時時刻刻：經常、時常",
    "source": "11_國小國語1下成語加油站_第11課_(教).doc"
  },
  {
    "id": "idiom_src_035",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n他們家三代都以研究臺灣歷史出名，真可以說是＿＿＿＿",
    "answer": "書香門第",
    "options": [
      "鑽牛角尖",
      "書香門第",
      "鳥語花香",
      "歡天喜地"
    ],
    "explanation": "書香門第：世代讀書的人家",
    "source": "11_國小國語1下成語加油站_第11課_(教).doc"
  },
  {
    "id": "idiom_src_036",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n這幅畫上的鳥看起來＿＿＿＿",
    "answer": "栩栩如生",
    "options": [
      "栩栩如生",
      "萬紫千紅",
      "一飽眼福",
      "活蹦亂跳"
    ],
    "explanation": "栩栩如生：形貌生動逼真，像真的一樣",
    "source": "11_國小國語1下成語加油站_第11課_(教).doc"
  },
  {
    "id": "idiom_src_037",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n小貓＿＿＿＿的叫著，十分惹人憐愛",
    "answer": "楚楚可憐",
    "options": [
      "鑽牛角尖",
      "楚楚可憐",
      "挑燈夜戰",
      "度日如年"
    ],
    "explanation": "楚楚可憐：➀形容姿態嬌媚動人，惹人憐愛。 ➁形容人柔弱，讓人覺得憐憫",
    "source": "12_國小國語1下成語加油站_第12課_(教).doc"
  },
  {
    "id": "idiom_src_038",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n家家戶戶＿＿＿＿迎接新年的來臨",
    "answer": "歡天喜地",
    "options": [
      "發憤圖強",
      "歡天喜地",
      "不自量力",
      "本末倒置"
    ],
    "explanation": "歡天喜地：形容非常歡喜高興",
    "source": "國小國語1下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_039",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n＿＿＿＿的景色，總是讓人心情開朗",
    "answer": "海闊天空",
    "options": [
      "口是心非",
      "日積月累",
      "心直口快",
      "海闊天空"
    ],
    "explanation": "海闊天空：形容天地遼闊無邊際",
    "source": "國小國語1下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_040",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n姐姐成績不斷進步，靠的是＿＿＿＿的讀書方法",
    "answer": "溫故知新",
    "options": [
      "溫故知新",
      "自相矛盾",
      "片甲不留",
      "楚楚可憐"
    ],
    "explanation": "溫故知新：複習學過的課業，而能領悟出新的道理",
    "source": "國小國語1下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_041",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n他憑著一股＿＿＿＿的毅力，終於完成這個艱難的任務",
    "answer": "滴水穿石",
    "options": [
      "片甲不留",
      "心直口快",
      "滴水穿石",
      "手舞足蹈"
    ],
    "explanation": "滴水穿石：比喻有志者事竟成，只要努力不懈就能夠成功",
    "source": "國小國語1下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_042",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n爸爸因為弟弟犯錯已經很生氣了，你就不要再＿＿＿＿了",
    "answer": "火上加油",
    "options": [
      "火上加油",
      "疊床架屋",
      "風平浪靜",
      "七嘴八舌"
    ],
    "explanation": "火上加油：比喻使事態更加擴大或惡化",
    "source": "12_國小國語1下成語加油站_第12課_(教).doc"
  },
  {
    "id": "idiom_src_043",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n他們兩人認識數十年，是＿＿＿＿的好朋友",
    "answer": "無話不談",
    "options": [
      "同心協力",
      "草木皆兵",
      "汗流浹背",
      "無話不談"
    ],
    "explanation": "無話不談：沒有什麼話不能說的。比喻交情深厚投契",
    "source": "國小國語1下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_044",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n搭公車時要排隊上、下車，不可＿＿＿＿",
    "answer": "爭先恐後",
    "options": [
      "十全十美",
      "栩栩如生",
      "日新月異",
      "爭先恐後"
    ],
    "explanation": "爭先恐後：競相搶先唯恐落後",
    "source": "國小國語1下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_045",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n今天我竟然在專家面前大談科學，真是＿＿＿＿",
    "answer": "班門弄斧",
    "options": [
      "跌破眼鏡",
      "鵬程萬里",
      "家喻戶曉",
      "班門弄斧"
    ],
    "explanation": "班門弄斧：比喻在行家面前賣弄本事，不自量力",
    "source": "國小國語1上生字延伸成語.doc、國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_046",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n這盆花有＿＿＿＿的妙用，讓客廳的氣氛變得更好了",
    "answer": "畫龍點睛",
    "options": [
      "半途而廢",
      "自以為是",
      "畫龍點睛",
      "回心轉意"
    ],
    "explanation": "畫龍點睛：比喻在關鍵的地方加上一筆，使內容更生動有力",
    "source": "12_國小國語1下成語加油站_第12課_(教).doc"
  },
  {
    "id": "idiom_src_047",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n姐姐＿＿＿＿的說，她當選模範生了",
    "answer": "眉開眼笑",
    "options": [
      "畫龍點睛",
      "慢條斯理",
      "眉開眼笑",
      "講古論今"
    ],
    "explanation": "眉開眼笑：形容非常高興",
    "source": "國小國語1上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_048",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n＿＿＿＿才能百戰百勝",
    "answer": "知己知彼",
    "options": [
      "溫故知新",
      "黑白分明",
      "知己知彼",
      "走馬看花"
    ],
    "explanation": "知己知彼：正確的了解自己，並能評估對方的實力",
    "source": "11_國小國語1下成語加油站_第11課_(教).doc"
  },
  {
    "id": "idiom_src_049",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n這家餐廳＿＿＿＿，讓到此用餐的客人覺得很舒服",
    "answer": "窗明几淨",
    "options": [
      "窗明几淨",
      "胡思亂想",
      "大力幫忙",
      "迎頭趕上"
    ],
    "explanation": "窗明几淨：形容居室明亮潔淨",
    "source": "國小國語1下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_050",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n這裡的景色＿＿＿＿，總是吸引許多遊客前來",
    "answer": "美不勝收",
    "options": [
      "大公無私",
      "斬草除根",
      "美不勝收",
      "百發百中"
    ],
    "explanation": "美不勝收：形容美好的事物非常多，無法一一收入眼底",
    "source": "11_國小國語1下成語加油站_第11課_(教).doc"
  },
  {
    "id": "idiom_src_051",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "「雜亂而不切實際的幻想」可以用哪個成語？",
    "answer": "胡思亂想",
    "options": [
      "歡欣鼓舞",
      "瞎子摸象",
      "胡思亂想",
      "走馬看花"
    ],
    "explanation": "胡思亂想：雜亂而不切實際的幻想",
    "source": "12_國小國語1下成語加油站_第12課_(教).doc"
  },
  {
    "id": "idiom_src_052",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n沒有經過家長同意的事情，小朋友千萬不要＿＿＿＿",
    "answer": "自作主張",
    "options": [
      "活蹦亂跳",
      "自作主張",
      "難能可貴",
      "講古論今"
    ],
    "explanation": "自作主張：未徵求他人意見，便自己做決定",
    "source": "國小國語1下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_053",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n這件事關係到大家的安全，不要＿＿＿＿",
    "answer": "視同兒戲",
    "options": [
      "度日如年",
      "視同兒戲",
      "發憤圖強",
      "同心協力"
    ],
    "explanation": "視同兒戲：比喻做事態度不認真",
    "source": "12_國小國語1下成語加油站_第12課_(教).doc"
  },
  {
    "id": "idiom_src_054",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n小學發生的事，他到現在仍是＿＿＿＿",
    "answer": "記憶猶新",
    "options": [
      "發憤圖強",
      "慢條斯理",
      "記憶猶新",
      "迎頭趕上"
    ],
    "explanation": "記憶猶新：對過去的人或事，記得很清楚，就像最近才發生的一樣",
    "source": "11_國小國語1下成語加油站_第11課_(教).doc"
  },
  {
    "id": "idiom_src_055",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n他太緊張了，所以說起話來＿＿＿＿",
    "answer": "語無倫次",
    "options": [
      "兩全其美",
      "語無倫次",
      "視同兒戲",
      "耳熟能詳"
    ],
    "explanation": "語無倫次：說話雜亂而沒有條理",
    "source": "11_國小國語1下成語加油站_第11課_(教).doc"
  },
  {
    "id": "idiom_src_056",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n阿姨聽到大表哥車禍後平安的消息，一直說著：「＿＿＿＿」",
    "answer": "謝天謝地",
    "options": [
      "走馬看花",
      "謝天謝地",
      "楚楚可憐",
      "胡思亂想"
    ],
    "explanation": "謝天謝地：表示感激慶幸的話",
    "source": "11_國小國語1下成語加油站_第11課_(教).doc"
  },
  {
    "id": "idiom_src_057",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n天上的雲朵真是＿＿＿＿，一下子像小鳥，一下子像蝴蝶，真有趣！",
    "answer": "變化多端",
    "options": [
      "變化多端",
      "化險為夷",
      "一見如故",
      "一清二楚"
    ],
    "explanation": "變化多端：變化繁多，難以預測",
    "source": "國小國語1下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_058",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n這次的旅行因為時間太短，所以只能＿＿＿＿，沒辦法好好參觀每一個地方",
    "answer": "走馬看花",
    "options": [
      "節外生枝",
      "志同道合",
      "走馬看花",
      "差強人意"
    ],
    "explanation": "走馬看花：比喻粗略、匆促的觀看，不能仔細深入了解事物",
    "source": "國小國語1上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_059",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n這個週末，家家戶戶忙著大掃除，＿＿＿＿以迎接新年的到來",
    "answer": "除舊布新",
    "options": [
      "大力幫忙",
      "百發百中",
      "除舊布新",
      "迫不及待"
    ],
    "explanation": "除舊布新：去除舊景觀，建立新氣象",
    "source": "國小國語1下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_060",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n這條街上的咖啡店如＿＿＿＿般，一家接著一家開幕",
    "answer": "雨後春筍",
    "options": [
      "雨後春筍",
      "捉摸不定",
      "海底撈針",
      "本末倒置"
    ],
    "explanation": "雨後春筍：比喻事物在某一時期後大量湧現，迅速發展",
    "source": "國小國語1下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_061",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n颱風來襲，外頭＿＿＿＿，沒事別出門",
    "answer": "風雨交加",
    "options": [
      "安分守己",
      "海底撈針",
      "風雨交加",
      "緊追不捨"
    ],
    "explanation": "風雨交加：形容天氣十分惡劣",
    "source": "12_國小國語1下成語加油站_第12課_(教).doc"
  },
  {
    "id": "idiom_src_062",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n為了辦好這場晚會，他＿＿＿＿的到處奔走",
    "answer": "馬不停蹄",
    "options": [
      "鑽牛角尖",
      "聚沙成塔",
      "心直口快",
      "馬不停蹄"
    ],
    "explanation": "馬不停蹄：形容到處奔走，忙碌不休",
    "source": "12_國小國語1下成語加油站_第12課_(教).doc"
  },
  {
    "id": "idiom_src_063",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n春天來臨，大地一片＿＿＿＿，景色宜人",
    "answer": "鳥語花香",
    "options": [
      "黑白分明",
      "走馬看花",
      "鳥語花香",
      "萬紫千紅"
    ],
    "explanation": "鳥語花香：鳥兒歌唱，花開芬芳。形容景色的美好",
    "source": "國小國語1下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_064",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n姐姐那雙眼睛＿＿＿＿，看起來非常迷人",
    "answer": "黑白分明",
    "options": [
      "賞心悅目",
      "黑白分明",
      "濫竽充數",
      "滴水穿石"
    ],
    "explanation": "黑白分明：⑴黑色和白色區分明顯",
    "source": "國小國語1上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_065",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n哥哥的鋼琴彈得好，是一點一滴累積成的，並非＿＿＿＿就能達到",
    "answer": "一朝一夕",
    "options": [
      "一朝一夕",
      "喋喋不休",
      "不時之需",
      "口是心非"
    ],
    "explanation": "一朝一夕：形容時間很短",
    "source": "國小國語2下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_066",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n老師宣布校慶日期之後，大家便＿＿＿＿的討論班上的表演項目",
    "answer": "七嘴八舌",
    "options": [
      "自以為是",
      "十全十美",
      "七嘴八舌",
      "離鄉背井"
    ],
    "explanation": "七嘴八舌：形容人數多而意見也多，各有各的說法",
    "source": "國小國語2上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_067",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n我向媽媽提出買模型的請求，她＿＿＿＿就答應了，真令我驚喜",
    "answer": "不假思索",
    "options": [
      "明目張膽",
      "不假思索",
      "兩全其美",
      "爭先恐後"
    ],
    "explanation": "不假思索：指不經過思考探求，立即做出反應",
    "source": "11_國小國語2下成語加油站_第11課_(教).doc"
  },
  {
    "id": "idiom_src_068",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n突然下起大雨，路上行人＿＿＿＿趕快撐起雨傘",
    "answer": "不約而同",
    "options": [
      "海底撈針",
      "一朝一夕",
      "井井有條",
      "不約而同"
    ],
    "explanation": "不約而同：彼此並未事先約定，而意見或行為卻相同",
    "source": "11_國小國語2下成語加油站_第11課_(教).doc、國小國語2下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_069",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n瘦弱的他想搬起這個十公斤重的櫃子，似乎有點兒＿＿＿＿",
    "answer": "不自量力",
    "options": [
      "不自量力",
      "書香門第",
      "斬草除根",
      "大同小異"
    ],
    "explanation": "不自量力：過於高估自己的能力",
    "source": "12_國小國語2下成語加油站_第12課_(教).doc"
  },
  {
    "id": "idiom_src_070",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n這片山林清靜美麗，有如＿＿＿＿",
    "answer": "世外桃源",
    "options": [
      "講古論今",
      "海底撈針",
      "窗明几淨",
      "世外桃源"
    ],
    "explanation": "世外桃源：比喻風景優美而人跡罕至的地方",
    "source": "11_國小國語2下成語加油站_第11課_(教).doc"
  },
  {
    "id": "idiom_src_071",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n這個問題經老師一解說，我立即明白，老師豐富的學識，讓我佩服得＿＿＿＿",
    "answer": "五體投地",
    "options": [
      "節外生枝",
      "五體投地",
      "迫不及待",
      "心安理得"
    ],
    "explanation": "五體投地：比喻非常欽佩",
    "source": "國小國語2下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_072",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n姐姐將書本分類擺放，整理得＿＿＿＿",
    "answer": "井井有條",
    "options": [
      "井井有條",
      "指日可待",
      "畫龍點睛",
      "奄奄一息"
    ],
    "explanation": "井井有條：形容整齊有秩序的樣子",
    "source": "國小國語2下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_073",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n他們在會議上＿＿＿＿的，不知道說了些什麼",
    "answer": "交頭接耳",
    "options": [
      "交頭接耳",
      "志同道合",
      "興高采烈",
      "風吹草動"
    ],
    "explanation": "交頭接耳：形容低聲私語",
    "source": "11_國小國語2下成語加油站_第11課_(教).doc"
  },
  {
    "id": "idiom_src_074",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n他說的這些話根本和今天討論的內容無關，只是在＿＿＿＿罷了",
    "answer": "借題發揮",
    "options": [
      "風吹草動",
      "借題發揮",
      "度日如年",
      "興高采烈"
    ],
    "explanation": "答案是「借題發揮」。",
    "source": "11_國小國語2下成語加油站_第11課_(教).doc"
  },
  {
    "id": "idiom_src_075",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n這幅畫＿＿＿＿，可是國寶級的珍品",
    "answer": "價值連城",
    "options": [
      "價值連城",
      "光怪陸離",
      "麻木不仁",
      "心悅誠服"
    ],
    "explanation": "價值連城：形容物品十分珍貴",
    "source": "10_國小國語3下成語加油站_第10課_(教).doc、國小國語2上生字延伸成語.doc、國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_076",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n他的表現＿＿＿＿，很難評價",
    "answer": "功過參半",
    "options": [
      "奄奄一息",
      "交頭接耳",
      "功過參半",
      "風吹草動"
    ],
    "explanation": "功過參半：功勞和過失各占一半",
    "source": "11_國小國語2下成語加油站_第11課_(教).doc"
  },
  {
    "id": "idiom_src_077",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n幸好颱風最後轉向，天氣沒有惡化，這支登山隊才能＿＿＿＿，平安下 山",
    "answer": "化險為夷",
    "options": [
      "大同小異",
      "化險為夷",
      "草木皆兵",
      "古色古香"
    ],
    "explanation": "化險為夷：轉化危險為平安。 ●看句子寫成語 1.我這次段考成績進步了，媽媽鼓勵我再接再厲，不要（ 得意忘形 ）。 2.我向媽媽提出買模型的請求，她（ 不假思索 ）就答應了，真令我驚喜。 3.突然下起大雨，路上行人（ 不約而同 ）趕快撐起雨傘。 4.他們兩人不但是鄰居，而且（ 志同道合 ），一起參加了足球隊。 5.他們在會議上（ 交頭接耳 ）的，不知道說了些什麼。 6.他說的這些話根本和今天討論的內容無關，只是在（ 借題發揮 ）罷了。 7.在促銷活動中，會有一些不肖商人用品質不好的商品（ 濫竽充數 ），購買時 要小心。 8.這片山林清靜美麗，有如（ 世外桃源 ）。 9.想不到這麼難解的題目，姐姐竟然毫不費力就（ 迎刃而解 ）。 10.勇敢的戰士們把敵軍殺得（ 片甲不留 ）。 11.公司的業績不好，他決定（ 壯士斷腕 ），關掉一些門市。 12.聽了老師的勸導，他（ 發憤圖強 ），努力念書，希望能有所作為。 13.他喜歡悠遊於文學與歷史書籍，還經常在節目中（ 講古論今 ），因此受到廣 大民眾的喜愛。 14.幸好颱風最後轉向，天氣沒有惡化，這支登山隊才能（ 化險為夷 ），平安下 山。 15.良好的政策應該要經過審慎評估，才不會頒布之後又（ 朝令夕改 ）。 16.他的表現（ 功過參半 ），很難評價",
    "source": "11_國小國語2下成語加油站_第11課_(教).doc"
  },
  {
    "id": "idiom_src_078",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n我雖然無法做得＿＿＿＿，但會盡量小心，減少錯誤",
    "answer": "十全十美",
    "options": [
      "歡天喜地",
      "差強人意",
      "百發百中",
      "十全十美"
    ],
    "explanation": "十全十美：比喻圓滿美好、毫無缺陷的境界",
    "source": "國小國語2上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_079",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n為了讓妹妹喜歡吃蔬菜，媽媽可說是用盡了＿＿＿＿",
    "answer": "千方百計",
    "options": [
      "珠圓玉潤",
      "千方百計",
      "洛陽紙貴",
      "難兄難弟"
    ],
    "explanation": "千方百計：費盡心機，想盡一切辦法、計謀",
    "source": "12_國小國語2下成語加油站_第12課_(教).doc、國小國語2下生字延伸成語.doc、國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_080",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n這名魔術師在＿＿＿＿之際，從水底下緊鎖的箱子裡逃出來",
    "answer": "千鈞一髮",
    "options": [
      "捲土重來",
      "作威作福",
      "千鈞一髮",
      "朝三暮四"
    ],
    "explanation": "千鈞一髮：比喻非常危險",
    "source": "12_國小國語2下成語加油站_第12課_(教).doc、國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_081",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n這個美勞作品，是我們＿＿＿＿完成的",
    "answer": "同心協力",
    "options": [
      "十全十美",
      "同心協力",
      "一元復始",
      "挑燈夜戰"
    ],
    "explanation": "同心協力：團結一致，共同努力",
    "source": "國小國語2上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_082",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n他在商業界＿＿＿＿的能力，真是令人佩服",
    "answer": "呼風喚雨",
    "options": [
      "不假思索",
      "品學兼優",
      "呼風喚雨",
      "無話不談"
    ],
    "explanation": "呼風喚雨：➀指人有召喚風雨的法力。 ➁比喻人神通廣大、影響力深遠",
    "source": "12_國小國語2下成語加油站_第12課_(教).doc"
  },
  {
    "id": "idiom_src_083",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n哥哥原本生氣不肯出門，經過爸爸的開導，他終於＿＿＿＿，和我們一 起出遊",
    "answer": "回心轉意",
    "options": [
      "海底撈針",
      "世外桃源",
      "回心轉意",
      "教學相長"
    ],
    "explanation": "回心轉意：指改變心意",
    "source": "10_國小國語2下成語加油站_第10課_(教).doc"
  },
  {
    "id": "idiom_src_084",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n公司的業績不好，他決定＿＿＿＿，關掉一些門市",
    "answer": "壯士斷腕",
    "options": [
      "栩栩如生",
      "賞心悅目",
      "冰天雪地",
      "壯士斷腕"
    ],
    "explanation": "壯士斷腕：比喻在緊要關頭能當機立斷，知所取捨",
    "source": "11_國小國語2下成語加油站_第11課_(教).doc"
  },
  {
    "id": "idiom_src_085",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n老師告訴我們，等一下響起的警報聲是消防演習，不要＿＿＿＿",
    "answer": "大驚小怪",
    "options": [
      "大驚小怪",
      "志同道合",
      "草木皆兵",
      "挨餓受凍"
    ],
    "explanation": "大驚小怪：為了一點小事而過分驚怪，弄到大家都知道",
    "source": "國小國語2下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_086",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n為了給爸爸一個生日驚喜，大家＿＿＿＿，絕不洩漏一點兒消息",
    "answer": "守口如瓶",
    "options": [
      "守口如瓶",
      "一毛不拔",
      "焦頭爛額",
      "惱羞成怒"
    ],
    "explanation": "守口如瓶：比喻絕不說出祕密",
    "source": "國小國語2上生字延伸成語.doc、國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_087",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n他這次的考試成績還算＿＿＿＿，希望下一次他能發揮應有的實力",
    "answer": "差強人意",
    "options": [
      "一見如故",
      "博古通今",
      "興高采烈",
      "差強人意"
    ],
    "explanation": "差強人意：比喻雖然不夠好，但大體上還能讓人滿意",
    "source": "12_國小國語2下成語加油站_第12課_(教).doc、國小國語2下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_088",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n這兩篇文章＿＿＿＿，因此並列第一",
    "answer": "平分秋色",
    "options": [
      "平分秋色",
      "安分守己",
      "迎刃而解",
      "自相矛盾"
    ],
    "explanation": "平分秋色：形容兩者一樣出色，不分高下",
    "source": "國小國語2上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_089",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "「形容人高興過頭，舉止失去常態」可以用哪個成語？",
    "answer": "得意忘形",
    "options": [
      "滴水穿石",
      "心直口快",
      "火上加油",
      "得意忘形"
    ],
    "explanation": "得意忘形：形容人高興過頭，舉止失去常態",
    "source": "11_國小國語2下成語加油站_第11課_(教).doc"
  },
  {
    "id": "idiom_src_090",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n這個年輕人做事＿＿＿＿，是大家公認的正人君子",
    "answer": "循規蹈矩",
    "options": [
      "明知故犯",
      "百發百中",
      "日新月異",
      "循規蹈矩"
    ],
    "explanation": "循規蹈矩：遵守禮法，不踰越法度",
    "source": "10_國小國語2下成語加油站_第10課_(教).doc"
  },
  {
    "id": "idiom_src_091",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n他不做虧心事，當然＿＿＿＿",
    "answer": "心安理得",
    "options": [
      "草木皆兵",
      "心安理得",
      "不時之需",
      "迎頭趕上"
    ],
    "explanation": "心安理得：行事合於情理，心中沒有掛慮和遺憾",
    "source": "國小國語2下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_092",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n媽媽的生日快到了，家人們＿＿＿＿，都想給她一個驚喜",
    "answer": "心照不宣",
    "options": [
      "心照不宣",
      "骨瘦如柴",
      "久旱不雨",
      "塞翁失馬"
    ],
    "explanation": "心照不宣：彼此心裡明白，不必言語說明",
    "source": "國小國語2下生字延伸成語.doc、國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_093",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n他說話＿＿＿＿，常在無意間得罪別人",
    "answer": "心直口快",
    "options": [
      "得意忘形",
      "望梅止渴",
      "慢條斯理",
      "心直口快"
    ],
    "explanation": "心直口快：性情直率，說話很坦白",
    "source": "國小國語2上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_094",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n時間快到了，哥哥才＿＿＿＿的準備出門",
    "answer": "手忙腳亂",
    "options": [
      "古色古香",
      "手忙腳亂",
      "舉足輕重",
      "壯士斷腕"
    ],
    "explanation": "手忙腳亂：形容做事慌亂，失了條理",
    "source": "國小國語2上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_095",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n事發突然，他被嚇得＿＿＿＿，說不出話來",
    "answer": "手足無措",
    "options": [
      "手足無措",
      "咎由自取",
      "韋編三絕",
      "斬釘截鐵"
    ],
    "explanation": "手足無措：形容人惶恐不安，不知如何是好",
    "source": "12_國小國語3下成語加油站_第12課_(教).doc、國小國語2下生字延伸成語.doc、國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_096",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "「形容倉皇逃跑的狼狽樣子」可以用哪個成語？",
    "answer": "抱頭鼠竄",
    "options": [
      "萬紫千紅",
      "濫竽充數",
      "不自量力",
      "抱頭鼠竄"
    ],
    "explanation": "抱頭鼠竄：形容倉皇逃跑的狼狽樣子",
    "source": "10_國小國語2下成語加油站_第10課_(教).doc"
  },
  {
    "id": "idiom_src_097",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n只要我們堅持不放棄，那麼成功便＿＿＿＿了",
    "answer": "指日可待",
    "options": [
      "語無倫次",
      "粗茶淡飯",
      "指日可待",
      "粗枝大葉"
    ],
    "explanation": "指日可待：不久即可實現",
    "source": "國小國語2下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_098",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n飼養寵物要有責任感，要多花心思照顧，不要讓牠們＿＿＿＿",
    "answer": "挨餓受凍",
    "options": [
      "歡欣鼓舞",
      "美不勝收",
      "挨餓受凍",
      "明目張膽"
    ],
    "explanation": "挨餓受凍：遭受飢餓與寒冷侵襲",
    "source": "12_國小國語2下成語加油站_第12課_(教).doc"
  },
  {
    "id": "idiom_src_099",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n她的行蹤非常神祕，讓人＿＿＿＿",
    "answer": "捉摸不定",
    "options": [
      "百發百中",
      "望梅止渴",
      "自食其力",
      "捉摸不定"
    ],
    "explanation": "捉摸不定：無法揣度，把握不住",
    "source": "10_國小國語2下成語加油站_第10課_(教).doc"
  },
  {
    "id": "idiom_src_100",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n跆拳道選手勇奪金牌，為我國＿＿＿＿",
    "answer": "揚眉吐氣",
    "options": [
      "不修邊幅",
      "克勤克儉",
      "絕無僅有",
      "揚眉吐氣"
    ],
    "explanation": "揚眉吐氣：形容擺脫長久的不如意而感到高興安慰，身心舒暢",
    "source": "國小國語2下生字延伸成語.doc、國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_101",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n他下定決心將一些壞習慣＿＿＿＿，讓身體能變得更健康",
    "answer": "斬草除根",
    "options": [
      "本末倒置",
      "挑燈夜戰",
      "兩全其美",
      "斬草除根"
    ],
    "explanation": "斬草除根：比喻除去禍根，不留後患",
    "source": "12_國小國語2下成語加油站_第12課_(教).doc"
  },
  {
    "id": "idiom_src_102",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n學問需要＿＿＿＿的努力學習，而非一下子就能成功",
    "answer": "日積月累",
    "options": [
      "迎刃而解",
      "日積月累",
      "講古論今",
      "一朝一夕"
    ],
    "explanation": "日積月累：長時間不斷的累積。比喻歷時久遠",
    "source": "12_國小國語2下成語加油站_第12課_(教).doc"
  },
  {
    "id": "idiom_src_103",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n老師已經再三提醒大家不要在走廊奔跑，他卻＿＿＿＿，才會跌倒受傷",
    "answer": "明知故犯",
    "options": [
      "歡欣鼓舞",
      "畫龍點睛",
      "風雨交加",
      "明知故犯"
    ],
    "explanation": "明知故犯：形容明明知道不對，卻故意去做",
    "source": "國小國語2上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_104",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n哥哥要上課，不能到球賽現場觀賞比賽，只能看電視重播＿＿＿＿",
    "answer": "望梅止渴",
    "options": [
      "安分守己",
      "望梅止渴",
      "化險為夷",
      "按部就班"
    ],
    "explanation": "望梅止渴：比喻以空想來安慰自己",
    "source": "國小國語2上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_105",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n叔叔做事沒有定性，經常＿＿＿＿，讓大家很困擾",
    "answer": "朝三暮四",
    "options": [
      "明察秋毫",
      "朝三暮四",
      "木已成舟",
      "三餐不繼"
    ],
    "explanation": "朝三暮四：比喻心意不定、反覆無常",
    "source": "10_國小國語2下成語加油站_第10課_(教).doc、國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_106",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n良好的政策應該要經過審慎評估，才不會頒布之後又＿＿＿＿",
    "answer": "朝令夕改",
    "options": [
      "投機取巧",
      "張口結舌",
      "家喻戶曉",
      "朝令夕改"
    ],
    "explanation": "朝令夕改：早上下達的命令，到傍晚就改變了。比喻政令、主張或意見反覆無常",
    "source": "11_國小國語2下成語加油站_第11課_(教).doc、國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_107",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n為了賺錢而犧牲身體健康，是＿＿＿＿的行為",
    "answer": "本末倒置",
    "options": [
      "本末倒置",
      "無話不談",
      "度日如年",
      "循規蹈矩"
    ],
    "explanation": "本末倒置：比喻不知事情的輕重緩急",
    "source": "12_國小國語2下成語加油站_第12課_(教).doc、國小國語2上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_108",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n我把姐姐的杯子打破了，她＿＿＿＿的看著我，我趕緊向她道歉",
    "answer": "杏眼圓睜",
    "options": [
      "雨後春筍",
      "口是心非",
      "杏眼圓睜",
      "良藥苦口"
    ],
    "explanation": "杏眼圓睜：形容女子生氣時瞪大眼睛的樣子",
    "source": "12_國小國語2下成語加油站_第12課_(教).doc"
  },
  {
    "id": "idiom_src_109",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n我國體操選手得到世界冠軍的消息傳來，全國男女老少都＿＿＿＿",
    "answer": "歡欣鼓舞",
    "options": [
      "良藥苦口",
      "交頭接耳",
      "歡欣鼓舞",
      "大同小異"
    ],
    "explanation": "歡欣鼓舞：歡樂興奮的樣子",
    "source": "國小國語2上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_110",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n跑完馬拉松比賽後，選手們個個＿＿＿＿",
    "answer": "汗流浹背",
    "options": [
      "汗流浹背",
      "興高采烈",
      "交頭接耳",
      "不約而同"
    ],
    "explanation": "汗流浹背：汗流很多，溼透了背部。形容工作辛勞或非常慚愧、驚恐的樣子",
    "source": "國小國語2上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_111",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n弟弟整天＿＿＿＿，一點也不像重感冒的樣子",
    "answer": "活蹦亂跳",
    "options": [
      "功過參半",
      "活蹦亂跳",
      "一朝一夕",
      "時時刻刻"
    ],
    "explanation": "活蹦亂跳：形容生氣蓬勃的樣子。 ●看句子寫成語 1.發生大地震時，遊客們都嚇得驚惶失措，紛紛（ 抱頭鼠竄 ）。 2.弟弟整天（ 活蹦亂跳 ），一點也不像重感冒的樣子。 3.大家對她的詩都（ 耳熟能詳 ），朗朗上口。 4.聽說他懷著（ 熊心豹膽 ），準備要出發前往非洲叢林探險。 5.故事裡的縣官是一位（ 飽讀詩書 ）、學問淵博的人。 6.叔叔做事沒有定性，經常（ 朝三暮四 ），讓大家很困擾。 7.就算是一個小小的螺絲釘，對整部機器的運作也有（ 舉足輕重 ）的影響。 8.她的行蹤非常神祕，讓人（ 捉摸不定 ）。 9.哥哥原本生氣不肯出門，經過爸爸的開導，他終於（ 回心轉意 ），和我們一 起出遊。 10.聽說有熊進入人類的住宅區，附近的居民全都（ 草木皆兵 ），人人自危。 11.他的個性容易想太多而（ 鑽牛角尖 ），因此總是眉頭深鎖。 12.雖然我上次的考試成績不太理想，但是我會繼續發憤用功，努力（ 迎頭趕上 ）。 13.這些設計作品被人發現是抄襲了別人的創意，（ 疊床架屋 ）之後變得笨重又 功能不佳，。 14.這個年輕人做事（ 循規蹈矩 ），是大家公認的正人君子",
    "source": "10_國小國語2下成語加油站_第10課_(教).doc"
  },
  {
    "id": "idiom_src_112",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n這些文件堆得這麼亂，想要找到那封信，就像是＿＿＿＿",
    "answer": "海底撈針",
    "options": [
      "海底撈針",
      "不自量力",
      "除舊布新",
      "變化多端"
    ],
    "explanation": "海底撈針：比喻東西很難找到或事情很難做到",
    "source": "12_國小國語2下成語加油站_第12課_(教).doc"
  },
  {
    "id": "idiom_src_113",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n在促銷活動中，會有一些不肖商人用品質不好的商品＿＿＿＿，購買時 要小心",
    "answer": "濫竽充數",
    "options": [
      "博古通今",
      "歡天喜地",
      "粗茶淡飯",
      "濫竽充數"
    ],
    "explanation": "濫竽充數：➀比喻沒有真才實學的人，混在行家之間充數。➁比喻假貨劣品混在真品中 。➂用於自謙，比喻自己才德不足",
    "source": "11_國小國語2下成語加油站_第11課_(教).doc"
  },
  {
    "id": "idiom_src_114",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n爸爸、媽媽很關心我，對我的照顧＿＿＿＿",
    "answer": "無微不至",
    "options": [
      "參差不齊",
      "錦衣玉食",
      "自掏腰包",
      "無微不至"
    ],
    "explanation": "無微不至：每一個細微處都照顧到。形容非常周到",
    "source": "國小國語2下生字延伸成語.doc、國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_115",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n聽說他懷著＿＿＿＿，準備要出發前往非洲叢林探險",
    "answer": "熊心豹膽",
    "options": [
      "抱頭鼠竄",
      "熊心豹膽",
      "自以為是",
      "一清二楚"
    ],
    "explanation": "熊心豹膽：形容膽量極大",
    "source": "10_國小國語2下成語加油站_第10課_(教).doc"
  },
  {
    "id": "idiom_src_116",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n勇敢的戰士們把敵軍殺得＿＿＿＿",
    "answer": "片甲不留",
    "options": [
      "隔牆有耳",
      "片甲不留",
      "度日如年",
      "自相矛盾"
    ],
    "explanation": "片甲不留：「甲」是指古代將士所穿的鎧甲。形容軍隊打敗仗，全軍覆沒",
    "source": "11_國小國語2下成語加油站_第11課_(教).doc"
  },
  {
    "id": "idiom_src_117",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n颱風登陸後的＿＿＿＿造成不少損失",
    "answer": "狂風暴雨",
    "options": [
      "美不勝收",
      "疊床架屋",
      "大同小異",
      "狂風暴雨"
    ],
    "explanation": "狂風暴雨：形容巨大猛烈的風雨",
    "source": "12_國小國語2下成語加油站_第12課_(教).doc"
  },
  {
    "id": "idiom_src_118",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n哥哥是說故事高手，但是說完又開始唱歌就有點兒＿＿＿＿了",
    "answer": "畫蛇添足",
    "options": [
      "甘拜下風",
      "畫蛇添足",
      "千頭萬緒",
      "循循善誘"
    ],
    "explanation": "畫蛇添足：比喻多此一舉，反將事情弄糟",
    "source": "國小國語2上生字延伸成語.doc、國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_119",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n這些設計作品被人發現是抄襲了別人的創意，＿＿＿＿之後變得笨重又 功能不佳，",
    "answer": "疊床架屋",
    "options": [
      "得意忘形",
      "疊床架屋",
      "不自量力",
      "本末倒置"
    ],
    "explanation": "疊床架屋：床上疊床，屋下架屋。比喻重複模仿，無所創新。後多用來比喻重複累贅",
    "source": "10_國小國語2下成語加油站_第10課_(教).doc"
  },
  {
    "id": "idiom_src_120",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n聽了老師的勸導，他＿＿＿＿，努力念書，希望能有所作為",
    "answer": "發憤圖強",
    "options": [
      "窗明几淨",
      "化險為夷",
      "發憤圖強",
      "聚沙成塔"
    ],
    "explanation": "發憤圖強：下定決心，努力謀求強盛",
    "source": "11_國小國語2下成語加油站_第11課_(教).doc"
  },
  {
    "id": "idiom_src_121",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n弟弟每天練習投籃，就是為了成為＿＿＿＿的神射手",
    "answer": "百發百中",
    "options": [
      "喋喋不休",
      "一元復始",
      "百發百中",
      "兩全其美"
    ],
    "explanation": "百發百中：形容技術高妙，能命中目標。或形容預測事情相當準確",
    "source": "國小國語2上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_122",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n爸爸提醒我們，判斷事情時不能太主觀，否則容易＿＿＿＿，導致失誤",
    "answer": "瞎子摸象",
    "options": [
      "走馬看花",
      "瞎子摸象",
      "風平浪靜",
      "不時之需"
    ],
    "explanation": "瞎子摸象：幾個盲人摸大象的身軀，每個人都認為自己所摸到的部分是大象的整個形象 。比喻觀察判斷事物不夠全面",
    "source": "國小國語2上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_123",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n每次收到好朋友從國外寄來的信，姐姐總是＿＿＿＿，心情愉快",
    "answer": "笑逐顏開",
    "options": [
      "十全十美",
      "挑燈夜戰",
      "笑逐顏開",
      "借題發揮"
    ],
    "explanation": "笑逐顏開：心中喜悅而眉開眼笑的樣子",
    "source": "國小國語2下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_124",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n這消息越多人知道，越會＿＿＿＿",
    "answer": "節外生枝",
    "options": [
      "疊床架屋",
      "明目張膽",
      "狂風暴雨",
      "節外生枝"
    ],
    "explanation": "節外生枝：比喻於事件外復生事端",
    "source": "國小國語2上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_125",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n妹妹的個性＿＿＿＿，有時會忘了帶作業回家",
    "answer": "粗枝大葉",
    "options": [
      "粗枝大葉",
      "度日如年",
      "賞心悅目",
      "斬草除根"
    ],
    "explanation": "粗枝大葉：比喻粗心，做事不仔細",
    "source": "國小國語2上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_126",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n鄰居的老夫婦每天都是＿＿＿＿，過著非常簡樸的生活",
    "answer": "粗茶淡飯",
    "options": [
      "粗茶淡飯",
      "無話不談",
      "不時之需",
      "風吹草動"
    ],
    "explanation": "粗茶淡飯：簡單清淡的飲食",
    "source": "國小國語2上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_127",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n幸好那位警察＿＿＿＿的追捕，終於抓到狡猾的小偷",
    "answer": "緊追不捨",
    "options": [
      "兩全其美",
      "滴水穿石",
      "博古通今",
      "緊追不捨"
    ],
    "explanation": "緊追不捨：牢牢追隨在後面，不肯放棄",
    "source": "12_國小國語2下成語加油站_第12課_(教).doc"
  },
  {
    "id": "idiom_src_128",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n他是個＿＿＿＿的人，跟他打交道時要留意",
    "answer": "老奸巨猾",
    "options": [
      "疊床架屋",
      "循規蹈矩",
      "賞心悅目",
      "老奸巨猾"
    ],
    "explanation": "老奸巨猾：形容人世故老練、極為奸詐狡猾",
    "source": "12_國小國語2下成語加油站_第12課_(教).doc"
  },
  {
    "id": "idiom_src_129",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n大家對她的詩都＿＿＿＿，朗朗上口",
    "answer": "耳熟能詳",
    "options": [
      "耳熟能詳",
      "發憤圖強",
      "差強人意",
      "挨餓受凍"
    ],
    "explanation": "耳熟能詳：常常聽到，非常熟悉，而能詳盡的知道或說出來",
    "source": "10_國小國語2下成語加油站_第10課_(教).doc"
  },
  {
    "id": "idiom_src_130",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n哥哥每天存十元，終於＿＿＿＿，存到買遙控車的錢",
    "answer": "聚沙成塔",
    "options": [
      "變化多端",
      "聚沙成塔",
      "風雨交加",
      "回心轉意"
    ],
    "explanation": "聚沙成塔：比喻累積少量而成多數",
    "source": "國小國語2上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_131",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n你要多聽取別人的意見，不要＿＿＿＿",
    "answer": "自以為是",
    "options": [
      "車水馬龍",
      "事半功倍",
      "差強人意",
      "自以為是"
    ],
    "explanation": "自以為是：自認觀點與做法正確，不肯虛心接受別人的意見",
    "source": "國小國語2上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_132",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n寫文章時應注意觀點前後相同，不要＿＿＿＿",
    "answer": "自相矛盾",
    "options": [
      "自相矛盾",
      "奄奄一息",
      "溫故知新",
      "明目張膽"
    ],
    "explanation": "自相矛盾：比喻言語或做的事前後不同，無法呼應",
    "source": "國小國語2上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_133",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n為了減輕家裡負擔，他＿＿＿＿，半工半讀完成大學學業",
    "answer": "自食其力",
    "options": [
      "交頭接耳",
      "自食其力",
      "迫不及待",
      "歡欣鼓舞"
    ],
    "explanation": "自食其力：憑藉自己的勞力養活自己",
    "source": "12_國小國語2下成語加油站_第12課_(教).doc"
  },
  {
    "id": "idiom_src_134",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n阿姨結婚當天，親友們都＿＿＿＿的前來參加結婚典禮",
    "answer": "興高采烈",
    "options": [
      "走馬看花",
      "知己知彼",
      "歡天喜地",
      "興高采烈"
    ],
    "explanation": "興高采烈：形容興致勃勃，情緒熱烈的樣子",
    "source": "國小國語2下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_135",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n就算是一個小小的螺絲釘，對整部機器的運作也有＿＿＿＿的影響",
    "answer": "舉足輕重",
    "options": [
      "萬紫千紅",
      "舉足輕重",
      "交頭接耳",
      "雨後春筍"
    ],
    "explanation": "舉足輕重：形容地位極為重要，一舉一動皆足以影響全局",
    "source": "10_國小國語2下成語加油站_第10課_(教).doc"
  },
  {
    "id": "idiom_src_136",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n雖然這些批評是你不想聽的，但是＿＿＿＿，都是為了你好哇！",
    "answer": "良藥苦口",
    "options": [
      "變化多端",
      "謝天謝地",
      "良藥苦口",
      "七嘴八舌"
    ],
    "explanation": "良藥苦口：原本表示能治病的藥，多味苦難吞。後來也用於比喻勸諫的話大多不討人喜 歡，但卻有益於人",
    "source": "國小國語2下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_137",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n聽說有熊進入人類的住宅區，附近的居民全都＿＿＿＿，人人自危",
    "answer": "草木皆兵",
    "options": [
      "博古通今",
      "一元復始",
      "兩全其美",
      "草木皆兵"
    ],
    "explanation": "草木皆兵：見到風吹草動，都以為是敵兵。形容疑神疑鬼、驚恐不安",
    "source": "10_國小國語2下成語加油站_第10課_(教).doc"
  },
  {
    "id": "idiom_src_138",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n春天一到，山坡上野花盛開，一片＿＿＿＿",
    "answer": "萬紫千紅",
    "options": [
      "萬紫千紅",
      "大公無私",
      "博古通今",
      "功過參半"
    ],
    "explanation": "萬紫千紅：形容百花盛開，多彩燦爛的景象",
    "source": "國小國語2下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_139",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n他喜歡悠遊於文學與歷史書籍，還經常在節目中＿＿＿＿，因此受到廣 大民眾的喜愛",
    "answer": "講古論今",
    "options": [
      "自作主張",
      "講古論今",
      "指日可待",
      "除舊布新"
    ],
    "explanation": "講古論今：談論古今的事情",
    "source": "11_國小國語2下成語加油站_第11課_(教).doc"
  },
  {
    "id": "idiom_src_140",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n美術館這次所展出的油畫，每幅都是＿＿＿＿的精品",
    "answer": "賞心悅目",
    "options": [
      "賞心悅目",
      "明知故犯",
      "舉足輕重",
      "黑白分明"
    ],
    "explanation": "賞心悅目：因欣賞美好的事物而心情舒暢",
    "source": "國小國語2下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_141",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n這條街道因為臨近夜市，入夜後依然＿＿＿＿，十分熱鬧",
    "answer": "車水馬龍",
    "options": [
      "楚楚可憐",
      "世外桃源",
      "胡思亂想",
      "車水馬龍"
    ],
    "explanation": "車水馬龍：形容車馬往來不絕，繁華熱鬧的景象",
    "source": "國小國語2下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_142",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n想不到這麼難解的題目，姐姐竟然毫不費力就＿＿＿＿",
    "answer": "迎刃而解",
    "options": [
      "節外生枝",
      "迎刃而解",
      "不時之需",
      "老奸巨猾"
    ],
    "explanation": "迎刃而解：比喻事情很容易處理",
    "source": "11_國小國語2下成語加油站_第11課_(教).doc"
  },
  {
    "id": "idiom_src_143",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n雖然我上次的考試成績不太理想，但是我會繼續發憤用功，努力＿＿＿＿",
    "answer": "迎頭趕上",
    "options": [
      "汗流浹背",
      "冰天雪地",
      "迎頭趕上",
      "書香門第"
    ],
    "explanation": "迎頭趕上：急起直追，向前趕上",
    "source": "10_國小國語2下成語加油站_第10課_(教).doc"
  },
  {
    "id": "idiom_src_144",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n聽到他從國外旅遊回來的消息，我便＿＿＿＿的想聽他分享一路上的趣事",
    "answer": "迫不及待",
    "options": [
      "車水馬龍",
      "無話不談",
      "迫不及待",
      "大驚小怪"
    ],
    "explanation": "迫不及待：比喻情況或時間急切，不能再等",
    "source": "國小國語2下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_145",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n他的個性容易想太多而＿＿＿＿，因此總是眉頭深鎖",
    "answer": "鑽牛角尖",
    "options": [
      "謝天謝地",
      "熊心豹膽",
      "雨後春筍",
      "鑽牛角尖"
    ],
    "explanation": "鑽牛角尖：比喻人固執而不知變通，費力的研究無用或無法解決的問題",
    "source": "10_國小國語2下成語加油站_第10課_(教).doc"
  },
  {
    "id": "idiom_src_146",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n說話時小心＿＿＿＿，以免惹禍上身",
    "answer": "隔牆有耳",
    "options": [
      "世外桃源",
      "粗茶淡飯",
      "人山人海",
      "隔牆有耳"
    ],
    "explanation": "隔牆有耳：牆外有人偷聽，祕密外洩。後比喻說祕密時，要防備有人偷聽",
    "source": "12_國小國語2下成語加油站_第12課_(教).doc"
  },
  {
    "id": "idiom_src_147",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n學習語文應該聽與寫＿＿＿＿，收效才快",
    "answer": "雙管齊下",
    "options": [
      "夜以繼日",
      "雙管齊下",
      "方興未艾",
      "一介不取"
    ],
    "explanation": "雙管齊下：比喻同時採用兩種辦法，或兩件事情同時進行",
    "source": "12_國小國語4下成語加油站_第12課_(教).doc、國小國語2下生字延伸成語.doc、國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_148",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n逢年過節，＿＿＿＿的遊子總是特別想念家人",
    "answer": "離鄉背井",
    "options": [
      "走馬看花",
      "歡欣鼓舞",
      "指日可待",
      "離鄉背井"
    ],
    "explanation": "離鄉背井：離開故鄉，在外地生活",
    "source": "國小國語2上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_149",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n就算放暑假，國強還是每天練球，他對籃球的熱情和毅力真是＿＿＿＿",
    "answer": "難能可貴",
    "options": [
      "事半功倍",
      "難能可貴",
      "大力幫忙",
      "滴水穿石"
    ],
    "explanation": "難能可貴：做到了不容易做到的事，所以特別可貴",
    "source": "國小國語2下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_150",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n小兔子一邊吃著草，一邊注意著四周環境，一點兒＿＿＿＿，都會把牠嚇跑",
    "answer": "風吹草動",
    "options": [
      "心直口快",
      "舉足輕重",
      "風吹草動",
      "時時刻刻"
    ],
    "explanation": "風吹草動：比喻輕微的動靜、變化",
    "source": "國小國語2上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_151",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n今天天氣很好，海上＿＿＿＿，讓水手們可以順利出航",
    "answer": "風平浪靜",
    "options": [
      "視同兒戲",
      "謝天謝地",
      "風平浪靜",
      "借題發揮"
    ],
    "explanation": "風平浪靜：⑴水面平靜無風浪。⑵平靜無事",
    "source": "國小國語2下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_152",
    "bank": "idiom",
    "difficulty": "easy",
    "question": "下列句子空格可以填入哪個成語？\n故事裡的縣官是一位＿＿＿＿、學問淵博的人",
    "answer": "飽讀詩書",
    "options": [
      "粗茶淡飯",
      "栩栩如生",
      "斬草除根",
      "飽讀詩書"
    ],
    "explanation": "飽讀詩書：讀過很多書，很有學問",
    "source": "10_國小國語2下成語加油站_第10課_(教).doc"
  },
  {
    "id": "idiom_src_153",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n他無論做什麼事都按照規定＿＿＿＿的，絕不馬虎塞責",
    "answer": "一板一眼",
    "options": [
      "苦口婆心",
      "禮尚往來",
      "東窗事發",
      "一板一眼"
    ],
    "explanation": "一板一眼：比喻人言行謹守法規，有條有理",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_154",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n他雖然很富有，卻＿＿＿＿，從不參加公益活動",
    "answer": "一毛不拔",
    "options": [
      "焦頭爛額",
      "一毛不拔",
      "精益求精",
      "手足無措"
    ],
    "explanation": "一毛不拔：比喻自私自利，不肯貢獻出些微的力量。今亦用於形容人非常吝嗇",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_155",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n沒想到老爺爺以前過著＿＿＿＿的生活，幸好他撐過來了",
    "answer": "三餐不繼",
    "options": [
      "朝令夕改",
      "三餐不繼",
      "猶豫不決",
      "餘波盪漾"
    ],
    "explanation": "三餐不繼：形容生活貧困",
    "source": "11_國小國語3下成語加油站_第11課_(教).doc"
  },
  {
    "id": "idiom_src_156",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n他的心地雖然不壞，卻因＿＿＿＿而無法獲得大家的認同",
    "answer": "不學無術",
    "options": [
      "風馳電掣",
      "觸類旁通",
      "大智若愚",
      "不學無術"
    ],
    "explanation": "不學無術：指人未經學習而沒有學問才幹",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_157",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n他在得意時受人景仰，失意時被大家唾棄，這正是＿＿＿＿的最好寫照",
    "answer": "世態炎涼",
    "options": [
      "天衣無縫",
      "野心勃勃",
      "一毛不拔",
      "世態炎涼"
    ],
    "explanation": "世態炎涼：比喻世俗情態反覆無常",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_158",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n他最近工作繁忙，幾乎沒時間整理家務，所以家裡＿＿＿＿的",
    "answer": "亂七八糟",
    "options": [
      "一毛不拔",
      "亂七八糟",
      "心驚肉跳",
      "家喻戶曉"
    ],
    "explanation": "亂七八糟：形容雜亂、毫無條理的樣子",
    "source": "12_國小國語3下成語加油站_第12課_(教).doc"
  },
  {
    "id": "idiom_src_159",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n我們原本想去野餐，但＿＿＿＿，出門前突然下起大雨",
    "answer": "事與願違",
    "options": [
      "三餐不繼",
      "事與願違",
      "暮鼓晨鐘",
      "手足無措"
    ],
    "explanation": "事與願違：事實和願望相違背",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_160",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n他的財產在這場火災中全部＿＿＿＿",
    "answer": "付之一炬",
    "options": [
      "循循善誘",
      "開誠布公",
      "付之一炬",
      "抱薪救火"
    ],
    "explanation": "付之一炬：指物品、成果全數被焚燬",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_161",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n他的＿＿＿＿，使競爭對手深受感動，悔不當初",
    "answer": "以德報怨",
    "options": [
      "設身處地",
      "寬宏大量",
      "以德報怨",
      "民不聊生"
    ],
    "explanation": "以德報怨：不記仇恨，反以恩德回報他人",
    "source": "10_國小國語3下成語加油站_第10課_(教).doc、國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_162",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n他們的能力在＿＿＿＿，可謂棋逢敵手了",
    "answer": "伯仲之間",
    "options": [
      "循循善誘",
      "伯仲之間",
      "揠苗助長",
      "兵不厭詐"
    ],
    "explanation": "伯仲之間：形容人才能相當，不相上下",
    "source": "12_國小國語3下成語加油站_第12課_(教).doc、國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_163",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "「仗著權勢欺壓別人」可以用哪個成語？",
    "answer": "作威作福",
    "options": [
      "忍氣吞聲",
      "不學無術",
      "作威作福",
      "風塵僕僕"
    ],
    "explanation": "作威作福：仗著權勢欺壓別人",
    "source": "11_國小國語3下成語加油站_第11課_(教).doc"
  },
  {
    "id": "idiom_src_164",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n做人要求心安理得，不要貪不義之財，也不能＿＿＿＿",
    "answer": "傷天害理",
    "options": [
      "立竿見影",
      "野心勃勃",
      "傷天害理",
      "狼心狗肺"
    ],
    "explanation": "傷天害理：為人處事違背天理，泯滅人性",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_165",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n突然下起＿＿＿＿，讓路人都成了落湯雞",
    "answer": "傾盆大雨",
    "options": [
      "洛陽紙貴",
      "傾盆大雨",
      "星羅棋布",
      "知難而退"
    ],
    "explanation": "傾盆大雨：雨就像把水從盆子裡倒出來一樣大。形容雨勢又大又急",
    "source": "10_國小國語3下成語加油站_第10課_(教).doc"
  },
  {
    "id": "idiom_src_166",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n現代社會複雜多變，各種＿＿＿＿的現象，不足為奇",
    "answer": "光怪陸離",
    "options": [
      "唉聲嘆氣",
      "光怪陸離",
      "甘拜下風",
      "狐假虎威"
    ],
    "explanation": "光怪陸離：形容現象離奇怪異，色彩參差錯雜",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_167",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n古人說得好，＿＿＿＿，你可要多加提防以免落入對方的陷阱！",
    "answer": "兵不厭詐",
    "options": [
      "兵不厭詐",
      "價值連城",
      "轟轟烈烈",
      "傷天害理"
    ],
    "explanation": "兵不厭詐：比喻為了達到目的，不排斥使用詭詐的手段",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_168",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n他才思敏捷，＿＿＿＿，令人佩服！",
    "answer": "出口成章",
    "options": [
      "出口成章",
      "唉聲嘆氣",
      "事與願違",
      "投機取巧"
    ],
    "explanation": "出口成章：比喻才思敏捷，談吐風雅",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_169",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n他是＿＿＿＿的社會新鮮人，雖然缺少經驗，卻有一股學習的熱誠",
    "answer": "初出茅廬",
    "options": [
      "初出茅廬",
      "居安思危",
      "禮尚往來",
      "風馳電掣"
    ],
    "explanation": "初出茅廬：比喻初入社會，缺乏歷練",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_170",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n這真是一次＿＿＿＿的展覽，令人印象十分深刻",
    "answer": "別開生面",
    "options": [
      "別開生面",
      "當仁不讓",
      "明察秋毫",
      "心平氣和"
    ],
    "explanation": "別開生面：比喻另外開創新的局面、風格、形式",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_171",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n他坦承自己一時＿＿＿＿，才會盜用公款",
    "answer": "利令智昏",
    "options": [
      "返老還童",
      "各懷鬼胎",
      "斬釘截鐵",
      "利令智昏"
    ],
    "explanation": "利令智昏：形容受利欲迷惑，使得理智昏亂",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_172",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n這個計畫現在不能停，一停下來，就會＿＿＿＿",
    "answer": "前功盡棄",
    "options": [
      "一毛不拔",
      "甘拜下風",
      "前功盡棄",
      "引人入勝"
    ],
    "explanation": "前功盡棄：指以前辛苦獲得的成果，全部廢棄",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_173",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n做任何事情若不能堅持到底，就會＿＿＿＿",
    "answer": "功敗垂成",
    "options": [
      "天羅地網",
      "功敗垂成",
      "咫尺天涯",
      "珠圓玉潤"
    ],
    "explanation": "功敗垂成：指事情在即將成功時卻失敗了",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_174",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n由於兩位選手的實力＿＿＿＿，所以比賽至今仍未分出勝負",
    "answer": "勢均力敵",
    "options": [
      "野心勃勃",
      "損人利己",
      "觸類旁通",
      "勢均力敵"
    ],
    "explanation": "勢均力敵：指雙方力量情勢相當，不分上下",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_175",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n拔河比賽就是要靠一股凝聚力，氣勢如虹，自然＿＿＿＿",
    "answer": "勢如破竹",
    "options": [
      "匹夫之勇",
      "勢如破竹",
      "拾人牙慧",
      "盲人摸象"
    ],
    "explanation": "勢如破竹：⑴比喻事情進展順利。 ⑵比喻戰事進展順利",
    "source": "10_國小國語3下成語加油站_第10課_(教).doc、國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_176",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n大賣場的商品＿＿＿＿，幾乎你想得到的東西都可以找到",
    "answer": "包羅萬象",
    "options": [
      "勢如破竹",
      "捲土重來",
      "餘音繞梁",
      "包羅萬象"
    ],
    "explanation": "包羅萬象：形容內容豐富，應有盡有",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_177",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n做事要謹慎小心，不是光憑＿＿＿＿就能解決問題",
    "answer": "匹夫之勇",
    "options": [
      "匹夫之勇",
      "一毛不拔",
      "漠不關心",
      "設身處地"
    ],
    "explanation": "匹夫之勇：形容人有勇無謀",
    "source": "10_國小國語3下成語加油站_第10課_(教).doc、國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_178",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n外面賣的便當，幾乎天天都是那幾樣菜，＿＿＿＿，吃都吃膩了",
    "answer": "千篇一律",
    "options": [
      "惱羞成怒",
      "千篇一律",
      "口誅筆伐",
      "傷天害理"
    ],
    "explanation": "千篇一律：形容事物的形式呆板而毫無變化",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_179",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n儘管公事＿＿＿＿，十分繁忙，但爸爸總是會撥出時間運動",
    "answer": "千頭萬緒",
    "options": [
      "觸類旁通",
      "造謠生事",
      "世態炎涼",
      "千頭萬緒"
    ],
    "explanation": "千頭萬緒：形容事情雜亂，頭緒紛繁，難以處理",
    "source": "12_國小國語3下成語加油站_第12課_(教).doc、國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_180",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n當弊案爆發後，社會大眾＿＿＿＿那些貪汙的官員",
    "answer": "口誅筆伐",
    "options": [
      "功敗垂成",
      "口誅筆伐",
      "畫蛇添足",
      "禮尚往來"
    ],
    "explanation": "口誅筆伐：用言語和文字來揭發、譴責他人的罪狀",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_181",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n指以前從來沒有發生過。 例句：這次活動的參與人數突破以往，可說是＿＿＿＿",
    "answer": "史無前例",
    "options": [
      "史無前例",
      "餘波盪漾",
      "難兄難弟",
      "理直氣壯"
    ],
    "explanation": "史無前例：指以前從來沒有發生過",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_182",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n本來說好要合作，他倆卻＿＿＿＿，看樣子這約定要破局了",
    "answer": "各懷鬼胎",
    "options": [
      "神機妙算",
      "包羅萬象",
      "各懷鬼胎",
      "搖旗吶喊"
    ],
    "explanation": "各懷鬼胎：比喻各自藏著不可告人的念頭、算計",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_183",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n他到處為非作歹，如今被警察逮捕入獄，可說是＿＿＿＿",
    "answer": "咎由自取",
    "options": [
      "包羅萬象",
      "付之一炬",
      "捕風捉影",
      "咎由自取"
    ],
    "explanation": "咎由自取：所有的責難、災禍都是自己造成的。含有自作自受之意",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_184",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n人若有緣，天涯咫尺；人若無緣，＿＿＿＿",
    "answer": "咫尺天涯",
    "options": [
      "咫尺天涯",
      "拾人牙慧",
      "滿載而歸",
      "野心勃勃"
    ],
    "explanation": "咫尺天涯：比喻相距雖近，卻如同相隔千里，不能相見",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_185",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n眼看這個規畫已久的假期，因連日下雨而泡湯，我們不禁＿＿＿＿",
    "answer": "唉聲嘆氣",
    "options": [
      "耳濡目染",
      "脣槍舌戰",
      "唉聲嘆氣",
      "天衣無縫"
    ],
    "explanation": "唉聲嘆氣：因煩悶、傷感等而嘆息",
    "source": "12_國小國語3下成語加油站_第12課_(教).doc"
  },
  {
    "id": "idiom_src_186",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n看到滿山遍野的油桐花盛開，美不勝收，讓人＿＿＿＿",
    "answer": "嘆為觀止",
    "options": [
      "斬釘截鐵",
      "引人入勝",
      "嘆為觀止",
      "山高路陡"
    ],
    "explanation": "嘆為觀止：讚美所看到的事物好到極點，無與倫比",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_187",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n如果你再＿＿＿＿，將會為此付出龐大的代價",
    "answer": "執迷不悟",
    "options": [
      "畫蛇添足",
      "斬釘截鐵",
      "執迷不悟",
      "木已成舟"
    ],
    "explanation": "執迷不悟：堅持錯誤的觀念而不醒悟",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_188",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n他丟了舊手機，保險公司就賠他一臺新手機，真可說是＿＿＿＿",
    "answer": "塞翁失馬",
    "options": [
      "飄忽不定",
      "兵荒馬亂",
      "塞翁失馬",
      "亭亭玉立"
    ],
    "explanation": "塞翁失馬：比喻暫時受到損失，卻因禍得福，終於得到好處",
    "source": "國小國語3上生字延伸成語.doc、國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_189",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n今天一早，我們全家便趁著晴朗的天氣出門踏青，直到＿＿＿＿才盡興而歸",
    "answer": "夜幕低垂",
    "options": [
      "改過自新",
      "前功盡棄",
      "夜幕低垂",
      "手足無措"
    ],
    "explanation": "夜幕低垂：天色昏暗，指天黑",
    "source": "11_國小國語3下成語加油站_第11課_(教).doc"
  },
  {
    "id": "idiom_src_190",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n陳叔叔是一個＿＿＿＿、深藏不露的人，我們應該多向他請教",
    "answer": "大智若愚",
    "options": [
      "大智若愚",
      "名列前茅",
      "數典忘祖",
      "千頭萬緒"
    ],
    "explanation": "大智若愚：指具有極高智慧的人，往往表面上看起來似乎愚笨",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_191",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n警方早已設下＿＿＿＿，防止嫌犯脫逃",
    "answer": "天羅地網",
    "options": [
      "天羅地網",
      "風塵僕僕",
      "以德報怨",
      "鵬程萬里"
    ],
    "explanation": "天羅地網：比喻極為嚴密的防範措施",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_192",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n他以為想出了一個＿＿＿＿的計畫要捉弄哥哥，沒想到還是被看穿了",
    "answer": "天衣無縫",
    "options": [
      "拖泥帶水",
      "心平氣和",
      "返老還童",
      "天衣無縫"
    ],
    "explanation": "天衣無縫：比喻詩文渾然天成，沒有斧鑿痕跡。也用來比喻事物或計畫周密完美，沒有 一絲破綻或缺點",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_193",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n他們倆不論外形、個性都十分相配，真是＿＿＿＿的一對",
    "answer": "天造地設",
    "options": [
      "狼心狗肺",
      "投鼠忌器",
      "天造地設",
      "天衣無縫"
    ],
    "explanation": "天造地設：天然所成就的。亦用來形容人或事物彼此配合得自然得體，渾然天成",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_194",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n恐怖的颱風夜終於過了，所有的人都鬆了一口氣，感到＿＿＿＿",
    "answer": "如釋重負",
    "options": [
      "如釋重負",
      "改過自新",
      "別開生面",
      "焦頭爛額"
    ],
    "explanation": "如釋重負：⑴像放下重擔那樣輕鬆。 ⑵比喻責任已盡，身心輕鬆愉快",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_195",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n你就算再能幹，若旁邊沒有人協助，也是＿＿＿＿",
    "answer": "孤掌難鳴",
    "options": [
      "胸有成竹",
      "心驚肉跳",
      "孤掌難鳴",
      "精益求精"
    ],
    "explanation": "孤掌難鳴：比喻人孤立無助，不能成事",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_196",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n她是＿＿＿＿的大明星，因此一舉一動都格外引人注目",
    "answer": "家喻戶曉",
    "options": [
      "畫蛇添足",
      "轟轟烈烈",
      "狐假虎威",
      "家喻戶曉"
    ],
    "explanation": "家喻戶曉：家家戶戶都知道，形容事情或名聲傳布極廣",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_197",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n那位男孩撞到我，他的父親趕緊對我說：「希望您＿＿＿＿，原諒我兒子的莽撞！」",
    "answer": "寬宏大量",
    "options": [
      "知難而退",
      "跌破眼鏡",
      "寬宏大量",
      "伯仲之間"
    ],
    "explanation": "寬宏大量：度量寬大。也作「寬洪大量」",
    "source": "10_國小國語3下成語加油站_第10課_(教).doc"
  },
  {
    "id": "idiom_src_198",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n聽了這離奇古怪的故事，他們倆都＿＿＿＿",
    "answer": "將信將疑",
    "options": [
      "居安思危",
      "隨機應變",
      "拾人牙慧",
      "將信將疑"
    ],
    "explanation": "將信將疑：形容對事情的真假，無法明確判斷",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_199",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n平常就要有＿＿＿＿的想法，遇到緊急情況時，才能沉著應付",
    "answer": "居安思危",
    "options": [
      "千篇一律",
      "轟轟烈烈",
      "居安思危",
      "立竿見影"
    ],
    "explanation": "居安思危：處於安樂的時候，要想到危險可能會隨時出現",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_200",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n攀登玉山，＿＿＿＿，要特別注意安全",
    "answer": "山高路陡",
    "options": [
      "千鈞一髮",
      "山高路陡",
      "捲土重來",
      "目光如豆"
    ],
    "explanation": "山高路陡：山很高，路很陡。形容路途艱險",
    "source": "12_國小國語3下成語加油站_第12課_(教).doc"
  },
  {
    "id": "idiom_src_201",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n他在隊伍裡＿＿＿＿，看不到來參加運動會的家人",
    "answer": "左顧右盼",
    "options": [
      "融會貫通",
      "難兄難弟",
      "左顧右盼",
      "匹夫之勇"
    ],
    "explanation": "左顧右盼：指左看右看，四處觀察；或顧慮太多，猶豫不決的樣子",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_202",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n他退休後回到故鄉，過著＿＿＿＿的簡單生活",
    "answer": "布衣蔬食",
    "options": [
      "餘波盪漾",
      "捕風捉影",
      "布衣蔬食",
      "孤掌難鳴"
    ],
    "explanation": "布衣蔬食：粗布衣、簡陋的食物。形容生活清淡簡樸",
    "source": "11_國小國語3下成語加油站_第11課_(教).doc"
  },
  {
    "id": "idiom_src_203",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n這篇小說的情節精采，很能＿＿＿＿",
    "answer": "引人入勝",
    "options": [
      "隨機應變",
      "脣槍舌戰",
      "引人入勝",
      "東窗事發"
    ],
    "explanation": "引人入勝：引領人進入美麗玄妙的境地",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_204",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n他生性迷糊，待人接物常常＿＿＿＿，鬧了不少笑話",
    "answer": "張冠李戴",
    "options": [
      "身敗名裂",
      "家喻戶曉",
      "揠苗助長",
      "張冠李戴"
    ],
    "explanation": "張冠李戴：比喻認錯對象或弄錯事情",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_205",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n他在眾人的追問下，一時之間＿＿＿＿，什麼話也說不出來",
    "answer": "張口結舌",
    "options": [
      "心平氣和",
      "風塵僕僕",
      "耳提面命",
      "張口結舌"
    ],
    "explanation": "張口結舌：形容恐懼慌張，或理屈說不出話的樣子",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_206",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n沒想到這麼難的動作，他也能＿＿＿＿的完成",
    "answer": "得心應手",
    "options": [
      "得心應手",
      "欲蓋彌彰",
      "身敗名裂",
      "鵬程萬里"
    ],
    "explanation": "得心應手：心裡怎麼想，手便能怎麼做。比喻技藝熟練，運用自如",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_207",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n在老師的＿＿＿＿之下，他的成績有了很大的進步",
    "answer": "循循善誘",
    "options": [
      "循循善誘",
      "難兄難弟",
      "拾人牙慧",
      "當仁不讓"
    ],
    "explanation": "循循善誘：形容善於循序漸進的誘導別人",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_208",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n你們應該＿＿＿＿的溝通，才能解決問題",
    "answer": "心平氣和",
    "options": [
      "咫尺天涯",
      "畫蛇添足",
      "心平氣和",
      "心悅誠服"
    ],
    "explanation": "心平氣和：心氣平和，不急不怒",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_209",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n經過一番辯論後，他終於＿＿＿＿的接受了我的建議",
    "answer": "心悅誠服",
    "options": [
      "心悅誠服",
      "班門弄斧",
      "洛陽紙貴",
      "風塵僕僕"
    ],
    "explanation": "心悅誠服：誠心誠意的歸服",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_210",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n一輛汽車差點撞上我們，嚇得大家＿＿＿＿",
    "answer": "心驚肉跳",
    "options": [
      "心驚肉跳",
      "名列前茅",
      "細嚼慢嚥",
      "珠圓玉潤"
    ],
    "explanation": "心驚肉跳：形容恐懼不安，心神不寧",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_211",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n現在經濟不景氣，你先＿＿＿＿，等有機會再換工作",
    "answer": "忍氣吞聲",
    "options": [
      "猶豫不決",
      "禮尚往來",
      "忍氣吞聲",
      "別開生面"
    ],
    "explanation": "忍氣吞聲：形容受了氣也強自忍耐，不敢作聲抗爭",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_212",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n他向來有情有義，絕非＿＿＿＿之人",
    "answer": "忘恩負義",
    "options": [
      "風塵僕僕",
      "忘恩負義",
      "洋洋灑灑",
      "不學無術"
    ],
    "explanation": "忘恩負義：受人恩惠不知報答，反而做出對不起恩人的事情",
    "source": "10_國小國語3下成語加油站_第10課_(教).doc"
  },
  {
    "id": "idiom_src_213",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n面對大家的不斷指責，他＿＿＿＿，發了脾氣",
    "answer": "惱羞成怒",
    "options": [
      "前功盡棄",
      "胸有成竹",
      "不學無術",
      "惱羞成怒"
    ],
    "explanation": "惱羞成怒：因羞愧到極點而惱恨發怒",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_214",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n你別老想著怎樣＿＿＿＿，卻不肯按部就班來努力",
    "answer": "投機取巧",
    "options": [
      "如釋重負",
      "搖旗吶喊",
      "投機取巧",
      "畫蛇添足"
    ],
    "explanation": "投機取巧：利用時機，獲取利益",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_215",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n我是＿＿＿＿，怕傷了彼此情誼，不然早就告發他的不法行為了",
    "answer": "投鼠忌器",
    "options": [
      "勢如破竹",
      "融會貫通",
      "投鼠忌器",
      "事與願違"
    ],
    "explanation": "投鼠忌器：想投擊老鼠，卻怕擊中老鼠身旁的器物而不敢下手。比喻想要除害，但因有 所顧忌而不敢下手",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_216",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n爸爸為了家人，每天＿＿＿＿的工作，好讓我們衣食無缺",
    "answer": "披星戴月",
    "options": [
      "忍氣吞聲",
      "披星戴月",
      "餘音繞梁",
      "餘波盪漾"
    ],
    "explanation": "披星戴月：形容早出晚歸、連夜趕路或工作備極勞累",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_217",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n對方需索無度，如果全都答應他，那我們豈不是在＿＿＿＿？",
    "answer": "抱薪救火",
    "options": [
      "滿載而歸",
      "抱薪救火",
      "居安思危",
      "防微杜漸"
    ],
    "explanation": "抱薪救火：比喻用錯方法，而致禍害加深",
    "source": "12_國小國語3下成語加油站_第12課_(教).doc、國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_218",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n這麼逼真的戲劇演出，真是令人＿＿＿＿",
    "answer": "拍案叫絕",
    "options": [
      "拍案叫絕",
      "期期艾艾",
      "一介不取",
      "聲淚俱下"
    ],
    "explanation": "拍案叫絕：拍桌驚嘆。形容非常的讚賞",
    "source": "國小國語3上生字延伸成語.doc、國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_219",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n媽媽做事乾脆，從不＿＿＿＿",
    "answer": "拖泥帶水",
    "options": [
      "功敗垂成",
      "耳濡目染",
      "拖泥帶水",
      "暮鼓晨鐘"
    ],
    "explanation": "拖泥帶水：⑴身上被泥、水沾汙，不利行動。 ⑵比喻言辭或行為不乾脆",
    "source": "10_國小國語3下成語加油站_第10課_(教).doc、國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_220",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n這篇文章東拼西湊，毫無見地，只是＿＿＿＿罷了！",
    "answer": "拾人牙慧",
    "options": [
      "拾人牙慧",
      "目光如豆",
      "明察秋毫",
      "脣槍舌戰"
    ],
    "explanation": "拾人牙慧：比喻蹈襲他人的言論或主張",
    "source": "國小國語3上生字延伸成語.doc、國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_221",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n社會上多的是顛倒黑白、＿＿＿＿的人，記者在報導時，千萬要注意",
    "answer": "指鹿為馬",
    "options": [
      "作威作福",
      "指鹿為馬",
      "漠不關心",
      "拾人牙慧"
    ],
    "explanation": "指鹿為馬：比喻人刻意混淆是非，顛倒黑白",
    "source": "11_國小國語3下成語加油站_第11課_(教).doc、國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_222",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n你說的事根本就是＿＿＿＿，毫無根據",
    "answer": "捕風捉影",
    "options": [
      "千鈞一髮",
      "天羅地網",
      "餘波盪漾",
      "捕風捉影"
    ],
    "explanation": "捕風捉影：比喻所做的事或所說的話毫無根據，憑空揣測",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_223",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n我們不能就這樣服輸，＿＿＿＿還有轉敗為勝的機會",
    "answer": "捲土重來",
    "options": [
      "捲土重來",
      "觸類旁通",
      "拾人牙慧",
      "班門弄斧"
    ],
    "explanation": "捲土重來：比喻失敗後，重新整頓，再次來過。亦用於比喻恢復舊有的局面、局勢",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_224",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n保存鄉土文化的風潮在政府的＿＿＿＿下，全面展開",
    "answer": "推波助瀾",
    "options": [
      "付之一炬",
      "推波助瀾",
      "抱薪救火",
      "隨機應變"
    ],
    "explanation": "推波助瀾：⑴比喻推動鼓勵。 ⑵比喻從旁鼓動，使事態擴大",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_225",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n你一下子給花施這麼多肥，小心＿＿＿＿，造成反效果",
    "answer": "揠苗助長",
    "options": [
      "揠苗助長",
      "居安思危",
      "逃之夭夭",
      "改過自新"
    ],
    "explanation": "揠苗助長：比喻使用不當的手段以求速成，結果不但無益，反而有害",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_226",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n奶奶告訴我做人處事的道理，也叮嚀我千萬不能做＿＿＿＿的事",
    "answer": "損人利己",
    "options": [
      "損人利己",
      "作威作福",
      "目光如豆",
      "朝三暮四"
    ],
    "explanation": "損人利己：使別人蒙受損失而讓自己獲利",
    "source": "11_國小國語3下成語加油站_第11課_(教).doc"
  },
  {
    "id": "idiom_src_227",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n這場政見會中有不少聽眾是候選人請來＿＿＿＿，增加氣勢的",
    "answer": "搖旗吶喊",
    "options": [
      "隨機應變",
      "名列前茅",
      "木已成舟",
      "搖旗吶喊"
    ],
    "explanation": "搖旗吶喊：比喻為他人虛張聲勢以助威",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_228",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n到底女主角有沒有逃跑？男主角又為何失蹤？劇情越來越＿＿＿＿，越來越精采",
    "answer": "撲朔迷離",
    "options": [
      "惱羞成怒",
      "撲朔迷離",
      "利令智昏",
      "盲人摸象"
    ],
    "explanation": "撲朔迷離：形容事物錯綜複雜，難以辨明真相",
    "source": "11_國小國語3下成語加油站_第11課_(教).doc、國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_229",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n雖然他犯了過錯，但只要他能＿＿＿＿，大家就原諒他",
    "answer": "改過自新",
    "options": [
      "傾盆大雨",
      "造謠生事",
      "改過自新",
      "明察秋毫"
    ],
    "explanation": "改過自新：改正過失，重新做人",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_230",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n你只知西洋的鋼琴，而不曉得國樂的胡琴，真有點＿＿＿＿了！",
    "answer": "數典忘祖",
    "options": [
      "出口成章",
      "亂七八糟",
      "數典忘祖",
      "枯木逢春"
    ],
    "explanation": "數典忘祖：比喻人忘本",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_231",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n他平常看起來＿＿＿＿，溫和有禮，想不到遇到強權惡霸時也會挺身而出，仗義 執言",
    "answer": "文質彬彬",
    "options": [
      "山高路陡",
      "星羅棋布",
      "畫蛇添足",
      "文質彬彬"
    ],
    "explanation": "文質彬彬：形容人舉止文雅，態度端莊。也用作形容文章內容與辭采並茂",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_232",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n看她說得＿＿＿＿的，不由得我不信",
    "answer": "斬釘截鐵",
    "options": [
      "天羅地網",
      "民不聊生",
      "立竿見影",
      "斬釘截鐵"
    ],
    "explanation": "斬釘截鐵：形容說話或做事堅決果斷",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_233",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n最優秀的偵探在於能＿＿＿＿，從最細微處找出破綻",
    "answer": "明察秋毫",
    "options": [
      "明察秋毫",
      "老嫗能解",
      "不學無術",
      "引人入勝"
    ],
    "explanation": "明察秋毫：比喻人能洞察一切，看到極細微的地方",
    "source": "12_國小國語3下成語加油站_第12課_(教).doc、國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_234",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n墾丁的海域中，到處都是＿＿＿＿的珊瑚礁，海底景致十分美麗",
    "answer": "星羅棋布",
    "options": [
      "得心應手",
      "鵬程萬里",
      "星羅棋布",
      "各懷鬼胎"
    ],
    "explanation": "星羅棋布：形容布列繁密，如星星、棋子般的廣泛分布",
    "source": "11_國小國語3下成語加油站_第11課_(教).doc、國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_235",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n爺爺的一番話語有如＿＿＿＿，使我大澈大悟",
    "answer": "暮鼓晨鐘",
    "options": [
      "居安思危",
      "暮鼓晨鐘",
      "逃之夭夭",
      "雕蟲小技"
    ],
    "explanation": "暮鼓晨鐘：佛寺中早晚報時的鐘鼓。後也用來指一日的時光，或比喻使人警醒的力量",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_236",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n一輛汽車急駛過來，把那攤販的貨物弄翻一地，老闆氣得＿＿＿＿",
    "answer": "暴跳如雷",
    "options": [
      "竭澤而漁",
      "暴跳如雷",
      "野心勃勃",
      "左顧右盼"
    ],
    "explanation": "暴跳如雷：暴躁得像打雷一樣猛烈。形容人急怒時跳腳吼叫的樣子。 12.風塵僕僕：形容奔波忙碌，旅途勞累。風塵：旅行時冒風受塵，因以之比喻旅行艱辛",
    "source": "10_國小國語3下成語加油站_第10課_(教).doc"
  },
  {
    "id": "idiom_src_237",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n他在古典樂的貢獻，世人＿＿＿＿，如今獲頒獎項真是實至名歸",
    "answer": "有目共睹",
    "options": [
      "斬釘截鐵",
      "有目共睹",
      "暴跳如雷",
      "忘恩負義"
    ],
    "explanation": "有目共睹：指事實極為明顯，眾所周知",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_238",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n事情既然＿＿＿＿，如今只好面對事實了",
    "answer": "木已成舟",
    "options": [
      "投鼠忌器",
      "千頭萬緒",
      "木已成舟",
      "返老還童"
    ],
    "explanation": "木已成舟：木材已經做成船隻。比喻已成事實，無法改變",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_239",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n歹徒見＿＿＿＿，只好供認一切做案的過程",
    "answer": "東窗事發",
    "options": [
      "當仁不讓",
      "捲土重來",
      "東窗事發",
      "暮鼓晨鐘"
    ],
    "explanation": "東窗事發：在東窗下密謀的事已經敗露了。比喻陰謀已被揭發",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_240",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n由於國人越來越重視戶外運動，原已衰落的自行車工業，有如＿＿＿＿，又漸漸 復甦了",
    "answer": "枯木逢春",
    "options": [
      "雕蟲小技",
      "枯木逢春",
      "跌破眼鏡",
      "守口如瓶"
    ],
    "explanation": "枯木逢春：比喻雖處於絕境卻重獲生機，或劣境忽然轉好",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_241",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n設計海報就是要講究另類，＿＿＿＿",
    "answer": "標新立異",
    "options": [
      "狐假虎威",
      "標新立異",
      "身敗名裂",
      "風塵僕僕"
    ],
    "explanation": "標新立異：形容創立新奇的名目或主張，以表示與眾不同",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_242",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n他忙於辯解的樣子，簡直就是＿＿＿＿，不打自招",
    "answer": "欲蓋彌彰",
    "options": [
      "欲蓋彌彰",
      "有目共睹",
      "滿載而歸",
      "功敗垂成"
    ],
    "explanation": "欲蓋彌彰：形容想要掩飾過失，反而使過失更加顯明",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_243",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n他仗著家境不錯，平日裡＿＿＿＿，大家見他避之猶恐不及",
    "answer": "欺善怕惡",
    "options": [
      "匹夫之勇",
      "欺善怕惡",
      "搖旗吶喊",
      "東窗事發"
    ],
    "explanation": "欺善怕惡：欺負善良弱小的人，卻害怕得罪強橫的惡人",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_244",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n此處長期乾旱導致＿＿＿＿，急需世界各國的幫助",
    "answer": "民不聊生",
    "options": [
      "班門弄斧",
      "為民喉舌",
      "設身處地",
      "民不聊生"
    ],
    "explanation": "民不聊生：形容百姓生活非常困苦",
    "source": "10_國小國語3下成語加油站_第10課_(教).doc、國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_245",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n他寫起文章來行雲流水，動輒＿＿＿＿好幾萬字",
    "answer": "洋洋灑灑",
    "options": [
      "老成持重",
      "孤掌難鳴",
      "洋洋灑灑",
      "天造地設"
    ],
    "explanation": "洋洋灑灑：形容言論或文章長篇大論",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_246",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n這系列的武俠小說印行後，一時＿＿＿＿，許多人爭相閱讀",
    "answer": "洛陽紙貴",
    "options": [
      "居安思危",
      "抱薪救火",
      "洛陽紙貴",
      "價值連城"
    ],
    "explanation": "洛陽紙貴：形容作品風行一時，流傳甚廣",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_247",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n這本小說內容曲折離奇，讓人讀後覺得＿＿＿＿",
    "answer": "津津有味",
    "options": [
      "盤根錯節",
      "漸入佳境",
      "相映成趣",
      "津津有味"
    ],
    "explanation": "津津有味：形容興趣濃厚的樣子",
    "source": "國小國語3下生字延伸成語.doc、國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_248",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n漁船出海捕魚時，總是希望＿＿＿＿",
    "answer": "滿載而歸",
    "options": [
      "滿載而歸",
      "暮鼓晨鐘",
      "推波助瀾",
      "風塵僕僕"
    ],
    "explanation": "滿載而歸：裝載得滿滿的回來。形容收穫豐富",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_249",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n對於別人的事，他總是一副＿＿＿＿的樣子",
    "answer": "漠不關心",
    "options": [
      "漠不關心",
      "忍氣吞聲",
      "數典忘祖",
      "寬宏大量"
    ],
    "explanation": "漠不關心：冷冷淡淡，不加關心",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_250",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n做事如果＿＿＿＿，就容易出錯",
    "answer": "漫不經心",
    "options": [
      "設身處地",
      "漫不經心",
      "滿載而歸",
      "引人入勝"
    ],
    "explanation": "漫不經心：隨隨便便，不加留意的意思",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_251",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n議員＿＿＿＿不遺餘力，替民眾爭取了不少權益",
    "answer": "為民喉舌",
    "options": [
      "循循善誘",
      "驚濤駭浪",
      "為民喉舌",
      "野心勃勃"
    ],
    "explanation": "為民喉舌：充當人民的喉嚨、舌頭。比喻代替人民說話，表達意見。多用於致贈民意 代表的題辭",
    "source": "12_國小國語3下成語加油站_第12課_(教).doc"
  },
  {
    "id": "idiom_src_252",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n他最近為了畫展的事，忙得＿＿＿＿，連吃飯的時間都沒有",
    "answer": "焦頭爛額",
    "options": [
      "知難而退",
      "焦頭爛額",
      "披星戴月",
      "東窗事發"
    ],
    "explanation": "焦頭爛額：比喻做事陷入十分狼狽窘迫的困境或犧牲慘重",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_253",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n你何必怕他？他只不過是在＿＿＿＿，虛張聲勢罷了！",
    "answer": "狐假虎威",
    "options": [
      "數典忘祖",
      "防微杜漸",
      "循循善誘",
      "狐假虎威"
    ],
    "explanation": "狐假虎威：比喻憑恃有權者的威勢恐嚇他人、作威作福",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_254",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n他以民意代表的身分掩飾自己的罪行，實在是＿＿＿＿",
    "answer": "狼心狗肺",
    "options": [
      "返老還童",
      "狼心狗肺",
      "張口結舌",
      "傾盆大雨"
    ],
    "explanation": "狼心狗肺：比喻人心腸狠毒，毫無良心",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_255",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n他對出國留學這件事情＿＿＿＿，遲遲無法決定",
    "answer": "猶豫不決",
    "options": [
      "猶豫不決",
      "初出茅廬",
      "餘音繞梁",
      "當仁不讓"
    ],
    "explanation": "猶豫不決：遲疑不定，無法拿定主意",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_256",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n她的嗓音＿＿＿＿、婉轉動聽",
    "answer": "珠圓玉潤",
    "options": [
      "惱羞成怒",
      "野心勃勃",
      "珠圓玉潤",
      "心驚肉跳"
    ],
    "explanation": "珠圓玉潤：像珠子一般渾圓，像玉石一般溫潤。比喻文詞、歌聲、字跡的流利、圓潤、 娟秀",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_257",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n面對旁人懷疑，他毫不退縮，＿＿＿＿的為自己辯解",
    "answer": "理直氣壯",
    "options": [
      "理直氣壯",
      "暴跳如雷",
      "前功盡棄",
      "餘音繞梁"
    ],
    "explanation": "理直氣壯：理由正大、充分，則氣盛勢壯而無所畏懼",
    "source": "11_國小國語3下成語加油站_第11課_(教).doc、國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_258",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n他的琴藝高明，我自嘆不如，＿＿＿＿",
    "answer": "甘拜下風",
    "options": [
      "漠不關心",
      "得心應手",
      "甘拜下風",
      "目光如豆"
    ],
    "explanation": "甘拜下風：表示自認不如，由衷佩服",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_259",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n既然大家推舉我當這場慈善晚會的主持人，那我就＿＿＿＿接受了",
    "answer": "當仁不讓",
    "options": [
      "數典忘祖",
      "千頭萬緒",
      "當仁不讓",
      "跌破眼鏡"
    ],
    "explanation": "當仁不讓：原指面臨仁義之事而不謙讓。亦指遇到應該做的事，主動承擔而不推辭",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_260",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n目前市政建設的＿＿＿＿，是改善日益嚴重的塞車問題",
    "answer": "當務之急",
    "options": [
      "名列前茅",
      "狐假虎威",
      "當務之急",
      "千鈞一髮"
    ],
    "explanation": "當務之急：當前迫切需要處理的事",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_261",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n只要你＿＿＿＿，一心向善，大家會重新接納你",
    "answer": "痛改前非",
    "options": [
      "痛改前非",
      "寬宏大量",
      "耳提面命",
      "東窗事發"
    ],
    "explanation": "痛改前非：徹底改正以往的過錯",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_262",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n我們不能＿＿＿＿，只看見眼前的利益，必須考慮深遠一些",
    "answer": "目光如豆",
    "options": [
      "居安思危",
      "虎視眈眈",
      "不學無術",
      "目光如豆"
    ],
    "explanation": "目光如豆：形容目光短淺，見識狹窄",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_263",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n對事情要做全面的了解再下判斷，才不會犯了＿＿＿＿的錯誤",
    "answer": "盲人摸象",
    "options": [
      "盲人摸象",
      "暴跳如雷",
      "千鈞一髮",
      "朝令夕改"
    ],
    "explanation": "盲人摸象：盲人以各自所摸大象身體的不同部位來形容象。比喻不能了解事情的全貌",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_264",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n想要成就事業，必須冒險犯難，不能有＿＿＿＿的想法",
    "answer": "知難而退",
    "options": [
      "知難而退",
      "口誅筆伐",
      "史無前例",
      "狐假虎威"
    ],
    "explanation": "知難而退：行事遇到困難就退縮不前或應伺機退卻",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_265",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n三國時代的諸葛亮＿＿＿＿，真是讓人佩服",
    "answer": "神機妙算",
    "options": [
      "逃之夭夭",
      "神機妙算",
      "民不聊生",
      "竭澤而漁"
    ],
    "explanation": "神機妙算：形容計策高明、預料準確",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_266",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n去年中秋表哥送我一盒月餅，＿＿＿＿，今年我回贈他幾顆柚子",
    "answer": "禮尚往來",
    "options": [
      "麻木不仁",
      "伯仲之間",
      "禮尚往來",
      "三餐不繼"
    ],
    "explanation": "禮尚往來：指別人以禮相待，也要以禮回報",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_267",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n新的交通法規才剛實施，就收到＿＿＿＿的成效",
    "answer": "立竿見影",
    "options": [
      "史無前例",
      "立竿見影",
      "禮尚往來",
      "耳提面命"
    ],
    "explanation": "立竿見影：比喻迅速收到成效",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_268",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n你一下子就把資源用盡，這種＿＿＿＿的做法是行不通的",
    "answer": "竭澤而漁",
    "options": [
      "竭澤而漁",
      "開誠布公",
      "身敗名裂",
      "居安思危"
    ],
    "explanation": "竭澤而漁：排盡澤水捕魚，比喻取盡所有，不留餘地。澤：水流匯聚的地方",
    "source": "10_國小國語3下成語加油站_第10課_(教).doc"
  },
  {
    "id": "idiom_src_269",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n身為一個專家，應該要＿＿＿＿，才不會被淘汰",
    "answer": "精益求精",
    "options": [
      "精益求精",
      "韋編三絕",
      "執迷不悟",
      "天衣無縫"
    ],
    "explanation": "精益求精：指好還要更好的意思",
    "source": "10_國小國語3下成語加油站_第10課_(教).doc、國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_270",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n吃飯時應該＿＿＿＿，才能夠幫助消化",
    "answer": "細嚼慢嚥",
    "options": [
      "餘音繞梁",
      "餘波盪漾",
      "將信將疑",
      "細嚼慢嚥"
    ],
    "explanation": "細嚼慢嚥：把食物嚼碎，再慢慢的吞下去",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_271",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n聽說他背信忘義，大家感到＿＿＿＿，非常生氣！",
    "answer": "義憤填膺",
    "options": [
      "千鈞一髮",
      "手足無措",
      "義憤填膺",
      "家喻戶曉"
    ],
    "explanation": "義憤填膺：指胸中充滿因正義而激起的憤怒",
    "source": "11_國小國語3下成語加油站_第11課_(教).doc、國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_272",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n這位作家的作品平易近人，＿＿＿＿，因此深受讀者歡迎",
    "answer": "老嫗能解",
    "options": [
      "枯木逢春",
      "心平氣和",
      "推波助瀾",
      "老嫗能解"
    ],
    "explanation": "老嫗能解：形容文字通俗明白，淺顯易懂",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_273",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n這對雙胞胎的個性截然不同，一個舉止輕浮，一個＿＿＿＿",
    "answer": "老成持重",
    "options": [
      "亂七八糟",
      "老成持重",
      "抱薪救火",
      "捲土重來"
    ],
    "explanation": "老成持重：形容人成熟老練，處事沉著穩重",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_274",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n畢業生雖然將離開學校，但是老師平日的＿＿＿＿，大家都銘記在心",
    "answer": "耳提面命",
    "options": [
      "世態炎涼",
      "驚濤駭浪",
      "耳提面命",
      "匹夫之勇"
    ],
    "explanation": "耳提面命：比喻懇切教誨",
    "source": "12_國小國語3下成語加油站_第12課_(教).doc、國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_275",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n因為母親是音樂家，他從小＿＿＿＿，所以音樂底子不錯",
    "answer": "耳濡目染",
    "options": [
      "天衣無縫",
      "三餐不繼",
      "匹夫之勇",
      "耳濡目染"
    ],
    "explanation": "耳濡目染：指經常聽到、看到而深受影響",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_276",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n這項研究計畫該怎麼進行，李教授似乎已經＿＿＿＿",
    "answer": "胸有成竹",
    "options": [
      "以德報怨",
      "逃之夭夭",
      "欲蓋彌彰",
      "胸有成竹"
    ],
    "explanation": "胸有成竹：比喻處事有定見",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_277",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n候選人在政見發表會上＿＿＿＿，說起話來毫不留情",
    "answer": "脣槍舌戰",
    "options": [
      "如釋重負",
      "左顧右盼",
      "脣槍舌戰",
      "三餐不繼"
    ],
    "explanation": "脣槍舌戰：形容辯論時言語鋒利，爭辯激烈",
    "source": "11_國小國語3下成語加油站_第11課_(教).doc"
  },
  {
    "id": "idiom_src_278",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n老師＿＿＿＿的勸導犯規的學生，希望能導正他們的行為",
    "answer": "苦口婆心",
    "options": [
      "損人利己",
      "苦口婆心",
      "心悅誠服",
      "數典忘祖"
    ],
    "explanation": "苦口婆心：以懇切真摯的態度，有耐心的勸告他人",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_279",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n如果你想要得到別人的信任，就該光明磊落，不要＿＿＿＿",
    "answer": "藏頭露尾",
    "options": [
      "藏頭露尾",
      "價值連城",
      "明察秋毫",
      "滿載而歸"
    ],
    "explanation": "藏頭露尾：形容言多隱諱，舉止畏縮的樣子",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_280",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n老鼠一現身，馬上被一旁＿＿＿＿的花貓抓住了",
    "answer": "虎視眈眈",
    "options": [
      "捲土重來",
      "虎視眈眈",
      "以德報怨",
      "名列前茅"
    ],
    "explanation": "虎視眈眈：比喻心懷不軌，伺機掠奪",
    "source": "11_國小國語3下成語加油站_第11課_(教).doc、國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_281",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n學習任何知識都得講究＿＿＿＿，不能單靠死記硬背",
    "answer": "融會貫通",
    "options": [
      "驚濤駭浪",
      "枯木逢春",
      "融會貫通",
      "史無前例"
    ],
    "explanation": "融會貫通：形容將各種知識或事物加以融合、貫穿，進而獲得全面通徹的領會",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_282",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n爸爸是個資深棒球迷，一看到我們在玩棒球，他＿＿＿＿，也想下場一展身手",
    "answer": "見獵心喜",
    "options": [
      "見獵心喜",
      "披星戴月",
      "難兄難弟",
      "傷天害理"
    ],
    "explanation": "見獵心喜：看到有人打獵，激起舊日的愛好而心喜。比喻舊習難忘，看到別人做自己 愛好的事，不禁心動而躍躍欲試",
    "source": "11_國小國語3下成語加油站_第11課_(教).doc"
  },
  {
    "id": "idiom_src_283",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n老師不厭其煩的講解例題，就是要我們能＿＿＿＿，舉一反三",
    "answer": "觸類旁通",
    "options": [
      "守口如瓶",
      "明察秋毫",
      "目光如豆",
      "觸類旁通"
    ],
    "explanation": "觸類旁通：根據對已知事物的認識與理解，進而通達對其他類似事物的認知",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_284",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n他凡事能＿＿＿＿為別人著想，所以很受歡迎",
    "answer": "設身處地",
    "options": [
      "知難而退",
      "兵不厭詐",
      "風塵僕僕",
      "設身處地"
    ],
    "explanation": "設身處地：假想自己處在他人地位或情況中",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_285",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n這次獎項的結果讓大家＿＿＿＿",
    "answer": "跌破眼鏡",
    "options": [
      "咎由自取",
      "跌破眼鏡",
      "一毛不拔",
      "拾人牙慧"
    ],
    "explanation": "跌破眼鏡：比喻出乎意料",
    "source": "12_國小國語3下成語加油站_第12課_(教).doc"
  },
  {
    "id": "idiom_src_286",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n他因為深陷毒品無法自拔，而落得＿＿＿＿、家破人亡的下場",
    "answer": "身敗名裂",
    "options": [
      "投機取巧",
      "藏頭露尾",
      "身敗名裂",
      "標新立異"
    ],
    "explanation": "身敗名裂：指人地位、名譽徹底失敗",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_287",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n他從小就喜歡科學，除了博覽群書，也立志將來要做一番＿＿＿＿的科技大事",
    "answer": "轟轟烈烈",
    "options": [
      "傷天害理",
      "轟轟烈烈",
      "光怪陸離",
      "惱羞成怒"
    ],
    "explanation": "轟轟烈烈：形容聲勢浩大，足以震撼人心",
    "source": "10_國小國語3下成語加油站_第10課_(教).doc"
  },
  {
    "id": "idiom_src_288",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n爺爺自從參加社區活動，精神有了寄託，整天活力充沛，好像＿＿＿＿一般",
    "answer": "返老還童",
    "options": [
      "功敗垂成",
      "左顧右盼",
      "世態炎涼",
      "返老還童"
    ],
    "explanation": "返老還童：由衰老恢復青春。形容年紀雖大，卻像年輕人一樣精力充沛",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_289",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n烏賊遇到敵人時就會噴出墨汁，然後趁著敵人看不清時＿＿＿＿",
    "answer": "逃之夭夭",
    "options": [
      "狐假虎威",
      "身敗名裂",
      "逃之夭夭",
      "觸類旁通"
    ],
    "explanation": "逃之夭夭：形容逃跑得無影無蹤",
    "source": "11_國小國語3下成語加油站_第11課_(教).doc、國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_290",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n沒有實質證據的事，千萬可別隨意亂說！這樣到處＿＿＿＿是不好的行為",
    "answer": "造謠生事",
    "options": [
      "為民喉舌",
      "不學無術",
      "痛改前非",
      "造謠生事"
    ],
    "explanation": "造謠生事：興造謠言，挑起事端",
    "source": "12_國小國語3下成語加油站_第12課_(教).doc"
  },
  {
    "id": "idiom_src_291",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n他是個＿＿＿＿的企業家，總是不斷追求更高的利潤",
    "answer": "野心勃勃",
    "options": [
      "天羅地網",
      "孤掌難鳴",
      "唉聲嘆氣",
      "野心勃勃"
    ],
    "explanation": "野心勃勃：形容狂妄非分之心或企圖",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_292",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n這家餐廳物美價廉，因此每到用餐時間總是＿＿＿＿",
    "answer": "門庭若市",
    "options": [
      "門庭若市",
      "返老還童",
      "設身處地",
      "指鹿為馬"
    ],
    "explanation": "門庭若市：比喻上門來的人很多",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_293",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n班長希望大家＿＿＿＿的談一談，以化解彼此的誤會",
    "answer": "開誠布公",
    "options": [
      "天衣無縫",
      "風馳電掣",
      "開誠布公",
      "立竿見影"
    ],
    "explanation": "開誠布公：比喻誠意待人，坦白無私",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_294",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n小疏忽往往釀成大禍，我們應該＿＿＿＿，避免日後衍生大問題",
    "answer": "防微杜漸",
    "options": [
      "耳濡目染",
      "左顧右盼",
      "防微杜漸",
      "心驚肉跳"
    ],
    "explanation": "防微杜漸：在錯誤或壞事萌芽的時候及時制止，杜絕它發展",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_295",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n他聰明機靈，不論遇到哪種狀況，都能＿＿＿＿，將事情做妥善的處理",
    "answer": "隨機應變",
    "options": [
      "隨機應變",
      "目光如豆",
      "耳濡目染",
      "竭澤而漁"
    ],
    "explanation": "隨機應變：隨著時機和情況的變化而靈活應付",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_296",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n我畫的山水畫只是＿＿＿＿，難登大雅之堂",
    "answer": "雕蟲小技",
    "options": [
      "左顧右盼",
      "匹夫之勇",
      "天造地設",
      "雕蟲小技"
    ],
    "explanation": "雕蟲小技：比喻微不足道的技能",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_297",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n當年我們在戰場上是同生共死的＿＿＿＿",
    "answer": "難兄難弟",
    "options": [
      "勢如破竹",
      "一板一眼",
      "張口結舌",
      "難兄難弟"
    ],
    "explanation": "難兄難弟：形容同處困境、共同患難的朋友",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_298",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n哥哥讀書有＿＿＿＿的精神，所以他對每一本書的內容都瞭若指掌",
    "answer": "韋編三絕",
    "options": [
      "見獵心喜",
      "班門弄斧",
      "韋編三絕",
      "居安思危"
    ],
    "explanation": "韋編三絕：本指孔子勤讀，致使編竹簡的皮繩多次斷裂。後用以比喻讀書勤奮努力。 韋：熟皮。舊時用以串聯竹簡成冊",
    "source": "12_國小國語3下成語加油站_第12課_(教).doc"
  },
  {
    "id": "idiom_src_299",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n他的實力本就不差，我只不過＿＿＿＿拉他一把，讓他有表現的機會",
    "answer": "順水推舟",
    "options": [
      "方興未艾",
      "有備無患",
      "順水推舟",
      "不言而喻"
    ],
    "explanation": "順水推舟：順著水流推船。比喻順應情勢行事",
    "source": "國小國語3下生字延伸成語.doc、國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_300",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n他＿＿＿＿的趕回家鄉，就是為了和家人團聚一起過年",
    "answer": "風塵僕僕",
    "options": [
      "心平氣和",
      "推波助瀾",
      "老成持重",
      "風塵僕僕"
    ],
    "explanation": "答案是「風塵僕僕」。",
    "source": "10_國小國語3下成語加油站_第10課_(教).doc"
  },
  {
    "id": "idiom_src_301",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n一接到通報，消防車立即＿＿＿＿的趕到失火地點，才順利阻絕火勢蔓延",
    "answer": "風馳電掣",
    "options": [
      "見獵心喜",
      "理直氣壯",
      "寬宏大量",
      "風馳電掣"
    ],
    "explanation": "風馳電掣：指像風那樣奔跑，像電光那樣急閃而過。形容速度極快",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_302",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n此次革命雖未成功，但＿＿＿＿，影響了日後的獨立運動",
    "answer": "餘波盪漾",
    "options": [
      "拾人牙慧",
      "餘波盪漾",
      "畫蛇添足",
      "當務之急"
    ],
    "explanation": "餘波盪漾：事件結束後所留下的影響，暫時難以平息",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_303",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n她高歌一曲，令人聽了真是有＿＿＿＿，韻味無窮的感覺呀！",
    "answer": "餘音繞梁",
    "options": [
      "拖泥帶水",
      "餘音繞梁",
      "推波助瀾",
      "孤掌難鳴"
    ],
    "explanation": "餘音繞梁：餘音環繞屋梁旋轉不去。形容音樂美妙感人，餘味不絕",
    "source": "國小國語3上生字延伸成語.doc"
  },
  {
    "id": "idiom_src_304",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n颱風來襲，海邊盡是＿＿＿＿，遊客千萬不可靠近！",
    "answer": "驚濤駭浪",
    "options": [
      "千方百計",
      "細嚼慢嚥",
      "驚濤駭浪",
      "千篇一律"
    ],
    "explanation": "驚濤駭浪：猛烈的風浪。比喻險惡的環境",
    "source": "10_國小國語3下成語加油站_第10課_(教).doc"
  },
  {
    "id": "idiom_src_305",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n校長在畢業典禮上，祝福畢業生＿＿＿＿，一帆風順",
    "answer": "鵬程萬里",
    "options": [
      "身敗名裂",
      "損人利己",
      "鵬程萬里",
      "寬宏大量"
    ],
    "explanation": "鵬程萬里：比喻前程遠大，不可限量",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_306",
    "bank": "idiom",
    "difficulty": "normal",
    "question": "下列句子空格可以填入哪個成語？\n災區死傷那麼嚴重，還是有些人＿＿＿＿，不聞不問",
    "answer": "麻木不仁",
    "options": [
      "立竿見影",
      "朝三暮四",
      "拖泥帶水",
      "麻木不仁"
    ],
    "explanation": "麻木不仁：比喻對事物漠不關心或反應遲鈍",
    "source": "國小國語3下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_307",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n他是個＿＿＿＿的清官，深受民眾的愛戴",
    "answer": "一介不取",
    "options": [
      "聲淚俱下",
      "一介不取",
      "直搗黃龍",
      "易如反掌"
    ],
    "explanation": "一介不取：一枝小草也不隨便拿別人的。形容人的操守非常清廉",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_308",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n自從這家百貨公司結束營業後，周邊店家的生意就＿＿＿＿",
    "answer": "一落千丈",
    "options": [
      "扶老攜幼",
      "雀屏中選",
      "繁文縟節",
      "一落千丈"
    ],
    "explanation": "一落千丈：本指琴聲由高驟然下降到很低。後用來比喻成績、地位、景況、情緒或聲 望等急遽下降",
    "source": "10_國小國語4下成語加油站_第10課_(教).doc、國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_309",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n他向來＿＿＿＿，每天穿著短褲和拖鞋四處行走",
    "answer": "不修邊幅",
    "options": [
      "無妄之災",
      "處心積慮",
      "不著邊際",
      "不修邊幅"
    ],
    "explanation": "不修邊幅：形容不講究衣飾儀容，或形容不拘形式小節",
    "source": "12_國小國語4下成語加油站_第12課_(教).doc、國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_310",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n他痛改前非，我們也該＿＿＿＿，給予改過自新的機會",
    "answer": "不念舊惡",
    "options": [
      "浮光掠影",
      "雀屏中選",
      "不念舊惡",
      "塞翁失馬"
    ],
    "explanation": "不念舊惡：不記以往的過錯嫌隙",
    "source": "11_國小國語4下成語加油站_第11課_(教).doc"
  },
  {
    "id": "idiom_src_311",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n為了盡快了解這部小說的情節，我只能先＿＿＿＿的翻閱一遍，至於其中的寫作技 巧，只待以後再分析",
    "answer": "不求甚解",
    "options": [
      "聖手仁心",
      "聲淚俱下",
      "不求甚解",
      "狹路相逢"
    ],
    "explanation": "不求甚解：原指讀書著重理解義理，而不過度鑽研字句上的解釋。後亦用來形容學習或 工作的態度不認真，只求略懂皮毛而不深入理解",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_312",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n主管聽完大家的報告後，沒有提出任何建議，只是＿＿＿＿的說要再想想",
    "answer": "不置可否",
    "options": [
      "相映成趣",
      "骨瘦如柴",
      "不置可否",
      "冤家路窄"
    ],
    "explanation": "不置可否：形容不表示任何意見",
    "source": "11_國小國語4下成語加油站_第11課_(教).doc、國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_313",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n本來想請他幫個忙，他卻＿＿＿＿的講些無關緊要的事情",
    "answer": "不著邊際",
    "options": [
      "參差不齊",
      "舉棋不定",
      "不著邊際",
      "不置可否"
    ],
    "explanation": "不著邊際：四邊都靠不了岸。比喻言論空泛或想法不切實際",
    "source": "10_國小國語4下成語加油站_第10課_(教).doc、國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_314",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n他終於考上大學，高興的心情自是＿＿＿＿",
    "answer": "不言而喻",
    "options": [
      "參差不齊",
      "故步自封",
      "不言而喻",
      "變本加厲"
    ],
    "explanation": "不言而喻：事態明顯，不待說明即可曉悟",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_315",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n我們的里長待人和善，平時對於公益活動也都熱心參與，＿＿＿＿",
    "answer": "不遺餘力",
    "options": [
      "不遺餘力",
      "物換星移",
      "塞翁失馬",
      "繁文縟節"
    ],
    "explanation": "不遺餘力：不保留一點力氣。形容竭盡全力，毫無保留",
    "source": "10_國小國語4下成語加油站_第10課_(教).doc、國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_316",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n他們的才華和年齡相當，未來的成就可能是＿＿＿＿，難分軒輊",
    "answer": "並駕齊驅",
    "options": [
      "參差不齊",
      "錦衣玉食",
      "趾高氣揚",
      "並駕齊驅"
    ],
    "explanation": "並駕齊驅：多匹馬並排駕車，齊頭奔馳。比喻彼此實力相當，不分軒輊",
    "source": "12_國小國語4下成語加油站_第12課_(教).doc、國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_317",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n今年夏天＿＿＿＿，水庫蓄水不足，各地紛紛傳出旱情",
    "answer": "久旱不雨",
    "options": [
      "夜以繼日",
      "不修邊幅",
      "久旱不雨",
      "自慚形穢"
    ],
    "explanation": "久旱不雨：長久乾旱不下雨",
    "source": "10_國小國語4下成語加油站_第10課_(教).doc"
  },
  {
    "id": "idiom_src_318",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n幾年不見，朋友的孩子們都已出落得＿＿＿＿、英俊挺拔",
    "answer": "亭亭玉立",
    "options": [
      "亭亭玉立",
      "緣木求魚",
      "巧取豪奪",
      "絕無僅有"
    ],
    "explanation": "亭亭玉立：形容女子身材修長美麗。亭亭，高聳直立的樣子。後亦用﹁亭亭玉立﹂形容 花木、山峰等的挺拔姿勢",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_319",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n姐姐看著烹飪節目，＿＿＿＿的做了一道菜",
    "answer": "依樣畫葫蘆",
    "options": [
      "依樣畫葫蘆",
      "漸入佳境",
      "筋疲力竭",
      "扶老攜幼"
    ],
    "explanation": "依樣畫葫蘆：依照葫蘆的樣子畫葫蘆。比喻一味模仿，毫無創見",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_320",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n受了父母的影響，他也有＿＿＿＿、惜物愛物的習慣",
    "answer": "克勤克儉",
    "options": [
      "塞翁失馬",
      "川流不息",
      "克勤克儉",
      "臥薪嘗膽"
    ],
    "explanation": "克勤克儉：既能勤勞又能節儉",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_321",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n在世界大戰期間，到處＿＿＿＿，人們生活一片淒苦",
    "answer": "兵荒馬亂",
    "options": [
      "兵荒馬亂",
      "雪上加霜",
      "依樣畫葫蘆",
      "冤家路窄"
    ],
    "explanation": "兵荒馬亂：形容戰爭所造成的混亂景象",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_322",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n這兩支宿敵的隊伍第一場比賽就碰頭了，真是＿＿＿＿",
    "answer": "冤家路窄",
    "options": [
      "順水推舟",
      "隔靴搔癢",
      "冤家路窄",
      "不修邊幅"
    ],
    "explanation": "冤家路窄：仇人或不願見到的人，偏在狹小的路上相遇，無法躲避",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_323",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n這條新修的馬路才剛鋪好又挖，挖了又鋪，實在是＿＿＿＿",
    "answer": "勞民傷財",
    "options": [
      "勞民傷財",
      "無微不至",
      "漸入佳境",
      "相映成趣"
    ],
    "explanation": "勞民傷財：勞役人民，損傷錢財。比喻行為措施不當或徒然浪費氣力而無成效",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_324",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n這些看來＿＿＿＿的竹竿，事實上是經過刻意排列，別具風味",
    "answer": "參差不齊",
    "options": [
      "參差不齊",
      "牛刀小試",
      "浮光掠影",
      "淋漓盡致"
    ],
    "explanation": "參差不齊：雜亂不整齊",
    "source": "12_國小國語4下成語加油站_第12課_(教).doc、國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_325",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n才一年不見，他的眼界變得如此寬闊，已非當年的＿＿＿＿可比",
    "answer": "吳下阿蒙",
    "options": [
      "物換星移",
      "久旱不雨",
      "吳下阿蒙",
      "暢所欲言"
    ],
    "explanation": "吳下阿蒙：比喻學識淺陋的人",
    "source": "11_國小國語4下成語加油站_第11課_(教).doc"
  },
  {
    "id": "idiom_src_326",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n看事情要宏觀，＿＿＿＿是不行的",
    "answer": "坐井觀天",
    "options": [
      "緣木求魚",
      "不置可否",
      "坐井觀天",
      "蛛絲馬跡"
    ],
    "explanation": "坐井觀天：比喻人眼界狹小，見識不廣",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_327",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n為了加速工程的進度，工人們＿＿＿＿的趕工",
    "answer": "夜以繼日",
    "options": [
      "處心積慮",
      "暢所欲言",
      "夜以繼日",
      "一介不取"
    ],
    "explanation": "夜以繼日：以夜晚接續白天，晝夜都不歇息。形容工作勤奮，日夜不停",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_328",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n關於電腦，我比較＿＿＿＿，要向你多多請教",
    "answer": "孤陋寡聞",
    "options": [
      "一介不取",
      "物換星移",
      "隔靴搔癢",
      "孤陋寡聞"
    ],
    "explanation": "孤陋寡聞：形容學識淺薄，見聞不廣",
    "source": "11_國小國語4下成語加油站_第11課_(教).doc、國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_329",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n雖然＿＿＿＿，但他仍然奮發上進，真是令人敬佩",
    "answer": "家徒四壁",
    "options": [
      "不遺餘力",
      "故步自封",
      "家徒四壁",
      "川流不息"
    ],
    "explanation": "家徒四壁：形容家境極為貧困",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_330",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n弟弟走到哪兒，哥哥都是＿＿＿＿的跟著，表現出兄長的友愛之情",
    "answer": "寸步不離",
    "options": [
      "物換星移",
      "蒸蒸日上",
      "寸步不離",
      "孤陋寡聞"
    ],
    "explanation": "寸步不離：緊緊跟隨著，一小步也不離開。比喻關係密切，總是在一起",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_331",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n對方突然發動笑臉攻勢，＿＿＿＿，我們得小心提防",
    "answer": "居心叵測",
    "options": [
      "居心叵測",
      "相映成趣",
      "飄忽不定",
      "期期艾艾"
    ],
    "explanation": "居心叵測：比喻心存險詐，難以預測",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_332",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n夜市裡人來人往，＿＿＿＿",
    "answer": "川流不息",
    "options": [
      "川流不息",
      "飄忽不定",
      "淋漓盡致",
      "坐井觀天"
    ],
    "explanation": "川流不息：像河川般奔流不停，比喻時光無止盡的流逝。後用以形容連綿不絕或往返不 斷",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_333",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n嫌犯為了謀取錢財，各種＿＿＿＿的手段都使盡了，真是惡劣",
    "answer": "巧取豪奪",
    "options": [
      "物換星移",
      "風調雨順",
      "巧取豪奪",
      "居心叵測"
    ],
    "explanation": "巧取豪奪：用巧詐的手段騙取，或倚仗權勢強行奪取。形容不擇手段的取得權利、財 物",
    "source": "10_國小國語4下成語加油站_第10課_(教).doc"
  },
  {
    "id": "idiom_src_334",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n因為他平時不斷努力，才能走上＿＿＿＿，一帆風順",
    "answer": "康莊大道",
    "options": [
      "孤陋寡聞",
      "康莊大道",
      "橘化為枳",
      "冤家路窄"
    ],
    "explanation": "康莊大道：四通八達的大路。後比喻光明的前途",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_335",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n他那＿＿＿＿的身體，經過一年多的鍛鍊終於變得強壯",
    "answer": "弱不禁風",
    "options": [
      "臥薪嘗膽",
      "克勤克儉",
      "弱不禁風",
      "飄忽不定"
    ],
    "explanation": "弱不禁風：形容人身體十分瘦弱",
    "source": "10_國小國語4下成語加油站_第10課_(教).doc"
  },
  {
    "id": "idiom_src_336",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n機智問答時，只見他對所有問題都能應答如流，真是＿＿＿＿",
    "answer": "才高八斗",
    "options": [
      "故步自封",
      "才高八斗",
      "無妄之災",
      "直搗黃龍"
    ],
    "explanation": "才高八斗：比喻才學極高",
    "source": "12_國小國語4下成語加油站_第12課_(教).doc、國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_337",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n每到陽明山花季，總有大批遊客＿＿＿＿，上山賞花",
    "answer": "扶老攜幼",
    "options": [
      "蛛絲馬跡",
      "扶老攜幼",
      "雀屏中選",
      "眾望所歸"
    ],
    "explanation": "扶老攜幼：指男女老幼全體出動的情況",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_338",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n像你這樣因循舊規，豈不是＿＿＿＿？",
    "answer": "故步自封",
    "options": [
      "暢所欲言",
      "故步自封",
      "久旱不雨",
      "潔身自好"
    ],
    "explanation": "故步自封：指安於現狀，不求進取",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_339",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n近年來觀光休閒產業＿＿＿＿，帶動了臺灣各地旅遊熱潮",
    "answer": "方興未艾",
    "options": [
      "方興未艾",
      "冤家路窄",
      "牛刀小試",
      "參差不齊"
    ],
    "explanation": "方興未艾：正在發展，沒有停止，比喻事態正在蓬勃發展",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_340",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n這件事對我來說＿＿＿＿，交給我辦吧！",
    "answer": "易如反掌",
    "options": [
      "康莊大道",
      "不修邊幅",
      "易如反掌",
      "不念舊惡"
    ],
    "explanation": "易如反掌：比喻事情非常容易做到",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_341",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n召開本次會議，就是希望大家都能＿＿＿＿，充分溝通意見",
    "answer": "暢所欲言",
    "options": [
      "塞翁失馬",
      "不置可否",
      "暢所欲言",
      "津津有味"
    ],
    "explanation": "暢所欲言：痛痛快快、毫無顧忌的把想說的話全部講出來",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_342",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n平時就應注意防颱工作，畢竟＿＿＿＿",
    "answer": "有備無患",
    "options": [
      "有備無患",
      "弱不禁風",
      "自掏腰包",
      "飄忽不定"
    ],
    "explanation": "有備無患：事先有準備，即可免除後患",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_343",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n他只要一著急，說話就＿＿＿＿的，半天也說不出一整句話來",
    "answer": "期期艾艾",
    "options": [
      "一落千丈",
      "期期艾艾",
      "川流不息",
      "勞民傷財"
    ],
    "explanation": "期期艾艾：形容口吃結巴的樣子",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_344",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n聽到他那段＿＿＿＿的遭遇，每個人都為之難過",
    "answer": "椎心泣血",
    "options": [
      "順水推舟",
      "舉棋不定",
      "椎心泣血",
      "寸步不離"
    ],
    "explanation": "椎心泣血：自捶胸脯，眼中哭出血來。形容哀痛到了極點",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_345",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n學習國外的做法，也要注意本身環境的條件，否則＿＿＿＿，再好的措施都可能會失敗",
    "answer": "橘化為枳",
    "options": [
      "骨瘦如柴",
      "淋漓盡致",
      "橘化為枳",
      "參差不齊"
    ],
    "explanation": "橘化為枳：比喻同樣的東西會因環境的不同而引起變化",
    "source": "12_國小國語4下成語加油站_第12課_(教).doc"
  },
  {
    "id": "idiom_src_346",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n原以為這場仗如＿＿＿＿，沒想到打了三個月還分不出勝負來",
    "answer": "泰山壓卵",
    "options": [
      "趾高氣揚",
      "泰山壓卵",
      "居心叵測",
      "一介不取"
    ],
    "explanation": "泰山壓卵：用巨大的泰山來壓渺小脆弱的雞蛋。比喻強弱懸殊，穩操勝算",
    "source": "12_國小國語4下成語加油站_第12課_(教).doc、國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_347",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n榮華富貴如＿＿＿＿，轉眼便成雲煙",
    "answer": "浮光掠影",
    "options": [
      "橘化為枳",
      "有備無患",
      "津津有味",
      "浮光掠影"
    ],
    "explanation": "浮光掠影：⑴比喻見識粗淺，不夠仔細深入。 ⑵比喻世事稍縱即逝，不可捉摸",
    "source": "11_國小國語4下成語加油站_第11課_(教).doc"
  },
  {
    "id": "idiom_src_348",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n這部小說把政治上的險惡，描寫得＿＿＿＿",
    "answer": "淋漓盡致",
    "options": [
      "塞翁失馬",
      "骨瘦如柴",
      "淋漓盡致",
      "不修邊幅"
    ],
    "explanation": "淋漓盡致：形容文章或語言表達得暢達詳盡",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_349",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n像他這種難得的人才，如果不錄用他，豈非＿＿＿＿？",
    "answer": "滄海遺珠",
    "options": [
      "津津有味",
      "滄海遺珠",
      "錦衣玉食",
      "不修邊幅"
    ],
    "explanation": "滄海遺珠：被採珠人遺漏在大海的珍珠。比喻被埋沒的人才或被人忽視的珍貴事物",
    "source": "10_國小國語4下成語加油站_第10課_(教).doc、國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_350",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n哥哥最喜歡蘇東坡的詩詞，每一首作品幾乎都背得＿＿＿＿",
    "answer": "滾瓜爛熟",
    "options": [
      "滾瓜爛熟",
      "川流不息",
      "才高八斗",
      "自掏腰包"
    ],
    "explanation": "滾瓜爛熟：滾落在地上的瓜，熟透了。比喻極為純熟流利",
    "source": "10_國小國語4下成語加油站_第10課_(教).doc"
  },
  {
    "id": "idiom_src_351",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n經過一番苦練，他的繪畫技巧已由生澀而＿＿＿＿，越來越有大師的架勢",
    "answer": "漸入佳境",
    "options": [
      "一介不取",
      "期期艾艾",
      "漸入佳境",
      "飄忽不定"
    ],
    "explanation": "漸入佳境：比喻境況逐漸進展至美好的境界或興味漸濃",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_352",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n他向來＿＿＿＿，絕不會做出任何傷天害理的事",
    "answer": "潔身自好",
    "options": [
      "塞翁失馬",
      "淋漓盡致",
      "潔身自好",
      "絕無僅有"
    ],
    "explanation": "潔身自好：保持自身純潔清白，而不與人同流合汙",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_353",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n酒醉駕車很危險，不僅危害自己，也可能使他人平白遭受＿＿＿＿",
    "answer": "無妄之災",
    "options": [
      "不置可否",
      "久旱不雨",
      "無妄之災",
      "飄忽不定"
    ],
    "explanation": "無妄之災：比喻意外的災禍",
    "source": "10_國小國語4下成語加油站_第10課_(教).doc、國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_354",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n擅長歌唱的他，這次的比賽對他而言只是＿＿＿＿",
    "answer": "牛刀小試",
    "options": [
      "蒸蒸日上",
      "坐井觀天",
      "牛刀小試",
      "弱不禁風"
    ],
    "explanation": "牛刀小試：比喻有大才能，在小事上施展",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_355",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n由於那場大地震，使得這個村落＿＿＿＿，人事全非",
    "answer": "物換星移",
    "options": [
      "物換星移",
      "順水推舟",
      "盤根錯節",
      "潔身自好"
    ],
    "explanation": "物換星移：比喻景物的變遷，世事的更替",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_356",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n他們雖然學術立場不同，今日＿＿＿＿，也只作君子之爭",
    "answer": "狹路相逢",
    "options": [
      "狹路相逢",
      "依樣畫葫蘆",
      "物換星移",
      "處心積慮"
    ],
    "explanation": "狹路相逢：在狹窄的路上相遇，不易避讓。後比喻仇人相遇",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_357",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n這件案子的案情＿＿＿＿，十分複雜，我們一定要查明來龍去脈",
    "answer": "盤根錯節",
    "options": [
      "盤根錯節",
      "康莊大道",
      "居心叵測",
      "臥薪嘗膽"
    ],
    "explanation": "盤根錯節：樹木的根幹枝節盤屈交錯。比喻事情複雜，不易理解",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_358",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n守門員嚴格防守，對手想＿＿＿＿射門得分，可不是件容易的事",
    "answer": "直搗黃龍",
    "options": [
      "集思廣益",
      "淋漓盡致",
      "川流不息",
      "直搗黃龍"
    ],
    "explanation": "直搗黃龍：指直接進擊敵方都城、巢穴",
    "source": "11_國小國語4下成語加油站_第11課_(教).doc、國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_359",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n花園裡的山丘和池塘，小徑旁的綠樹和紅花都各有姿態，＿＿＿＿",
    "answer": "相映成趣",
    "options": [
      "聖手仁心",
      "淋漓盡致",
      "緣木求魚",
      "相映成趣"
    ],
    "explanation": "相映成趣：互相襯托而更添意趣",
    "source": "11_國小國語4下成語加油站_第11課_(教).doc"
  },
  {
    "id": "idiom_src_360",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n美美平日表現優異，班上推舉她競選模範生，真可說是＿＿＿＿",
    "answer": "眾望所歸",
    "options": [
      "聖手仁心",
      "坐井觀天",
      "吳下阿蒙",
      "眾望所歸"
    ],
    "explanation": "眾望所歸：深得大家擁護、愛戴",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_361",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n為了籌備這次書店開幕式的園遊會，他和朋友忙得昏天暗地，＿＿＿＿",
    "answer": "筋疲力竭",
    "options": [
      "自慚形穢",
      "眾望所歸",
      "順水推舟",
      "筋疲力竭"
    ],
    "explanation": "筋疲力竭：形容非常疲倦",
    "source": "12_國小國語4下成語加油站_第12課_(教).doc"
  },
  {
    "id": "idiom_src_362",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n兩位世界級聲樂家同臺獻唱，在國內恐是＿＿＿＿的紀錄了",
    "answer": "絕無僅有",
    "options": [
      "參差不齊",
      "易如反掌",
      "雪上加霜",
      "絕無僅有"
    ],
    "explanation": "絕無僅有：只此一個，絕無其他。形容極為稀少",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_363",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n不多讀書寫作，要想成為作家，無異於＿＿＿＿",
    "answer": "緣木求魚",
    "options": [
      "克勤克儉",
      "浮光掠影",
      "緣木求魚",
      "眾望所歸"
    ],
    "explanation": "緣木求魚：爬到樹上去抓魚。比喻用錯方法，徒勞無功",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_364",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n雖然許多＿＿＿＿可以省略，但注重禮儀還是必要的",
    "answer": "繁文縟節",
    "options": [
      "狹路相逢",
      "揚眉吐氣",
      "繁文縟節",
      "巧取豪奪"
    ],
    "explanation": "繁文縟節：繁瑣的儀式或禮節",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_365",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n這位名醫＿＿＿＿，除了醫好病人，也會安撫家屬的心情",
    "answer": "聖手仁心",
    "options": [
      "聖手仁心",
      "蛛絲馬跡",
      "物換星移",
      "不置可否"
    ],
    "explanation": "聖手仁心：稱譽醫師的醫術高明，醫德仁厚",
    "source": "12_國小國語4下成語加油站_第12課_(教).doc"
  },
  {
    "id": "idiom_src_366",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n他一見到親人，就立刻＿＿＿＿的訴說自己所受的滿腹委屈",
    "answer": "聲淚俱下",
    "options": [
      "骨瘦如柴",
      "聲淚俱下",
      "不著邊際",
      "才高八斗"
    ],
    "explanation": "聲淚俱下：邊說邊哭。形容極度悲傷、激動",
    "source": "11_國小國語4下成語加油站_第11課_(教).doc、國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_367",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n句踐在回國後，＿＿＿＿，忍辱負重，終於復興了越國",
    "answer": "臥薪嘗膽",
    "options": [
      "臥薪嘗膽",
      "一落千丈",
      "並駕齊驅",
      "一介不取"
    ],
    "explanation": "臥薪嘗膽：越王句踐躺臥在柴薪上，不時舔嘗苦膽，以警惕自己不忘所受的屈辱。比喻 刻苦自勵，發奮圖強",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_368",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n你應該對自己更有信心，和他相比，根本不需＿＿＿＿",
    "answer": "自慚形穢",
    "options": [
      "心照不宣",
      "自慚形穢",
      "椎心泣血",
      "聖手仁心"
    ],
    "explanation": "自慚形穢：因容貌儀態不如別人而感覺羞愧。泛指與人相比自愧不如",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_369",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n哥哥不小心打翻牛奶，弄髒圖書館的書籍，因此只得＿＿＿＿買一本來賠償",
    "answer": "自掏腰包",
    "options": [
      "自掏腰包",
      "盤根錯節",
      "潔身自好",
      "亭亭玉立"
    ],
    "explanation": "自掏腰包：由自己付錢",
    "source": "12_國小國語4下成語加油站_第12課_(教).doc"
  },
  {
    "id": "idiom_src_370",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n他的個性優柔寡斷，遇事＿＿＿＿，因此常坐失良機",
    "answer": "舉棋不定",
    "options": [
      "巧取豪奪",
      "揚眉吐氣",
      "飄忽不定",
      "舉棋不定"
    ],
    "explanation": "舉棋不定：本指拿著棋子，不能決定下一步怎麼走。比喻做事猶豫不決，拿不定主意",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_371",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n這家餐廳親切的服務態度，吸引不少顧客光臨，生意＿＿＿＿",
    "answer": "蒸蒸日上",
    "options": [
      "風調雨順",
      "盤根錯節",
      "蒸蒸日上",
      "緣木求魚"
    ],
    "explanation": "蒸蒸日上：一天一天興盛發展，形容事物不斷的進步發展",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_372",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n敵人正＿＿＿＿的想分化我們，我們千萬別中計",
    "answer": "處心積慮",
    "options": [
      "勞民傷財",
      "孤陋寡聞",
      "易如反掌",
      "處心積慮"
    ],
    "explanation": "處心積慮：千方百慮，蓄意已久",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_373",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n警方仔細的搜尋現場，希望能找到有助破案的＿＿＿＿",
    "answer": "蛛絲馬跡",
    "options": [
      "不念舊惡",
      "蛛絲馬跡",
      "眾望所歸",
      "順水推舟"
    ],
    "explanation": "蛛絲馬跡：蛛網的細絲與馬蹄的痕跡。比喻可供尋查推求的細微線索",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_374",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n你要是不即時提出抗議，那家商店製造噪音的情況只會＿＿＿＿",
    "answer": "變本加厲",
    "options": [
      "故步自封",
      "變本加厲",
      "順水推舟",
      "繁文縟節"
    ],
    "explanation": "變本加厲：在原本的基礎上加以改變發展。指事情改變原有的狀況而顯得更加嚴重",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_375",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n突來的打擊讓他灰頭土臉，與平日＿＿＿＿的樣子判若兩人",
    "answer": "趾高氣揚",
    "options": [
      "物換星移",
      "才高八斗",
      "吳下阿蒙",
      "趾高氣揚"
    ],
    "explanation": "趾高氣揚：形容人驕傲自滿、得意忘形",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_376",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n不管是粗茶淡飯，還是＿＿＿＿，最重要的是活得心安理得",
    "answer": "錦衣玉食",
    "options": [
      "錦衣玉食",
      "有備無患",
      "骨瘦如柴",
      "不言而喻"
    ],
    "explanation": "錦衣玉食：華麗的衣服，精緻的美食。後用來形容豪華奢侈的生活",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_377",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n他提出的意見雖多，卻都是＿＿＿＿，沒有切中要點",
    "answer": "隔靴搔癢",
    "options": [
      "淋漓盡致",
      "雀屏中選",
      "心照不宣",
      "隔靴搔癢"
    ],
    "explanation": "隔靴搔癢：隔著馬靴搔癢處。比喻不切實際，未能掌握要點",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_378",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n為了科展，同學們不眠不休，全力以赴，參加的作品終於＿＿＿＿，得到第一名",
    "answer": "雀屏中選",
    "options": [
      "不遺餘力",
      "雀屏中選",
      "集思廣益",
      "相映成趣"
    ],
    "explanation": "雀屏中選：原指被選為女婿。後泛指被選中",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_379",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n在大家的＿＿＿＿下，這項複雜的計畫終於有了初步的藍圖",
    "answer": "集思廣益",
    "options": [
      "趾高氣揚",
      "不遺餘力",
      "康莊大道",
      "集思廣益"
    ],
    "explanation": "集思廣益：集結眾人的智慧，廣泛吸收有益的意見",
    "source": "10_國小國語4下成語加油站_第10課_(教).doc、國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_380",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n老爺爺不小心扭到腳，現在又被玻璃割破了手，真是＿＿＿＿",
    "answer": "雪上加霜",
    "options": [
      "舉棋不定",
      "雪上加霜",
      "繁文縟節",
      "吳下阿蒙"
    ],
    "explanation": "雪上加霜：雪害又加上霜害，是害上加害。比喻苦上加苦",
    "source": "11_國小國語4下成語加油站_第11課_(教).doc、國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_381",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n由於＿＿＿＿、五穀豐收，人們都過著安樂、富足的日子",
    "answer": "風調雨順",
    "options": [
      "眾望所歸",
      "緣木求魚",
      "弱不禁風",
      "風調雨順"
    ],
    "explanation": "風調雨順：風雨及時而適量。形容豐年安樂，天下太平的景象",
    "source": "國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_382",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n他的行蹤＿＿＿＿，很難掌握",
    "answer": "飄忽不定",
    "options": [
      "物換星移",
      "一落千丈",
      "飄忽不定",
      "方興未艾"
    ],
    "explanation": "飄忽不定：形容出沒不定",
    "source": "10_國小國語4下成語加油站_第10課_(教).doc"
  },
  {
    "id": "idiom_src_383",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n＿＿＿＿的他，怎麼提得動這桶水？",
    "answer": "骨瘦如柴",
    "options": [
      "骨瘦如柴",
      "孤陋寡聞",
      "無妄之災",
      "參差不齊"
    ],
    "explanation": "骨瘦如柴：人身骨架瘦得露出來，根根像木材一樣。形容非常消瘦的樣子",
    "source": "11_國小國語4下成語加油站_第11課_(教).doc、國小國語4下生字延伸成語.doc"
  },
  {
    "id": "idiom_src_384",
    "bank": "idiom",
    "difficulty": "hard",
    "question": "下列句子空格可以填入哪個成語？\n他過去是商場上的風雲人物，如今只在一家小公司當職員，真是＿＿＿＿哪！",
    "answer": "龍困淺灘",
    "options": [
      "浮光掠影",
      "龍困淺灘",
      "不修邊幅",
      "家徒四壁"
    ],
    "explanation": "龍困淺灘：比喻有才華的人處在困厄的環境，才能無法施展",
    "source": "10_國小國語4下成語加油站_第10課_(教).doc"
  }
];


  function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function getQuestionBanks() {
    const punctuationQuestions = window.PUNCTUATION_QUESTIONS || window.PUNCTUATION_BANK || [];
    return {
      punctuation: punctuationQuestions,
      rhetoric: RHETORIC_QUESTIONS,
      idiom: IDIOM_QUESTIONS,
      mixed: [...RHETORIC_QUESTIONS, ...IDIOM_QUESTIONS]
    };
  }

  function getQuestionsByBank(bank, difficulty = 'mixed') {
    const banks = getQuestionBanks();
    const all = banks[bank] || [];
    if (difficulty === 'mixed' || !difficulty) return [...all];
    return all.filter(q => q.difficulty === difficulty || q.level === difficulty);
  }

  function buildRoundQuestions(bank, difficulty, count) {
    const pool = getQuestionsByBank(bank, difficulty);
    return shuffleArray(pool).slice(0, count || pool.length);
  }

  function getAnswerOptions(question, selectedBank) {
    if (selectedBank === 'punctuation') return PUNCTUATION_OPTIONS;
    return question.options || [];
  }

  function judgeAnswer(question, playerAnswer) {
    const isCorrect = playerAnswer === question.answer;
    return {
      correct: isCorrect,
      correctAnswer: question.answer,
      explanation: question.explanation || ''
    };
  }

  function renderAnswerButtons(question, bank, container, onSelect) {
    if (!container) return;
    container.innerHTML = '';
    const options = getAnswerOptions(question, bank);
    options.forEach(option => {
      const btn = document.createElement('button');
      btn.className = 'answer-btn dynamic-answer-btn';
      btn.type = 'button';
      btn.textContent = option;
      btn.dataset.answer = option;
      btn.onclick = () => onSelect(option);
      container.appendChild(btn);
    });
  }

  function getResultMessage(result) {
    if (result.correct) return '答對了！發動攻擊！';
    return '答錯了，請再試一次！';
  }

  function installBankSelector(rootSelector, onChange) {
    const root = typeof rootSelector === 'string' ? document.querySelector(rootSelector) : rootSelector;
    if (!root) return null;
    root.innerHTML = `
      <label class="bank-select-label">題庫：</label>
      <select id="bankSelect" class="bank-select">
        <option value="punctuation">標點競技場</option>
        <option value="rhetoric">修辭魔法塔</option>
        <option value="idiom">成語博物館</option>
        <option value="mixed">語文混戰場</option>
      </select>
    `;
    const select = root.querySelector('#bankSelect');
    select.addEventListener('change', () => {
      if (typeof onChange === 'function') onChange(select.value);
    });
    return select;
  }

  function installBankButtons(rootSelector, onStart) {
    const root = typeof rootSelector === 'string' ? document.querySelector(rootSelector) : rootSelector;
    if (!root) return;
    const buttons = [
      ['punctuation', '標點競技場'],
      ['rhetoric', '修辭魔法塔'],
      ['idiom', '成語博物館'],
      ['mixed', '語文混戰場']
    ];
    const wrap = document.createElement('div');
    wrap.className = 'bank-mode-buttons';
    buttons.forEach(([bank, label]) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'mode-btn bank-mode-btn';
      btn.textContent = label;
      btn.onclick = () => {
        if (typeof onStart === 'function') onStart(bank);
      };
      wrap.appendChild(btn);
    });
    root.appendChild(wrap);
  }

  window.V1902_BANK_ADDON = {
    GAME_BANKS,
    PUNCTUATION_OPTIONS,
    RHETORIC_FIXED_OPTIONS,
    RHETORIC_QUESTIONS,
    IDIOM_QUESTIONS,
    getQuestionBanks,
    getQuestionsByBank,
    buildRoundQuestions,
    getAnswerOptions,
    judgeAnswer,
    renderAnswerButtons,
    getResultMessage,
    installBankSelector,
    installBankButtons,
    shuffleArray
  };
})();
