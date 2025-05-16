/**
 * Пример TypeScript файла
 */

interface Quest {
  title: string;
  description: string;
}

class TextQuest implements Quest {
  constructor(public title: string, public description: string) {}

  start(): void {
    console.log(`Начало квеста: ${this.title}`);
    console.log(`Описание: ${this.description}`);
  }
}

const quest = new TextQuest(
  'Приключение начинается',
  'Добро пожаловать в текстовый квест! Ваше путешествие только начинается.'
);

quest.start();