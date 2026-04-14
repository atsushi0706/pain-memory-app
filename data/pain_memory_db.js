window.PAIN_DB = {
  "version": "1.0.0",
  "last_updated": "2026-04-14",
  "description": "痛みの記憶（神経因子）特定データベース。治療家向け診断アプリの裏側で動作する。エビデンス: Butler DS, Shacklock M, Schmid AB, Coppieters MW, Bogduk N, Jänig W, et al.",
  "categories": [
    "spine_lumbar",
    "spine_cervical",
    "upper_limb",
    "lower_limb",
    "trunk_complex",
    "head_jaw",
    "rest_autonomic"
  ],
  "actions": [
    {
      "id": "L01",
      "category": "spine_lumbar",
      "main_action": "前屈み（前屈）をした時の腰・臀部・下肢の痛み",
      "sub_questions": [
        {"id": "q1", "text": "下肢にしびれや放散痛はありますか？", "options": ["あり（片側）", "あり（両側）", "なし"]},
        {"id": "q2", "text": "痛みは膝より下まで及びますか？", "options": ["はい", "いいえ"]},
        {"id": "q3", "text": "頸椎を屈曲（うなずく）すると腰〜下肢の症状が増えますか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "坐骨神経（L4-S3）", "probability": 55, "condition": "片側下肢＋膝下まで＋頸屈曲で増悪"},
        {"nerve": "硬膜／神経根スリーブ（L5/S1）", "probability": 30, "condition": "両側または中心性"},
        {"nerve": "総腓骨神経（膝窩滑走障害）", "probability": 15, "condition": "下腿外側〜足背のしびれ"}
      ],
      "mechanism": "前屈でハムストリングス伸張とともに坐骨神経が長軸方向に3〜5mm滑走を要求される（Coppieters 2006）。椎間板への軸圧増加と椎間孔後方での神経根伸張が同時に発生し、ニューロダイナミック閾値超過で侵害受容性防御収縮が起こる。",
      "locked_regions": ["胸腰椎移行部T12-L1", "仙腸関節", "膝窩筋膜", "足関節背屈"],
      "therapist_advice": "腰椎への強制屈曲モビライゼーションは禁忌に近い。スランプポジションで健側からneural glidingを開始し、足関節背屈＋頸椎屈曲の遠位感覚入力で神経系の警戒レベルを下げてから、腰椎へ介入すること。"
    },
    {
      "id": "L02",
      "category": "spine_lumbar",
      "main_action": "腰を反らせた（後屈）時の腰・臀部・下肢の痛み",
      "sub_questions": [
        {"id": "q1", "text": "痛みは大腿前面に出ますか？", "options": ["はい", "いいえ"]},
        {"id": "q2", "text": "後屈＋同側側屈でさらに増悪しますか？", "options": ["はい", "いいえ"]},
        {"id": "q3", "text": "うつ伏せで膝を曲げると大腿前面が突っ張りますか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "L4神経根（椎間孔狭窄）", "probability": 50, "condition": "後屈＋側屈で増悪"},
        {"nerve": "大腿神経（L2-L4）", "probability": 30, "condition": "大腿前面痛＋Prone Knee Bend陽性"},
        {"nerve": "上殿皮神経（T11-L3後枝）", "probability": 20, "condition": "腸骨稜直上の限局痛"}
      ],
      "mechanism": "後屈で椎間孔は約20%縮小し黄色靭帯が膨隆する（Fujiwara 2001）。大腿神経は腸腰筋内を貫通するため腰椎前弯増強で絞扼される。",
      "locked_regions": ["腰仙移行部", "腸腰筋", "大腿直筋起始", "胸椎伸展可動域"],
      "therapist_advice": "後屈制限を強引に広げない。腸腰筋を神経床としてリリースし、側臥位での大腿神経スライダーを優先。胸椎伸展を先に獲得してから腰椎へ。"
    },
    {
      "id": "L03",
      "category": "rest_autonomic",
      "main_action": "就寝時（安静時）の腰・下肢の痛み",
      "sub_questions": [
        {"id": "q1", "text": "体位変換で痛みは変化しますか？", "options": ["変化する", "変化しない"]},
        {"id": "q2", "text": "夜間発汗・体重減少・発熱はありますか？", "options": ["あり", "なし"]},
        {"id": "q3", "text": "早朝にこわばりが強いですか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "交感神経系（胸腰椎傍脊柱）", "probability": 45, "condition": "体位非依存＋自律症状"},
        {"nerve": "硬膜（洞椎神経）", "probability": 35, "condition": "深部鈍痛・中心性"},
        {"nerve": "後枝内側枝", "probability": 20, "condition": "早朝こわばり優位"}
      ],
      "mechanism": "安静時痛は機械的刺激によらず中枢感作＋交感神経-侵害受容連関が主因（Jänig 2006）。夜間の副交感切替不全で微小循環低下→虚血性疼痛が発生。",
      "locked_regions": ["胸腰椎傍脊柱T10-L2", "横隔膜", "後頭下筋群"],
      "therapist_advice": "局所介入より自律神経再調整を優先。横隔膜リリース、呼吸法、後頭下部の愛護的手技で副交感優位へ誘導。レッドフラッグ該当時は医療機関紹介必須。"
    },
    {
      "id": "L04",
      "category": "trunk_complex",
      "main_action": "中腰（洗顔・掃除機がけ）を続けた時の腰の痛み",
      "sub_questions": [
        {"id": "q1", "text": "動き始めより保持で悪化しますか？", "options": ["保持で悪化", "動き始めで悪化"]},
        {"id": "q2", "text": "殿部深部に鈍痛がありますか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "胸腰筋膜の神経終末（後枝外側枝）", "probability": 50, "condition": "持続保持で漸増"},
        {"nerve": "多裂筋内神経（segmental nerve）", "probability": 30, "condition": "分節性の深部痛"},
        {"nerve": "上殿神経", "probability": 20, "condition": "殿部深部痛あり"}
      ],
      "mechanism": "中腰保持は多裂筋・胸腰筋膜に等尺性ストレスを持続負荷し、筋膜内の自由神経終末を持続発火させる。分節性反射で多裂筋の抑制→不安定性→さらなる侵害入力の悪循環。",
      "locked_regions": ["多裂筋L4-S1", "胸腰筋膜", "仙腸関節"],
      "therapist_advice": "ストレッチより、多裂筋への低強度収縮再学習（abdominal drawing-in併用）を優先。筋膜の滑走改善を先に行うこと。"
    },
    {
      "id": "L05",
      "category": "trunk_complex",
      "main_action": "寝返りを打つ時の腰〜骨盤の痛み",
      "sub_questions": [
        {"id": "q1", "text": "片側の仙腸関節周辺が痛みますか？", "options": ["はい", "いいえ"]},
        {"id": "q2", "text": "朝起きた直後が最もひどいですか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "仙腸関節支配神経（L5-S3後枝）", "probability": 55, "condition": "片側仙腸部痛"},
        {"nerve": "腰神経叢（腸腰筋内）", "probability": 25, "condition": "股関節屈曲位で増悪"},
        {"nerve": "胸腰筋膜神経", "probability": 20, "condition": "広範な筋膜痛"}
      ],
      "mechanism": "寝返りは体幹回旋＋骨盤剪断を要求し、仙腸関節の後方靭帯群と長後仙腸靭帯に機械刺激が集中。腸腰筋が神経床として働くため股関節屈曲位で神経叢が感作される。",
      "locked_regions": ["仙腸関節", "腸腰筋", "腰方形筋"],
      "therapist_advice": "仙腸関節のmanipulationより先に、腸腰筋の神経床リリースを行う。骨盤の剪断方向を特定してからpositional releaseを適用。"
    },
    {
      "id": "L06",
      "category": "trunk_complex",
      "main_action": "体を捻って後ろを振り向く（回旋）時の背中・腰の痛み",
      "sub_questions": [
        {"id": "q1", "text": "痛みは胸椎レベルですか、腰椎レベルですか？", "options": ["胸椎", "腰椎", "両方"]},
        {"id": "q2", "text": "同側の肋骨まわりに痛みが走りますか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "肋間神経（Th4-Th12）", "probability": 45, "condition": "肋骨沿い放散"},
        {"nerve": "胸椎後枝内側枝", "probability": 35, "condition": "傍脊柱限局痛"},
        {"nerve": "腰椎後枝（L1-L3）", "probability": 20, "condition": "腰椎レベル回旋痛"}
      ],
      "mechanism": "胸椎回旋は肋椎関節の滑り運動を要求し、肋間神経が肋骨頭周辺で絞扼される。腰椎は構造上回旋が3〜5°と少なく、強制回旋で後枝が牽引される。",
      "locked_regions": ["胸椎Th5-Th9", "肋椎関節", "腰椎-胸椎移行部"],
      "therapist_advice": "腰椎の回旋可動域訓練ではなく、胸椎・肋骨の可動性回復を優先。肋間神経の肋骨角付近での滑走改善を併用。"
    },
    {
      "id": "L07",
      "category": "trunk_complex",
      "main_action": "咳やくしゃみをした時に響く腰の痛み",
      "sub_questions": [
        {"id": "q1", "text": "咳で下肢にも痛みが走りますか？", "options": ["はい", "いいえ"]},
        {"id": "q2", "text": "排便時のいきみでも同様の痛みが出ますか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "硬膜／神経根スリーブ", "probability": 70, "condition": "Dejerine徴候陽性"},
        {"nerve": "椎間関節包支配神経", "probability": 20, "condition": "下肢症状なし"},
        {"nerve": "胸腰筋膜", "probability": 10, "condition": "表層の鋭痛"}
      ],
      "mechanism": "咳・くしゃみ・いきみは髄液圧を急上昇させ硬膜・神経根スリーブを機械刺激する（Dejerine徴候）。椎間板ヘルニアや神経根炎の強い示唆。",
      "locked_regions": ["腰椎神経根", "硬膜"],
      "therapist_advice": "Dejerine徴候陽性は構造的病変の可能性が高い。徒手療法より先に画像評価を推奨。施術は神経滑走改善の愛護的手技に限定すること。"
    },
    {
      "id": "L08",
      "category": "trunk_complex",
      "main_action": "長時間座った後、動き出しで固まるような腰の痛み",
      "sub_questions": [
        {"id": "q1", "text": "数歩歩くと軽減しますか？", "options": ["はい", "いいえ"]},
        {"id": "q2", "text": "椎間関節を押すと圧痛がありますか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "椎間関節支配神経（後枝内側枝）", "probability": 50, "condition": "動き出しで鋭痛、歩行で軽減"},
        {"nerve": "胸腰筋膜神経", "probability": 30, "condition": "広範な張り"},
        {"nerve": "仙腸関節後方靭帯神経", "probability": 20, "condition": "殿部限局"}
      ],
      "mechanism": "長時間座位は椎間関節包のクリープ現象を起こし、関節包内の機械受容器が閾値を下げる。動き始めに一過性の侵害入力が集中し防御反射が発動。",
      "locked_regions": ["腰椎椎間関節L4-S1", "仙腸関節", "ハムストリングス"],
      "therapist_advice": "椎間関節モビライゼーション前に、座位姿勢の再学習と胸椎伸展訓練を先行。関節包のクリープ回復には動的な小振幅の反復運動が有効。"
    },
    {
      "id": "C01",
      "category": "spine_cervical",
      "main_action": "首を左右に回旋した時の首・肩甲上部の痛み",
      "sub_questions": [
        {"id": "q1", "text": "後頭部に痛みが放散しますか？", "options": ["はい", "いいえ"]},
        {"id": "q2", "text": "回旋可動域は左右差がありますか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "C2後枝（大後頭神経）", "probability": 40, "condition": "後頭部放散"},
        {"nerve": "副神経（XI）", "probability": 35, "condition": "胸鎖乳突筋後縁圧痛"},
        {"nerve": "C3-C4神経根", "probability": 25, "condition": "肩甲上部痛優位"}
      ],
      "mechanism": "頸椎回旋の約50%はC1-C2で生じ、大後頭神経は下頭斜筋を貫通するため回旋で絞扼される（Bogduk 2009）。副神経は胸鎖乳突筋後縁浅層を走行し回旋時に圧迫される。",
      "locked_regions": ["後頭下三角", "C1-C2関節", "肩甲挙筋", "第1肋骨"],
      "therapist_advice": "頸椎スラストは後頭下絞扼を確認してから判断。下頭斜筋の持続圧迫リリースと副神経滑走改善を先行。第1肋骨も併せて評価。"
    },
    {
      "id": "C02",
      "category": "spine_cervical",
      "main_action": "首を後ろに倒した（後屈）時の首・腕のしびれ・痛み",
      "sub_questions": [
        {"id": "q1", "text": "しびれは母指側ですか、小指側ですか？", "options": ["母指側（C6）", "中指（C7）", "小指側（C8）"]},
        {"id": "q2", "text": "Spurlingテスト（後屈＋同側側屈）で再現しますか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "C6-C7神経根（椎間孔狭窄）", "probability": 55, "condition": "Spurling陽性"},
        {"nerve": "腕神経叢上神経幹", "probability": 25, "condition": "斜角筋間圧痛"},
        {"nerve": "正中神経（前腕近位）", "probability": 20, "condition": "ULNT1陽性"}
      ],
      "mechanism": "頸椎伸展で椎間孔は最大30%縮小する（Yoo 1992）。上神経幹は斜角筋間隙で伸展時に圧迫される。",
      "locked_regions": ["C7-T1", "斜角筋", "第1肋骨", "手根管"],
      "therapist_advice": "牽引より先にULNTで神経床を特定。斜角筋間隙の減圧＋手根管からの遠位sliderで末梢感作を下げる。急性期は画像推奨。"
    },
    {
      "id": "C03",
      "category": "spine_cervical",
      "main_action": "うがいをする（上を向く）時の首から腕にかけての痛み・しびれ",
      "sub_questions": [
        {"id": "q1", "text": "上肢へのしびれは母指〜中指ですか、小指側ですか？", "options": ["母指〜中指", "小指側", "区別できない"]},
        {"id": "q2", "text": "手を頭の上に置くとしびれが軽減しますか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "C5-C6神経根", "probability": 45, "condition": "母指側しびれ＋後屈で増悪"},
        {"nerve": "腕神経叢（胸郭出口）", "probability": 35, "condition": "Bakody徴候陽性（挙上で軽減）"},
        {"nerve": "椎骨動脈周囲交感神経叢", "probability": 20, "condition": "めまい・視覚症状合併時"}
      ],
      "mechanism": "頸椎伸展は椎間孔を閉鎖し、同時に前斜角筋が緊張して胸郭出口を圧迫。Bakody徴候（挙上で軽減）陽性は腕神経叢由来を示唆。",
      "locked_regions": ["C5-C6", "前斜角筋", "鎖骨下", "第1肋骨"],
      "therapist_advice": "頸椎伸展訓練は禁忌寄り。胸郭出口の減圧（小胸筋・斜角筋・第1肋骨）を優先し、椎骨動脈症状がある場合は徒手療法中止し医療機関紹介。"
    },
    {
      "id": "C04",
      "category": "spine_cervical",
      "main_action": "朝起きた時（寝起き）の首の痛み（寝違えのような痛み）",
      "sub_questions": [
        {"id": "q1", "text": "特定の方向のみ動かせませんか？", "options": ["はい（一方向のみ）", "いいえ（全方向）"]},
        {"id": "q2", "text": "睡眠時の姿勢が横向きで頭が低かったですか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "頸椎椎間関節支配神経（後枝内側枝）", "probability": 60, "condition": "一方向の急性可動域制限"},
        {"nerve": "肩甲背神経", "probability": 25, "condition": "肩甲内側縁痛"},
        {"nerve": "C3-C4後枝", "probability": 15, "condition": "傍脊柱限局"}
      ],
      "mechanism": "睡眠中の長時間の偏位姿勢で椎間関節包に滑膜嵌入（meniscoid entrapment）が起こり、関節包受容器の過剰発火で局所筋スパズムを誘発。",
      "locked_regions": ["C2-C5椎間関節", "肩甲挙筋", "菱形筋"],
      "therapist_advice": "強引な可動域訓練は悪化因子。Mulligan SNAGなどの無痛域でのモビライゼーションを選択。肩甲挙筋の起始部（C1-C4横突起）の緊張を優先的に解除。"
    },
    {
      "id": "U01",
      "category": "upper_limb",
      "main_action": "肩の外転・挙上（腕を横から上げる）時の痛み",
      "sub_questions": [
        {"id": "q1", "text": "痛みは60°〜120°の範囲（painful arc）で出ますか？", "options": ["はい", "いいえ"]},
        {"id": "q2", "text": "後方（肩甲骨の外側）に深部痛がありますか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "肩甲上神経", "probability": 45, "condition": "棘下部深部痛＋外旋筋力低下"},
        {"nerve": "腋窩神経（QLS）", "probability": 35, "condition": "外転外旋で後方痛"},
        {"nerve": "C5神経根", "probability": 20, "condition": "デルトイド領域放散"}
      ],
      "mechanism": "肩甲上神経は肩甲切痕〜棘窩切痕で牽引される（Cummins 2000）。腋窩神経はquadrilateral spaceで外転外旋時に絞扼。",
      "locked_regions": ["肩甲胸郭関節", "小胸筋", "肩甲下筋", "肩甲切痕"],
      "therapist_advice": "腱板エクササイズ先行は誤り。肩甲切痕減圧とQLS滑走改善を優先。肩甲骨後傾・上方回旋を獲得してから強化へ。"
    },
    {
      "id": "U02",
      "category": "upper_limb",
      "main_action": "肩の屈曲（腕を前から上げる）時の痛み",
      "sub_questions": [
        {"id": "q1", "text": "結節間溝（上腕前面）に圧痛がありますか？", "options": ["はい", "いいえ"]},
        {"id": "q2", "text": "小胸筋を押さえると痛み・しびれが再現しますか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "筋皮神経（烏口腕筋貫通部）", "probability": 40, "condition": "上腕前外側のしびれ"},
        {"nerve": "外側胸筋神経（小胸筋下）", "probability": 30, "condition": "Pec minor syndrome"},
        {"nerve": "上腕二頭筋長頭腱神経終末", "probability": 30, "condition": "結節間溝圧痛"}
      ],
      "mechanism": "筋皮神経は烏口腕筋を貫通し屈曲＋外旋で牽引される。小胸筋下の腕神経叢は屈曲挙上で最大圧迫される（Sanders 2007）。",
      "locked_regions": ["小胸筋", "烏口突起", "第2-3肋骨", "胸鎖関節"],
      "therapist_advice": "ROM訓練を強引に行わない。小胸筋下の腕神経叢減圧を最優先。胸鎖関節と上位肋骨の可動性で神経床全体を緩める。"
    },
    {
      "id": "U03",
      "category": "upper_limb",
      "main_action": "ボールを投げる時（コッキング期〜リリース期）の肩・肘の痛み",
      "sub_questions": [
        {"id": "q1", "text": "痛みはコッキング後期（最大外旋位）ですか、リリース直後ですか？", "options": ["コッキング後期", "リリース直後", "両方"]},
        {"id": "q2", "text": "肘内側に痛みがありますか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "腋窩神経（QLS）", "probability": 40, "condition": "コッキング後期の後方痛"},
        {"nerve": "尺骨神経（肘内側）", "probability": 35, "condition": "外反ストレスで肘内側症状"},
        {"nerve": "肩甲上神経（棘窩切痕）", "probability": 25, "condition": "棘下部深部痛"}
      ],
      "mechanism": "最大外旋位では後方関節包と腋窩神経が牽引される。外反ストレスで尺骨神経は肘部管内で最大15mm伸張（Gelberman 1998）。投球動作の反復で神経床の滑走不全が蓄積。",
      "locked_regions": ["後方関節包", "QLS", "肘部管", "胸郭出口"],
      "therapist_advice": "肩関節後方カプセルのcross-body stretchを画一的に適用しない。腋窩神経neural gliderと尺骨神経のslider（肘屈曲-手関節伸展の分離運動）を併用。投球フォーム評価は必須。"
    },
    {
      "id": "U04",
      "category": "upper_limb",
      "main_action": "エプロンの紐を後ろで結ぶ（結帯動作）時の肩の痛み",
      "sub_questions": [
        {"id": "q1", "text": "痛みは肩前面ですか、後面ですか？", "options": ["前面", "後面", "両方"]},
        {"id": "q2", "text": "内旋制限が強いですか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "肩甲下神経（肩甲下筋支配）", "probability": 40, "condition": "前方深部痛＋内旋制限"},
        {"nerve": "腋窩神経（後枝）", "probability": 35, "condition": "後面痛"},
        {"nerve": "正中神経（手関節〜前腕）", "probability": 25, "condition": "結帯で手のしびれ"}
      ],
      "mechanism": "結帯動作は伸展＋内旋＋内転の複合肢位で、肩甲下筋の遠心性収縮と後方関節包の伸張を要求する。腋窩神経は内旋伸展で牽引され、正中神経は手関節伸展を伴う結帯で遠位滑走が要求される。",
      "locked_regions": ["肩甲下筋", "後方関節包", "小円筋", "手根管"],
      "therapist_advice": "内旋ROM訓練より、肩甲下筋の圧痛点リリースと後方関節包の愛護的モビライゼーションを優先。手関節由来の場合は遠位から介入。"
    },
    {
      "id": "U05",
      "category": "upper_limb",
      "main_action": "高い棚の物を取ろうと腕を伸ばした（挙上リーチ）時の痛み",
      "sub_questions": [
        {"id": "q1", "text": "挙上最終域で痛みが強いですか？", "options": ["はい", "いいえ"]},
        {"id": "q2", "text": "頸椎の動きでも同じ痛みが出ますか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "腕神経叢（胸郭出口）", "probability": 45, "condition": "Roos陽性・挙上で増悪"},
        {"nerve": "肩甲上神経", "probability": 30, "condition": "棘上筋深部痛"},
        {"nerve": "C5神経根", "probability": 25, "condition": "頸椎動作で再現"}
      ],
      "mechanism": "最大挙上は腕神経叢を鎖骨下・小胸筋下で圧迫する（胸郭出口症候群のcostoclavicular型）。肩甲上神経は最大挙上で棘窩切痕で牽引される。",
      "locked_regions": ["小胸筋", "鎖骨下", "第1肋骨", "肩甲切痕"],
      "therapist_advice": "挙上ROM訓練より先に胸郭出口3ポイント（前斜角筋・鎖骨下・小胸筋）の減圧。呼吸パターン修正で第1肋骨の位置を整える。"
    },
    {
      "id": "U06",
      "category": "upper_limb",
      "main_action": "重い荷物を床から引き上げる時の腕・肩の痛み",
      "sub_questions": [
        {"id": "q1", "text": "痛みは前腕にも放散しますか？", "options": ["はい", "いいえ"]},
        {"id": "q2", "text": "握力低下を感じますか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "C6-C7神経根", "probability": 40, "condition": "前腕放散＋握力低下"},
        {"nerve": "正中神経（回内筋症候群）", "probability": 30, "condition": "前腕近位掌側痛"},
        {"nerve": "上腕二頭筋長頭腱神経終末", "probability": 30, "condition": "肩前面局所痛"}
      ],
      "mechanism": "床からの引き上げは肩屈曲＋肘屈曲＋前腕回内の複合で、正中神経が円回内筋2頭間で圧迫される。脊柱軸圧と同時に椎間孔狭窄の増悪要因ともなる。",
      "locked_regions": ["円回内筋", "上腕二頭筋長頭腱", "頸胸椎移行部"],
      "therapist_advice": "肩局所の徒手より先に頸椎由来の除外。正中神経ULNT1と回内筋圧痛を確認し、遠位からslider導入。挙上動作の力学指導（股関節主導）を併用。"
    },
    {
      "id": "U07",
      "category": "upper_limb",
      "main_action": "雑巾を絞る・ドアノブを回す（前腕回旋）時の手首・肘の痛み",
      "sub_questions": [
        {"id": "q1", "text": "痛みは外側（橈側）ですか、内側（尺側）ですか？", "options": ["外側", "内側", "両方"]},
        {"id": "q2", "text": "手指のしびれを伴いますか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "橈骨神経深枝（回外筋アーケード）", "probability": 45, "condition": "外側痛・Frohse腱弓圧痛"},
        {"nerve": "後骨間神経", "probability": 30, "condition": "母指・示指伸展力低下"},
        {"nerve": "正中神経（回内筋症候群）", "probability": 25, "condition": "内側痛＋手掌しびれ"}
      ],
      "mechanism": "前腕回外反復でFrohse腱弓が橈骨神経深枝を絞扼する（radial tunnel syndrome）。外側上顆炎として誤診されやすい。",
      "locked_regions": ["回外筋", "橈骨頭", "円回内筋", "手関節"],
      "therapist_advice": "外側上顆への局所アプローチは効果限定的。回外筋Frohse腱弓の神経減圧を優先。頸椎C6レベルの神経床も併せて評価（double crush）。"
    },
    {
      "id": "U08",
      "category": "upper_limb",
      "main_action": "肘の曲げ伸ばし時の痛みやしびれ",
      "sub_questions": [
        {"id": "q1", "text": "小指・薬指にしびれがありますか？", "options": ["はい", "いいえ"]},
        {"id": "q2", "text": "夜間に症状が強くなりますか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "尺骨神経（肘部管）", "probability": 50, "condition": "小指・薬指しびれ＋夜間増悪"},
        {"nerve": "橈骨神経（radial tunnel）", "probability": 30, "condition": "外側痛優位"},
        {"nerve": "正中神経（pronator teres）", "probability": 20, "condition": "前腕掌側痛"}
      ],
      "mechanism": "肘屈曲で尺骨神経は15mm伸張、肘部管内圧は7倍に上昇（Gelberman 1998）。Osborneリガメント緊張が主因。",
      "locked_regions": ["肘部管", "Osborneリガメント", "手関節", "頸胸移行部"],
      "therapist_advice": "局所ストレッチ厳禁。ULNT3でsliderのみ導入、tensionerは禁忌。頸胸椎可動性を併せて評価（double crush）。夜間肘屈曲位睡眠の生活指導を併用。"
    },
    {
      "id": "U09",
      "category": "upper_limb",
      "main_action": "パソコン作業（キーボード・マウス）を続けると出る腕のしびれ・痛み",
      "sub_questions": [
        {"id": "q1", "text": "しびれは母指〜中指（手根管領域）ですか？", "options": ["はい", "いいえ"]},
        {"id": "q2", "text": "マウス側の肩甲骨内側に痛みがありますか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "正中神経（手根管）", "probability": 45, "condition": "母指〜中指しびれ"},
        {"nerve": "肩甲背神経", "probability": 30, "condition": "肩甲内側縁痛"},
        {"nerve": "腕神経叢（胸郭出口）", "probability": 25, "condition": "姿勢依存性・前腕全体症状"}
      ],
      "mechanism": "持続的前腕回内＋手関節伸展位でのキーボード操作は手根管内圧を慢性的に上昇させる。不良姿勢による頭部前方位は前斜角筋緊張→胸郭出口圧迫を誘発。",
      "locked_regions": ["手根管", "小胸筋", "斜角筋", "肩甲挙筋"],
      "therapist_advice": "手根管局所より、姿勢由来のdouble crushを疑って胸郭出口から評価。マウス操作時の肩挙上パターンを修正し、手関節中間位を保てるデスク環境指導を並行。"
    },
    {
      "id": "LL01",
      "category": "lower_limb",
      "main_action": "階段を上る時の膝・大腿部の痛み",
      "sub_questions": [
        {"id": "q1", "text": "踏み込み時に膝折れ感がありますか？", "options": ["はい", "いいえ"]},
        {"id": "q2", "text": "大腿内側に放散痛がありますか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "伏在神経膝蓋下枝（内転筋管）", "probability": 45, "condition": "膝内側痛"},
        {"nerve": "大腿神経筋枝", "probability": 35, "condition": "大腿四頭筋の反射性抑制"},
        {"nerve": "閉鎖神経前枝", "probability": 20, "condition": "大腿内側放散"}
      ],
      "mechanism": "昇段は股屈曲＋膝屈曲位の求心性収縮を要求し、内転筋管で伏在神経が圧迫される。膝関節内の侵害入力でarthrogenic muscle inhibition（Hopkins 2000）が起こり大腿四頭筋が反射性に抑制される。",
      "locked_regions": ["内転筋管", "膝蓋支帯", "大腿直筋", "股関節前方包"],
      "therapist_advice": "膝蓋骨モビライゼーションより内転筋管の減圧が先。股関節前方包の牽引で関節内圧を下げ、反射性抑制を解除してから運動療法へ。"
    },
    {
      "id": "LL02",
      "category": "lower_limb",
      "main_action": "階段を下りる時、足が着地した瞬間の膝の痛み",
      "sub_questions": [
        {"id": "q1", "text": "膝前面（膝蓋腱直下）が痛みますか？", "options": ["はい", "いいえ"]},
        {"id": "q2", "text": "下腿外側にしびれがありますか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "膝蓋下脂肪体（Hoffa体）神経終末", "probability": 50, "condition": "膝前面着地痛"},
        {"nerve": "大腿神経筋枝（遠心制御系）", "probability": 30, "condition": "膝折れ感優位"},
        {"nerve": "総腓骨神経（腓骨頭）", "probability": 20, "condition": "下腿外側しびれ"}
      ],
      "mechanism": "降段の遠心性収縮では膝蓋腱〜Hoffa体に高密度の侵害受容終末が発火する（Bennell 2004）。脂肪体の機械受容エラーが膝伸展最終域での防御反射を誘発。",
      "locked_regions": ["Hoffa体", "腓骨頭", "距骨下関節", "股関節外旋筋"],
      "therapist_advice": "降段訓練反復は悪化因子。Hoffa体の愛護的減圧とglide優先。腓骨頭可動性と距骨下回内を回復させ、近位代償を外す順序で介入。"
    },
    {
      "id": "LL03",
      "category": "lower_limb",
      "main_action": "椅子やベッドから立ち上がる瞬間の腰〜臀部・膝の痛み",
      "sub_questions": [
        {"id": "q1", "text": "痛みは立ち上がり始めの一瞬だけですか？", "options": ["はい", "いいえ"]},
        {"id": "q2", "text": "股関節前面に詰まり感がありますか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "大腿神経（腸腰筋内）", "probability": 40, "condition": "股関節前面詰まり＋大腿前面痛"},
        {"nerve": "上殿神経", "probability": 35, "condition": "殿部外側痛"},
        {"nerve": "椎間関節支配神経（L4-L5）", "probability": 25, "condition": "腰椎伸展初期痛"}
      ],
      "mechanism": "立ち上がり動作は股関節屈曲位からの伸展で、大腿神経が腸腰筋内で動的圧迫を受ける。同時に腰椎は屈曲→伸展の急激な切替で椎間関節包の機械受容器が一過性に過剰発火。",
      "locked_regions": ["腸腰筋", "股関節前方包", "腰椎椎間関節"],
      "therapist_advice": "腰椎manipulationより腸腰筋リリースを優先。立ち上がり時の体幹前傾パターンを再学習し、腰椎への急激な軸圧を分散させる。"
    },
    {
      "id": "LL04",
      "category": "lower_limb",
      "main_action": "深くしゃがみ込む（和式トイレなど）時の膝・足首の痛み",
      "sub_questions": [
        {"id": "q1", "text": "足首の前面が詰まる感じがありますか？", "options": ["はい", "いいえ"]},
        {"id": "q2", "text": "膝の奥が痛みますか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "深腓骨神経（足関節前方）", "probability": 40, "condition": "足関節前面impingement"},
        {"nerve": "脛骨神経（膝窩部）", "probability": 35, "condition": "膝窩深部痛"},
        {"nerve": "閉鎖神経", "probability": 25, "condition": "股関節内側深部痛"}
      ],
      "mechanism": "最大しゃがみ込みは足関節背屈＋膝屈曲＋股屈曲の複合で、深腓骨神経が足関節前方で圧迫され、脛骨神経は膝窩で伸張される。閉鎖神経は股関節深屈曲で圧迫。",
      "locked_regions": ["足関節前方", "膝窩部", "股関節後方包"],
      "therapist_advice": "しゃがみROM訓練より遠位から評価。距骨の後方滑りを回復させ、深腓骨神経の動的減圧を行う。膝窩での脛骨神経sliderを併用。"
    },
    {
      "id": "LL05",
      "category": "lower_limb",
      "main_action": "長時間歩いた時に出るふくらはぎ〜足裏の痛み・しびれ",
      "sub_questions": [
        {"id": "q1", "text": "前屈で症状は軽減しますか？", "options": ["はい", "いいえ"]},
        {"id": "q2", "text": "足裏にビリビリするしびれがありますか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "馬尾神経（腰部脊柱管狭窄）", "probability": 45, "condition": "前屈で軽減（間欠性跛行）"},
        {"nerve": "脛骨神経（足根管）", "probability": 35, "condition": "足底しびれ"},
        {"nerve": "腓腹神経", "probability": 20, "condition": "下腿後外側痛"}
      ],
      "mechanism": "歩行による脊柱伸展反復で脊柱管が狭窄し馬尾が圧迫される（間欠性跛行）。足根管では屈筋支帯下で脛骨神経が圧迫され立位負荷で増悪。",
      "locked_regions": ["腰椎L4-L5", "足根管", "下腿筋膜"],
      "therapist_advice": "馬尾症状陽性は医療機関紹介を優先検討。施術は腰椎屈曲ポジションでの神経床改善と足根管減圧。歩行距離の段階的管理を指導。"
    },
    {
      "id": "LL06",
      "category": "lower_limb",
      "main_action": "つま先立ち・踏み込み時のアキレス腱・足底の痛み",
      "sub_questions": [
        {"id": "q1", "text": "朝起きた最初の一歩で足底が痛みますか？", "options": ["はい", "いいえ"]},
        {"id": "q2", "text": "アキレス腱停止部に圧痛がありますか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "脛骨神経（足根管分枝）", "probability": 45, "condition": "足底内側しびれ・焼ける痛み"},
        {"nerve": "後脛骨筋腱内神経終末", "probability": 30, "condition": "内果後方圧痛"},
        {"nerve": "腓腹神経", "probability": 25, "condition": "アキレス腱外側痛"}
      ],
      "mechanism": "つま先立ちは足根管を最大圧迫肢位にし脛骨神経を絞扼する。足底筋膜の炎症はしばしば足根管症候群と共存。",
      "locked_regions": ["足根管", "距骨下関節", "腓腹筋-ヒラメ筋移行部"],
      "therapist_advice": "足底筋膜ストレッチ単独では限定的。足根管の減圧と距骨下関節可動性確保を併用。脛骨神経sliderを遠位から導入。"
    },
    {
      "id": "LL07",
      "category": "lower_limb",
      "main_action": "あぐら・股関節を開いた時のそけい部（付け根）の痛み",
      "sub_questions": [
        {"id": "q1", "text": "痛みは鋭痛ですか、詰まる感じですか？", "options": ["鋭痛", "詰まり感", "両方"]},
        {"id": "q2", "text": "大腿内側にしびれが走りますか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "閉鎖神経", "probability": 45, "condition": "大腿内側しびれ"},
        {"nerve": "腸骨鼠径神経／陰部大腿神経", "probability": 30, "condition": "鼠径部表層痛"},
        {"nerve": "大腿神経", "probability": 25, "condition": "大腿前面放散"}
      ],
      "mechanism": "股関節外転外旋で閉鎖孔の閉鎖神経が牽引される。内転筋群の起始部での絞扼もあり。腸骨鼠径神経は腹横筋腱膜下で絞扼されやすい。",
      "locked_regions": ["閉鎖孔", "内転筋群起始", "鼠径靭帯下"],
      "therapist_advice": "開脚ストレッチは症状悪化因子。閉鎖神経の神経床（内転筋管近位）リリースを優先。鼠径部手術歴がある場合は瘢痕絞扼を疑う。"
    },
    {
      "id": "L09",
      "category": "spine_lumbar",
      "main_action": "重い物を持ち上げた瞬間のぎっくり腰様の激痛",
      "sub_questions": [
        {"id": "q1", "text": "前屈位で物を持った瞬間でしたか？", "options": ["はい", "いいえ"]},
        {"id": "q2", "text": "下肢にも放散しますか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "硬膜／神経根スリーブ（急性髄核逸脱）", "probability": 50, "condition": "下肢放散あり"},
        {"nerve": "椎間関節包支配神経（後枝内側枝）", "probability": 30, "condition": "局所限局痛"},
        {"nerve": "胸腰筋膜神経終末", "probability": 20, "condition": "表層の筋筋膜性鋭痛"}
      ],
      "mechanism": "前屈位での急激な軸圧で椎間板内圧が急上昇し髄核後方移動が起こる。同時に椎間関節包が捕捉され、機械受容器の急激な過剰発火で腰部全体の防御性攣縮が発動する。",
      "locked_regions": ["腰椎椎間関節L4-S1", "多裂筋", "腰方形筋", "胸腰筋膜"],
      "therapist_advice": "急性期は愛護的ポジショニングを最優先。強い徒手療法は禁忌。神経症状陽性は画像評価。ゆっくりとした腹式呼吸で交感神経緊張を下げてから段階的介入を行うこと。"
    },
    {
      "id": "L10",
      "category": "spine_lumbar",
      "main_action": "前屈した状態から体を起こす（起立位への戻り）時の腰痛",
      "sub_questions": [
        {"id": "q1", "text": "途中で止まってしまう感じがありますか？", "options": ["はい", "いいえ"]},
        {"id": "q2", "text": "手で腰を支えないと起き上がれませんか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "多裂筋内神経（segmental nerve）", "probability": 45, "condition": "分節性深部痛"},
        {"nerve": "胸腰筋膜神経終末", "probability": 30, "condition": "広範な張り"},
        {"nerve": "椎間関節支配神経", "probability": 25, "condition": "伸展途中の鋭痛"}
      ],
      "mechanism": "前屈からの起立は多裂筋・脊柱起立筋の求心性収縮を要求するが、flexion relaxation現象の破綻により筋が持続発火し続け、筋紡錘からのγ系入力が侵害受容を増幅する（Colloca 2005）。",
      "locked_regions": ["多裂筋", "腰椎椎間関節", "胸腰筋膜"],
      "therapist_advice": "強制伸展はNG。多裂筋の低強度収縮再学習（quadruped position）とhip hingeパターンの再教育を優先。腹横筋との協調を取り戻す。"
    },
    {
      "id": "L11",
      "category": "spine_lumbar",
      "main_action": "長時間立ちっぱなしで出てくる腰の痛み",
      "sub_questions": [
        {"id": "q1", "text": "前屈や座位で軽減しますか？", "options": ["はい", "いいえ"]},
        {"id": "q2", "text": "腰椎が強く反っている自覚がありますか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "椎間関節支配神経（後枝内側枝）", "probability": 45, "condition": "伸展保持で漸増"},
        {"nerve": "腸腰筋内大腿神経", "probability": 30, "condition": "大腿前面への放散"},
        {"nerve": "馬尾（軽度狭窄）", "probability": 25, "condition": "下肢しびれ合併"}
      ],
      "mechanism": "立位保持は腰椎前弯を維持するため椎間関節への持続軸圧が発生する。腸腰筋の持続緊張は大腿神経を神経床内で圧迫し、馬尾は伸展位で脊柱管が狭窄する。",
      "locked_regions": ["腰椎椎間関節", "腸腰筋", "大腿直筋", "腓腹筋"],
      "therapist_advice": "椎間関節モビライゼーションより、腸腰筋リリースと骨盤前傾パターンの修正を優先。立位時の体重支持パターン（片足荷重癖）も評価する。"
    },
    {
      "id": "C05",
      "category": "spine_cervical",
      "main_action": "長時間のデスクワークで出てくる首〜肩甲上部の痛み",
      "sub_questions": [
        {"id": "q1", "text": "頭部が前方に出る姿勢ですか？", "options": ["はい", "いいえ"]},
        {"id": "q2", "text": "夕方になるほど悪化しますか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "後頭下筋群内の機械受容器／大後頭神経", "probability": 45, "condition": "後頭部圧迫感"},
        {"nerve": "副神経（上部僧帽筋）", "probability": 30, "condition": "肩甲上部の持続張り"},
        {"nerve": "肩甲背神経", "probability": 25, "condition": "肩甲内側縁痛"}
      ],
      "mechanism": "頭部前方位は後頭下筋群の持続等尺性収縮を強制し、高密度の筋紡錘（1g中36個）からの異常入力で頭頸部の位置覚エラーを生む（McPartland 1997）。副神経は僧帽筋上部の慢性過緊張で感作される。",
      "locked_regions": ["後頭下三角", "上部僧帽筋", "肩甲挙筋", "小胸筋"],
      "therapist_advice": "肩甲帯ストレッチ先行ではなく、後頭下筋群の愛護的リリースで位置覚を再調整。デスク環境（モニター高さ・肘支持）の指導を必ず併用。"
    },
    {
      "id": "C06",
      "category": "head_jaw",
      "main_action": "後頭部から側頭部・目の奥に広がる頭痛",
      "sub_questions": [
        {"id": "q1", "text": "頸部を動かすと頭痛が再現しますか？", "options": ["はい", "いいえ"]},
        {"id": "q2", "text": "片側性ですか？", "options": ["片側", "両側"]}
      ],
      "neural_candidates": [
        {"nerve": "大後頭神経（C2後枝）", "probability": 50, "condition": "後頭部起始の放散痛"},
        {"nerve": "三叉頸神経核（C1-C3収束）", "probability": 30, "condition": "前頭部・眼窩への関連痛"},
        {"nerve": "小後頭神経（C2-C3）", "probability": 20, "condition": "耳介後方痛"}
      ],
      "mechanism": "C1-C3求心線維は脊髄後角で三叉神経と収束し（trigeminocervical nucleus）、頸原性頭痛として前頭部・眼窩に関連痛を投射する（Bogduk 2009）。下頭斜筋の持続緊張が大後頭神経を絞扼。",
      "locked_regions": ["後頭下三角", "C1-C2", "C2-C3関節", "側頭筋"],
      "therapist_advice": "頭痛薬依存の患者には頸原性の可能性を必ず説明。C0-C1-C2の愛護的モビライゼーションと下頭斜筋リリース。片頭痛合併時は医療機関連携。"
    },
    {
      "id": "U10",
      "category": "upper_limb",
      "main_action": "投球のフォロースルー期の肩後方の痛み",
      "sub_questions": [
        {"id": "q1", "text": "減速期にズキッとした痛みが走りますか？", "options": ["はい", "いいえ"]},
        {"id": "q2", "text": "後方関節包の突っ張り感がありますか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "腋窩神経後枝（QLS）", "probability": 45, "condition": "後方深部痛＋小円筋萎縮兆候"},
        {"nerve": "肩甲上神経（棘窩切痕）", "probability": 35, "condition": "棘下筋選択的萎縮"},
        {"nerve": "後方関節包の自由神経終末", "probability": 20, "condition": "関節包限局圧痛"}
      ],
      "mechanism": "フォロースルー減速期は棘下筋・小円筋の強い遠心性収縮を要求し、QLSの腋窩神経後枝と棘窩切痕の肩甲上神経が動的に絞扼される。GIRD（glenohumeral internal rotation deficit）合併例で顕著。",
      "locked_regions": ["QLS", "棘窩切痕", "後方関節包", "肩甲胸郭関節"],
      "therapist_advice": "sleeper stretchの画一適用は避ける。腋窩神経のneural gliderと棘窩切痕周辺の軟部組織リリース優先。肩甲骨の上方回旋・後傾を再獲得してから投球復帰へ。"
    },
    {
      "id": "U11",
      "category": "upper_limb",
      "main_action": "腕を後ろに回した（水平伸展）時の肩前面痛",
      "sub_questions": [
        {"id": "q1", "text": "上腕二頭筋長頭腱部に圧痛がありますか？", "options": ["はい", "いいえ"]},
        {"id": "q2", "text": "鎖骨外側端に痛みがありますか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "外側胸筋神経（小胸筋下）", "probability": 40, "condition": "前面深部痛"},
        {"nerve": "上腕二頭筋長頭腱神経終末", "probability": 35, "condition": "結節間溝圧痛"},
        {"nerve": "鎖骨上神経（頸神経叢）", "probability": 25, "condition": "鎖骨外側痛"}
      ],
      "mechanism": "水平伸展は小胸筋・烏口腕筋・上腕二頭筋長頭を同時に伸張し、それらの支配神経および腱内神経終末を機械的に刺激する。肩前方関節包の伸張も加わる。",
      "locked_regions": ["小胸筋", "烏口突起", "結節間溝", "鎖骨外側"],
      "therapist_advice": "前方胸筋群ストレッチ単独は不十分。小胸筋下の神経床減圧と結節間溝の愛護的リリース。頸神経叢由来の除外のため頸椎上位の評価も併用。"
    },
    {
      "id": "U12",
      "category": "upper_limb",
      "main_action": "手指を伸ばした時の前腕外側・肘外側の痛み",
      "sub_questions": [
        {"id": "q1", "text": "中指を抵抗下で伸展すると肘外側に痛みが出ますか？", "options": ["はい", "いいえ"]},
        {"id": "q2", "text": "前腕外側にしびれがありますか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "橈骨神経深枝／後骨間神経（radial tunnel）", "probability": 50, "condition": "中指伸展試験陽性"},
        {"nerve": "外側前腕皮神経（筋皮神経終末）", "probability": 30, "condition": "前腕外側しびれ"},
        {"nerve": "C6-C7神経根", "probability": 20, "condition": "頸椎由来合併"}
      ],
      "mechanism": "長橈側手根伸筋・回外筋の反復収縮でFrohse腱弓が橈骨神経深枝を絞扼する。外側上顆炎として長期加療されがちだが本体は神経絞扼であることが多い（Rosenbaum 1999）。",
      "locked_regions": ["回外筋", "Frohse腱弓", "外側上顆", "頸椎C6"],
      "therapist_advice": "外側上顆への局所注射や伸筋群ストレッチの反復は逆効果になりうる。Frohse部の神経減圧と頸椎C6神経床の評価を同時に行うこと。"
    },
    {
      "id": "U13",
      "category": "upper_limb",
      "main_action": "手首を曲げ伸ばしした時の手指のしびれ・痛み",
      "sub_questions": [
        {"id": "q1", "text": "しびれは母指〜中指ですか、小指側ですか？", "options": ["母指〜中指", "小指側", "手背側"]},
        {"id": "q2", "text": "Phalenテスト（手関節最大屈曲）で再現しますか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "正中神経（手根管）", "probability": 50, "condition": "母指〜中指しびれ・Phalen陽性"},
        {"nerve": "尺骨神経（Guyon管）", "probability": 30, "condition": "小指側しびれ"},
        {"nerve": "橈骨神経浅枝", "probability": 20, "condition": "手背橈側しびれ"}
      ],
      "mechanism": "手関節最大屈曲・伸展は手根管内圧を数倍に上昇させ、正中神経の圧迫虚血を誘発する（Gelberman 1981）。Guyon管は尺側屈筋腱と豆状骨間で尺骨神経を絞扼。",
      "locked_regions": ["手根管", "Guyon管", "円回内筋", "頸椎C6-C8"],
      "therapist_advice": "装具固定と神経滑走訓練を併用。double crush除外のため頸椎〜胸郭出口の評価必須。夜間手首屈曲位睡眠の生活指導を添える。"
    },
    {
      "id": "LL08",
      "category": "lower_limb",
      "main_action": "ランニング・長距離歩行後の膝外側痛",
      "sub_questions": [
        {"id": "q1", "text": "痛みは膝外側の一点に限局しますか？", "options": ["はい", "いいえ"]},
        {"id": "q2", "text": "下り坂で悪化しますか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "外側大腿皮神経（遠位枝）", "probability": 40, "condition": "大腿外側全体のしびれ"},
        {"nerve": "総腓骨神経（腓骨頭部）", "probability": 35, "condition": "下腿外側しびれ合併"},
        {"nerve": "腸脛靭帯下の自由神経終末", "probability": 25, "condition": "膝外側一点限局痛"}
      ],
      "mechanism": "腸脛靭帯下には脂肪組織と自由神経終末が存在し、膝屈曲30°前後で大腿骨外側上顆上を摩擦する（ITB friction syndrome, Fairclough 2006）。総腓骨神経は腓骨頭で相対的に過伸展される。",
      "locked_regions": ["腸脛靭帯", "大腿筋膜張筋", "腓骨頭", "殿筋群"],
      "therapist_advice": "ITBの直接ストレッチは効果限定的。大腿筋膜張筋・中殿筋の神経筋再教育と腓骨頭可動性を優先。ランニングフォーム（over-striding）の評価を並行。"
    },
    {
      "id": "LL09",
      "category": "lower_limb",
      "main_action": "座っていると殿部深部が痛み、下肢にしびれが広がる",
      "sub_questions": [
        {"id": "q1", "text": "硬い椅子で特に悪化しますか？", "options": ["はい", "いいえ"]},
        {"id": "q2", "text": "股関節内旋・内転で症状が再現しますか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "坐骨神経（梨状筋下）", "probability": 50, "condition": "殿部深部圧痛＋内旋内転で再現"},
        {"nerve": "下殿神経／後大腿皮神経", "probability": 30, "condition": "大腿後面痛"},
        {"nerve": "陰部神経（Alcock管）", "probability": 20, "condition": "会陰部しびれ合併"}
      ],
      "mechanism": "梨状筋下で坐骨神経が絞扼されるdeep gluteal syndrome（Martin 2015）。長時間座位は梨状筋の持続圧迫＋坐骨結節周辺の循環障害を起こし末梢感作を増強する。",
      "locked_regions": ["梨状筋", "大坐骨孔", "仙結節靭帯", "Alcock管"],
      "therapist_advice": "梨状筋ストレッチ単独では不足。deep gluteal spaceの圧迫減圧と坐骨神経sliderを併用。座位姿勢（骨盤後傾・坐骨荷重）の修正を必須化。"
    },
    {
      "id": "LL10",
      "category": "lower_limb",
      "main_action": "歩行時の股関節前面（鼠径部）のつまり感・痛み",
      "sub_questions": [
        {"id": "q1", "text": "踵接地時に出ますか、立脚後期に出ますか？", "options": ["踵接地時", "立脚後期", "両方"]},
        {"id": "q2", "text": "股関節屈曲90°以上で痛みが増しますか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "大腿神経（腸腰筋内）", "probability": 45, "condition": "立脚後期の前面痛"},
        {"nerve": "陰部大腿神経大腿枝", "probability": 30, "condition": "鼠径部表層痛"},
        {"nerve": "股関節関節包前方の自由神経終末", "probability": 25, "condition": "深屈曲でimpingement"}
      ],
      "mechanism": "立脚後期の股関節伸展は腸腰筋内で大腿神経を動的に圧迫する。股関節前方インピンジメントでは関節包前方の機械受容器が過剰発火し防御性筋スパズムを誘発。",
      "locked_regions": ["腸腰筋", "股関節前方包", "鼠径靭帯下"],
      "therapist_advice": "股関節伸展ストレッチ先行は悪化要因。腸腰筋の神経床リリースと股関節後方滑りの回復が優先。歩行フォーム（立脚後期の骨盤前傾）を指導。"
    },
    {
      "id": "LL11",
      "category": "lower_limb",
      "main_action": "朝の一歩目の踵の痛み",
      "sub_questions": [
        {"id": "q1", "text": "数歩歩くと軽減しますか？", "options": ["はい", "いいえ"]},
        {"id": "q2", "text": "内果後方にTinel兆候（叩打でビリッと走る）がありますか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "外側足底神経第1枝（Baxter神経）", "probability": 45, "condition": "踵骨内側限局痛"},
        {"nerve": "脛骨神経（足根管）", "probability": 35, "condition": "Tinel陽性"},
        {"nerve": "内側踵骨枝", "probability": 20, "condition": "踵骨内側表層痛"}
      ],
      "mechanism": "Baxter神経は母趾外転筋と方形筋間で絞扼され、足底筋膜炎と誤診されがちだが実体は神経絞扼例が多い（Baxter 1984）。夜間の底屈位で神経が短縮し朝の伸張で症状が再現する。",
      "locked_regions": ["母趾外転筋", "足根管", "距骨下関節"],
      "therapist_advice": "足底筋膜ストレッチのみでは改善しない例で疑う。母趾外転筋の神経減圧と足根管評価を必ず行う。ナイトスプリントで底屈短縮を防ぐ生活指導を添える。"
    },
    {
      "id": "LL12",
      "category": "lower_limb",
      "main_action": "膝を最大伸展した時の膝後面の突っ張り・痛み",
      "sub_questions": [
        {"id": "q1", "text": "足関節背屈を加えると痛みが増しますか？", "options": ["はい", "いいえ"]},
        {"id": "q2", "text": "膝窩に腫瘤を触れますか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "脛骨神経（膝窩部）", "probability": 50, "condition": "背屈で増悪（SLR陽性）"},
        {"nerve": "総腓骨神経（腓骨頭）", "probability": 30, "condition": "下腿外側症状"},
        {"nerve": "膝関節後方関節包", "probability": 20, "condition": "膝窩腫瘤合併"}
      ],
      "mechanism": "膝伸展＋足関節背屈は坐骨神経〜脛骨神経の長軸滑走を要求し、膝窩で神経床が緊張する。Baker嚢腫合併例では後方関節包からの機械刺激が加わる。",
      "locked_regions": ["膝窩筋膜", "腓腹筋内側頭", "腓骨頭", "ハムストリングス停止"],
      "therapist_advice": "ハムストリングスストレッチより坐骨神経sliderを優先。膝窩の腫瘤触知時は画像評価を推奨。距骨下関節と足関節背屈の可動性確保を遠位から行う。"
    },
    {
      "id": "H02",
      "category": "head_jaw",
      "main_action": "目の奥〜こめかみに広がる片頭痛様の痛み",
      "sub_questions": [
        {"id": "q1", "text": "光・音過敏を伴いますか？", "options": ["はい", "いいえ"]},
        {"id": "q2", "text": "頸椎上部を動かすと再現・増悪しますか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "三叉神経第1枝（眼神経）／三叉頸神経核", "probability": 45, "condition": "眼窩〜前頭部痛＋光過敏"},
        {"nerve": "大後頭神経（C2後枝）", "probability": 35, "condition": "頸椎動作で再現"},
        {"nerve": "翼口蓋神経節（自律成分）", "probability": 20, "condition": "流涙・鼻閉合併"}
      ],
      "mechanism": "C1-C3求心線維と三叉神経は三叉頸神経核で収束し、頸部からの侵害入力が眼窩・前頭部への関連痛を生む。片頭痛患者の多くは頸原性要素を合併する（Watson 2014）。",
      "locked_regions": ["後頭下三角", "C1-C2", "側頭筋", "眼窩上神経出口"],
      "therapist_advice": "頭痛を純粋な片頭痛と決めつけず、頸原性要素を必ず評価。C0-C2の愛護的モビライゼーションと下頭斜筋リリースで多くの例が改善する。光・音過敏が強い場合は専門医連携。"
    },
    {
      "id": "H01",
      "category": "head_jaw",
      "main_action": "口を大きく開けた時・咀嚼時の顎まわりの痛み",
      "sub_questions": [
        {"id": "q1", "text": "開口時にカクッと音がしますか？", "options": ["はい", "いいえ"]},
        {"id": "q2", "text": "側頭部やこめかみに痛みが広がりますか？", "options": ["はい", "いいえ"]}
      ],
      "neural_candidates": [
        {"nerve": "三叉神経第3枝（下顎神経・耳介側頭神経）", "probability": 50, "condition": "側頭部〜耳前部放散"},
        {"nerve": "顔面神経（側頭筋膜下）", "probability": 25, "condition": "顔面筋の過緊張"},
        {"nerve": "C2-C3後枝（頸原性関与）", "probability": 25, "condition": "後頭部痛合併"}
      ],
      "mechanism": "開口動作は顎関節円板の滑走を要求し、耳介側頭神経が関節後方で機械刺激を受ける。頭部前方位姿勢は舌骨上筋群を介して顎関節に持続ストレスを与え、C1-C3からの下行性疼痛調節を感作する。",
      "locked_regions": ["顎関節", "側頭筋", "咬筋", "後頭下筋群", "C1-C3"],
      "therapist_advice": "顎関節単独の介入では限定的。頸椎上部（C0-C3）の評価を必ず併用。頭部前方位の姿勢矯正と咬筋・側頭筋の愛護的リリース、三叉頸神経核への下行性入力を意識した頸椎モビライゼーションを併用。"
    }
  ],
  "scoring_notes": "各サブ質問の回答で該当conditionにマッチした神経の確率に+5〜+15%重み付け、非マッチで-5%。最終Top3を降順表示。合計が100%を超える場合は正規化せず独立確率として扱う。"
}
;