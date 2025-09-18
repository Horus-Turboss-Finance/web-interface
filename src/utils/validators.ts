/**
 * Raison d'être: petits helpers purs et testables (pas de dépendance React).
 * Pourquoi: mutualiser la validation légère entre plusieurs formulaires.
 */

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isNonEmpty(value: string): boolean {
  return value.trim().length > 0;
}

export function hasMaxLength(value: string, max: number): boolean {
  return value.trim().length <= max;
}

export function isEmail(value: string): boolean {
  return emailRegex.test(value.trim());
}

export function isDate(value: string): boolean {
  return new Date(value).toDateString() !== 'Invalid Date'
}