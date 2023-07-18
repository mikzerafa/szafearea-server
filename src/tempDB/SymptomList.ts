import { ThreeSymptomModel } from "../Enums/three-symptom-model";

export type Symptom = {
  name: string;
  description: string;
  type: ThreeSymptomModel;
  keys: string[];
  copingStrategies: SchizophreniaCopingStrategies[];
  helpMessage: string;
};





export enum SchizophreniaCopingStrategies {
    MEDS = "meds",
    THERAPY = "therapy",
    MEDITATION = "meditation",
    SOCIAL = 'social',
    EXERCISE = "exercise",
    CLEANLINESS = "cleanliness",
    EDUCATION = "education",
    ROUTINE = "routine",
    SLEEP_HYGIENE = "sleep hygiene"
  }

const SymptomList: Symptom[] = [
{
    name: "Delusions",
    description: "False beliefs that are not based in reality.",
    type: ThreeSymptomModel.Positive,
    keys: ["false beliefs", "reality", "psychosis", "god"],
    copingStrategies: [SchizophreniaCopingStrategies.MEDS, SchizophreniaCopingStrategies.THERAPY],
    helpMessage: "If you are feeling overwhelmed by thoughts or beliefs that don't seem to make sense, try to take a step back and take deep breaths. Remember that thoughts are not always facts, and it's important to stay grounded in reality. Don't hesitate to reach out to someone you trust for support, and remember that you are not alone in this experience."
    }, 
    {
    name: "Hallucinations",
    description: "Hearing, seeing, or feeling things that are not really there.",
    type: ThreeSymptomModel.Positive,
    keys: ["perceptions", "sensory experiences", "psychosis", "god"],
    copingStrategies: [SchizophreniaCopingStrategies.MEDS, SchizophreniaCopingStrategies.THERAPY],
    helpMessage: "If you are experiencing hallucinations, it can be scary and confusing. Try to focus on your breathing and grounding yourself in the present moment. Remember that the things you are seeing or hearing are not real, and you are not alone in this experience. Don't hesitate to reach out to someone you trust for support"
    },
    {
    name: "Disorganized speech",
    description: "Difficulty organizing thoughts or expressing them coherently.",
    type: ThreeSymptomModel.Positive,
    keys: ["word salad", "loose associations", "thought disorder", "ego"],
    copingStrategies: [SchizophreniaCopingStrategies.THERAPY],
    helpMessage: "If you are struggling with disorganized speech, it can be frustrating and difficult to communicate. Take deep breaths and try to slow down your thoughts before speaking. Remember that it's okay to take breaks and ask for clarification if needed. You are not alone in this experience, and there is no shame in seeking support."
    },
    {
    name: "Catatonia",
    description: "Unresponsiveness or immobility, or excessive and uncontrollable movement.",
    type: ThreeSymptomModel.Positive,
    keys: ["movement", "immobility", "psychomotor", "ego"],
    copingStrategies: [SchizophreniaCopingStrategies.MEDS, SchizophreniaCopingStrategies.THERAPY],
    helpMessage: "If you are feeling stuck or frozen in your movements due to catatonia, try to focus on your breathing and take small steps towards movement. Remember that it's okay to take breaks and rest when needed. Don't hesitate to reach out to someone you trust for support"
    },
    {
    name: "Social withdrawal",
    description: "Reduced interest in social interactions or activities, or lack of emotional response.",
    type: ThreeSymptomModel.Negative,
    keys: ["isolation", "loneliness", "depression", "ego"],
    copingStrategies: [SchizophreniaCopingStrategies.THERAPY],
    helpMessage: "If you are feeling like withdrawing from social situations, it's okay to take some time for yourself. However, remember that isolation can be harmful to your mental health. Try to reach out to someone you trust for support, even if it's just a brief conversation. Remember that you are valued and cared for, and there is no shame in seeking connection."
    },
    {
    name: "Apathy",
    description: "Lack of motivation or interest in activities, often accompanied by reduced emotional expression.",
    type: ThreeSymptomModel.Negative,
    keys: ["lack of interest", "passivity", "depression", "ego"],
    copingStrategies: [SchizophreniaCopingStrategies.THERAPY],
    helpMessage: "If you are experiencing apathy, it can be difficult to find motivation or interest in activities. Try setting small goals for yourself and celebrating your accomplishments. Don't hesitate to reach out to a therapist for support and guidance."     
    },
    {
    name: "Anhedonia",
    description: "Inability to experience pleasure or joy from activities that are normally enjoyable.",
    type: ThreeSymptomModel.Negative,
    keys: ["lack of pleasure", "depression", "ego"],
    copingStrategies: [SchizophreniaCopingStrategies.THERAPY],
    helpMessage: "If you are unable to experience pleasure from activities that are normally enjoyable, it can be frustrating and isolating. Remember that your feelings are valid, and don't hesitate to reach out to a therapist for support and guidance."             
    },
    {
    name: "Poor memory",
    description: "Difficulty remembering information or events, or impaired ability to learn new things.",
    type: ThreeSymptomModel.Cognitive,
    keys: ["forgetfulness", "amnesia", "dementia", "god"],
    copingStrategies: [SchizophreniaCopingStrategies.MEDS, SchizophreniaCopingStrategies.THERAPY],
    helpMessage: "If you are experiencing poor memory, it can be frustrating and difficult to navigate daily life. Try to use memory aids like sticky notes or reminders on your phone. Don't hesitate to reach out to a therapist for support and guidance.\n"
    
    },
    {
    name: "Poor attention",
    description: "Difficulty focusing or sustaining attention on tasks or activities.",
    type: ThreeSymptomModel.Cognitive,
    keys: ["distractibility", "attention deficit", "ADHD", "ego"],
    copingStrategies: [SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.EXERCISE],
    helpMessage: "If you are experiencing poor attention, it can be difficult to focus on tasks or activities. Try breaking tasks into smaller, more manageable steps. Don't hesitate to reach out to a therapist for support and guidance.\n"
    
    },
    {
    name: "Impaired decision-making",
    description: "Difficulty making sound decisions, often due to disordered thinking or poor judgment.",
    type: ThreeSymptomModel.Cognitive,
    keys: ["indecisiveness", "poor judgment", "cognitive impairment", "ego"],
    copingStrategies: [SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.EDUCATION],
    helpMessage: "If you are struggling with making sound decisions, it's important to seek guidance from a therapist or trusted friend. Remember to take time to consider your options and gather information before making a decision."      
   
    },
    {
    name: "Incoherent speech",
    description: "Speech that is jumbled, illogical, or difficult to follow.",
    type: ThreeSymptomModel.Positive,
    keys: ["word salad", "loose associations", "thought disorder", "ego"],
    copingStrategies: [SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.MEDITATION],
    helpMessage: "If you are struggling with incoherent speech, it can be frustrating and isolating. Remember that your thoughts and feelings are valid, and don't hesitate to reach out to a therapist for support and guidance. Meditation can also be a helpful coping strategy to calm the mind and improve focus." 

    },
    {
    name: "Executive dysfunction",
    description: "Difficulty with planning, organizing, and initiating tasks.",
    type: ThreeSymptomModel.Cognitive,
    keys: ["planning", "organization", "initiation"],
    copingStrategies: [SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.ROUTINE],
    helpMessage: "If you are struggling with executive dysfunction, it can be helpful to create a routine and prioritize tasks. Don't hesitate to reach out to a therapist for support and guidance." 
    },
    {
    name: "Lack of motivation",
    description: "Lack of interest or drive to engage in activities or pursue goals.",
    type: ThreeSymptomModel.Negative,
    keys: ["apathy", "laziness"],
    copingStrategies: [SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.EXERCISE],
    helpMessage: "If you are experiencing a lack of motivation, it can be difficult to find the drive to engage in activities or pursue goals. Try incorporating exercise into your routine, which can help boost energy levels and mood. Don't hesitate to reach out to a therapist for support and guidance."    
     
    },
    {
    name: "Reduced emotional expression",
    description: "Limited range or intensity of emotional expression.",
    type: ThreeSymptomModel.Negative,
    keys: ["flat affect", "emotional blunting"],
    copingStrategies: [SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.EXERCISE],
    helpMessage: "If you are experiencing reduced emotional expression, it can be difficult to connect with others and express your own emotions. Remember that your feelings are valid, and don't hesitate to reach out to a therapist for support and guidance. Exercise can also be a helpful coping strategy to improve mood."     
   
    },
    {
    name: "Social isolation",
    description: "Withdrawal from social interaction or activities.",
    type: ThreeSymptomModel.Negative,
    keys: ["loneliness", "reclusive", "isolated"],
    copingStrategies: [SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.SOCIAL],
    helpMessage: "If you are experiencing social isolation, it's important to remember that you are not alone. Try reaching out to someone you trust for support, or joining a support group. Don't hesitate to reach out to a therapist for support and guidance."   
    },
    {
    name: "Depression",
    description: "Persistent feelings of sadness, hopelessness, or emptiness.",
    type: ThreeSymptomModel.Negative,
    keys: ["sadness", "hopelessness", "emptiness"],
    copingStrategies: [SchizophreniaCopingStrategies.MEDS, SchizophreniaCopingStrategies.THERAPY],
    helpMessage: "If you are experiencing depression, it's important to seek help from a therapist or healthcare professional. Remember to prioritize self-care, including exercise, healthy eating, and quality sleep."   
    },
    {
    name: "Anxiety",
    description: "Excessive worry, fear, or nervousness.",
    type: ThreeSymptomModel.Negative,
    keys: ["nervousness", "fear", "worry"],
    copingStrategies: [SchizophreniaCopingStrategies.MEDS, SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.MEDITATION, SchizophreniaCopingStrategies.EXERCISE, SchizophreniaCopingStrategies.SLEEP_HYGIENE],
    helpMessage: "If you are experiencing anxiety, it's important to seek help from a therapist or healthcare professional. Meditation and exercise can also be helpful coping strategies, as well as prioritizing good sleep hygiene."
    },





    {
    name: "Sleep disturbances",
    description: "Difficulty falling or staying asleep, or abnormal sleep patterns.",
    type: ThreeSymptomModel.Negative,
    keys: ["insomnia", "sleeplessness", "nightmares"],
    copingStrategies: [SchizophreniaCopingStrategies.MEDS, SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.MEDITATION, SchizophreniaCopingStrategies.EXERCISE, SchizophreniaCopingStrategies.SLEEP_HYGIENE],
    helpMessage: "If you are experiencing sleep disturbances, it's important to prioritize good sleep hygiene, including establishing a regular sleep schedule and avoiding caffeine and electronics before bed. Seeking help from a therapist or healthcare professional can also be helpful."
    

},
    {
    name: "Lack of insight",
    description: "Lack of awareness or understanding of one's illness or its impact on others.",
    type: ThreeSymptomModel.Cognitive,
    keys: ["denial", "unawareness", "ignorance"],
    copingStrategies: [SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.EDUCATION],
    helpMessage: "If you are struggling with lack of insight, it's important to seek guidance from a therapist or healthcare professional who can provide education and support."
    },
    {
    name: "Paranoid ideation",
    description: "Belief that others are plotting against or intending harm.",
    type: ThreeSymptomModel.Positive,
    keys: ["persecution", "suspicion", "mistrust"],
    copingStrategies: [SchizophreniaCopingStrategies.MEDS, SchizophreniaCopingStrategies.THERAPY],
    helpMessage: "Remember that you are not alone, and there are effective treatments available to help manage symptoms."

    },
    {
    name: "Suspiciousness",
    description: "Distrust of others, even without evidence or reason.",
    type: ThreeSymptomModel.Positive,
    keys: ["distrust", "paranoia"],
    copingStrategies: [SchizophreniaCopingStrategies.MEDS, SchizophreniaCopingStrategies.THERAPY],
    helpMessage: "Remember that building trusting relationships takes time and effort, but it is possible."
    },
    {
    name: "Agitation",
    description: "Restlessness or irritability.",
    type: ThreeSymptomModel.Positive,
    keys: ["restlessness", "irritability"],
    copingStrategies: [SchizophreniaCopingStrategies.MEDS, SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.EXERCISE],
    helpMessage: "Exercise can also be a helpful coping strategy to release pent-up energy and improve mood."
    },

    {
    name: "Self-neglect",
    description: "Failure to attend to one's basic needs, such as hygiene, nutrition, or medical care.",
    type: ThreeSymptomModel.Negative,
    keys: ["neglect", "self-care"],
    copingStrategies: [SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.CLEANLINESS],
    helpMessage: "Prioritizing self-care, including basic needs such as hygiene and nutrition, is essential for overall well-being. Take small steps every day to care for yourself, like taking a shower or going for a walk."
    },
    {
    name: "Self-harm",
    description: "Intentional injury or harm to oneself, often as a coping mechanism.",
    type: ThreeSymptomModel.Positive,
    keys: ["self-injury", "self-harm"],
    copingStrategies: [SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.MEDS],
    helpMessage: "Remember that there are healthy ways to cope with emotional pain, and you deserve to receive support and care. You can try talking to a trusted friend or family member, finding a support group, or practicing self-care activities like journaling, meditation, or exercise."
    },
    {
        name: "Inappropriate emotional responses",
        description: "Emotional responses that do not match the situation or context.",
        type: ThreeSymptomModel.Positive,
        keys: ["inappropriate affect", "mood swings"],
        copingStrategies: [SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.MEDS],
        helpMessage: "Remember that it's okay to feel a range of emotions, even if they don't always match the situation or context. Try to identify triggers that may be causing the inappropriate emotional response and find healthy coping mechanisms to manage them. Don't hesitate to reach out to a trusted friend or loved one for support."
    },
    {
        name: "Impaired abstract reasoning",
        description: "Difficulty understanding or processing abstract concepts or ideas.",
        type: ThreeSymptomModel.Cognitive,
        keys: ["abstract thinking problems", "abstract reasoning difficulties", "conceptualization issues"],
        copingStrategies: [SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.EDUCATION],
        helpMessage: "If you are struggling with impaired abstract reasoning, know that you are not alone. It can be helpful to break down complex ideas into smaller parts and to practice exercises to improve cognitive flexibility. Don't hesitate to reach out to a trusted friend or loved one for support."
    },
    {
        name: "Reduced speech output",
        description: "Decreased frequency or amount of speech.",
        type: ThreeSymptomModel.Negative,
        keys: ["limited speech", "speech difficulties", "speech deficits"],
        copingStrategies: [SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.EXERCISE],
        helpMessage: "If you are experiencing reduced speech output, know that it's okay to take your time when communicating with others. You can also try practicing deep breathing or relaxation techniques to help reduce anxiety around speaking. Don't hesitate to reach out to a trusted friend or loved one for support."
    },
    {
        name: "Unusual behavior",
        description: "Behavior that is atypical or deviates from social norms.",
        type: ThreeSymptomModel.Positive,
        keys: ["abnormal behavior", "bizarre behavior", "strange behavior"],
        copingStrategies: [SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.ROUTINE],
        helpMessage: "If you are experiencing unusual behavior, it can be helpful to identify triggers that may be causing the behavior and to establish a regular routine to help manage symptoms. Don't hesitate to reach out to a trusted friend or loved one for support."
    },
    {
        name: "Abnormal movements",
        description: "Unusual or involuntary movements or postures.",
        type: ThreeSymptomModel.Positive,
        keys: ["movement disorders", "involuntary movements", "abnormal motor behavior"],
        copingStrategies: [SchizophreniaCopingStrategies.MEDS, SchizophreniaCopingStrategies.EXERCISE],
        helpMessage: "If you are experiencing abnormal movements, it's important to know that there are effective treatments available to manage symptoms. You can also try practicing relaxation techniques or engaging in low-impact exercise to help manage symptoms. Don't hesitate to reach out to a trusted friend or loved one for support."
    },
    {
        name: "Lack of emotional responsiveness",
        description: "Inability to express or feel emotions in a normal way.",
        type: ThreeSymptomModel.Negative,
        keys: ["flat affect", "lack of emotions", "emotional blunting"],
        copingStrategies: [SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.MEDITATION],
        helpMessage: "If you are experiencing a lack of emotional responsiveness, it's important to know that it is a common symptom of schizophrenia. It can be helpful to talk about your feelings with a trusted friend or family member, or try practicing mindfulness or meditation to help increase emotional awareness. Remember to be patient and kind to yourself in the process."
    },
    {
    name: "Perceptual abnormalities",
    description: "Alterations in perception, such as changes in the way things look, sound, feel, taste, or smell.",
    type: ThreeSymptomModel.Positive,
    keys: ["sensory disturbances", "perception issues", "hallucinations"],
    copingStrategies: [SchizophreniaCopingStrategies.MEDS, SchizophreniaCopingStrategies.THERAPY],
    helpMessage: "Perceptual abnormalities can be difficult to manage, but there are effective treatments available to help alleviate symptoms. It can be helpful to find a support group or talk to a trusted friend or family member about your experiences. Remember to take care of yourself and seek professional help if needed."
    },
    {
    name: "Thought insertion",
    description: "Belief that one's thoughts are being inserted into one's mind by an external force.",
    type: ThreeSymptomModel.Positive,
    keys: ["thought control", "intrusive thoughts", "mind control"],
    copingStrategies: [SchizophreniaCopingStrategies.MEDS, SchizophreniaCopingStrategies.THERAPY],
    helpMessage: "Thought insertion can be a distressing symptom of schizophrenia, but it's important to remember that you are not alone. Try talking to a trusted friend or family member about your experiences, or find a support group where you can connect with others who may be going through similar challenges. Remember to be patient and kind to yourself in the process of managing symptoms." 
    },
    {
    name: "Thought withdrawal",
    description: "Belief that one's thoughts are being taken away by an external force.",
    type: ThreeSymptomModel.Positive,
    keys: ["loss of thoughts", "thought removal", "mind control"],
    copingStrategies: [SchizophreniaCopingStrategies.MEDS, SchizophreniaCopingStrategies.THERAPY],
    helpMessage: "If you are experiencing thought withdrawal, it can be a distressing symptom of schizophrenia. Remember that you are not alone, and there are effective treatments available to manage symptoms. It can be helpful to talk to a trusted friend or family member about your experiences or engage in activities that promote mindfulness and relaxation."
    },
    {
    name: "Thought broadcasting",
    description: "Belief that one's thoughts are being broadcasted to others.",
    type: ThreeSymptomModel.Positive,
    keys: ["telepathy", "mind reading", "thought sharing"],
    copingStrategies: [SchizophreniaCopingStrategies.MEDS, SchizophreniaCopingStrategies.THERAPY],
    helpMessage: "If you are experiencing thought broadcasting, it can be a distressing symptom of schizophrenia. Remember that you are not alone, and there are effective treatments available to manage symptoms. It can be helpful to talk to a trusted friend or family member about your experiences or engage in activities that promote mindfulness and relaxation."
    },

    {
    name: "Ideas of reference",
    description: "Belief that random events or stimuli have personal significance.",
    type: ThreeSymptomModel.Positive,
    keys: ["delusions of reference", "paranoia", "beliefs of persecution"],
    copingStrategies: [SchizophreniaCopingStrategies.MEDS, SchizophreniaCopingStrategies.THERAPY],
    helpMessage: "If you are experiencing ideas of reference, it can be helpful to remind yourself that not everything is a personal message or directed at you. It's important to talk about your beliefs with a trusted friend or family member, and work with a therapist to challenge these thoughts and develop coping mechanisms."
    },
    {
    name: "Echolalia",
    description: "Repetition of others' words or phrases.",
    type: ThreeSymptomModel.Positive,
    keys: ["repetitive speech", "parroting", "echoing"],
    copingStrategies: [SchizophreniaCopingStrategies.THERAPY],
    helpMessage: "If you are experiencing echolalia, it can be helpful to work with a speech therapist or therapist to develop alternative communication strategies. Remember to be patient with yourself in the process."
    },




    {
        name: "Echopraxia",
        description: "Repetition of others' movements or gestures.",
        type: ThreeSymptomModel.Positive,
        keys: ["imitating others", "mimicking behavior", "copying movements"],
        copingStrategies: [SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.EDUCATION],
        helpMessage: "If you are experiencing echopraxia, it can be helpful to work with a therapist to develop alternative behaviors or coping mechanisms to manage the symptom. Remember to be kind to yourself in the process."
    },
    {
        name: "Hyperreligiosity",
        description: "Excessive or extreme preoccupation with religion or religious beliefs.",
        type: ThreeSymptomModel.Positive,
        keys: ["religious preoccupation", "religious obsession"],
        copingStrategies: [SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.MEDITATION],
        helpMessage: "If you are experiencing hyperreligiosity, it can be helpful to talk to a therapist who is trained to work with religious and spiritual issues. You can also try practicing mindfulness or meditation to help manage symptoms. Remember to be patient and kind to yourself in the process."
    },
    {
        name: "Avolition",
        description: "Lack of motivation or ability to initiate and complete tasks.",
        type: ThreeSymptomModel.Negative,
        keys: ["lack of motivation", "difficulty completing tasks"],
        copingStrategies: [SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.ROUTINE],
        helpMessage: "If you are experiencing avolition, it can be helpful to break tasks down into smaller, more manageable steps and set achievable goals for yourself. Try to establish a routine or schedule to help you stay organized and motivated. Remember to be patient and kind to yourself in the process." 
    },
    {
        name: "Alogia",
        description: "Reduced speech output or poverty of speech.",
        type: ThreeSymptomModel.Negative,
        keys: ["poverty of speech", "reduced verbal output"],
        copingStrategies: [SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.EDUCATION],
        helpMessage: "If you are experiencing alogia, it can be helpful to practice exercises that focus on communication skills, such as repeating and summarizing what others say, or making lists of topics to discuss. Remember to be patient with yourself and celebrate small successes in the process."
    },
    {
        name: "Flat affect",
        description: "Lack of emotional expressiveness, often appearing unresponsive or indifferent.",
        type: ThreeSymptomModel.Negative,
        keys: ["lack of emotion", "emotional unresponsiveness"],
        copingStrategies: [SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.EXERCISE],
        helpMessage: "If you are experiencing flat affect, it can be helpful to try engaging in activities that you enjoy or that have brought you joy in the past. Remember to be patient with yourself and celebrate small successes in the process."
    },
    {
        name: "Blunted affect",
        description: "Reduced intensity of emotional expressiveness, often appearing apathetic or disinterested.",
        type: ThreeSymptomModel.Negative,
        keys: ["emotional apathy", "reduced emotional expression"],
        copingStrategies: [SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.MEDITATION],
        helpMessage: "If you are experiencing blunted affect, it can be helpful to try practicing mindfulness or meditation to help increase emotional awareness. You can also try engaging in activities that you enjoy or that have brought you joy in the past. Remember to be patient with yourself and celebrate small successes in the process."
    },


    {
        name: "Catatonic stupor",
        description: "State of unresponsiveness or immobility, often maintaining a fixed position for extended periods of time.",
        type: ThreeSymptomModel.Positive,
        keys: ["unresponsiveness", "immobility"],
        copingStrategies: [SchizophreniaCopingStrategies.MEDS, SchizophreniaCopingStrategies.THERAPY],
        helpMessage: "If you are experiencing catatonic stupor, it's important to seek medical attention immediately. This symptom can be a medical emergency and requires urgent treatment. Remember that there are effective treatments available to manage symptoms and improve quality of life."
    },
    {
        name: "Catatonic excitement",
        description: "State of excessive and uncontrollable movement, often including repetitive or stereotyped behaviors.",
        type: ThreeSymptomModel.Positive,
        keys: ["excessive movement", "stereotyped behavior"],
        copingStrategies: [SchizophreniaCopingStrategies.MEDS, SchizophreniaCopingStrategies.THERAPY],
        helpMessage: "If you are experiencing catatonic excitement, it's important to seek medical attention immediately. This symptom can be a medical emergency and requires urgent treatment. Remember that there are effective treatments available to manage symptoms and improve quality of life."
    },
    {
        name: "Stereotyped speech",
        description: "Repetitive or ritualistic use of language, often including phrases, rhymes, or neologisms.",
        type: ThreeSymptomModel.Positive,
        keys: ["repetitive language", "ritualistic speech"],
        copingStrategies: [SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.MEDITATION],
        helpMessage: "If you are experiencing stereotyped speech, it can be helpful to work with a speech therapist or therapist to develop alternative communication strategies. Remember to be patient with yourself in the process." 
    },



    {
        name: "Somatic delusions",
        description: "False beliefs about the body, such as that one is infested with parasites or has a serious illness.",
        type: ThreeSymptomModel.Positive,
        keys: ["false beliefs about body", "physical illness delusions"],
        copingStrategies: [SchizophreniaCopingStrategies.MEDS, SchizophreniaCopingStrategies.THERAPY],
        helpMessage: "If you are experiencing somatic delusions, it can be helpful to remind yourself that these beliefs are not based in reality. Try to focus on evidence that contradicts your false beliefs and challenge negative thoughts with rational thinking. Remember to be patient and kind to yourself in the process of managing symptoms."
    },
    {
        name: "Nihilistic delusions",
        description: "Belief that one or the world does not exist, or that nothing matters or has any value.",
        type: ThreeSymptomModel.Positive,
        keys: ["belief in non-existence", "lack of meaning"],
        copingStrategies: [SchizophreniaCopingStrategies.MEDS, SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.MEDITATION],
        helpMessage: "If you are experiencing nihilistic delusions, it can be helpful to remind yourself that these beliefs are not based in reality. Try to focus on positive aspects of life, such as things that bring you joy or a sense of purpose. Remember to be patient and kind to yourself in the process of managing symptoms."
    },
    {
        name: "Erotomanic delusions",
        description: "False belief that another person, often of higher status, is in love with them.",
        type: ThreeSymptomModel.Positive,
        keys: ["delusions of love", "belief in reciprocal love"],
        copingStrategies: [SchizophreniaCopingStrategies.MEDS, SchizophreniaCopingStrategies.THERAPY],
        helpMessage: "If you are experiencing erotomanic delusions, it can be helpful to remind yourself that these beliefs are not based in reality. Try to focus on evidence that contradicts your false beliefs and challenge negative thoughts with rational thinking. Remember to be patient and kind to yourself in the process of managing symptoms."
    },


    {
        name: "Grandiose delusions",
        description: "Exaggerated sense of one's own importance or abilities.",
        type: ThreeSymptomModel.Positive,
        keys: ["exaggerated self-importance", "delusions of grandeur"],
        copingStrategies: [SchizophreniaCopingStrategies.MEDS, SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.EXERCISE],
        helpMessage: "If you are experiencing grandiose delusions, it can be helpful to remind yourself that these beliefs are not based in reality. Try to focus on evidence that contradicts your false beliefs and challenge negative thoughts with rational thinking. Remember to be patient and kind to yourself in the process of managing symptoms."
    },
    {
        name: "Jealousy delusions",
        description: "False belief that one's partner is unfaithful or interested in someone else.",
        type: ThreeSymptomModel.Positive,
        keys: ["delusions of infidelity", "belief in partner's unfaithfulness"],
        copingStrategies: [SchizophreniaCopingStrategies.MEDS, SchizophreniaCopingStrategies.THERAPY],
        helpMessage: "If you are experiencing jealousy delusions, it can be helpful to remind yourself that these beliefs are not based in reality. Try to focus on evidence that contradicts your false beliefs and challenge negative thoughts with rational thinking. Remember to be patient and kind to yourself in the process of managing symptoms."
    },
    {
        name: "Persecutory delusions",
        description: "False belief that one is being targeted or persecuted by others.",
        type: ThreeSymptomModel.Positive,
        keys: ["paranoia", "feeling targeted by others", "belief of being persecuted"],
        copingStrategies: [SchizophreniaCopingStrategies.MEDS, SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.CLEANLINESS],
        helpMessage: "If you are experiencing persecutory delusions, it can be helpful to remind yourself that these beliefs are not based in reality. Try to focus on evidence that contradicts your false beliefs and challenge negative thoughts with rational thinking. Remember to be patient and kind to yourself in the process of managing symptoms."
    },



    {
        name: "Control delusions",
        description: "False belief that one is being controlled by an external force or agency.",
        type: ThreeSymptomModel.Positive,
        keys: ["belief of being controlled", "feeling manipulated", "external control delusions"],
        copingStrategies: [SchizophreniaCopingStrategies.MEDS, SchizophreniaCopingStrategies.THERAPY],
        helpMessage: "If you are experiencing control delusions, it can be helpful to remind yourself that these beliefs are not based in reality. Try to focus on evidence that contradicts your false beliefs and challenge negative thoughts with rational thinking. Remember to be patient and kind to yourself in the process of managing symptoms."
    },
    {
        name: "Guilt delusions",
        description: "False belief that one has committed a serious or unforgivable offense.",
        type: ThreeSymptomModel.Positive,
        keys: ["delusions of guilt", "belief of unforgivable offense", "feeling responsible for something"],
        copingStrategies: [SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.MEDITATION],
        helpMessage: "If you are experiencing guilt delusions, it can be helpful to remind yourself that these beliefs are not based in reality. Try to focus on evidence that contradicts your false beliefs and challenge negative thoughts with rational thinking. Remember to be patient and kind to yourself in the process of managing symptoms."
    },
    {
        name: "Referential delusions",
        description: "False belief that random events or stimuli are personally relevant or directed towards oneself.",
        type: ThreeSymptomModel.Positive,
        keys: ["delusions of reference", "belief of personal significance in random events"],
        copingStrategies: [SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.EDUCATION],
        helpMessage: "If you are experiencing referential delusions, it can be helpful to remind yourself that these beliefs are not based in reality. Try to focus on evidence that contradicts your false beliefs and challenge negative thoughts with rational thinking. Remember to be patient and kind to yourself in the process of managing symptoms."
    },
    {
        name: "Bizarre delusions",
        description: "Unusual or irrational false beliefs that defy common sense or logic.",
        type: ThreeSymptomModel.Positive,
        keys: ["strange delusions", "irrational beliefs", "unusual false beliefs"],
        copingStrategies: [SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.MEDITATION],
        helpMessage: "If you are experiencing bizarre delusions, it can be helpful to work with a therapist or mental health professional to develop coping strategies and challenge negative thoughts with rational thinking. Remember to be patient and kind to yourself in the process of managing symptoms." 
    },
    {
        name: "Disorganized behavior",
        description: "Unpredictable or inappropriate behavior, often including strange or socially unacceptable actions.",
        type: ThreeSymptomModel.Positive,
        keys: ["abnormal behavior", "strange actions", "inappropriate behavior"],
        copingStrategies: [SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.EXERCISE],
        helpMessage: "If you are experiencing disorganized behavior, it can be helpful to work with a therapist or mental health professional to develop coping strategies and establish a routine or structure to help you stay organized and focused. Remember to be patient and kind to yourself in the process of managing symptoms." 
    },
    
    {
        name: "Emotional instability",
        description: "Frequent and intense fluctuations in mood or affect.",
        type: ThreeSymptomModel.Positive,
        keys: ["mood swings", "unstable emotions", "fluctuating affect"],
        copingStrategies: [SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.MEDITATION],
        helpMessage: "If you are experiencing emotional instability, it can be helpful to work with a therapist or mental health professional to develop coping strategies and practice mindfulness or meditation to help regulate emotions. Remember to be patient and kind to yourself in the process of managing symptoms." 
    },



    {
        name: "Difficulty experiencing pleasure",
        description: "Reduced ability to enjoy or derive pleasure from activities that are normally enjoyable.",
        type: ThreeSymptomModel.Negative,
        keys: ["anhedonia", "inability to feel pleasure", "lack of enjoyment"],
        copingStrategies: [SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.EXERCISE, SchizophreniaCopingStrategies.MEDITATION],
        helpMessage: "If you are experiencing difficulty experiencing pleasure, it can be helpful to engage in activities that you used to enjoy or that bring you a sense of accomplishment. You can also try new activities or hobbies to help discover new sources of pleasure. Remember to be patient and kind to yourself in the process of managing symptoms."
    },
    {
        name: "Difficulty with working memory",
        description: "Impaired ability to hold and manipulate information in short-term memory.",
        type: ThreeSymptomModel.Cognitive,
        keys: ["short-term memory problems", "working memory difficulties"],
        copingStrategies: [SchizophreniaCopingStrategies.MEDS, SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.EXERCISE],
        helpMessage: "If you are experiencing difficulty with working memory, it can be helpful to use tools such as a planner, to-do list, or digital assistant to help you remember important information. You can also try exercises to improve your memory or work with a cognitive behavioral therapist to develop memory strategies. Remember to be patient and kind to yourself in the process of managing symptoms."
    },
    {
        name: "Difficulty with long-term memory",
        description: "Impaired ability to store and retrieve information from long-term memory.",
        type: ThreeSymptomModel.Cognitive,
        keys: ["long-term memory problems", "memory retrieval difficulties"],
        copingStrategies: [SchizophreniaCopingStrategies.MEDS, SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.EXERCISE],
        helpMessage: "If you are experiencing difficulty with long-term memory, it can be helpful to use mnemonic devices or visualization techniques to help you remember important information. You can also work with a cognitive behavioral therapist to develop memory strategies or try exercises to improve your memory. Remember to be patient and kind to yourself in the process of managing symptoms."
    },


    {
        name: "Difficulty with attentional shifting",
        description: "Impaired ability to flexibly shift attention between different tasks or stimuli.",
        type: ThreeSymptomModel.Cognitive,
        keys: ["attention switching problems", "inability to shift focus"],
        copingStrategies: [SchizophreniaCopingStrategies.MEDS, SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.EXERCISE],
        helpMessage: "If you are experiencing difficulty with attentional shifting, it can be helpful to work on mindfulness techniques to improve focus and attention. Additionally, cognitive-behavioral therapy can help develop strategies to improve cognitive flexibility. Remember to be patient and kind to yourself in the process of managing symptoms."
    },
    
    {
        name: "Difficulty with task switching",
        description: "Impaired ability to switch between different tasks or cognitive processes.",
        type: ThreeSymptomModel.Cognitive,
        keys: ["task-switching problems", "inability to switch between tasks"],
        copingStrategies: [SchizophreniaCopingStrategies.MEDS, SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.EXERCISE],
        helpMessage: "If you are experiencing difficulty with task switching, it can be helpful to practice breaking down complex tasks into smaller, more manageable steps. Cognitive-behavioral therapy can also be helpful in developing strategies to improve cognitive flexibility. Remember to be patient and kind to yourself in the process of managing symptoms."
    },
    
    {
        name: "Difficulty with response inhibition",
        description: "Impaired ability to inhibit or suppress unwanted or inappropriate responses.",
        type: ThreeSymptomModel.Cognitive,
        keys: ["impulse control problems", "inability to control impulses"],
        copingStrategies: [SchizophreniaCopingStrategies.MEDS, SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.EXERCISE],
        helpMessage: "If you are experiencing difficulty with response inhibition, it can be helpful to practice mindfulness techniques to help increase awareness of your thoughts and behaviors. Cognitive-behavioral therapy can also help develop strategies to improve impulse control. Remember to be patient and kind to yourself in the process of managing symptoms."
    },
    {
        name: "Difficulty with cognitive flexibility",
        description: "Impaired ability to adapt or adjust to changing situational demands or rules.",
        type: ThreeSymptomModel.Cognitive,
        keys: ["rigidity of thinking", "inability to adjust to new situations"],
        copingStrategies: [SchizophreniaCopingStrategies.MEDS, SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.EXERCISE],
        helpMessage: "If you are experiencing difficulty with cognitive flexibility, it may be helpful to practice problem-solving techniques and engage in activities that challenge your thinking and encourage adaptability. Additionally, mindfulness and relaxation techniques can help reduce stress and improve cognitive functioning."
    },
    {
        name: "Difficulty with mental imagery",
        description: "Impaired ability to create or manipulate mental images or representations.",
        type: ThreeSymptomModel.Cognitive,
        keys: ["lack of mental imagery", "difficulty visualizing"],
        copingStrategies: [SchizophreniaCopingStrategies.MEDS, SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.EXERCISE],
        helpMessage: "If you are experiencing difficulty with mental imagery, try engaging in activities that involve visualization, such as meditation or guided imagery exercises. Additionally, practicing cognitive exercises that involve mental imagery can help improve this skill over time."
    },
      {
        name: "Difficulty with mental calculation",
        description: "Impaired ability to perform arithmetic or mathematical calculations.",
        type: ThreeSymptomModel.Cognitive,
        keys: ["math difficulties", "trouble with arithmetic"],
        copingStrategies: [SchizophreniaCopingStrategies.MEDS, SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.EXERCISE],
        helpMessage: "If you are experiencing difficulty with mental calculation, it may be helpful to practice mental math exercises, such as calculating change or estimating distances. Additionally, using aids such as calculators"
      },
      {
        name: "Difficulty with spatial cognition",
        description: "Impaired ability to perceive or navigate through physical space.",
        type: ThreeSymptomModel.Cognitive,
        keys: ["spatial orientation problems", "getting lost easily"],
        copingStrategies: [SchizophreniaCopingStrategies.MEDS, SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.EXERCISE],
        helpMessage: "If you are experiencing difficulty with spatial cognition, it may be helpful to engage in activities that require spatial awareness and navigation, such as playing video games or doing puzzles. Additionally, practicing mindfulness techniques can help increase awareness of your physical surroundings and reduce anxiety related to spatial disorientation."
      },
      {
        name: "Visual hallucinations",
        description: "Seeing things that are not there, such as people, objects, or patterns.",
        type: ThreeSymptomModel.Positive,
        keys: ["seeing things that aren't there", "hallucinations"],
        copingStrategies: [SchizophreniaCopingStrategies.MEDS, SchizophreniaCopingStrategies.THERAPY],
        helpMessage: "If you experience visual hallucinations, it may be helpful to find ways to distract yourself or refocus your attention when you notice them. Engaging in calming activities like deep breathing or meditation may also help reduce the intensity of the hallucinations."
      },
      {
        name: "Suicidal ideation",
        description: "Frequent thoughts about or planning for suicide, without necessarily having the intention to carry it out.",
        type: ThreeSymptomModel.Negative,
        keys: ["thoughts of suicide", "suicidal thoughts", "suicide ideation"],
        copingStrategies: [SchizophreniaCopingStrategies.THERAPY, SchizophreniaCopingStrategies.MEDS, SchizophreniaCopingStrategies.SLEEP_HYGIENE],
        helpMessage: "If you experience suicidal ideation, it is important to seek professional help and support. Talking to a therapist or trusted healthcare provider can provide strategies for managing these thoughts and developing a safety plan."
      },
      {
        name: "Intrusive Thoughts",
        description: "Unwanted and involuntary thoughts, images, or urges that cause distress or anxiety.",
        type: ThreeSymptomModel.Cognitive,
        keys: ["unwanted thoughts", "anxiety", "distress", "obsessive"],
        copingStrategies: [
          SchizophreniaCopingStrategies.MEDS,
          SchizophreniaCopingStrategies.THERAPY,
          SchizophreniaCopingStrategies.MEDITATION,
          SchizophreniaCopingStrategies.EXERCISE,
          SchizophreniaCopingStrategies.SLEEP_HYGIENE,
        ],
        helpMessage: "If you experience intrusive thoughts, it may be helpful to practice mindfulness techniques to increase awareness of your thoughts and reduce their impact on your mood. Cognitive-behavioral therapy can also help identify and challenge negative thought patterns."
      },
      {
        name: "Lethargy",
        description: "A persistent lack of energy or motivation, leading to reduced activity and involvement.",
        type: ThreeSymptomModel.Negative,
        keys: ["fatigue", "low energy", "lack of motivation", "apathy", "tired", "lazy"],
        copingStrategies: [
          SchizophreniaCopingStrategies.EXERCISE,
          SchizophreniaCopingStrategies.SLEEP_HYGIENE,
          SchizophreniaCopingStrategies.MEDS,
          SchizophreniaCopingStrategies.THERAPY
        ],
        helpMessage: "If you experience lethargy, it may be helpful to engage in physical activity or exercise to increase energy levels. Setting small, achievable goals and establishing a routine can also help improve motivation and reduce feelings of apathy."
      } 
];

export default {
  SymptomList
}
