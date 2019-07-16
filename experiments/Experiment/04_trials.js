// In this file you can specify the trial data for your experiment
var category_verb = '';
if(coin == "Vertrauenswürdigkeit") {
  category_verb = "vertrauenswürdig";
} else {
  category_verb = "dominant";
}

const trial_info = {
    rate_pers: [
      {
        optionLeft: "Trifft gleichermaßen auf Menschen und Tiere zu",
        optionRight: "Trifft nur auf Menschen zu",
        QUD: "Wie bewerten sie das folgende Merkmal?",
        question: "Dominanz",

      },
      {
        optionLeft: "Trifft gleichermaßen auf Menschen und Tiere zu",
        optionRight: "Trifft nur auf Menschen zu",
        QUD: "Wie bewerten sie das folgende Merkmal?",
        question: "Vertrauenswürdigkeit",

      },
      {
        optionLeft: "Trifft gleichermaßen auf Menschen und Tiere zu",
        optionRight: "Trifft nur auf Menschen zu",
        QUD: "Wie bewerten sie das folgende Merkmal?",
        question: "Extrovertiertheit",

      },
      {
        optionLeft: "Trifft gleichermaßen auf Menschen und Tiere zu",
        optionRight: "Trifft nur auf Menschen zu",
        QUD: "Wie bewerten sie das folgende Merkmal?",
        question: "Höflichlichkeit",

      },
      {
        optionLeft: "Trifft gleichermaßen auf Menschen und Tiere zu",
        optionRight: "Trifft nur auf Menschen zu",
        QUD: "Wie bewerten sie das folgende Merkmal?",
        question: "Gewissenhaftigkeit",

      },
      {
        optionLeft: "Trifft gleichermaßen auf Menschen und Tiere zu",
        optionRight: "Trifft nur auf Menschen zu",
        QUD: "Wie bewerten sie das folgende Merkmal?",
        question: "Geduld",

      },
      {
        optionLeft: "Trifft gleichermaßen auf Menschen und Tiere zu",
        optionRight: "Trifft nur auf Menschen zu",
        QUD: "Wie bewerten sie das folgende Merkmal?",
        question: "Selbstsicherheit",

      },
      {
        optionLeft: "Trifft gleichermaßen auf Menschen und Tiere zu",
        optionRight: "Trifft nur auf Menschen zu",
        QUD: "Wie bewerten sie das folgende Merkmal?",
        question: "Sensibilität",

      },
      {
        optionLeft: "Trifft gleichermaßen auf Menschen und Tiere zu",
        optionRight: "Trifft nur auf Menschen zu",
        QUD: "Wie bewerten sie das folgende Merkmal?",
        question: "Agressivität",

      },
      {
        optionLeft: "Trifft gleichermaßen auf Menschen und Tiere zu",
        optionRight: "Trifft nur auf Menschen zu",
        QUD: "Wie bewerten sie das folgende Merkmal?",
        question: "Freundlichkeit",

      },
    ],
    rate_face: [

    ],
};

var images_upright = [];
var images_inverted = [];

for(i = 1; i <=36; i++) {
  images_inverted.push({
      optionLeft: "Gar nicht " + category_verb + "",
      optionRight: "Sehr " + category_verb + "",
      picture: "images/inverted/Stimulus-Inverted-Black" + i + ".jpg",
      question: "Wie " + category_verb + " ist dieses Gesicht?",
      pictureFormat: "Inverted",
      color: "Black",
      category: coin
  });
  images_inverted.push({
      optionLeft: "Gar nicht " + category_verb + "",
      optionRight: "Sehr " + category_verb + "",
      picture: "images/inverted/Stimulus-Inverted-White" + i + ".jpg",
      question: "Wie " + category_verb + " ist dieses Gesicht?",
      pictureFormat: "Inverted",
      color: "White",
      category: coin
  });
  images_upright.push({
      optionLeft: "Gar nicht " + category_verb + "",
      optionRight: "Sehr " + category_verb + "",
      picture: "images/upright/Stimulus-Upright-Black" + i + ".jpg",
      question: "Wie " + category_verb + " ist dieses Gesicht?",
      pictureFormat: "Upright",
      color: "Black",
      category: coin
  });
  images_upright.push({
      optionLeft: "Gar nicht " + category_verb + "",
      optionRight: "Sehr " + category_verb + "",
      picture: "images/upright/Stimulus-Upright-White" + i + ".jpg",
      question: "Wie " + category_verb + " ist dieses Gesicht?",
      pictureFormat: "Upright",
      color: "White",
      category: coin
  });
}

shuffle(images_upright);
shuffle(images_inverted);
if(balance == 'InvFirst') {
  trial_info.rate_face = images_inverted.concat(images_upright);
} else {
  trial_info.rate_face = images_upright.concat(images_inverted);
}
shuffle(trial_info.rate_pers);
