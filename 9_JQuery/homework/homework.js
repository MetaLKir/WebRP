// HOMEWORK
// fix bug. there are at least 4 possible ways. find as many as you can

let group = {
    title: "Karmiel 2025-2026",
    students: ['Kir', 'Masha', 'Zhenya'],
    showList: function(){
        const show = function (name) {
            console.log(`${this.title}: ${name}`);
        }
        this.students.forEach(show);
    }
}

group.showList();
