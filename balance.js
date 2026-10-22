// Endgame_aScene 밸런스 테이블
// balance.html에서 수정 → '저장'하면 같은 브라우저의 게임에 바로 적용, 'balance.js 내보내기'로 이 파일을 교체하면 기본값이 됨
window.BALANCE_DEFAULT = {
  "cap": { "hp": 400, "atk": 16, "rate": 0.55, "range": 48, "spd": 170, "revive": 15, "regen": 6 },
  "base": { "hp": 2000 },
  "food": { "start": 50, "max": 300 },
  "shield": { "cd": 20, "dmg": 60, "dist": 480 },
  "thunder": { "cd": 40, "dmg": 110, "stun": 1.5, "front": 480, "back": 120 },
  "gaunt": { "need": 100, "pct": 50, "bossPct": 20 },
  "boss": { "shieldPct": 75, "bonus": 100 },
  "units": [
    { "id": "hawkeye",    "name": "호크아이",        "cls": "R", "cost": 5,   "cd": 2.5, "hp": 45,  "atk": 9,  "rate": 1.0,  "range": 250, "spd": 70,  "aoe": 0,  "slow": 0, "multi": 0, "unlock": 1 },
    { "id": "thor",       "name": "토르",            "cls": "W", "cost": 10,  "cd": 4,   "hp": 130, "atk": 14, "rate": 0.9,  "range": 36,  "spd": 75,  "aoe": 0,  "slow": 0, "multi": 0, "unlock": 1 },
    { "id": "ironman",    "name": "아이언맨",        "cls": "R", "cost": 20,  "cd": 5,   "hp": 120,  "atk": 16, "rate": 0.7,  "range": 230, "spd": 95,  "aoe": 0,  "slow": 0, "multi": 0, "unlock": 1 },
    { "id": "warmachine", "name": "워머신",          "cls": "W", "cost": 30,  "cd": 7,   "hp": 300, "atk": 5,  "rate": 0.2,  "range": 90,  "spd": 60,  "aoe": 0,  "slow": 0, "multi": 0, "unlock": 2 },
    { "id": "hulk",       "name": "헐크",            "cls": "W", "cost": 50,  "cd": 12,  "hp": 700, "atk": 45, "rate": 1.4,  "range": 42,  "spd": 62,  "aoe": 70, "slow": 0, "multi": 0, "unlock": 2 },
    { "id": "spiderman",  "name": "스파이더맨",      "cls": "R", "cost": 30,  "cd": 7,   "hp": 170, "atk": 14, "rate": 0.7,  "range": 190, "spd": 100, "aoe": 0,  "slow": 2.5, "multi": 0, "unlock": 3 },
    { "id": "strange",    "name": "닥터 스트레인지", "cls": "R", "cost": 50,  "cd": 12,  "hp": 180, "atk": 40, "rate": 1.5,  "range": 280, "spd": 65,  "aoe": 90, "slow": 0, "multi": 0, "unlock": 3 },
    { "id": "panther",    "name": "블랙팬서",        "cls": "W", "cost": 30,  "cd": 7,   "hp": 240, "atk": 20, "rate": 0.6,  "range": 34,  "spd": 115, "aoe": 0,  "slow": 0, "multi": 0, "unlock": 4 },
    { "id": "wanda",      "name": "스칼렛 위치",     "cls": "R", "cost": 100, "cd": 20,  "hp": 280, "atk": 22, "rate": 0.4, "range": 300, "spd": 60,  "aoe": 0,  "slow": 0, "multi": 4, "unlock": 4 }
  ],
  "foes": {
    "outrider": { "name": "아웃라이더",        "hp": 95,   "atk": 10, "rate": 0.8, "range": 30,  "spd": 80, "food": 2,  "gauge": 0.4, "aoe": 0 },
    "chitauri": { "name": "치타우리",          "hp": 70,   "atk": 11, "rate": 1.2, "range": 190, "spd": 55, "food": 3,  "gauge": 0.4, "aoe": 0 },
    "brute":    { "name": "치타우리 고릴라",   "hp": 480,  "atk": 32, "rate": 1.5, "range": 42,  "spd": 42, "food": 14, "gauge": 1.5,  "aoe": 0 },
    "cull":     { "name": "컬 옵시디언",       "hp": 2400, "atk": 14, "rate": 1.6, "range": 60,  "spd": 30, "food": 60, "gauge": 6,   "aoe": 60 },
    "proxima":  { "name": "프록시마 미드나잇", "hp": 1100, "atk": 55, "rate": 1.0, "range": 72,  "spd": 55, "food": 60, "gauge": 6,   "aoe": 0 },
    "corvus":   { "name": "코르버스 글레이브", "hp": 1300, "atk": 60, "rate": 0.9, "range": 64,  "spd": 70, "food": 60, "gauge": 6,   "aoe": 0 },
    "ebony":    { "name": "에보니 모",         "hp": 1100, "atk": 28, "rate": 1.4, "range": 260, "spd": 40, "food": 60, "gauge": 6,   "aoe": 50, "pushCd": 8, "push": 140, "pushRange": 260 },
    "thanos":   { "name": "타노스",            "hp": 4000, "atk": 45, "rate": 1.8, "range": 80,  "spd": 12, "food": 0,  "gauge": 0,   "aoe": 70, "slamCd": 9, "slamDmg": 45, "slamRange": 220, "slamPush": 50 }
  },
  "stages": [
    { "name": "STAGE 1", "sub": "무너진 기지",      "foodRate": 2,   "shipHp": 2000, "int0": 3.0, "int1": 1.8, "mob": 1,      "foodMul": 1,      "outrider": 1, "chitauri": 0, "brute": 0, "boss": "cull",    "bossTime": 70, "bossShip": 60 },
    { "name": "STAGE 2", "sub": "치타우리 강하",    "foodRate": 2.2, "shipHp": 13000, "int0": 3.0, "int1": 1.8, "mob": 1.1,    "foodMul": 1.1,    "outrider": 3, "chitauri": 2, "brute": 0, "boss": "proxima", "bossTime": 70, "bossShip": 60 },
    { "name": "STAGE 3", "sub": "지상군 총공세",    "foodRate": 2.5, "shipHp": 15000, "int0": 3.0, "int1": 1.8, "mob": 1.21,   "foodMul": 1.21,   "outrider": 3, "chitauri": 2, "brute": 1, "boss": "corvus",  "bossTime": 70, "bossShip": 60 },
    { "name": "STAGE 4", "sub": "블랙 오더",        "foodRate": 2.8, "shipHp": 17500, "int0": 3.0, "int1": 1.8, "mob": 1.331,  "foodMul": 1.331,  "outrider": 4, "chitauri": 3, "brute": 1, "boss": "ebony",   "bossTime": 70, "bossShip": 60 },
    { "name": "FINAL",   "sub": "어벤져스, 어셈블", "foodRate": 3,   "shipHp": 0,    "int0": 4.2, "int1": 2.8, "mob": 1.4641, "foodMul": 1.4641, "outrider": 3, "chitauri": 3, "brute": 1, "boss": "thanos",  "bossTime": 15, "bossShip": 0 }
  ],
  "final": { "orderGap": 25 }
};
