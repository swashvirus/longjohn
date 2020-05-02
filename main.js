'use strict'
// longJohn pathfinder
// algorithm in JavaScript
// -----------------------.

// {constructor}
// {params}
// {array} map
// {array} start
// {array} end
// {return} a computed shortest path between two points
// {description} it creates an instance of a map
// ---------------------
export default function longJohn(map, start, end) {
    const history = []
    const memory = []

    memory.push(start)
    while (memory.length) {
        const point = memory.shift()
        if (map[point[0], point[1]] === 1) {
            continue
        }

        if (history.indexOf(point[0] + '_' + point[1]) !== -1) {
            continue
        }

        point[2] = point[2] || []
        point[2].push([point[0], point[1]])
        history.push(point[0] + '_' + point[1])

        if (point[0] === end[0] &&
            point[1] === end[1]) {
            return point[2]
            break
        }

        if ((map[point[0] + 1] && map[point[0] + 1][point[1]]) === 0) {
            memory.push([point[0] + 1, point[1], JSON.parse(JSON.stringify(point[2]))])
        }

        if ((map[point[0] - 1] && map[point[0] - 1][point[1]]) === 0) {
            memory.push([point[0] - 1, point[1], JSON.parse(JSON.stringify(point[2]))])
        }

        if (map[point[0]][point[1] + 1] === 0) {
            memory.push([point[0], point[1] + 1, JSON.parse(JSON.stringify(point[2]))])
        }

        if (map[point[0]][point[1] - 1] === 0) {
            memory.push([point[0], point[1] - 1, JSON.parse(JSON.stringify(point[2]))])
        }
    }
};