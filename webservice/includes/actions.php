<?php
/**
 * @return array
 */
function getExercises()
{
    return [
        [
            "id" => 1,
            "name" => "Benchpress",
            "img" => "img/benchpress.png"

        ],
        [
            "id" => 2,
            "name" => "Lateral raises",
            "img" => "img/lateral_raises.png"
        ],
        [
            "id" => 3,
            "name" => "Bicep curls",
            "img" => "img/bicep_curls.png"
        ],
        [
            "id" => 4,
            "name" => "Tricep pushdown",
            "img" => "img/tricep_pushdown.png"
        ],
        [
            "id" => 5,
            "name" => "Sumo deadlift",
            "img" => "img/sumo_deadlift.png"
        ],
        [
            "id" => 6,
            "name" => "Squats",
            "img" => "img/squat.png"
        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getExerciseDetails($id)
{
    $tags = [
        1 => [
            "Description" => "The bench press is a weightlifting exercise where you lie on a bench 
                                and lift a barbell upwards from your chest. It primarily targets the chest, shoulders, and triceps, 
                                improving upper body strength and muscle development",
            "tags" => ['Powerlifting', 'Chest', 'Triceps', 'Shoulders', 'Barbell', 'Upperbody']
        ],
        2 => [
            "Description" => "Lateral raises are a shoulder-strengthening exercise 
                                where you lift dumbbells sideways from your thighs to shoulder height, 
                                targeting the deltoid muscles for improved shoulder stability and definition.",
            "tags" => ['Deltoids', 'Shoulders', 'Dumbells','Upperbody']
        ],
        3 => [
            "Description" => "Bicep curls are a fundamental strength training exercise 
                                where you lift dumbbells or a barbell with a supinated grip, 
                                targeting the biceps brachii muscles for increased arm strength and muscle definition.",
            "tags" => ['Biceps', 'Arms', 'Barbell', 'Upperbody']
        ],
        4 => [
            "Description" => "Tricep pushdowns are a popular resistance training exercise performed with a cable machine, 
                                 wherein a bar or rope is pushed downward, 
                                 targeting and strengthening the triceps muscles, contributing to arm strength and definition.",
            "tags" => ['Triceps', 'Arms', 'Cables', 'Upperbody']
        ],
        5 => [
            "Description" => "Squats are a foundational compound exercise in strength training, 
                                involving lowering the body by bending the knees, 
                                effectively engaging muscles such as quadriceps, 
                                hamstrings, glutes, and core for strength and stability.",
            "tags" => ['Legs', 'Quadriceps', 'Glutes', 'Hamstrings', 'Powerlifting', 'Lowerbody']
        ],
        6 => [
            "Description" => "Sumo deadlifts are a compound weightlifting exercise that deviates 
                                from the traditional deadlift by assuming a wider stance, primarily engaging the glutes, hamstrings, 
                                lower back, and quadriceps for comprehensive lower body strength and muscle growth.",
            "tags" => ['Hamstrings', 'Lower back', 'Quadriceps', 'Powerlifting', 'Lowerbody', 'Upperbody']
        ]
    ];

    return $tags[$id];
}



