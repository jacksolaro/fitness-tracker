const workoutBtn = $("#workoutBtn");
const exerciseBtn = $("#exerciseBtn");
const workoutHistory = $("#workoutsBlock");
const selectWorkout = $("#selectWorkout");
const workoutForm = $("#workoutForm");

fetch("/api/workouts")
    .then(response => response.json())
    .then(data => {
        data.forEach(workout => {
            const newWorkoutEl = $("<div>")
            const newWorkoutOption = $("<option>")

            newWorkoutEl.addClass("card m-2 shadow p-3")
            newWorkoutEl.attr("id", workout._id)

            newWorkoutOption.text(workout.name)
            newWorkoutOption.attr("id", workout._id)



            const workoutName = $("<h3>")
            workoutName.text(workout.name)

            newWorkoutEl.append(workoutName)
            workout.activities.forEach(activity => {
                // console.log(activity)
                const newActivity = $("<div>")
                newActivity.addClass("card m-2 shadow p-3")
                newActivity.attr("id", activity._id)

                const name = $("<h4>").text(activity.name)
                const type = $("<p>").text(activity.type)
                const weight = $("<p>").text(`Weight: ${activity.weight}`)
                const sets = $("<p>").text(`Sets: ${activity.sets}`)
                const reps = $("<p>").text(`Reps: ${activity.reps}`)
                const duration = $("<p>").text(`Duration: ${activity.duration}`)
                const distance = $("<p>").text(`Distance: ${activity.Distance}`)
                // const deleteBtn = $("<button>")

                // deleteBtn.text("Delete")

                // deleteBtn.addClass("deleteBtn")
                // deleteBtn.attr("id",activity._id)

                newActivity.append(name, type, weight, sets, reps, duration, distance)
                newWorkoutEl.append(newActivity)

            })
            selectWorkout.append(newWorkoutOption)
            workoutHistory.append(newWorkoutEl)
        })
    });


//   Delete Request when Delete Button is pressed
//   $(".deleteBtn").on("click", function(event) {
//     var id = $(this).data("id");
//     console.log("click")
//     // Send the DELETE request.
//     $.ajax("/api/activity/" + id, {
//       type: "DELETE"
//     }).then(
//       function() {
//         console.log("deleted burger", id);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });

workoutBtn.click(function (event) {

    const data = workoutForm.serialize();

    $.ajax("/api/activity", {
        type: "POST",
        data: data
    }).then(
        function () {
            // Reload the page to get the updated list
            location.reload();
        }
    );
});

