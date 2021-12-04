let getData = async (c) => {
    let drawData = await fetch(`https://static.pipezero.com/covid/data.json`)

    let data = await drawData.json()

    let total = data.total;

    console.log(data);

    console.log(total);

    
}

getData()