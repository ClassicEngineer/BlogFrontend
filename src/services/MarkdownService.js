import {getValue} from "@testing-library/user-event/dist/utils";

class MarkdownService {

    getValueFromHeader(value) {
        return value.split(":")[1].trim().replaceAll('"', '');
    }

    /*
    ---
    title: "dadadaa"
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
        // TODO: get url from backend properties
        result.image = 'http://localhost:8080/image/' + this.getValueFromHeader(values[2]);
        result.draft = this.getValueFromHeader(values[3]);
        return result;
    }

     extractContent(md) {
        let arr = md.split("---")
        return arr[2];
    }

    getPostWithProperties(md) {

    }
    /*
        public static MarkdownHeader extract(String content) throws IncorrectHeaderException {
        try {
            String[] parts = content.split("---");
            String headerContent = parts[1].trim();
            String[] headerValues = headerContent.split("\n");
            List<String> keysAndValues = Arrays.stream(headerValues).filter(Predicate.not(String::isEmpty)).toList();
            String title = getValue(keysAndValues.get(0));
            String date = getValue(keysAndValues.get(1));
            String image = getValue(keysAndValues.get(2));
            Boolean draft = Boolean.getBoolean(getValue(keysAndValues.get(3)));
            List<String> tags = getTags(headerContent);
            return MarkdownHeader.builder()
                    .raw("---\n" + headerContent + "\n---\n")
                    .title(title)
                    .date(date)
                    .image(image)
                    .isDraft(draft)
                    .tags(tags)
                    .build();
        } catch (Exception e) {
            throw new IncorrectHeaderException(e);
        }
    }

    private static List<String> getTags(String header) {
        var list = Arrays.stream(header.split("tags:")[1]
                .split("\n"))
                .map(str -> str.replaceAll(" ", "").replaceAll("-", ""))
                .toList();
        return list.subList(1, list.size());
    }


    private static String getValue(String keyAndValue) {
    return keyAndValue.split(":")[1].trim().replaceAll("\"", "");
}
     */

}


export default new MarkdownService();