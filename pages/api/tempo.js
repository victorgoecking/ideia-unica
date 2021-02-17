async function tempo(request, response) {

    const environmentVariable = process.env.DOG_API_RANDOM;
    const dynamicDate = new Date();

    const dogRandomResponse = await fetch(`https://dog.ceo${environmentVariable}`);
    const dogRandomResponseJson = await dogRandomResponse.json();
    const dog = dogRandomResponseJson.message;

    response.json({
        date: dynamicDate.toGMTString(),
        dog: dog
    })
}

export default tempo;