function tempo(request, response) {
    const dynamicDate = new Date();

    response.jsan({
        date: dynamicDate.toGMTString()
    })
}

export default tempo;