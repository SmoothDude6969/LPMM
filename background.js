const URL_MAP = {
  "||miniblox.*audio/music/blank.webm": "https://github.com/SmoothDude6969/LPMM/blob/main/Emptiness%20Machine-%20Linkin%20Park.mp3",
  "||miniblox.*audio/music/earth.webm": "https://github.com/SmoothDude6969/LPMM/blob/main/Heavy%20Is%20the%20Crown%20(Official%20Audio)%20-%20Linkin%20Park.mp3",
  "||miniblox.*audio/music/eclipse.webm": "https://github.com/SmoothDude6969/LPMM/blob/main/In%20The%20End%20%5BOfficial%20HD%20Music%20Video%5D%20-%20Linkin%20Park%20(1).mp3",
  "||miniblox.*audio/music/firefly.webm": "https://github.com/SmoothDude6969/LPMM/blob/main/Numb%20(Official%20Music%20Video)%20%5B4K%20UPGRADE%5D%20%20Linkin%20Park.mp3",
  "||miniblox.*audio/music/hellcat.webm": "https://github.com/SmoothDude6969/LPMM/blob/main/Up%20From%20The%20Bottom%20(Official%20Music%20Video)%20-%20Linkin%20Park.mp3",
  "||miniblox.*audio/music/invincible.webm": "https://github.com/SmoothDude6969/LPMM/blob/main/among-us-role-reveal-sound.mp3",
  "||miniblox.*audio/music/lets_go.webm": "https://github.com/SmoothDude6969/LPMM/blob/main/among-us-role-reveal-sound.mp3",
  "||miniblox.*audio/music/linked.webm": "https://github.com/SmoothDude6969/LPMM/blob/main/among-us-role-reveal-sound.mp3",
  "||miniblox.*audio/music/my_heart.webm": "https://github.com/SmoothDude6969/LPMM/blob/main/among-us-role-reveal-sound.mp3",
  "||miniblox.*audio/music/nekozilla.webm": "https://github.com/SmoothDude6969/LPMM/blob/main/among-us-role-reveal-sound.mp3",
  "||miniblox.*audio/music/popsicle.webm": "https://github.com/SmoothDude6969/LPMM/blob/main/among-us-role-reveal-sound.mp3",
  "||miniblox.*audio/music/seven.webm": "https://github.com/SmoothDude6969/LPMM/blob/main/among-us-role-reveal-sound.mp3",
  "||miniblox.*audio/music/skyhigh.webm": "https://github.com/SmoothDude6969/LPMM/blob/main/among-us-role-reveal-sound.mp3",
};

let rules = [];
let idx = 1;

for (const [src, dst] of Object.entries(URL_MAP)) {
  rules.push({
    "id": idx++,
    "action": {
      "type": "redirect",
      "redirect": { "url": dst }
    },
    "condition": {
      "urlFilter": src,
      "resourceTypes": src.endsWith(".otf") ? ["font"] : ["image"]
    }
  });
}

chrome.declarativeNetRequest.updateDynamicRules(
  {
    addRules: rules,
    removeRuleIds: rules.map(rule => rule.id)
  },
  () => {
    if (chrome.runtime.lastError) {
      console.error("Error updating:", chrome.runtime.lastError);
    } else {
      console.log("Rules updated");
    }
  }
);






