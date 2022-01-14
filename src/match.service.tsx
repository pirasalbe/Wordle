import { Observable, Subject } from 'rxjs';

export class MatchService {
  private word: string;

  private typedWord: string;

  private wordSubject: Subject<string>;

  constructor() {
    this.word = "TANGY";
    this.typedWord = "";
    this.wordSubject = new Subject<string>();
  }

  typeLetter(letter: string): void {
    // TODO add backspace, check typeWord length
    this.typedWord += letter;

    // notify listeners
    this.wordSubject.next(this.typedWord);
  }

  getWordObservable(): Observable<string> {
    return this.wordSubject.asObservable();
  }
}

export const matchService: MatchService = new MatchService();
