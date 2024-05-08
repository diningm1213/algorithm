function solution(id_list, report, k) {
    const idListInfo = {};
    
    id_list.forEach(id => {
        idListInfo[id] = {
            reportCount: 0,
            reportedList: [],
        }
    });
    
    
    const reportSet = new Set(report);
    
    for (const report of reportSet) {
        const [userId, reportedId] = report.split(' ');
        idListInfo[userId].reportedList.push(reportedId);
        idListInfo[reportedId].reportCount++;
    }

    return id_list.map(id => {
        return idListInfo[id].reportedList.filter(reported => idListInfo[reported].reportCount >= k).length;
    })
}