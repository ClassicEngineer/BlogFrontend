
class MarkdownService {

    getValueFromHeader(value) {
        return value.split(":")[1].trim().replaceAll('"', '');
    }

    /*
    ---
    title: "Title"
    date: Fri Dec 01 2023
    image: "image.jpg"
    draft: false
    tags:
        - tagA
    ---
     */
    extractHeaderProperties(md) {
        let result = {};
        let header = md.split('---')[1];
        let values = header.split('\n').filter(s => s);
        result.title = this.getValueFromHeader(values[0]);
        result.date = this.getValueFromHeader(values[1]);
        result.image =  this.getValueFromHeader(values[2]);
        result.draft = this.getValueFromHeader(values[3]);
        return result;
    }

     extractContent(md) {
        let arr = md.split("---")
        return arr[2];
    }


}


export default new MarkdownService();