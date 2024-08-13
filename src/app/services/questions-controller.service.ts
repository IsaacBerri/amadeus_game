import { Injectable } from '@angular/core';
import { questions } from '@utils/questions';

@Injectable({
  providedIn: 'root'
})

export class QuestionsControllerService {
  questions = questions
  questionIndex = 0

  nextQuestion() {
    if (this.questionIndex < this.questions.length - 1) {
      this.questionIndex++
    }

    console.log(this.questionIndex)
  }

  previousQuestion(){
    if (this.questionIndex > 0) {
      this.questionIndex--
    }

    console.log(this.questionIndex)
  }
}
