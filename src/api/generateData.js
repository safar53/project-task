export const generateData = (n, m) => {
    const data = `
        query {
            countries {
                name
            }
        }
    `
    return fetch('https://countries.trevorblades.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: data
        }),
    })
        .then(response => response.json())
        .then(response => {
            const tree = nestedData([], m, n, 1, response.data.countries)
            return tree
        })
        .catch(err => console.log(err))
}


function nestedData(data, m, n, level, list) {
    for (let i = 0; i < m; i++) {
        let index = getRandomInt(list.length)
        let name = list[index].name

        data[i] = {
            name: name,
            children: []
        }
    }

    if (level < n) {
        for (let i = 0; i < m; i++) {
            data[i].children = nestedData(data[i].children, m, n, level + 1, list)
        }
    }
    return data
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}