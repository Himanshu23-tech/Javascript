function delay() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task Completed");
        }, 2000);
    });
}

async function test() {
    const result = await delay();
    console.log(result);
}

test();