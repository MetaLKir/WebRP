// HOMEWORK
// fix bug. there are at least 4 possible ways. find as many as you can

//============================================================================
consoleSeparator("without fix")
// SOURCE
let group = {
    title: "Karmiel 2025-2026",
    students: ['Kir', 'Masha', 'Zhenya'],
    showList: function () {
        const show = function (name) {
            console.log(`${this.title}: ${name}`);
        }
        this.students.forEach(show);
    }
}
group.showList();

//============================================================================
consoleSeparator(".bind() ver1")
// SOLUTION 1: use .bind()

// bind on declaration
let group1 = {
    title: "Karmiel 2025-2026",
    students: ['Kir', 'Masha', 'Zhenya'],
    showList: function () {
        const show = function (name) {
            console.log(`${this.title}: ${name}`);
        }.bind(group1);
        this.students.forEach(show);
    }
}
group1.showList();

consoleSeparator(".bind() ver2", '-')
// bind on passing into forEach
let group11 = {
    title: "Karmiel 2025-2026",
    students: ['Kir', 'Masha', 'Zhenya'],
    showList: function () {
        const show = function (name) {
            console.log(`${this.title}: ${name}`);
        };
        this.students.forEach(show.bind(group1));
    }
}
group11.showList();

//============================================================================
consoleSeparator("replace with => func");
// SOLUTION 2: upgrade show func to arrow func

let group2 = {
    title: "Karmiel 2025-2026",
    students: ['Kir', 'Masha', 'Zhenya'],
    showList: function () {
        const show = (name) => {
            console.log(`${this.title}: ${name}`);
        }
        this.students.forEach(show);
    }
}
group2.showList();

//============================================================================
consoleSeparator("pass context into forEach")
// SOLUTION 3: pass context into forEach

let group3 = {
    title: "Karmiel 2025-2026",
    students: ['Kir', 'Masha', 'Zhenya'],
    showList: function () {
        const show = function (name) {
            console.log(`${this.title}: ${name}`);
        }
        this.students.forEach(show, group3);
    }
}
group3.showList();

//============================================================================
consoleSeparator("=> func in forEach")
// SOLUTION 5: arrow func directly in forEach

let group5 = {
    title: "Karmiel 2025-2026",
    students: ['Kir', 'Masha', 'Zhenya'],
    showList: function () {
        this.students.forEach(name => console.log(`${this.title}: ${name}`));
    }
}
group5.showList();

//============================================================================
consoleSeparator("\'for of\' instead forEach")
// SOLUTION 6: replace forEach with "for of"

let group6 = {
    title: "Karmiel 2025-2026",
    students: ['Kir', 'Masha', 'Zhenya'],
    showList: function () {
        for (const name of this.students) {
            console.log(`${this.title}: ${name}`);
        }
    }
}
group6.showList();

//============================================================================
consoleSeparator(".call into forEach")
// SOLUTION 7: add .call in forEach
let group7 = {
    title: "Karmiel 2025-2026",
    students: ['Kir', 'Masha', 'Zhenya'],
    showList: function () {
        const show = function (name) {
            console.log(`${this.title}: ${name}`);
        }
        this.students.forEach(name => show.call(this, name));
    }
}
group7.showList();


//============================================================================
// my little utility
function consoleSeparator(text, separatorSymbol = '=') {
    console.log(separatorSymbol.repeat(10) + " " + text + " " + separatorSymbol.repeat(10));
}