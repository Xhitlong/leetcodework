var findOrder = function(numCourses, prerequisites) {
    // 将先决条件转换成 邻接表
    // map<number, number[]>  indegress = []
    // BFS 从入度为零的课程先遍历，也就是说，没有依赖其它课程的课先开始。
    
    let map = new Map(), indegress = new Array(numCourses).fill(0)

    for (let i=0; i<prerequisites.length; i++) {
        let numCourse = prerequisites[i][1], // 先学的课
        laterNumCourse = prerequisites[i][0] // 后学的课

        if (map.has(numCourse)) {
            map.set(numCourse, [...map.get(numCourse), laterNumCourse])
        } else {
            map.set(numCourse, [laterNumCourse])
        }
       
        indegress[laterNumCourse] += 1
    }

    let q = [], res = []

    // 将入度为零的课程先入队
    for (let i=0; i<indegress.length; i++) {
        if (indegress[i] === 0) {
            q.push(i)
        }
    }

    while (q.length !== 0) {
        let numCourse = q.shift()
        res.push(numCourse) // 学习该课程
        numCourses--
        let laterNumCourses = map.get(numCourse) || []

        for (let i=0; i<laterNumCourses.length; i++) {
            let laterNumCourse = laterNumCourses[i]
            
            // 将被后学习的课程入度标记为减 1（因为现学习的课已经被啃掉了）
            indegress[laterNumCourse] -= 1

            // 如果后学习的课程入度为 0，入队
            if (indegress[laterNumCourse] === 0) {
                q.push(laterNumCourse)
            }
        }
    }

    return numCourses === 0 ? res : []
};