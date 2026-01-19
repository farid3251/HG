const fs = require('fs');

// Parse the Drive file list from the log
const driveFileList = `1 - Meditation Module Overview.mp4|13GJBH15ywwgbjFrn-1q0xqjQbCeZUJzd
2 - What is Meditation..mp4|1Uwy42L5YTg58ZW6rmMFf2j1Jnb6P4bj8
2.1 - Nadi Shuddhi (Meditation).mp4|1G45xoKfOZKhbeoqmj8Owi__gNYE2dkZR
2.2 - Anuloma Viloma (Meditation).mp4|1MpSQARFemtTRkzwm2qaYUZ2D2gp5H_FL
2.3 - Prana Shuddhi (Meditation).mp4|1i-CakEz9nddvoblV0fQBPtTbefgm2DRE
3 - History of Meditation.mp4|193pGv3FkNQuHAjlxDchJHTiXFC9_DvgS
4 - Different Meditative Styles.mp4|1hgi6agYLM6x7-hux0eLtUzR_R5ayKklT
4.1 - Following the Breath (Meditation).mp4|1A99jEc_r0rIx8PruHyO7jygrl2Zl9BtP
5 - Science of Meditation.mp4|1_tS8k49x7-lvMqRXhkKwbcVxpMbEKPfu
5.1 - Posture (Meditation).mp4|11ogqmZv7UtNLLDd9HLLvWBg-mYO8qEVf
6 - Metaphysics of Meditation.mp4|1ff9FL-S8LtIPXntpZSPjb_kEUfEyyRvC
1 - The Nature of Self.mp4|19h17owo_ugJVlGWqNIwbcSR-YwTK12S7
1.1 - Shanmukhi Mudra.mp4|1T8Btla8GjLeNp3MnWrwP9J50gcMGFiC1
2 - Panchakosha Theory.mp4|1vruZ1LDr-ySWKFyw_mMJWWe61SPp39P4
2.1 - Namaste Expansion.mp4|16STEPQ8ZEuYQ5wovcq0WQhKs_BpeDYYO
2.2 - Energy Healing.mp4|1bltYn9-fslLgSOukUxgP_ZYvovu5WFlw
2.3 - Unstruck Sound.mp4|1IoFXuBlTWbFXXxqDqoFaSMl_E0UfXCqp
3 - Confidence vs. Ego.mp4|14nldhXSzMe7GswhH0ZsWKENEZxAprvbM
3.1 - What is Self..mp4|1qBqRnJRkiJZrir8xHPwTFjcmU-4_Hlf2
3.2 - Neti Neti.mp4|1Tv82bFrgsFgS0uyNMHNoR5kf0OPhMhR_
1 - Vedic Psychology.mp4|1ZyLCvl_hqTw7CpDH2TEXSSejNB5VtXWw
2 - Working with Samskaras.mp4|1jF4LI5Sj1xL1LDIMqBsLljAdGwIXrAQH
2.1 - Yoga Nidra.mp4|1kdkjoIzx5vyBfn4uAsSnfOg5igEIJOUP
3 - Coaching vs. Therapy.mp4|19T5ykHM7f7cojTpcviqPYsSx0s3vLyD7
1 - Dukkha.mp4|18TNp3vJoGJFrWlKQqUtwF-YF0yytgeEx
1.1 - Raga and Dvesha (Attraction & Repulsion).mp4|1vtfcgTCyMNmChxMMtQehUADKumjHgPdL
2 - Dharma.mp4|1vbugFqNuSEEnuN0JMf-_Ri3n0fy8hf_K
3 - Karma.mp4|1m2W1vhXgbeyMFPGPu_shZr1wm7E2iRs-
3.1 - Uijayi Pranayama.mp4|1YDbiD1R3sSZ4x00etSKnZFoLY7RY16fh
1 - Knowledge and the Mind.mp4|188XcFNpru93vuALJOZJnmWrvO_m0CrbW
1.1 - Activating Ajna Chakra (Charging the Laser Beam).mp4|1FtsVENQwxL8GEp0zrTdgBrQUYlc405jQ
2 - Vidya & Jnana.mp4|1RzfgsRGx5SlF3Sv-LARokIChdjI4hy39
1 - The Nature of Mind.mp4|1FydVG7g93H9zzsDqtLLViKPP_bgSntD3
2 - System of Mind.mp4|1Che1eQZBJOkRxS_WMEkq3EdG83C7HLyK
2.1 - Rotating Sound Awareness.mp4|1M_TjkvHg4kT58HBd-lu33Albm_Dl2KGm
2.2 - Notice Faculty of Hearing.mp4|1vzuA-kX2nBRh2On0JCcSCoo7fz8MNGAy
3 - Intro to Mantra Practice.mp4|1HjYfsdDa2_-6fegP65lX05KNKfKnLrTx
3.1 - Japa.mp4|1Zi8mlL12S2ahc2yl3Hudijq60Zw3iXWy
1 - Karma Fal.mp4|1XBc5Qda2kAmrWHl2rvpokxr44cUe-Lle
2 - Origin of Motivation.mp4|1RiRN7llHpASLNxgMvAmIca52itxYBkR_
2.1 - Trataka (Fixed Point Gazing).mp4|1FnLLvzj0GxGGBQMmEFEyqxHhyt3vWsIu
2.2 - Yantra (Internal Trataka).mp4|1_M66-LPFGdxSf_l7qKIKtNS6h-j6R3BH
3 - Sangha.mp4|1ZbeUq-DjRHjPYEXbnMeTnfAZkVJ1tIt3
4 - Shuddhi.mp4|1Ce8xC8_VztL24yV9q70N11N9Iqfk-uft
4.1 - Kapalbhati (Breath of Fire).mp4|1IX3f-fmNPUp3TTcTuSvTLbXsOGSmZIfT
5 - Satya.mp4|1hEWoyzqwYzy-MjOmtlnR_VEW54wBQ-BD
5.1 - Replace 'I am' with 'My mind says'.mp4|1Aqr0LR6XHI8yqEK68EIeYjFT2qwbR2-6
6 - Reframing Goals to Actions.mp4|1hGBFaSoQjeojmt0fvMXATCAyMk6VpYqa`;

// Create a map of filename -> driveId
const driveMap = {};
driveFileList.split('\n').forEach(line => {
  const [filename, driveId] = line.split('|');
  driveMap[filename.trim()] = driveId.trim();
});

// Load video_data.json
const videoData = JSON.parse(fs.readFileSync('./video_data.json', 'utf8'));

// Update each video with its Drive ID
let matched = 0;
let notFound = [];

videoData.forEach(video => {
  const filename = video.filename;
  if (driveMap[filename]) {
    video.driveId = driveMap[filename];
    matched++;
  } else {
    notFound.push(filename);
  }
});

// Save updated video_data.json
fs.writeFileSync('./video_data.json', JSON.stringify(videoData, null, 2), 'utf8');

console.log(`✅ Matched ${matched} videos`);
if (notFound.length > 0) {
  console.log(`⚠️  Not found (${notFound.length}):`);
  notFound.forEach(f => console.log(`  - ${f}`));
} else {
  console.log('🎉 All videos matched!');
}
