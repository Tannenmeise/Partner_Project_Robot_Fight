namespace Game {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;

    console.log("'main.ts' started");

    export let dataForSave = { nameProtagonist: "" };

    export let transitions = {
        binaryCode: {
            duration: 3,
            alpha: "Assets/Graphics/Transitions/binary_code.png",
            edge: 1
        }
    };

    export let sound = {
        // music
        background: "PATH",
        // sounds
        sparrows: "Assets/Audio/Sounds/sparrows.wav", // TODO: make ambient sound instead (mix of sparrows, wind and students)
        enterSchoolBuilding: "Assets/Audio/Sounds/enter_school_building.wav",
        // TODO: bumping sound
        bigCrowd: "Assets/Audio/Sounds/big_crowd.wav",
        smallCrowd: "Assets/Audio/Sounds/small_crowd.wav",
        footstepsTiles: "Assets/Audio/Sounds/footsteps_tiles.wav"
        // TODO: chair squeaking sound when you sit down on your seat
    };

    export let locations = {
        schoolBuilding: {
            name: "School Building",
            background: "Assets/Graphics/Backgrounds/school_building.png"
        },
        pinboards: {
            name: "Pinboards",
            background: "Assets/Graphics/Backgrounds/pinboards.png"
        },
        classroom: {
            name: "Classroom",
            background: "Assets/Graphics/Backgrounds/classroom.png"
        }
    };

    export let characters = {
        narrator: {
            name: ""
        },
        protagonist: {
            name: "Du"
        },
        student: {
            name: "Studierende",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                lily: "Assets/Graphics/Characters/Lily/lily_silhouette.png",
                louis: "Assets/Graphics/Characters/Louis/louis_silhouette.png",
            }
        },
        lily: {
            name: "Lily",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                excited1: "Assets/Graphics/Characters/Lily/lily_excited_1.png",
                excited2: "Assets/Graphics/Characters/Lily/lily_excited_2.png",
                happy1: "Assets/Graphics/Characters/Lily/lily_happy_1.png",
                happy2: "Assets/Graphics/Characters/Lily/lily_happy_2.png",
                joyful1: "Assets/Graphics/Characters/Lily/lily_joyful_1.png",
                joyful2: "Assets/Graphics/Characters/Lily/lily_joyful_2.png",
                neutral1: "Assets/Graphics/Characters/Lily/lily_neutral_1.png",
                neutral2: "Assets/Graphics/Characters/Lily/lily_neutral_2.png",
                sad1: "Assets/Graphics/Characters/Lily/lily_sad_1.png",
                sad2: "Assets/Graphics/Characters/Lily/lily_sad_2.png"
            }
        },
        louis: {
            name: "Louis",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry1: "Assets/Graphics/Characters/Louis/louis_angry_1.png",
                angry2: "Assets/Graphics/Characters/Louis/louis_angry_2.png",
                happy1: "Assets/Graphics/Characters/Louis/louis_happy_1.png",
                happy2: "Assets/Graphics/Characters/Louis/louis_happy_2.png",
                joyful1: "Assets/Graphics/Characters/Louis/louis_joyful_1.png",
                joyful2: "Assets/Graphics/Characters/Louis/louis_joyful_2.png",
                neutral1: "Assets/Graphics/Characters/Louis/louis_neutral_1.png",
                neutral2: "Assets/Graphics/Characters/Louis/louis_neutral_2.png",
                sad1: "Assets/Graphics/Characters/Louis/louis_sad_1.png",
                sad2: "Assets/Graphics/Characters/Louis/louis_sad_2.png",
            }
        },
        luisa: {
            name: "Luisa"
        },
        historyTeacher: {
            name: "Geschichtslehrer"
        },
        roboticsTeacher: {
            name: "Robotiklehrerin",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Assets/Graphics/Characters/Teacher/teacher.png"
            }
        }
    };

    window.addEventListener("load", start);

    function start(_event: Event): void {
        let scenes: ƒS.Scenes = [
            { scene: scene_0_intro, name: "Scene 0: Intro" },
            { scene: scene_1_pinboards, name: "Scene 1: Pinboards" },
            { scene: scene_2_history_lesson, name: "Scene 2: History Lesson" }
        ];

        let uiElement: HTMLElement = document.querySelector("[type=interface]");
        dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

        ƒS.Progress.go(scenes);
    }
}