const task = new Promise((resolve, reject) => {
    resolve("Task Completed");
});

task.then((result) => {
    console.log(result);
});