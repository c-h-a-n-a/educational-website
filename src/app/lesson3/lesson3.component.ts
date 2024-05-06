import { Component } from '@angular/core';
import { TopicListService } from '../topic-list.service';
import { QuizQuestion } from '../quiz.model';
import { LessonQuizComponent } from '../lesson-quiz/lesson-quiz.component';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-lesson3',
  standalone: true,
  imports: [LessonQuizComponent, ScrollToTopComponent],
  templateUrl: './lesson3.component.html',
  styleUrl: './lesson3.component.css'
})
export class Lesson3Component {

  constructor(private topicService: TopicListService) {
    const lessonTitle = 'Lesson Title for Lesson 3';
    const topics = ['Topic 9', 'Topic 8', 'Topic 7', 'Topic 8', 'Topic 10']; 
    this.topicService.updateTopicNames(lessonTitle, topics);
  }

  quizQuestions: QuizQuestion[] = [
    { 
      text: 'Nakita mo na umiiyak si Danica sa hallway. Nalaman mo na si Danica ay "Broken Hearted". Ano ang iyong gagawin?',
      options: ['Magpapayo kay Danica ng magagandang salita.', 'Tatawanan si Danica.', 'Bibigyan si Danica ng pang kulam.', 'Wala akong paki kay Danica.'],
      correctAnswer: 0
    },
    { 
      text: '____ Pares Overload',
      options: ['London', 'Diwata', 'Litex', 'Anghel'],
      correctAnswer: 1
    },
    // Add more questions as needed
  ];

}