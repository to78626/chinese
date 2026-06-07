/* V19.0.2 修辭＋成語題庫擴充包
   用法：把本檔貼到原本 HTML 的 <script> 區塊中，建議放在原本題庫宣告之後、startGame() 之前。
   目的：新增 rhetoric / idiom 兩種題庫，並提供動態選項、抽題、判定函式。
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
    { id: "rhe_001", bank: "rhetoric", difficulty: "easy", question: "雪花片片飄落，猶如柳絮隨風飛舞。這句使用了哪一種修辭？", answer: "譬喻", options: ["譬喻", "擬人", "排比", "設問"], explanation: "用「猶如」把雪花比作柳絮，所以是譬喻。" },
    { id: "rhe_002", bank: "rhetoric", difficulty: "easy", question: "夜空是一匹深黑色的綢緞，上頭鑲著一顆顆閃亮寶石。這句使用了哪一種修辭？", answer: "譬喻", options: ["譬喻", "摹寫", "類疊", "感嘆"], explanation: "把夜空比作綢緞，把星星比作寶石，是譬喻。" },
    { id: "rhe_003", bank: "rhetoric", difficulty: "easy", question: "花園裡翩翩飛舞的蝴蝶，像詩篇裡繽紛絢爛的章句。這句使用了哪一種修辭？", answer: "譬喻", options: ["譬喻", "擬人", "誇飾", "設問"], explanation: "用「像」把蝴蝶比作詩句，是譬喻。" },
    { id: "rhe_004", bank: "rhetoric", difficulty: "easy", question: "微風透過風鈴，捎來遠方的訊息。這句使用了哪一種修辭？", answer: "擬人", options: ["擬人", "排比", "引用", "譬喻"], explanation: "把微風寫成會捎來訊息的人，所以是擬人。" },
    { id: "rhe_005", bank: "rhetoric", difficulty: "easy", question: "被烈日晒到頻頻喘息的金色沙灘，渴望著海浪帶來的一絲涼意。這句使用了哪一種修辭？", answer: "擬人", options: ["摹寫", "擬人", "譬喻", "感嘆"], explanation: "把沙灘寫成會喘息、會渴望的人，所以是擬人。" },
    { id: "rhe_006", bank: "rhetoric", difficulty: "easy", question: "星星在天空裡閃哪閃，好奇的瞧著一戶人家。這句使用了哪一種修辭？", answer: "擬人", options: ["擬人", "誇飾", "排比", "引用"], explanation: "把星星寫成會好奇、會看的人，是擬人。" },
    { id: "rhe_007", bank: "rhetoric", difficulty: "easy", question: "魚腥味撲鼻而來。這句主要使用哪一種修辭？", answer: "摹寫", options: ["摹寫", "譬喻", "類疊", "感嘆"], explanation: "描寫聞到的氣味，屬於摹寫。" },
    { id: "rhe_008", bank: "rhetoric", difficulty: "easy", question: "「轟！」一聲巨雷搭著午後大雨響起。這句主要使用了哪一種修辭？", answer: "摹寫", options: ["設問", "摹寫", "排比", "譬喻"], explanation: "描寫聲音，屬於摹寫。" },
    { id: "rhe_009", bank: "rhetoric", difficulty: "easy", question: "咖啡入口後先苦後甘。這句主要使用了哪一種修辭？", answer: "摹寫", options: ["誇飾", "引用", "摹寫", "類疊"], explanation: "描寫味道，屬於摹寫。" },
    { id: "rhe_010", bank: "rhetoric", difficulty: "easy", question: "又溼又冷的夜裡，小狗窩在街角發抖。這句使用了哪一種修辭？", answer: "類疊", options: ["類疊", "排比", "設問", "感嘆"], explanation: "「又……又……」有重複結構，屬於類疊。" },
    { id: "rhe_011", bank: "rhetoric", difficulty: "easy", question: "太好了！太好了！這句使用了哪一種修辭？", answer: "類疊", options: ["排比", "感嘆", "類疊", "譬喻"], explanation: "同一句重複出現，是類疊。" },
    { id: "rhe_012", bank: "rhetoric", difficulty: "normal", question: "有的像蝴蝶，有的像車輪，有的像貓耳朵。這句使用了哪一種修辭？", answer: "排比", options: ["排比", "類疊", "誇飾", "感嘆"], explanation: "三個結構相近的句子連續出現，是排比。" },
    { id: "rhe_013", bank: "rhetoric", difficulty: "normal", question: "是歡樂的，是夢幻的，是神祕的。這句使用了哪一種修辭？", answer: "排比", options: ["引用", "排比", "摹寫", "設問"], explanation: "相同句型連續三次，是排比。" },
    { id: "rhe_014", bank: "rhetoric", difficulty: "normal", question: "拍了拍枕頭，捏了捏抱枕，蹭了蹭棉被。這句使用了哪一種修辭？", answer: "排比", options: ["類疊", "排比", "感嘆", "譬喻"], explanation: "三個結構整齊的動作短句並列，是排比。" },
    { id: "rhe_015", bank: "rhetoric", difficulty: "normal", question: "還有什麼比這更快樂呢？這句使用了哪一種修辭？", answer: "設問", options: ["設問", "感嘆", "引用", "譬喻"], explanation: "用問句引起思考並強調語意，是設問。" },
    { id: "rhe_016", bank: "rhetoric", difficulty: "normal", question: "人生什麼事最苦呢？我說人生最苦的事，莫若身上背著一種未了的責任。這句使用了哪一種修辭？", answer: "設問", options: ["類疊", "設問", "排比", "誇飾"], explanation: "先問再答，是設問中的自問自答。" },
    { id: "rhe_017", bank: "rhetoric", difficulty: "normal", question: "難道我們可以浪費時間嗎？這句使用了哪一種修辭？", answer: "設問", options: ["引用", "譬喻", "設問", "擬人"], explanation: "用反問句加強語氣，屬於設問。" },
    { id: "rhe_018", bank: "rhetoric", difficulty: "easy", question: "啊！沒想到平常吃的義大利麵條，竟然有各式各樣的造型。這句使用了哪一種修辭？", answer: "感嘆", options: ["感嘆", "類疊", "排比", "譬喻"], explanation: "用「啊！」表現驚訝與讚嘆，所以是感嘆。" },
    { id: "rhe_019", bank: "rhetoric", difficulty: "easy", question: "唉！做完這雙鞋，賣出的錢只夠買食物。這句使用了哪一種修辭？", answer: "感嘆", options: ["設問", "誇飾", "感嘆", "摹寫"], explanation: "用「唉！」表現無奈，所以是感嘆。" },
    { id: "rhe_020", bank: "rhetoric", difficulty: "hard", question: "王維曾說：「行到水窮處，坐看雲起時。」這句使用了哪一種修辭？", answer: "引用", options: ["引用", "排比", "設問", "譬喻"], explanation: "直接引用名人的話，是引用。" },
    { id: "rhe_021", bank: "rhetoric", difficulty: "hard", question: "文章中使用「人飢己飢，人溺己溺」來加強說服力。這句使用了哪一種修辭？", answer: "引用", options: ["感嘆", "摹寫", "引用", "擬人"], explanation: "借用成句或名言來表達意思，是引用。" },
    { id: "rhe_022", bank: "rhetoric", difficulty: "normal", question: "速度快到迅雷不及掩耳。這句使用了哪一種修辭？", answer: "誇飾", options: ["誇飾", "摹寫", "排比", "類疊"], explanation: "誇大速度之快，是誇飾。" },
    { id: "rhe_023", bank: "rhetoric", difficulty: "normal", question: "安靜得連一根針掉下來都聽得見。這句使用了哪一種修辭？", answer: "誇飾", options: ["譬喻", "設問", "引用", "誇飾"], explanation: "誇大安靜的程度，是誇飾。" },
    { id: "rhe_024", bank: "rhetoric", difficulty: "normal", question: "他可以清楚看見一百公尺外草地上的螞蟻。這句使用了哪一種修辭？", answer: "誇飾", options: ["排比", "誇飾", "擬人", "感嘆"], explanation: "誇大視力非常好，是誇飾。" },
    { id: "rhe_025", bank: "rhetoric", difficulty: "hard", question: "「不要問你不想知道答案的問題。」這句話被拿來放進文章中加強論點，使用了哪一種修辭？", answer: "引用", options: ["類疊", "設問", "引用", "感嘆"], explanation: "把別人的話放進文章中，是引用。" },
    { id: "rhe_026", bank: "rhetoric", difficulty: "hard", question: "下列哪一句使用了擬人？", answer: "金色沙灘渴望海浪帶來涼意。", options: ["金色沙灘渴望海浪帶來涼意。", "雪花像柳絮般飛舞。", "速度快到迅雷不及掩耳。", "還有什麼比這更快樂呢？"], explanation: "把沙灘寫成會渴望的人，是擬人。" },
    { id: "rhe_027", bank: "rhetoric", difficulty: "hard", question: "下列哪一句使用了排比？", answer: "拍了拍枕頭，捏了捏抱枕，蹭了蹭棉被。", options: ["拍了拍枕頭，捏了捏抱枕，蹭了蹭棉被。", "唉！今天真倒楣。", "夜空是一匹深黑色的綢緞。", "魚腥味撲鼻而來。"], explanation: "三個相同結構的短句並列，是排比。" },
    { id: "rhe_028", bank: "rhetoric", difficulty: "hard", question: "下列哪一句使用了類疊？", answer: "太好了！太好了！", options: ["太好了！太好了！", "老師曾說要珍惜時間。", "啊！這景色真美。", "夜空像綢緞一樣。"], explanation: "同一句重複出現，是類疊。" },
    { id: "rhe_029", bank: "rhetoric", difficulty: "hard", question: "下列哪一句使用了設問？", answer: "難道我們可以放棄嗎？", options: ["難道我們可以放棄嗎？", "風鈴捎來遠方的訊息。", "魚腥味撲鼻而來。", "啊！實在太神奇了。"], explanation: "用反問句加強語氣，是設問。" },
    { id: "rhe_030", bank: "rhetoric", difficulty: "hard", question: "下列哪一句使用了誇飾？", answer: "海棠背著三十公斤裝備跑上十天十夜也不累。", options: ["海棠背著三十公斤裝備跑上十天十夜也不累。", "花園裡蝴蝶像詩句般繽紛。", "啊！我成功了！", "有的像蝴蝶，有的像車輪。"], explanation: "把體力誇大到不合理的程度，是誇飾。" }
  ];

  const IDIOM_QUESTIONS = [
    { id: "idiom_001", bank: "idiom", difficulty: "easy", question: "大家專心恭敬地聽教授演講，可以用哪個成語？", answer: "洗耳恭聽", options: ["洗耳恭聽", "心煩意亂", "束手無策", "耳目一新"], explanation: "洗耳恭聽表示專心恭敬地聆聽。" },
    { id: "idiom_002", bank: "idiom", difficulty: "easy", question: "這座遊樂園整修後，讓人感到十分新奇清新，可以用哪個成語？", answer: "耳目一新", options: ["耳目一新", "回心轉意", "躍躍欲試", "借題發揮"], explanation: "耳目一新表示所見所聞都有新鮮感。" },
    { id: "idiom_003", bank: "idiom", difficulty: "easy", question: "他本來不肯答應，聽完解釋後改變主意，可以用哪個成語？", answer: "回心轉意", options: ["回心轉意", "弄巧成拙", "對牛彈琴", "要言不煩"], explanation: "回心轉意就是改變原本的心意。" },
    { id: "idiom_004", bank: "idiom", difficulty: "easy", question: "比賽即將開始，每個球員都很想試試身手，可以用哪個成語？", answer: "躍躍欲試", options: ["躍躍欲試", "心煩意亂", "耳熟能詳", "良藥苦口"], explanation: "躍躍欲試表示急切想要試一試。" },
    { id: "idiom_005", bank: "idiom", difficulty: "easy", question: "說話簡潔有力、不囉嗦，可以用哪個成語？", answer: "要言不煩", options: ["要言不煩", "雞犬不寧", "以身作則", "束手無策"], explanation: "要言不煩表示說話精要，不囉嗦。" },
    { id: "idiom_006", bank: "idiom", difficulty: "easy", question: "車聲吵得他心情煩躁、思緒混亂，可以用哪個成語？", answer: "心煩意亂", options: ["心煩意亂", "盡善盡美", "力爭上游", "無與倫比"], explanation: "心煩意亂指心情煩躁，思緒凌亂。" },
    { id: "idiom_007", bank: "idiom", difficulty: "easy", question: "消防員冒著危險衝進火場救人，可以用哪個成語？", answer: "赴湯蹈火", options: ["赴湯蹈火", "拋磚引玉", "捨本逐末", "適可而止"], explanation: "赴湯蹈火形容奮不顧身，不避艱險。" },
    { id: "idiom_008", bank: "idiom", difficulty: "easy", question: "老闆親自示範，成為大家的榜樣，可以用哪個成語？", answer: "以身作則", options: ["以身作則", "孤注一擲", "力爭上游", "天翻地覆"], explanation: "以身作則是用自己的行為作為榜樣。" },
    { id: "idiom_009", bank: "idiom", difficulty: "easy", question: "大家面對突發事件，一點辦法也沒有，可以用哪個成語？", answer: "束手無策", options: ["束手無策", "耳提面命", "無與倫比", "一視同仁"], explanation: "束手無策表示毫無解決辦法。" },
    { id: "idiom_010", bank: "idiom", difficulty: "normal", question: "只重視包裝，不重視內容，可以用哪個成語？", answer: "捨本逐末", options: ["捨本逐末", "良藥苦口", "打退堂鼓", "五體投地"], explanation: "捨本逐末指不求根本，只重視細枝末節。" },
    { id: "idiom_011", bank: "idiom", difficulty: "easy", question: "即使失敗了，仍然努力追求進步，可以用哪個成語？", answer: "力爭上游", options: ["力爭上游", "耳熟能詳", "借花獻佛", "顧此失彼"], explanation: "力爭上游表示努力奮鬥，追求上進。" },
    { id: "idiom_012", bank: "idiom", difficulty: "normal", question: "先提出自己的想法，希望引出別人更好的意見，可以用哪個成語？", answer: "拋磚引玉", options: ["拋磚引玉", "無可奉告", "打退堂鼓", "一視同仁"], explanation: "拋磚引玉是先說出粗淺想法，來引出別人的高見。" },
    { id: "idiom_013", bank: "idiom", difficulty: "easy", question: "沒有任何東西比得上，可以用哪個成語？", answer: "無與倫比", options: ["無與倫比", "耳提面命", "孤注一擲", "因材施教"], explanation: "無與倫比表示沒有能夠相比的。" },
    { id: "idiom_014", bank: "idiom", difficulty: "easy", question: "非常佩服對方，可以用哪個成語？", answer: "五體投地", options: ["五體投地", "束手無策", "借題發揮", "耳目一新"], explanation: "五體投地用來形容非常欽佩。" },
    { id: "idiom_015", bank: "idiom", difficulty: "easy", question: "這首詩大家都聽得很熟，甚至能夠說出來，可以用哪個成語？", answer: "耳熟能詳", options: ["耳熟能詳", "耳提面命", "翻山越嶺", "心血來潮"], explanation: "耳熟能詳表示聽得熟悉且能詳盡說出。" },
    { id: "idiom_016", bank: "idiom", difficulty: "normal", question: "本來想賣弄小聰明，結果反而做了蠢事，可以用哪個成語？", answer: "弄巧成拙", options: ["弄巧成拙", "對牛彈琴", "磨杵成針", "不同凡響"], explanation: "弄巧成拙是指想耍巧，結果反而壞事。" },
    { id: "idiom_017", bank: "idiom", difficulty: "normal", question: "對不懂道理的人講道理，可以用哪個成語？", answer: "對牛彈琴", options: ["對牛彈琴", "借題發揮", "心心相印", "否極泰來"], explanation: "對牛彈琴表示講話做事不看對象。" },
    { id: "idiom_018", bank: "idiom", difficulty: "normal", question: "假藉別的題目，表達自己真正想說的意思，可以用哪個成語？", answer: "借題發揮", options: ["借題發揮", "聚沙成塔", "適可而止", "妄自菲薄"], explanation: "借題發揮是藉某件事來表達真正想法。" },
    { id: "idiom_019", bank: "idiom", difficulty: "normal", question: "教練懇切地教導球員，可以用哪個成語？", answer: "耳提面命", options: ["耳提面命", "額手稱慶", "虎頭蛇尾", "因材施教"], explanation: "耳提面命表示懇切教誨。" },
    { id: "idiom_020", bank: "idiom", difficulty: "normal", question: "意志堅定，不怕困難，可以用哪個成語？", answer: "精衛填海", options: ["精衛填海", "盡善盡美", "油腔滑調", "沾沾自喜"], explanation: "精衛填海用來比喻意志堅定，不懼艱苦。" },
    { id: "idiom_021", bank: "idiom", difficulty: "normal", question: "雖然話不好聽，但對人有幫助，可以用哪個成語？", answer: "良藥苦口", options: ["良藥苦口", "富麗堂皇", "耳目一新", "適可而止"], explanation: "良藥苦口比喻勸告雖不中聽，卻有益。" },
    { id: "idiom_022", bank: "idiom", difficulty: "normal", question: "發生很大的改變，原本的樣子幾乎全變了，可以用哪個成語？", answer: "天翻地覆", options: ["天翻地覆", "談何容易", "束手無策", "同舟共濟"], explanation: "天翻地覆形容巨大變化。" },
    { id: "idiom_023", bank: "idiom", difficulty: "easy", question: "中途退縮放棄，可以用哪個成語？", answer: "打退堂鼓", options: ["打退堂鼓", "義不容辭", "耳熟能詳", "風雨無阻"], explanation: "打退堂鼓就是半途退縮。" },
    { id: "idiom_024", bank: "idiom", difficulty: "normal", question: "不分親疏厚薄，公平對待每一個人，可以用哪個成語？", answer: "一視同仁", options: ["一視同仁", "自慚形穢", "嘰哩咕嚕", "各憑本事"], explanation: "一視同仁表示平等對待。" },
    { id: "idiom_025", bank: "idiom", difficulty: "normal", question: "在危急時，把全部力量投入最後一次冒險，可以用哪個成語？", answer: "孤注一擲", options: ["孤注一擲", "摩拳擦掌", "適可而止", "聚沙成塔"], explanation: "孤注一擲表示最後一搏。" },
    { id: "idiom_026", bank: "idiom", difficulty: "easy", question: "吵得大家連雞和狗都不得安寧，可以用哪個成語？", answer: "雞犬不寧", options: ["雞犬不寧", "左右為難", "自得其樂", "五彩繽紛"], explanation: "雞犬不寧形容遭受嚴重騷擾，不得安寧。" },
    { id: "idiom_027", bank: "idiom", difficulty: "easy", question: "事情做到剛剛好就停止，不要過頭，可以用哪個成語？", answer: "適可而止", options: ["適可而止", "全神貫注", "喧賓奪主", "書香社會"], explanation: "適可而止表示做到恰當程度就停止。" },
    { id: "idiom_028", bank: "idiom", difficulty: "easy", question: "色彩很多，鮮豔而美麗，可以用哪個成語？", answer: "五彩繽紛", options: ["五彩繽紛", "汗流浹背", "心心相印", "不治之症"], explanation: "五彩繽紛形容色彩繁多而鮮豔。" },
    { id: "idiom_029", bank: "idiom", difficulty: "easy", question: "完美到幾乎沒有缺點，可以用哪個成語？", answer: "盡善盡美", options: ["盡善盡美", "捨本逐末", "額手稱慶", "與世無爭"], explanation: "盡善盡美表示完善美滿到了極點。" },
    { id: "idiom_030", bank: "idiom", difficulty: "easy", question: "勤奮學習，不知疲倦，可以用哪個成語？", answer: "孜孜不倦", options: ["孜孜不倦", "幸災樂禍", "姍姍來遲", "顧此失彼"], explanation: "孜孜不倦表示勤勉努力，不知疲倦。" },
    { id: "idiom_031", bank: "idiom", difficulty: "easy", question: "準備開始行動，手腳都躍動起來，可以用哪個成語？", answer: "摩拳擦掌", options: ["摩拳擦掌", "因材施教", "回心轉意", "天翻地覆"], explanation: "摩拳擦掌表示準備行動、躍躍欲試。" },
    { id: "idiom_032", bank: "idiom", difficulty: "easy", question: "努力後終於實現願望，可以用哪個成語？", answer: "如願以償", options: ["如願以償", "無可奉告", "雞犬不寧", "談何容易"], explanation: "如願以償就是心願得以實現。" },
    { id: "idiom_033", bank: "idiom", difficulty: "normal", question: "說話小心，做事謹慎，可以用哪個成語？", answer: "謹言慎行", options: ["謹言慎行", "沾沾自喜", "投機取巧", "妄自菲薄"], explanation: "謹言慎行表示言談與行事都很小心。" },
    { id: "idiom_034", bank: "idiom", difficulty: "normal", question: "很會計較，連小錢小事都不放過，可以用哪個成語？", answer: "錙銖必較", options: ["錙銖必較", "福至心靈", "氣宇軒昂", "書香社會"], explanation: "錙銖必較是連細微的事都計較。" },
    { id: "idiom_035", bank: "idiom", difficulty: "normal", question: "下列哪一句成語使用正確？", answer: "老師講話簡潔有力，真是要言不煩。", options: ["老師講話簡潔有力，真是要言不煩。", "這間教室很安靜，所以大家耳目一新。", "看到作業太多，我躍躍欲試。", "他被蚊子咬得很癢，所以洗耳恭聽。"], explanation: "要言不煩是說話精要不囉嗦。" },
    { id: "idiom_036", bank: "idiom", difficulty: "normal", question: "下列哪一句成語使用正確？", answer: "消防員衝入火場救人，真是赴湯蹈火。", options: ["消防員衝入火場救人，真是赴湯蹈火。", "我今天吃飽了，所以束手無策。", "這首歌太好聽了，讓我捨本逐末。", "他很害羞，所以天翻地覆。"], explanation: "赴湯蹈火用於形容不避艱險。" },
    { id: "idiom_037", bank: "idiom", difficulty: "hard", question: "下列哪一句成語使用正確？", answer: "校長公平對待每個學生，真是一視同仁。", options: ["校長公平對待每個學生，真是一視同仁。", "這盒彩色筆只剩一支，真是五彩繽紛。", "我睡午覺時很安靜，所以孤注一擲。", "他今天很想放棄，所以力爭上游。"], explanation: "一視同仁是平等對待每一個人。" },
    { id: "idiom_038", bank: "idiom", difficulty: "hard", question: "哪一個成語最適合形容『事情很急，一刻也不能拖』？", answer: "刻不容緩", options: ["刻不容緩", "因材施教", "喧賓奪主", "風雨無阻"], explanation: "刻不容緩表示情勢緊迫，不能耽擱。" },
    { id: "idiom_039", bank: "idiom", difficulty: "hard", question: "哪一個成語最適合形容『依照不同學生的特點來教學』？", answer: "因材施教", options: ["因材施教", "大吹法螺", "嘰哩咕嚕", "各憑本事"], explanation: "因材施教是依照學生不同特質給予不同教法。" },
    { id: "idiom_040", bank: "idiom", difficulty: "hard", question: "哪一個成語最適合形容『大家一起合作，共度難關』？", answer: "同舟共濟", options: ["同舟共濟", "自慚形穢", "門可羅雀", "妄自菲薄"], explanation: "同舟共濟表示同心協力，共度困難。" }
  ];

  function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function normalizeDifficulty(difficulty) {
    return difficulty || 'mixed';
  }

  function getQuestionBanks(existingPunctuationQuestions) {
    const punctuationQuestions = Array.isArray(existingPunctuationQuestions)
      ? existingPunctuationQuestions.map(q => ({ ...q, bank: q.bank || 'punctuation' }))
      : [];

    return {
      punctuation: punctuationQuestions,
      rhetoric: RHETORIC_QUESTIONS,
      idiom: IDIOM_QUESTIONS,
      mixed: [...punctuationQuestions, ...RHETORIC_QUESTIONS, ...IDIOM_QUESTIONS]
    };
  }

  function getQuestionsByBank(bank, difficulty = 'mixed', existingPunctuationQuestions) {
    const banks = getQuestionBanks(existingPunctuationQuestions);
    const all = banks[bank] || [];
    const d = normalizeDifficulty(difficulty);
    if (d === 'mixed') return [...all];
    return all.filter(q => q.difficulty === d || q.difficulty == null);
  }

  function buildRoundQuestions(bank, difficulty = 'mixed', count = 10, existingPunctuationQuestions) {
    const pool = getQuestionsByBank(bank, difficulty, existingPunctuationQuestions);
    return shuffleArray(pool).slice(0, Math.min(count, pool.length));
  }

  function getAnswerOptions(question, bank) {
    if (bank === 'punctuation') return PUNCTUATION_OPTIONS;
    if (question && Array.isArray(question.options)) return shuffleArray(question.options);
    if (bank === 'rhetoric') return RHETORIC_FIXED_OPTIONS;
    return [];
  }

  function judgeAnswer(question, playerAnswer) {
    const correct = String(playerAnswer).trim() === String(question.answer).trim();
    return {
      correct,
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
    return `答錯了！正確答案是：${result.correctAnswer}\n解析：${result.explanation}`;
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
