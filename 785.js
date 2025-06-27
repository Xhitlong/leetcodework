var isBipartite = function (graph) {
    let red = [] //记录的红色点
    let arr = [] //处理的队列
    let handleArr = [] //处理过的记录点
    let bHasAddEntity = false;
    for (let i = 0; i < graph.length; i++) {
        if (graph[i].length > 0) {
            if (!bHasAddEntity) {//第一个可检测的红点
                bHasAddEntity = true;
                red.push(i);
                arr.push(i);
            }
        } else {
            handleArr.push(i)//避免数据影响，把空点默认为已经处理过的
        }
    }
    while (arr.length) {
        let id = arr.pop()
        handleArr.push(id)
        for (let gInd of graph[id]) {//遍历红色节点所对应的绿色节点
            if (handleArr.indexOf(gInd) == -1) {//如果没有处理过，则将其放入处理队列
                handleArr.push(gInd)
            }
            if (red.indexOf(gInd) != -1) {//如果颜色混乱，则不是二分图
                return false;
            } else {
                for (let rInd of graph[gInd]) {//遍历下一个绿色节点所对应的红色节点
                    if (red.indexOf(rInd) == -1) {//如果红色队列没有，加入到检查队列
                        arr.push(rInd)
                        red.push(rInd)
                    }

                }
            }
        }
        if (arr.length == 0) {//当前图访问完了，可能存在不连贯，需要继续下一个图
            for (let i = 0; i < graph.length; i++) {
                if (handleArr.indexOf(i) == -1) {//还没有处理过的
                    red.push(i);
                    arr.push(i);
                    break;
                }
            }
        }
    }
    return true;

};