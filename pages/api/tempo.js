function tempo(request, response) {
    const dynamicDate = new Date();
    response.jason({
        date: dynamicDate.toGMTString()
    })
}

export default tempo;