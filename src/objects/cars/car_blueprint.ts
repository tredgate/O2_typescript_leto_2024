export class CarBlueprint {
  private color: string;
  public motor: string;
  protected fuel: string;
  readonly WHEELS: number = 4;

  constructor(color: string, motor: string, fuel: string) {
    this.color = color;
    this.motor = motor;
    this.fuel = fuel;
  }

  logCarProperties(): void {
    console.log(
      `Barva: ${this.color}, motor: ${this.motor}, palivo: ${this.fuel}, počet kol: ${this.WHEELS}`
    );
  }

  repaint(newColor: string): void {
    console.log(`Přetírám auto z barvy ${this.color} na ${newColor}`);
    this.color = newColor;
  }

  getColor(): string {
    return this.color;
  }
}
