import { Exercice1Service } from './exercice1.service';

describe('Exercice1Service', () => {

  describe('When formatting inputs', () => {

    let exercice1Service;

    beforeEach(() => {
      exercice1Service = new Exercice1Service();
    });

    it('should remove the first input', () => {
        // Arrange
        const expectedInputsString = [
          '5 3',
          '3 2',
          '4 6'
        ];

        exercice1Service.inputsString = [
        '3',
        '5 3',
        '3 2',
        '4 6'
      ];

        // Act
        exercice1Service.removeFirst();

        // Assert
        expect(exercice1Service.inputsString).toEqual(expectedInputsString);
      });

    it('should convert in 2 tab number', () => {
      // Arrange
      exercice1Service.inputsString = [
        '5 3',
        '3 2',
        '4 6'
      ];

      const expectedInputsPlayerA = [
        5,
        3,
        4
      ];

      const expectedInputsPlayerB = [
        3,
        2,
        6
      ];

    // Act
      exercice1Service.convert();

    // Assert
      expect(exercice1Service.tabIntPlayerA).toEqual(expectedInputsPlayerA);
      expect(exercice1Service.tabIntPlayerB).toEqual(expectedInputsPlayerB);

    });

    it('should return winner A', () => {
      // Arrange
      exercice1Service.tabIntPlayerA = [
        5,
        3,
        4
      ];

      exercice1Service.tabIntPlayerB = [
        3,
        2,
        6
      ];

      exercice1Service.inputsString = [
        '5 3',
        '3 2',
        '4 6'
      ];

      // Act
      const result = exercice1Service.compare();

      // Assert
      expect(result).toEqual('A');

    });

    it('should return winner B', () => {
      // Arrange
      exercice1Service.tabIntPlayerB = [
        5,
        3,
        4
      ];

      exercice1Service.tabIntPlayerA = [
        3,
        2,
        6
      ];

      exercice1Service.inputsString = [
        '5 3',
        '3 2',
        '4 6'
      ];

      // Act
      const result = exercice1Service.compare();

      // Assert
      expect(result).toEqual('B');

    });

    it('should integrated', () => {
      // Arrange

      exercice1Service.inputsString = [
        '3',
        '5 5',
        '3 2',
        '7 6'
      ];
      const expectedValue = 'A';

      // Act
      const result = exercice1Service.getResult();

      // Assert
      expect(result).toEqual(expectedValue);
    });
  });
});
