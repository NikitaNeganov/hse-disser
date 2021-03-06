export const tasks = {
  1: {
    description: 'Договориться с преподавателем, что он готов быть Вашим научным руководителем',
    time: 6,
    title: '1.1',
    grades: null,
  },
  2: {
    description: 'Выбрать предметную область для исследования',
    time: 16,
    title: '1.2',
    grades: null,
  },
  3: {
    description: 'Согласовать тему с научным руководителем',
    time: 4,
    title: '2',
    grades: null,
  },
  4: {
    description: 'Составить список релевантной литературы по теме',
    time: {
      10: 16,
      7: 12,
      6: 8,
      4: 5,
    },
    title: '3.1',
    grades: [10, 7, 6, 4],
  },
  5: {
    description: 'Получить у преподаватели методические рекомендации по написанию обзора литературы ',
    time: 4,
    title: '3.2',
    grades: null,
  },
  6: {
    description: 'Написать пробный вариант обзора литературы ',
    time: {
      10: 32,
      8: 26,
      7: 22,
      5: 15,
    },
    title: '3.3',
    grades: [10, 8, 7, 5],
  },
  7: {
    description: 'Переделать обзор литературы в связи с рекомендациями преподавателя (для оценок ниже 8)',
    time: {
      8: 16,
    },
    title: '4',
    grades: [8],
  },
  8: {
    description: 'Придумать теоретическую модель',
    time: {
      10: 20,
      8: 19,
      7: 16,
      5: 10,
      4: 9,
    },
    title: '5',
    grades: [10, 8, 7, 5, 4],
  },
  9: {
    description: 'Придумать, где достать данные',
    time: 14,
    title: '6',
    grades: null,
  },
  10: {
    description: 'Собрать базу данных',
    time: {
      10: 22,
      8: 16,
      7: 12,
      5: 5,
    },
    title: '7',
    grades: [10, 8, 7, 5],
  },
  11: {
    description: 'Провести анализ данных',
    time: {
      10: 22,
      8: 16,
      7: 12,
      5: 5,
    },
    title: '8',
    grades: [10, 8, 7, 5],
  },
  12: {
    description: 'Написать 2 главу диссертации на основе проведенного анализа',
    time: {
      10: 40,
      8: 36,
      7: 33,
      6: 26,
      5: 24,
      4: 23,
    },
    title: '9',
    grades: [10, 8, 7, 6, 5, 4],
  },
  13: {
    description: 'Продумать рекомендации',
    time: {
      10: 12,
      5: 5,
    },
    title: '10',
    grades: [10, 5],
  },
  14: {
    description: 'Описать рекомендации',
    time: {
      10: 12,
      5: 5,
    },
    title: '11',
    grades: [10, 5],
  },
  15: {
    description: 'Просчитать рекомендации',
    time: {
      10: 20,
      8: 18,
      7: 16,
      4: 10,
    },
    title: '12',
    grades: [10, 8, 7, 4],
  },
  16: {
    description: 'Договориться с преподавателем, что он вычитает весь текст диссертации',
    time: 10,
    title: '13',
    grades: null,
  },
  17: {
    description: 'Переделать весь текст диссертационной работы в соответствии с рекомендациями научного руководителя',
    time: {
      10: 40,
      8: 32,
      6: 22,
      4: 8,
    },
    title: '14',
    grades: [10, 8, 6, 4],
  },
  18: {
    description: 'Загрузить текст работы в LMS',
    time: 2,
    title: '15',
    grades: null,
  },
};
