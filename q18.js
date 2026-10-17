const task = new Promise((resolve, reject) => {
    reject("Task Failed");
});

task.catch((error) => {
    console.log(error);
});