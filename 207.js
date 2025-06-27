var canFinish = function(numCourses, prerequisites) {
   const graph = new Map();
   for (let i = 0; i < numCourses; i++) {
       graph.set(i, []);
   }
   for (const [a, b] of prerequisites) {
       graph.get(b).push(a);
   }
   const indegree = new Array(numCourses).fill(0);
   for (const edges of graph.values()) {
       for (const edge of edges) {
           indegree[edge]++;
       }
   }
   const queue = [];
   for (let i = 0; i < numCourses; i++) {
       if (indegree[i] === 0) {
           queue.push(i);
       }
   }
   let count = 0;
   while (queue.length) {
       const node = queue.shift();
       count++;
       const edges = graph.get(node);
       for (const edge of edges) {
           indegree[edge]--;
           if (indegree[edge] === 0) {
               queue.push(edge);
           }
       }
   }
   return count === numCourses;
};