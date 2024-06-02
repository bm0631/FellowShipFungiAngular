export class AnswerTestEntity {
    private text: string;
    private answerIsTrue: boolean;

    constructor(dataMap: { [key: string]: any }) {
        this.text = dataMap["textAnswer"] || '';
        this.answerIsTrue = (dataMap["isTrue"] === "true");
    }

    getText(): string {
        return this.text;
    }
    setText(text: string) {
        this.text = text;
      }

    isTrue(): boolean {
        return this.answerIsTrue;
    }
}
