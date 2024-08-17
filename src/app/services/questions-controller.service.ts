import { Injectable } from '@angular/core';
import { questions } from '@utils/questions';

@Injectable({
  providedIn: 'root'
})

export class QuestionsControllerService {
  questions = questions
  responseClient = Array(questions.length).fill(null)
  questionIndex = 0

  addResponse(response: string) {
    this.responseClient[this.questionIndex] = response
    console.log(this.responseClient);
  }

  nextQuestion() {
    if (this.questionIndex < this.questions.length - 1) {
      this.questionIndex++
    }
  }

  previousQuestion(){
    if (this.questionIndex > 0) {
      this.questionIndex--
    }
  }
}
