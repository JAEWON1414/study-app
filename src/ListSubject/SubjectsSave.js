
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
    countChecked(subjectIndex) {
        let count = 0;
        this.subjects[subjectIndex].chapters.map((chapter) => {
            chapter.items.map((item) => {
                if (item.checked) count = count + 1;
                return item;
            })
            return chapter;
        })
        return count;
    }
    countItems(subjectIndex) {
        let count = 0;
        this.subjects[subjectIndex].chapters.map((chapter) => {
            chapter.items.map((item) => {
                count = count + 1;
                return item;
            })
            return chapter;
        })
        return count;
    }
    setChapterProgressPercent(subjectIndex, chapterIndex){
        this.subject[subjectIndex].chapters[chapterIndex].progressPercent=
    }
    setProgressPercent(subjectIndex) {
        this.countItems(subjectIndex) === 0 ? this.subjects[subjectIndex].progressPercent = 0 :
            this.subjects[subjectIndex].progressPercent = Math.round(100 * this.countChecked(subjectIndex) / this.countItems(subjectIndex));
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