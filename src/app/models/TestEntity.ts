import { AnswerTestEntity } from "./AnswerTestEntity";
import { ImgStorageEntity } from "./ImgStorageEntity";

export class TestEntity extends ImgStorageEntity {
    private static folder: string = "Questions%2F";
    public id: string;
    private text: string;
    public answers: AnswerTestEntity[]; 

    constructor(dataMap: Map<string, any>) { 
        super();
        this.id = dataMap.get("id") || '';
        this.text = dataMap.get("text") || '';
        this.img = dataMap.get("img") || '';
        this.answers = [];

        const answersMapList: Array<Map<string, any>> = dataMap.get("Answers") || [];
        for (const answerMap of answersMapList) {
            const answer = new AnswerTestEntity(answerMap);
            this.answers.push(answer);
        }
    }
    getAnswers():AnswerTestEntity[]{
        return this.answers;
    }
    getText(): string {
        return this.text;
    }

    getFolder(): string {
        return TestEntity.folder;
    }
}
