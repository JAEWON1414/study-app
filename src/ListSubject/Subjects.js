
class Subjects {
    constructor() {
        this.subjects = [];
    }
    addSubject(subjectName) {
        this.subjects.push({
            name: subjectName,
            progressPercent: 0,
            chapters: []
        });
    }
    addChapter(subjectsIndex, chapterName) {
        this.subjects[subjectsIndex].chapters.push({
            name: chapterName,
            showingItems: false,
            progressPercent: 0,
            checked: false,
            items: []
        });
    }
    addItem(subjectIndex, chapterIndex, itemName) {
        this.subjects[subjectIndex].chapters[chapterIndex].items.push({
            name: itemName,
            checked: false
        });
    }
    deleteSubject(subjectIndex) {
        this.subjects.splice(subjectIndex, 1);
    }
    deleteChapter(subjectIndex, chapterIndex) {
        this.subjects[subjectIndex].chapters.splice(chapterIndex, 1);
    }
    deleteItem(subjectIndex, chapterIndex, itemIndex) {
        this.subjects[subjectIndex].chapters[chapterIndex].items.splice(itemIndex, 1);
    }

    setChapterProgressPercent(subjectIndex, chapterIndex) {
        let count = 0;
        this.subjects[subjectIndex].chapters[chapterIndex].items.map((item) => {
            if (item.checked) count = count + 1;
            return item;
        })
        if (count === 0 && this.subjects[subjectIndex].chapters[chapterIndex].checked === false)
            this.subjects[subjectIndex].chapters[chapterIndex].progressPercent = 0;
        else if (count === 0 && this.subjects[subjectIndex].chapters[chapterIndex].checked === true)
            this.subjects[subjectIndex].chapters[chapterIndex].progressPercent = 100;
        else
            this.subjects[subjectIndex].chapters[chapterIndex].progressPercent = Math.round(100 * count / this.subjects[subjectIndex].chapters[chapterIndex].items.length);

    }
    setTotalProgressPercent(subjectIndex) {
        //this.countItems(subjectIndex) === 0 ? this.subjects[subjectIndex].progressPercent = 0 :
        //   this.subjects[subjectIndex].progressPercent = Math.round(100 * this.countChecked(subjectIndex) / this.countItems(subjectIndex));
        let sum = 0;
        this.subjects[subjectIndex].chapters.map((chapter, chapterIndex) => {
            sum = sum + chapter.progressPercent;
            return chapter;
        })
        this.subjects[subjectIndex].progressPercent = sum / this.subjects[subjectIndex].chapters.length;
    }
    convertShowingChapters(subjectIndex) {
        this.subjects[subjectIndex].showingChapters ?
            this.subjects[subjectIndex].showingChapters = false :
            this.subjects[subjectIndex].showingChapters = true;
    }
    convertShowingItems(subjectIndex, chapterIndex) {
        this.subjects[subjectIndex].chapters[chapterIndex].showingItems ?
            this.subjects[subjectIndex].chapters[chapterIndex].showingItems = false :
            this.subjects[subjectIndex].chapters[chapterIndex].showingItems = true;
    }
}
export default Subjects;