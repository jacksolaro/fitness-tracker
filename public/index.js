const workoutBtn = $("#workoutBtn");
const exerciseBtn = $("#exerciseBtn");
const workoutHistory = $("#workoutHistory");

fetch("/api/workouts")
  .then(response => response.json())
  .then(data => {
    data.forEach(workout => {
        const newWorkoutEl = $("<div>")
        newWorkoutEl.addClass("card m-2")
        newWorkoutEl.attr("id",workout._id)

        const workoutName = $("<h3>")
        workoutName.text(workout.name)

        newWorkoutEl.append(workoutName)
        workout.activities.forEach(activity => {
            console.log(activity)
            const newActivity = $("<div>")
            newActivity.addClass("card m-2")
            newActivity.attr("id",activity._id)

            const name = $("<h4>")
            const type = $("<p>")
            const weight = $("<p>")
            const sets = $("<p>")
            const reps = $("<p>")
            const duration = $("<p>")
            const distance = $("<p>")
            const deleteBtn = $("<button>")
            
            name.text(activity.name)
            type.text(activity.type)
            weight.text(activity.weight)
            sets.text(activity.sets)
            reps.text(activity.reps)
            duration.text(activity.duration)
            distance.text(activity.distance)
            deleteBtn.text("Delete")

            newActivity.append(name,type,weight,sets,reps,duration,distance,deleteBtn)
            newWorkoutEl.append(newActivity)
            
        })
        workoutHistory.append(newWorkoutEl)
    })
    // data[0].activities.forEach(workout => {

    //     const newCardEl = $("<div>")
    //     newCardEl.addClass("card")


    //     const title = $("<h3>")
    //     title.text(workout.name)

    //     newCardEl.append(title)
    //     workoutHistory.append(newCardEl)
    // });
  });
