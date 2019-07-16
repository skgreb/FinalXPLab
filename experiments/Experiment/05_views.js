// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://babe-project.github.io/babe-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

var category = coin;
var category_verb = '';
if(coin == "Vertrauenswürdigkeit") {
  category_verb = "vertrauenswürdig";
} else {
  category_verb = "dominant";
}

var textStudy2 = '';
if(balance == 'InvFirst') {
  textStudy2 = 'Sie sehen zunächst auf den Kopf gestellte Fotos, und dann aufrechte.'
} else {
  textStudy2 = 'Sie sehen zunächst aufrechte Fotos, und dann auf den Kopf gestellte.'
}

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = babeViews.view_generator("intro",{
    trials: 1,
    name: 'intro',
    title: 'Wilkommen',
    // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
    text:   `
            <br />
            <br />
            Danke, dass Sie an diesem Experiment teilnehmen.
            <br />
            <br />
            Das Experiment besteht aus zwei Teilen. Im ersten Teil werden Ihnen bestimmte
            Persönlichkeitsmerkmale gezeigt. Es ist Ihre Aufgabe auf einer Skala von
            1-9 zu bewerten, inwieweit das Merkmal rein menschlich ist, bzw. gleich auf Menschen
            und Tiere zutrifft.
            <br />
            <br />
            Im zweiten Teil sehen Sie Bilder von Gesichtern. Hier sollen Sie auf einer Skala von 1-7 bewerten,
            wie weit ein bestimmtes Persönlichkeitsmerkmal auf das Gesicht zutrifft:
            `,
   buttonText: 'Beginnen Sie das Experiment'
});

// For most tasks, you need instructions views
const instructions = babeViews.view_generator("instructions",{
    trials: 1,
    name: 'instrucions',
    title: 'Anleitung zum ersten Teil',
    text:  `In diesem Teil des Experiments sehen Sie ein Persönlichkeitsmerkmal.
            <br />
            Es ist Ihre Aufgabe auf einer Skala von 1 bis 9 zu bewerten, inwieweit das Merkmal
            nur auf Menschen oder gleichermaßen auf Menschen und Tiere zutrifft.
            1 steht hier für 'Trifft gleichermaßen auf Menschen und Tiere zu'
            und 9 steht hier für 'Trifft nur auf Menschen zu'.
            <br />
            <br />
            Wenn Sie bereit sind, drücken Sie bitte auf Start:`,
    buttonText: 'Start'
});

const instructions_main = babeViews.view_generator("instructions",{
    trials: 1,
    name: 'instrucions',
    title: 'Anleitung zum zweiten Teil',
    text:  `In diesem Teil des Experiments werden Ihnen Fotos von Gesichtern gezeigt.
            <br />
            Es ist Ihre Aufgabe auf einer Skala von 1-7 zu bewerten, inwieweit das
            Persönlichkeitsmerkmal <strong>'`+ category +`'</strong> auf das Gesicht zutrifft.
            <br/>
             1 steht hier für 'Gar nicht ` + category_verb + `',
            <br/>
             7 steht für 'Sehr ` + category_verb + `'.
             <br/>
             ` + textStudy2 + `
             <br />
            Wenn Sie bereit sind, drücken Sie bitte auf Start:`,
    buttonText: 'Start'
});


// In the post test questionnaire you can ask your participants addtional questions
const post_test = babeViews.view_generator("post_test",{
    trials: 1,
    name: 'post_test',
    title: 'Weitere Informationen',
    text: 'Bitte beantworten sie die folgenden Fragen. Felder, die mit einem * markiert sind, sind Pflicht und müssen ausgefüllt werden um das Experiment zu beenden.',

    // You can change much of what appears here, e.g., to present it in a different language, as follows:
     buttonText: 'Weiter',
     age_question: 'Alter',
     gender_question: 'Geschlecht',
     gender_male: 'männlich',
     gender_female: 'weiblich',
     gender_other: 'divers',
    // edu_question: 'Höchster Bildungsabschluss',
    // edu_graduated_high_school: 'Abitur',
    // edu_graduated_college: 'Hochschulabschluss',
    // edu_higher_degree: 'Universitärer Abschluss',
     languages_question: 'Muttersprache',
     languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
     comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = babeViews.view_generator("thanks", {
    trials: 1,
    name: 'thanks',
    title: 'Vielen Dank, dass sie an dem Experiment teilgenommen haben.',
    prolificConfirmText: 'Experiment beenden.'
});

/** trial (babe's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _babe (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://babe-project.github.io/babe-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://babe-project.github.io/babe-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://babe-project.github.io/babe-docs/01_designing_experiments/01_template_views/#trial-views
*/

const rate_personality = babeViews.view_generator('rating_scale2', {
    trials: trial_info.rate_pers.length,
    // name should be identical to the variable name
    name: 'rate_personality',
    data: trial_info.rate_pers,
});

const rate_face = babeViews.view_generator('rating_scale', {
    trials: trial_info.rate_face.length,
    // name should be identical to the variable name
    name: 'rate_face',
    data: trial_info.rate_face,
});

// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
//, self_paced_reading and self_paced_reading_rating_scale
