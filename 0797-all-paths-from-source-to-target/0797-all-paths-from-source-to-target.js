/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
    const routeList = [];

    const explore = (route, nextPath) => {
        if (nextPath === graph.length - 1) {
            routeList.push(route);
        }
        const paths = graph[nextPath];
        const length = paths.length;

        for (let i = 0; i < length; i++) {
            const path = paths[i];
            explore([...route, path], path);
        }
    }

    explore([0], 0);

    return routeList;
}